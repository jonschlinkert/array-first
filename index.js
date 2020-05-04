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
  
  num = + num;
  if(isNaN(num) throw new TypeError("non-convertible value type, expect number type");;
  if(num > arr.length || num < 0) throw new Error("num is not within the expected number");
  
  return Array(num).fill(0).map((i, index) => arr[index]);
};
