import { objectSet } from './objectSet.js';

export const update = (obj, key, cb) => {
  const value = obj[key];
  const newValue = cb(value);
  const newObj = objectSet(obj, key, newValue);
  return newObj;
};