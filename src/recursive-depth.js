const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    let curr = 0;

    for (let elem of arr) {
      if (Array.isArray(elem)) {
        let depth = this.calculateDepth(elem);
        curr = Math.max(curr, depth);
      }
    }
    return curr + 1;
  }
}

module.exports = {
  DepthCalculator,
};
