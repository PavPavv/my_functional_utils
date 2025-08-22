export const dropFirstArrEl = (arr) => {
  const copy = [...arr];
  const fist = copy.shift();
  return copy;
};