import { StyleSheet } from 'react-native';
import { Colors } from '../../utilities/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  devPic: {
    height: 120,
    width: 120,
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
  styleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  styleInsturctions: {
    fontSize: 15,
    marginVertical: 15,
  },
  SectionHeader: {
    backgroundColor: Colors.PrimaryAppColor,
    fontSize: 20,
    padding: 5,
    color: '#fff',
    fontWeight: 'bold',
  },
  SectionListItemS: {
    fontSize: 16,
    padding: 6,
    color: '#000',
    backgroundColor: '#F5F5F5',
  },
});
