import { SAVE_NEW_DEV_DATA, CHANGE_NEW_DEV_DATA } from './type';

export const saveNewDevData = (devData) => ({
  type: SAVE_NEW_DEV_DATA,
  devData,
});

export const changeNewDevData = (data) => ({
  type: CHANGE_NEW_DEV_DATA,
  data,
});
