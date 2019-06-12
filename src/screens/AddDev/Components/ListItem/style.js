import { StyleSheet } from 'react-native';
import { Colors } from '../../../../utilities/Colors';
import utilities from '../../../../utilities';


const styles = StyleSheet.create({

  styleMainContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginTop: 15,
    padding: 10,
    borderWidth: 2,
    borderColor: Colors.PrimaryAppColor,
    borderRadius: 10,
    width: utilities.deviceWidth - 30,
  },
  styleInfoContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginHorizontal: 5,
    alignItems: 'center',
    flex: 1,
  },
  styleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  styleCheckbox: {
    marginHorizontal: 5,
  },
  styleExperience: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleImage: {
    height: 70,
    width: 70,
  },
  btnHitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  styleExpText: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 40,
    textAlign: 'center',
  },
});

export default styles;
