export const withArrayCopy = (arr, cb) => {
  const copy = [...arr];
  cb(copy);
  return copy;
};