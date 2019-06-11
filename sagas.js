import { fork } from 'redux-saga/effects';
import sagaWelcome from './src/screens/Welcome/saga';

const root = function* rootSaga() {
  yield [
    fork(sagaWelcome),
  ];
};

export default root;
