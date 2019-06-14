/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import navigationService from '../../../../utilities/navigationService';
import { TECH_IOS, TECH_REACT_NATIVE, TECH_ANDROID, PROFILE_PIC } from './constants';

export const renderTechnology = (technologies) => {
  return technologies.map((item, index) => {
    const uri = getTechImageURI(item.name);
    return (<Image
      key={index}
      style={styles.styleImageTech}
      source={{ uri }}
    />);
  }
  );
};

export const getTechImageURI = (techName) => {
  switch (techName) {
    case 'iOS': {
      return TECH_IOS;
    }
    case 'React-Native': {
      return TECH_REACT_NATIVE;
    }
    default: {
      return TECH_ANDROID;
    }
  }
};

const goToDevProfile = (dataItem) => {
  navigationService.navigate('DevProfile', { devData: dataItem });
};

const ListItem = (props) => {
  const { dataItem: { name, technologies, rating } } = props;
  const { dataItem } = props;
  const totalExperience = technologies.reduce((acc, val) => acc + val.exp, 0.0);
  return (<TouchableOpacity style={styles.styleMainContainer} onPress={() => goToDevProfile(dataItem)}>
    <Image
      style={styles.styleImage}
      resizeMode="stretch"
      source={{ uri: PROFILE_PIC }}
    />
    <View style={styles.styleInfoContainer}>
      <Text style={styles.styleTitle}>{name}</Text>
      <View style={styles.styleTechnologies} >
        { renderTechnology(technologies) }
      </View>
      <Text style={styles.styleExperienceText}>Experience: {totalExperience} years</Text>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        style={styles.ratingImage}
        resizeMode="stretch"
        source={require('../../../../assets/rating.png')}
      />
      <Text style={styles.ratingText}>{rating}</Text>
    </View>
  </TouchableOpacity>);
};

ListItem.propTypes = {
  dataItem: PropTypes.object,
};

export default ListItem;
