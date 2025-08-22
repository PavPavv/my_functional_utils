export const deepCopy = (some) => {
  if (Array.isArray(some)) {
    const copy = [];
    for (let i = 0; i < some.length; i++) {
      copy.push(deepCopy(some[i]));
    }
    return copy;
  } else if (some === null) {
    return null;
  } else if (typeof some === 'object' && some.toString() === '[object Object]') {
    const copy = {};
    const keys = Object.keys(some);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      copy[key] = deepCopy(some[key]);
    }
    return copy;
  } else {
    return some;
  }
 };