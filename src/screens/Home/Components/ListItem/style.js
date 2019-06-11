import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../../../utilities/Colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({

  styleMainContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 15,
    padding: 10,
    borderWidth: 2,
    borderColor: Colors.PrimaryAppColor,
    borderRadius: 10,
    width: width - 30,
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
  },
  styleTechText: {
    fontSize: 16,
  },
  styleImage: {
    height: 70,
    width: 70,
  },
  styleImageTech: {
    height: 30,
    width: 30,
    marginRight: 5,
  },
  styleTechnologies: {
    flexDirection: 'row',
  },
});

export default styles;
