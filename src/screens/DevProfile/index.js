import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { devList } from '../Home/devList';
import AppHeader from '../../components/AppHeader';
import CButton from '../../components/CButton';
import { renderTechnology } from '../Home/Components/ListItem';
import { DESIGNATION, TOTAL_EXP, TECHNOLOGIES, START, DEV_PROFILE } from './constant';
import navigationService from '../../utilities/navigationService';

export default class DevProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goBack = () => {
    navigationService.goBack();
  };
  navigateToReview = () => {
    const { navigation } = this.props;
    const { devData } = navigation.state.params;
    navigationService.navigate('Review', { devData });
  }

  render() {
    const { navigation } = this.props;
    const { devData } = navigation.state.params;
    const totalExperience = devData.technologies.reduce((acc, val) => acc + val.exp, 0.0);
    return (
      <View style={styles.container}>
        <AppHeader
          showBackButton
          lbtnOnPress={this.goBack}
          title={DEV_PROFILE}
        />
        <View style={styles.subContainer}>
          <View style={styles.cardView}>
            <Image
              style={styles.devPic}
              source={{ uri: devList[0].pic }}
              resizeMode="stretch"
            />
            <Text style={styles.devNameText}>
              {devData.name}
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
                {totalExperience} years
              </Text>
            </View>
            <View style={styles.rowView}>
              <Text style={styles.titleText}>
                {TECHNOLOGIES}
              </Text>
              <View style={styles.techView}>
                {renderTechnology(devData.technologies)}
              </View>
            </View>
            <CButton label={START} btnStyle={styles.button} onPress={this.navigateToReview} />
          </View>
        </View>
      </View>
    );
  }
}

DevProfile.propTypes = {
  navigation: PropTypes.object,
};
