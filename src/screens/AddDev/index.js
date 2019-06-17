import React, { Component } from 'react';
import { View, Image, Text, TextInput, ScrollView } from 'react-native';
import firebase from 'react-native-firebase';
import ReactNativePickerModule from 'react-native-picker-module';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { devList } from '../Home/devList';
import AppHeader from '../../components/AppHeader';
import ListItem from './Components/ListItem';
import navigationService from '../../utilities/navigationService';
import { saveNewDevData } from './action';
import { NAME, EMAIL, ADD_DEV_INFO, ENTER_NAME, ENTER_EMAIL } from './constant';

class AddDev extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jay Singh',
      email: 'Jay@ucreate.co.in',
      technologies: [],
      addedTechnologies: [{ exp: 0.5, isChecked: false, name: '' }],
    };
  }

  componentDidMount() {
    firebase.firestore().collection('Technologies').get().then((snapshot) => {
      const technologies = snapshot.docs.map((doc) => doc.data().data)[0];
      this.setState({ technologies });
    });
  }
  saveAndGoBack = () => {
    const { loader, addNewDev } = this.props;
    loader.open();
    const { name, email, addedTechnologies } = this.state;
    const techs = addedTechnologies.filter((item) => item.isChecked);
    techs.forEach((item) => { delete item.isChecked; });
    const devData = { name, email, technologies: techs, rating: 0 };
    addNewDev(devData);
  };

  addTechnology = (index, isChecked) => {
    if (isChecked) {
      const { addedTechnologies } = this.state;
      const arrayTechnologies = [...addedTechnologies];
      arrayTechnologies.splice(index, 1);
      this.setState({ addedTechnologies: arrayTechnologies });
    } else {
      this.pickerRef.show();
    }
  };

  updateExperience = (index, value) => {
    const { addedTechnologies } = this.state;
    const expArray = [...addedTechnologies];
    expArray[index].exp = value;
    this.setState({ addedTechnologies: expArray });
  };

  goBack = () => {
    navigationService.goBack();
  };

  listTechnologies = () => {
    const { technologies } = this.state;
    return technologies.map((item) => {
      return item.name;
    });
  }

  renderItem = (item, index) => {
    return (<ListItem
      key={index}
      dataItem={item}
      add={(isChecked) => this.addTechnology(index, isChecked)}
      updateExperience={(value) => this.updateExperience(index, value)}
    />);
  };

  renderTechnologies = () => {
    const { addedTechnologies } = this.state;
    return addedTechnologies.map((item, index) => {
      return this.renderItem(item, index);
    });
  }

  renderPicker = () => {
    return (<ReactNativePickerModule
      pickerRef={(e) => { this.pickerRef = e; }}
      value={this.state.selectedValue}
      title={'Select a technology'}
      items={this.listTechnologies()}
      onCancel={() => { }}
      onValueChange={(value, index) => {
        const { technologies, addedTechnologies } = this.state;
        const expArray = [...technologies];
        expArray[index].isChecked = true;
        if (addedTechnologies.indexOf(expArray[index]) === -1) {
          addedTechnologies.splice(addedTechnologies.length - 1, 0, expArray[index]);
          this.setState({ addedTechnologies });
        }
      }}
    />);
  };

  render() {
    const { name, email } = this.state;
    return (
      <View style={styles.container}>
        <AppHeader
          showBackButton
          title="Add Dev"
          rtTitle="Save"
          lbtnOnPress={this.goBack}
          rbtnOnPress={this.saveAndGoBack}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContentContainer}
        >
          <Image
            style={styles.devPic}
            source={{ uri: devList[0].pic }}
            resizeMode="stretch"
          />
          <View style={styles.nameContainer}>
            <Text style={styles.devNameText}>
              {NAME}
            </Text>
            <TextInput
              style={styles.devNameTextInput}
              autoCapitalize="none"
              placeholder={ENTER_NAME}
              onChangeText={(text) => this.setState({ name: text })}
              value={name}
              clearButtonMode="always"
            />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.devNameText}>
              {EMAIL}
            </Text>
            <TextInput
              style={styles.devNameTextInput}
              autoCapitalize="none"
              placeholder={ENTER_EMAIL}
              onChangeText={(text) => this.setState({ email: text })}
              value={email}
              clearButtonMode="always"
            />
          </View>
          <Text style={styles.styleInsturctions}>
            {ADD_DEV_INFO}
          </Text>
          {this.renderTechnologies()}
          {this.renderPicker()}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  loader: state.welcomeReducer.loader,
});

const mapDispatchToProps = (dispatch) => ({
  addNewDev: (devData) => dispatch(saveNewDevData(devData)),
});

AddDev.propTypes = {
  loader: PropTypes.object,
  addNewDev: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDev);

