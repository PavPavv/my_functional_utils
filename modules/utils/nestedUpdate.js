import { dropFirstArrEl } from './dropFirstArrEl.js';
import { update } from './update.js';

export const nestedUpdate = (obj, keys, cb) => {
  if (keys.length === 0) {
    console.log('->', obj);
    return cb(obj);
  }
  const key1 = keys[0];
  const restOfKeys = dropFirstArrEl(keys);
  return update(obj, key1, (value1) => {
    return nestedUpdate(value1, restOfKeys, cb);
  });
};