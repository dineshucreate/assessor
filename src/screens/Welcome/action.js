import { FETCH_USER_DATA } from './type';

export const updateUserData = (userData) => ({
  type: FETCH_USER_DATA,
  userData,
});
