/* eslint-disable global-require */
import React, { PureComponent } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import { devList } from '../Home/devList';
import AppHeader from '../../components/AppHeader';
import CButton from '../../components/CButton';
import { renderTechnology } from '../Home/Components/ListItem';
import { TOTAL_EXP, TECHNOLOGIES, START, DEV_PROFILE, OVERALL_RATING } from './constant';
import navigationService from '../../utilities/navigationService';
import CheckBoxModal from '../../components/CheckBoxModal';

export default class DevProfile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pickedTechnologies: [],
    };
  }

  onStartReview = () => {
    const { navigation } = this.props;
    const { pickedTechnologies } = this.state;
    const { devData } = navigation.state.params;
    this.modal.close();
    if (pickedTechnologies.length > 0) {
      navigationService.navigate('Review', { devData, pickedTechnologies });
    }
  };

  goBack = () => {
    navigationService.goBack();
  };

  openReviewModal = () => {
    this.modal.open();
  }

  pickTechnologies = (item) => {
    const { pickedTechnologies } = this.state;
    pickedTechnologies.push(item);
    const filterTechs = pickedTechnologies.filter((tech) => tech.isChecked);
    this.setState({ pickedTechnologies: filterTechs });
  };

  renderExperience = () => {
    const { devData: { technologies } } = this.props.navigation.state.params;
    return technologies.map((tech, index) => {
      return (
        <View key={index} style={styles.rowView}>
          <Text style={styles.titleText}>
            {tech.name}
          </Text>
          <Text style={styles.infoText}>
            {`${tech.exp} years`}
          </Text>
        </View>
      );
    });
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.subContainer}
        >
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
                {TECHNOLOGIES}
              </Text>
              <View style={styles.techView}>
                {renderTechnology(devData.technologies)}
              </View>
            </View>
            {this.renderExperience()}
            <View style={styles.rowView}>
              <Text style={styles.titleText}>
                {TOTAL_EXP}
              </Text>
              <Text style={styles.infoText}>
                {`${totalExperience} years`}
              </Text>
            </View>
            <View style={styles.rowView}>
              <Text style={styles.titleText}>
                {OVERALL_RATING}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={styles.ratingImage}
                  resizeMode="stretch"
                  source={require('../../assets/rating.png')}
                />
                <Text style={styles.infoText}>
                  {Number(devData.rating).toFixed(1)}
                </Text>
              </View>
            </View>
            <CButton
              label={START}
              btnStyle={styles.button}
              onPress={this.openReviewModal}
            />
          </View>
        </ScrollView>
        <CheckBoxModal
          headerTitle="Technology"
          dataKey={'name'}
          modalRef={(ref) => { this.modal = ref; }}
          data={devData.technologies}
          onPressConfirm={this.onStartReview}
          onChangeState={this.pickTechnologies}
        />
      </View>
    );
  }
}

DevProfile.propTypes = {
  navigation: PropTypes.object,
};
