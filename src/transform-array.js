const { NotImplementedError } = require('../extensions/index.js');

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
  const arr1 = [
    "--discard-prev",
    "--discard-next",
    "--double-prev",
    "--double-next",
  ];
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr1.includes(arr[i])) {
      if (arr[i - 1] !== "--discard-next") {
        if (arr[i - 1] === "--double-next") {
          result.push(arr[i]);
        }
        if (arr[i + 1] === `--double-prev`) {
          result.push(arr[i]);
        }
        result.push(arr[i]);
        if (arr[i + 1] === `--discard-prev`) {
          result.pop();
        }
      }
    }
  }
  return result;
}




module.exports = {
  transform
};
