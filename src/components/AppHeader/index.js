import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BackButton from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { styles } from './styles';
import navigationService from '../../utilities/navigationService';

const goBack = () => {
  navigationService.goBack();
};

const AppHeader = ({ title, rtTitle, showBackButton }) => {
  return (
    <View style={styles.topBar}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.absoluteView}>
        {showBackButton ? <TouchableOpacity
          onPress={goBack}
          hitSlop={styles.btnHitSlop}
        >
          <BackButton size={30} name="ios-arrow-back" color="white" />
        </TouchableOpacity> : <View />}
        {rtTitle && <TouchableOpacity
          onPress={this.handleLogin}
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
};

export default AppHeader;
