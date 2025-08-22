export const objectSet = (obj, key, value) => {
  const copyObj = { ...obj };
  copyObj[key] = value;
  return copyObj;
};