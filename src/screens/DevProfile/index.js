import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles';
import { devList } from '../Home/devList';
import AppHeader from '../../components/AppHeader';

export default class DevProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <AppHeader showBackButton title="Profile" />
        <View style={styles.subContainer}>
          <Image
            style={styles.devPic}
            source={{ uri: devList[0].pic }}
            resizeMode="stretch"
          />
          <Text style={styles.devNameText}>
            {devList[0].name}
          </Text>
        </View>
      </View>
    );
  }
}
