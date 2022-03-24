/**
 * It returns the property names of the given object.
 *
 * @param {object} o the object
 * @returns {string[]} the list of the properties of the object
 *                     or empty array if it is not an object
 */

module.exports = function properties(o) {
  if (typeof o !== "object" && Object.entries(o).length > 0) {
    throw new Error("o is not an object");
  }

  return Object.keys(o);
};
