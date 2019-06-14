import { StyleSheet } from 'react-native';
import utilities from '../../utilities';

const devPicHeight = 100;

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
    height: devPicHeight,
    width: devPicHeight,
    position: 'absolute',
    top: -devPicHeight / 2,
    left: (utilities.deviceWidth * 0.45) - (devPicHeight / 2),
  },
  devNameText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    marginTop: 80,
    padding: 20,
    textAlign: 'center',
  },
  ratingImage: {
    height: 22,
    width: 22,
    marginRight: 5,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  techView: {
    flexDirection: 'row',
  },
  titleText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  infoText: {
    color: 'grey',
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  cardView: {
    width: utilities.deviceWidth * 0.9,
    justifyContent: 'center',
    shadowColor: 'grey',
    marginTop: 20,
    paddingHorizontal: 10,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 0.5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  button: {
    margin: utilities.deviceWidth * 0.1,
  },
});
