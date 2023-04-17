const { NotImplementedError } = require('../extensions/index.js');

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
  
  let res = str;
  let addSum = "";
  if (!options.hasOwnProperty("separator")) {
    options.separator = "+";
  }
  if (!options.hasOwnProperty("addition")) {
    options.addition = "";
  }
  if (!options.hasOwnProperty("additionSeparator")) {
    options.additionSeparator = "|";
  }
  if (!options.hasOwnProperty("additionRepeatTimes")) {
    options.additionRepeatTimes = "1";
  }
  addSum = options.addition;
  for (let i = 1; i < options.additionRepeatTimes; i++) {
    addSum += options.additionSeparator;
    addSum += options.addition;
  }
  res += addSum;
  for (let i = 1; i < options.repeatTimes; i++) {
    res += options.separator;
    res += str;
    res += addSum;
  }
  return res;
}

module.exports = {
  repeater
};
