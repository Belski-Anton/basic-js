const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {
  let obj = {};
   
 
  for (let i=0; i<domains.length;i++){
   let sub_domain = domains[i].split('.').reverse();
   //console.log(sub_domain)
   let domain = '';
   for(let j=0; j<sub_domain.length;j++){
      domain = domain + '.' + sub_domain[j]
      console.log(domain)
      if (obj[domain]) {
         obj[domain] = obj[domain] + 1;
      } else {
         obj[domain] = 1;
      }
   }
   //   if(obj.hasOwnProperty(domain)){
   //    obj[domain]++
   //    console.log( obj[domain])
   //   }else{
   //    obj[domain] =1
   //   }
  }
  return obj
}

module.exports = {
  getDNSStats
};
