import React from 'react';
import { Text, TouchableOpacity, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
const CButton = ({ label, btnStyle, ...otherProps }) => (
  <TouchableOpacity
    style={[styles.container, btnStyle]}
    {...otherProps}
  >
    <Text style={styles.labelText}>{label}</Text>
  </TouchableOpacity>
);

CButton.propTypes = {
  btnStyle: ViewPropTypes.style,
  label: PropTypes.string,
};

export default CButton;
