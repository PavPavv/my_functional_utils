import { withArrayCopy } from './withArrayCopy.js';

export const dropFirstArrEl = (arr) => {
  return withArrayCopy(arr, (copy) => copy.shift());
};