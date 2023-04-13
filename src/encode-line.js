const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '' 
  let currentLetter = str[0] 
  let count = 1 

  for (let i = 1; i <= str.length; i++) { 
      console.log(res) 
      if (str[i] === currentLetter) { 
          count++ 
      } else { 
          if (count > 1) { 
              res += `${count}${currentLetter}` 
          } else { 
              res += currentLetter 
          } 
          currentLetter = str[i] 
          count = 1 
      } 
  } 

  return res 
}



module.exports = {
  encodeLine
};
