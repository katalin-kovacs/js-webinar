/**
 * It reverses the given object, i.e. return a copy of the object
 * where the keys have become the values and the values the keys
 *
 * @param {object} o the object
 * @returns {object} the new object
 */

const { __esModule } = require("cucumber");

module.exports = function reverse(o) {
  if (typeof o !== "object") {
    throw new Error("o is not an object");
  }

  const result = {};
  Object.keys(o).forEach((key) => {
    result[o[key]] = key;
  });
  return result;
};
