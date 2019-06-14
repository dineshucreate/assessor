import { fork } from 'redux-saga/effects';
import sagaWelcome from './src/screens/Welcome/saga';
import sagaAddDev from './src/screens/AddDev/saga';

const root = function* rootSaga() {
  yield [
    fork(sagaWelcome),
    fork(sagaAddDev),
  ];
};

export default root;
