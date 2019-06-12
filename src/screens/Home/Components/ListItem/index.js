import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import navigationService from '../../../../utilities/navigationService';

const renderTechnology = (technologies) => {
  return technologies.map((item, index) => (
    <Image
      key={index}
      style={styles.styleImageTech}
      source={{ uri: item }}
    />
  )
  );
};
const goToDevProfile = () => {
  navigationService.navigate('DevProfile');
};

const ListItem = (props) => {
  const { dataItem: { name, totalExperience, pic, technologies } } = props;
  return (<TouchableOpacity style={styles.styleMainContainer} onPress={goToDevProfile}>
    <Image
      style={styles.styleImage}
      resizeMode="stretch"
      source={{ uri: pic }}
    />
    <View style={styles.styleInfoContainer}>
      <Text style={styles.styleTitle}>{name}</Text>
      <View style={styles.styleTechnologies} >
        { renderTechnology(technologies) }
      </View>
      <Text style={styles.styleExperienceText}>Total Experience: {totalExperience}</Text>
    </View>
  </TouchableOpacity>);
};

ListItem.propTypes = {
  dataItem: PropTypes.object,
};

export default ListItem;
