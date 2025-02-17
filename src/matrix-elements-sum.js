const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(n) {
  let count=0;
  for(let i=0;i<n.length;i++){
      for(let j=0;j<n[0].length;j++){
          if(n[i][j]==0){
              for(let k=i;k<n.length;k++){
                  n[k][j]=0;
              }
              continue;
          }
          else
              count+=n[i][j];
      }
  }
  return +count;
}

module.exports = {
  getMatrixElementsSum
};
