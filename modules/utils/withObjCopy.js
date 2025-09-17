export const withObjCopy = (obj, cb) => {
  const copy = { ...obj };
  cb(copy);
  return copy;
};