const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members)) return false 
  const arrayFilter = members.filter(x => typeof x === 'string')
  const firstLetters = arrayFilter.map(name =>{
    const clean = name.trim()
    const firstChair = clean[0]
    return firstChair.toUpperCase()
  })
  return firstLetters.sort().join('')
}

module.exports = {
  createDreamTeam
};
