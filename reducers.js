import { combineReducers } from 'redux';
import welcomeReducer from './src/screens/Welcome/reducer';

const appReducer = combineReducers({
  welcomeReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
