import { takeEvery } from 'redux-saga/effects';
import { FETCH_USER_DATA } from './type';

function* testSaga() {
  // eslint-disable-next-line no-console
  console.log('saga working');
}

function* sagaWelcome() {
  yield takeEvery(FETCH_USER_DATA, testSaga);
}

export default sagaWelcome;
