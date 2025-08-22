export const concat = (arrs) => {
  const result = [];
  arrs.forEach(arr => {
    arr.forEach(item => {
      result.push(item);
    });
  });
  return result;
};