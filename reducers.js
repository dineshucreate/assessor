import { combineReducers } from 'redux';
import welcomeReducer from './src/screens/Welcome/reducer';
import addDevReducer from './src/screens/AddDev/reducer';

const appReducer = combineReducers({
  welcomeReducer,
  addDevReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
