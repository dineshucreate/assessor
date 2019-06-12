import { StyleSheet } from 'react-native';
import { Colors } from '../../utilities/Colors';

export const styles = StyleSheet.create({
  loadingModal: {
    height: 80,
    width: 100,
    padding: 5,
    borderRadius: 10,
  },
  loadingText: {
    color: Colors.PrimaryAppColor,
    alignSelf: 'center',
  },
});
