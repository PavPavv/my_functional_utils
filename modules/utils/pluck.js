export const pluck = (arr, field) => {
  return arr.map((obj) => {
    return obj[field];
  });
};