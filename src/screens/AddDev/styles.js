import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  devPic: {
    height: 100,
    width: 100,
  },
  nameContainer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  },
  devNameText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
    marginRight: 15,
  },
  devNameTextInput: {
    height: 40,
    width: 200,
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 20,
    padding: 8,
  },
});
