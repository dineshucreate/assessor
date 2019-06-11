import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image } from 'react-native';
import styles from './style';

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

const ListItem = (props) => {
  const { dataItem: { name, totalExperience, pic, technologies } } = props;
  return (<View style={styles.styleMainContainer}>
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
  </View>);
};

ListItem.propTypes = {
  dataItem: PropTypes.object,
};

export default ListItem;
