import { Dimensions } from 'react-native';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

export default {
  deviceHeight,
  deviceWidth,
};
