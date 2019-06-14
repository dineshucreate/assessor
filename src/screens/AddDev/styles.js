import { StyleSheet } from 'react-native';
import utilities from '../../utilities';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContentContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  devPic: {
    height: 100,
    width: 100,
  },
  nameContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
  },
  devNameText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
    marginRight: 15,
  },
  styleInsturctions: {
    fontSize: 17,
    color: 'black',
    textAlign: 'center',
    margin: 20,
  },
  devNameTextInput: {
    height: 40,
    width: utilities.deviceWidth - 100,
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});
