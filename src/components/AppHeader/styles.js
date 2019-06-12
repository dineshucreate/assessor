import { StyleSheet } from 'react-native';
import { Colors } from '../../utilities/Colors';
import utilities from '../../utilities';

export const styles = StyleSheet.create({
  topBar: {
    height: 50,
    backgroundColor: Colors.PrimaryAppColor,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  absoluteView: {
    width: utilities.deviceWidth,
    position: 'absolute',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnHitSlop: {
    top: 15,
    bottom: 15,
    left: 15,
    right: 15,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  addText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
