const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date){
    return 'Unable to determine the time of year!'
  }
  if(!(date instanceof Date) || Object.getOwnPropertyNames(date)[0]){
    throw new Error('Invalid date!')
  }
  let mounth = date.getMonth()

  if(mounth >1 && mounth<5){
    return 'spring'
  }else if(mounth>4 && mounth<8){
    return 'summer'
  }else if(mounth>7 && mounth<11){
    return 'autumn'
  }else{
    return 'winter'
  }
}

module.exports = {
  getSeason
};
