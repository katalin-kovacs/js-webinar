/**
 * It deletes the given property of the given object
 * and returns the new object.
 * The function must not modify the original object!
 *
 * @param {object} o the object
 * @param {string} key the name of the property to delete
 * @returns {object} the new object without the given property
 */

const { __esModule } = require("cucumber");

module.exports = function del(o, key) {
  if (typeof o !== "object") {
    throw new Error("o is not an object");
  }

  if (key in o) {
    return Object.entries(o).filter(([itemKey, itemValue]) => itemKey !== key);
  }
};
