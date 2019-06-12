import { FETCH_USER_DATA } from './type';
import { UPDATE_LOADER_INSTANCE } from '../../components/LoadingView/type';

const initialState = {
  userData: null,
  loader: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA: {
      const { userData } = action;
      return {
        ...state,
        userData,
      };
    }
    case UPDATE_LOADER_INSTANCE: {
      const { loader } = action;
      return {
        ...state,
        loader,
      };
    }
    default:
      return state;
  }
};

