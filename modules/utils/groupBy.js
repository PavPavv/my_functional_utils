export const groupBy = (arr, cb) => {
  const result = {};
  arr.forEach((item) => {
    const key = cb(item);
    if (result[key]) {
      result[key].push(item);
    } else {
      result[key] = [item];
    }
  });
  return result;
};