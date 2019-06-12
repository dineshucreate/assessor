import { StyleSheet } from 'react-native';
import utilities from '../../utilities';
import { Colors } from '../../utilities/Colors';

const imageHeight = 90;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: Colors.PrimaryAppColor,
    borderWidth: 1.5,
    borderRadius: 20,
    margin: 8,
    paddingHorizontal: 20,
  },
  cardView: {
    width: utilities.deviceWidth * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'grey',
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 70,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  appIconImage: {
    height: imageHeight,
    width: imageHeight,
    position: 'absolute',
    top: -imageHeight / 2,
    left: (utilities.deviceWidth * 0.45) - (imageHeight / 2),
  },
  button: {
    marginVertical: 20,
    height: 40,
    width: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
  },
  errMsg: {
    color: 'red',
    textAlign: 'center',
  },
});

export default styles;

