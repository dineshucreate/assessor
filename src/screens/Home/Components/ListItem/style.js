import { StyleSheet } from 'react-native';
import { Colors } from '../../../../utilities/Colors';
import utilities from '../../../../utilities';


const styles = StyleSheet.create({

  styleMainContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 7,
    padding: 10,
    borderWidth: 2,
    borderColor: Colors.PrimaryAppColor,
    borderRadius: 10,
    width: utilities.deviceWidth - 30,
  },
  styleInfoContainer: {
    backgroundColor: 'white',
    flexDirection: 'column',
    marginHorizontal: 15,
    flex: 1,
  },
  styleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    paddingVertical: 10,
  },
  styleExperienceText: {
    paddingVertical: 7,
  },
  styleTechText: {
    fontSize: 16,
  },
  styleImage: {
    height: 70,
    width: 70,
  },
  styleImageTech: {
    height: 25,
    width: 25,
    marginRight: 5,
  },
  styleTechnologies: {
    flexDirection: 'row',
  },
});

export default styles;
