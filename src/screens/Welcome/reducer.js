import { FETCH_USER_DATA } from './type';

const initialState = {
  userData: null,
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
    default:
      return state;
  }
};

