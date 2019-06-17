import { StyleSheet } from 'react-native';
import utilities from '../../utilities';

export const styles = StyleSheet.create({
  modalContainer: {
    width: utilities.deviceWidth * 0.8,
    height: utilities.deviceHeight * 0.4,
    padding: 5,
    borderRadius: 10,
  },
  modalInnerView: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
  modalSubContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  scrollContent: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  itemText: {
    marginHorizontal: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  item: {
    flexDirection: 'row',
    width: utilities.deviceWidth * 0.7,
    height: 45,
    alignItems: 'center',
  },
  button: {
    height: 40,
    width: 150,
  },
});
