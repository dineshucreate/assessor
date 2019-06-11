import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const AppHeader = ({ title, rtTitle }) => {
  return (
    <View style={styles.topBar}>
      <Text style={styles.titleText}>{title}</Text>
      {rtTitle && <TouchableOpacity style={styles.add} onPress={this.handleLogin} >
        <Text style={styles.addText}>{rtTitle}</Text>
      </TouchableOpacity>}
    </View>
  );
};

AppHeader.propTypes = {
  title: PropTypes.string,
  rtTitle: PropTypes.string,
};

export default AppHeader;
