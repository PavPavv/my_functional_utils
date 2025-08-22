import { withArrayCopy } from './withArrayCopy.js';

export const arrRmv = (arr, idx) => {
  return withArrayCopy(arr, (copy) => {
    copy.splice(idx, 1);
  });
}