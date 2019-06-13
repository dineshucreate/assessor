import React, { Component } from 'react';
import { View, Image, Text, TextInput, ScrollView, Alert } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import firebase from 'react-native-firebase';
import { styles } from './styles';
import { devList } from '../Home/devList';
import AppHeader from '../../components/AppHeader';
import ListItem from './Components/ListItem';
import navigationService from '../../utilities/navigationService';

class AddDev extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Gurpreet Singh',
      email: 'gurpreetsingh@ucreate.co.in',
      technologies: ['iOS', 'Android', 'React Native'],
      experience: [0, 0, 0],
    };
  }

  saveAndGoBack = () => {
    const { loader } = this.props;
    loader.open();
    const { name, email, technologies, experience } = this.state;
    const tech = technologies.map((item, index) => {
      return { tech: item, exp: experience[index] };
    });
    const techs = tech.filter((item) => item.exp > 0);
    const ref = firebase.firestore().collection('Developers').doc(email);

    firebase.firestore().runTransaction(async (transaction) => {
      const doc = await transaction.get(ref);
      // if it does not exist set the population to one
      if (!doc.exists) {
        transaction.set(ref, { name, email, technologies: techs });
        // return the new value so we know what the new population is
        return { name, email, technologies: techs };
      }
      transaction.update(ref, { name, email, technologies: techs });
      // return the new value so we know what the new population is
      return { name, email, technologies: techs };
    })
      .then(() => {
        navigationService.goBack();
        loader.close();
      })
      .catch(() => {
        Alert.alert('Save developer faild');
        loader.close();
      });
  };

  addExperience = (index, value, isChecked) => {
    const { experience } = this.state;
    const expArray = [...experience];
    expArray[index] = isChecked ? value : 0;
    this.setState({ experience: expArray });
  };

  goBack = () => {
    navigationService.goBack();
  };

  renderTechnologies = () => {
    const { technologies } = this.state;
    return technologies.map((item, index) => {
      return this.renderItem(item, index);
    });
  }
  renderItem = (item, index) => {
    return (<ListItem
      key={index}
      dataItem={item}
      add={(value, isChecked) => this.addExperience(index, value, isChecked)}
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
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  loader: state.welcomeReducer.loader,
});

AddDev.propTypes = {
  loader: PropTypes.object,
};

export default connect(mapStateToProps)(AddDev);

