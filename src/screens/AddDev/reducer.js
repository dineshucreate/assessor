import { UPDATE_NEW_DEV_DATA } from './type';

const initialState = {
  devData: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_DEV_DATA: {
      const { devData } = action;
      return {
        ...state,
        devData,
      };
    }
    default:
      return state;
  }
};

