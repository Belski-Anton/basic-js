const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  // Remove line below and write your code here

  // Convert str and addition to strings in case they're not
  str = String(str);
  let addition = options.hasOwnProperty("addition")
    ? String(options.addition)
    : "";

  // Set default values for repeatTimes and additionRepeatTimes
  const repeatTimes = options.repeatTimes || 1;
  const separator =
    options.separator !== undefined ? String(options.separator) : "+";
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator =
    options.additionSeparator !== undefined
      ? String(options.additionSeparator)
      : "|";

  // Build the repeated addition string
  const repeatedAddition = new Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);

  // Build the full repeated string
  const fullStr = new Array(repeatTimes)
    .fill(str + repeatedAddition)
    .join(separator);

  return fullStr;
}

module.exports = {
  repeater,
};
