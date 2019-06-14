import { Alert } from 'react-native';
import firebase from 'react-native-firebase';
import { takeEvery, select } from 'redux-saga/effects';
import { CHANGE_NEW_DEV_DATA, SAVE_NEW_DEV_DATA } from './type';
import navigationService from '../../utilities/navigationService';

const welcomeState = (state) => state.welcomeReducer;

function* onChangeDevData() {
  // eslint-disable-next-line no-console
  console.log('saga working');
}

function* saveNewDevData({ devData }) {
  const { loader } = yield select(welcomeState);
  const { email } = devData;
  const ref = firebase.firestore().collection('Developers').doc(email);

  firebase.firestore().runTransaction(async (transaction) => {
    const doc = await transaction.get(ref);
    // if it does not exist add the new dev
    if (!doc.exists) {
      transaction.set(ref, devData);
      // return the new data so we know who is the new dev
      return devData;
    }
    transaction.update(ref, devData);
    // return the new data so we know who the new dev is
    return devData;
  }).then(() => {
    navigationService.goBack();
    loader.close();
  }).catch(() => {
    Alert.alert('Save developer faild');
    loader.close();
  });
}

function* sagaAddDev() {
  yield takeEvery(CHANGE_NEW_DEV_DATA, onChangeDevData);
  yield takeEvery(SAVE_NEW_DEV_DATA, saveNewDevData);
}

export default sagaAddDev;
