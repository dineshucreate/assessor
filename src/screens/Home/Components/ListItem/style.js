import { StyleSheet } from 'react-native';
import utilities from '../../../../utilities';


const styles = StyleSheet.create({
  styleMainContainer: {
    width: utilities.deviceWidth - 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    shadowColor: 'grey',
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 7,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  styleInfoContainer: {
    flexDirection: 'column',
    marginHorizontal: 5,
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
  ratingText: {
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'italic',
    padding: 5,
  },
  styleTechText: {
    fontSize: 16,
  },
  styleImage: {
    height: 70,
    width: 70,
  },
  ratingImage: {
    height: 22,
    width: 22,
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
