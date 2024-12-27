const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNum = 0;
  let str = n.toString();

  for (let i = 0; i < str.length; i++) {
    let newStr = str.slice(0, i) + str.slice(i + 1);
    let newNum = parseInt(newStr);

    if (newNum > maxNum) {
      maxNum = newNum;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit,
};
