import { withObjCopy } from './withObjCopy.js';

export const objectDel = (obj, key) => {
  return withObjCopy(obj, (copy) => delete copy[key]);
};