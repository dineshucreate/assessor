import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const deviceHeight = () => (height);
const deviceWidth = () => (width);

export default {
  deviceHeight,
  deviceWidth,
};
