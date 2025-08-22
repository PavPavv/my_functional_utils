import { withArrayCopy } from './withArrayCopy.js';

export const arrSet = (arr, idx, val) => {
  return withArrayCopy(arr, (copy) => {
    copy[idx] = val;
  });
};