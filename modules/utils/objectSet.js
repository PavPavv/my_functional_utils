import { withObjCopy } from './withObjCopy.js';

export const objectSet = (obj, key, value) => {
  const copyObj = { ...obj };
  copyObj[key] = value;
  return copyObj;
};

export const objectSet1 = (obj, key, value) => {
  return withObjCopy(obj, (copy) => copy[key] = value);
};