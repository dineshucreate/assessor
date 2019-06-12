import { StyleSheet } from 'react-native';
import { Colors } from '../../utilities/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PrimaryAppColor,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'grey',
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    borderRadius: 30,
  },
  labelText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
