/*!
 * array-first <https://github.com/jonschlinkert/array-first>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

module.exports = function arrayFirst(arr, num) {
  if (!Array.isArray(arr)) {
    throw new Error('array-first expects an array as the first argument.');
  }
  
  if(isNaN(+num)) num = 1;
  
  return Array(num).fill(0).map((i, index) => arr[index]);
};
