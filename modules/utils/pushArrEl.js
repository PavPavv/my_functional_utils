import { withArrayCopy } from './withArrayCopy.js';

export const pushArrEl = (arr, elem) => {
  return withArrayCopy(arr, (copy) => copy.push(elem));
};