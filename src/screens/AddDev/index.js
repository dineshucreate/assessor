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

class AddDev extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jay Singh',
      email: 'Jay@ucreate.co.in',
      technologies: [],
      addedTechnologies: [{ isAdd: true, name: '', isChecked: false }],
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
    const { name, email, technologies } = this.state;
    const techs = technologies.filter((item) => item.isChecked);
    const devData = { name, email, technologies: techs, rating: 0 };
    addNewDev(devData);
  };

  addTechnology = (index, value, isChecked) => {
    if (isChecked) {
      const { addedTechnologies } = this.state;
      addedTechnologies.splice(index, 1);
      this.setState({ addedTechnologies });
    } else {
      this.pickerRef.show();
    }
  };

  updateExperience = (index, value, isChecked) => {
    const { addedTechnologies } = this.state;
    const expArray = [...addedTechnologies];
    expArray[index].isChecked = isChecked;
    expArray[index].exp = isChecked ? value : 0;
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
      add={(value, isChecked) => this.addTechnology(index, value, isChecked)}
      updateExperience={(value, isChecked) => this.updateExperience(index, value, isChecked)}
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
              Name
            </Text>
            <TextInput
              style={styles.devNameTextInput}
              autoCapitalize="none"
              placeholder="Enter Name"
              onChangeText={(text) => this.setState({ name: text })}
              value={name}
              clearButtonMode="always"
            />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.devNameText}>
              Email
            </Text>
            <TextInput
              style={styles.devNameTextInput}
              autoCapitalize="none"
              placeholder="Enter Email"
              onChangeText={(text) => this.setState({ email: text })}
              value={email}
              clearButtonMode="always"
            />
          </View>
          <Text style={styles.styleInsturctions}>
            Select technology and specify experience in years
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

