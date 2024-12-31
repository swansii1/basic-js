const { NotImplementedError } = require("../extensions/index.js");

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
  const params = {
    repeatTimes: options.repeatTimes || 1,
    separator: options.separator || "+",
    addition: options.addition !== undefined ? String(options.addition) : "",
    additionRepeatTimes: options.additionRepeatTimes || 1,
    additionSeparator: options.additionSeparator || "|",
  };

  const additionArray = Array(params.additionRepeatTimes).fill(params.addition);
  const additionString = additionArray.join(params.additionSeparator);

  const resultArray = Array(params.repeatTimes).fill(str + additionString);
  const resultString = resultArray.join(params.separator);

  return resultString;
}

module.exports = {
  repeater,
};
