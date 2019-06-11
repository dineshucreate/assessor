import { StyleSheet } from 'react-native';
import { Colors } from '../../utilities/Colors';

export const styles = StyleSheet.create({
  topBar: {
    height: 50,
    backgroundColor: Colors.PrimaryAppColor,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  add: {
    backgroundColor: Colors.PrimaryAppColor,
    position: 'absolute',
    right: 20,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  addText: {
    color: 'white',
  },
});
