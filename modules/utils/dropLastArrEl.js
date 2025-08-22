import { withArrayCopy } from './withArrayCopy.js';

export const dropLastArrEl = (arr) => {
  return withArrayCopy(arr, (copy) => copy.pop());
};