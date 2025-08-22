export const frequenciesBy = (array, cb) => {
  const result = {};
  array.forEach(element => {
    const key = cb(element);
    if (result[key]) result[key] += 1;
    else result[key] = 1;  
  });
  return result;
};