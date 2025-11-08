const { NotImplementedError } = require("../lib");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const position = [];
  const values = [];

  arr.forEach((val, i) => {
    if (val === -1) {
      position.push(i);
    } else {
      values.push(val);
    }
  });
  values.sort((a, b) => a - b);

  const res = [];
  let valueIndex = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (position.includes(i)) {
      res.push(-1);
    } else {
      res.push(values[valueIndex]);
      valueIndex++;
    }
  }
  return res;
}

module.exports = {
  sortByHeight,
};
