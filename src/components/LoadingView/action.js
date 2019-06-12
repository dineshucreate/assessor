import { UPDATE_LOADER_INSTANCE } from './type';

export const updateLoader = (loader) => ({
  type: UPDATE_LOADER_INSTANCE,
  loader,
});
