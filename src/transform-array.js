const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // Remove line below and write your code here
  if (!Array.isArray(arr)) return;

  const res = [];
  for (let i = 0; i < arr.length; i += 1) {
    const el = arr[i];
    switch (el) {
      case "--discard-next":
        i++;
        break;
      case "--discard-prev":
        if (res.length && arr[i - 2] !== "--discard-next") res.pop();
        break;
      case "--double-next":
        if (i + 1 < arr.length) res.push(arr[i + 1]);
        break;
      case "--double-prev":
        if (i - 1 >= 0 && arr[i - 2] !== "--discard-next") res.push(arr[i - 1]);
        break;
      default:
        res.push(el);
    }
  }
  return res;
}

module.exports = {
  transform,
};
