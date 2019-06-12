import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles';
import { devList } from '../Home/devList';
import AppHeader from '../../components/AppHeader';
import CButton from '../../components/CButton';
import { renderTechnology } from '../Home/Components/ListItem';
import { DESIGNATION, TOTAL_EXP, TECHNOLOGIES, START, DEV_PROFILE } from './constant';

export default class DevProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <AppHeader showBackButton title={DEV_PROFILE} />
        <View style={styles.subContainer}>
          <View style={styles.cardView}>
            <Image
              style={styles.devPic}
              source={{ uri: devList[0].pic }}
              resizeMode="stretch"
            />
            <Text style={styles.devNameText}>
              {devList[0].name}
            </Text>
            <View style={styles.rowView}>
              <Text style={styles.titleText}>
                {DESIGNATION}
              </Text>
              <Text style={styles.infoText}>
                Front End Dev.
              </Text>
            </View>
            <View style={styles.rowView}>
              <Text style={styles.titleText}>
                {TOTAL_EXP}
              </Text>
              <Text style={styles.infoText}>
              2.5 years
              </Text>
            </View>
            <View style={styles.rowView}>
              <Text style={styles.titleText}>
                {TECHNOLOGIES}
              </Text>
              <View style={styles.techView}>
                {renderTechnology(devList[0].technologies)}
              </View>
            </View>
            <CButton label={START} btnStyle={styles.button} />
          </View>
        </View>
      </View>
    );
  }
}
