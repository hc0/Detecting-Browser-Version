  const deepClone = (o) => {
    if (o instanceof Array) {
      const n = [];
      for (let i = 0; i < o.length; i += 1) {
        n[i] = deepClone(o[i]);
      }
      return n;
    } else if (o instanceof Object) {
      const n = {};
      for (const i in o) {
        if (Object.prototype.hasOwnProperty.call(o, i)) {
          n[i] = deepClone(o[i]);
        }
      }
      return n;
    }
    return o;
  };
const originalObj = { a: { aa: 1 }, b: [1, 2, [{ c: 1 }, { d: 2 }]] };
const result = deepClone(originalObj);

console.log(result.b[2][1] === originalObj.b[2][1]) //false