import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BackButton from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { styles } from './styles';

const AppHeader = ({ title, rtTitle, showBackButton, rbtnOnPress, lbtnOnPress }) => {
  return (
    <View style={styles.topBar}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.absoluteView}>
        <TouchableOpacity
          onPress={lbtnOnPress}
          hitSlop={styles.btnHitSlop}
        >
          <BackButton size={30} name={showBackButton ? 'ios-arrow-back' : 'ios-log-out'} color="white" />
        </TouchableOpacity>
        {rtTitle && <TouchableOpacity
          onPress={rbtnOnPress}
          hitSlop={styles.btnHitSlop}
        >
          <Text style={styles.addText}>{rtTitle}</Text>
        </TouchableOpacity>}
      </View>
    </View>
  );
};

AppHeader.propTypes = {
  title: PropTypes.string,
  rtTitle: PropTypes.string,
  showBackButton: PropTypes.bool,
  rbtnOnPress: PropTypes.func,
  lbtnOnPress: PropTypes.func,
};

export default AppHeader;
