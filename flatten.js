/**
 * returns a newly-created array with
 * all sub-array elements concatenated recursively into a single level.
 * @param {Array<*|Array>} value
 * @return {Array}
 */
function flatten(val) {
  if (!Array.isArray(val)) return val;

  let res = [];
  for (let i of val) {
    res = res.concat(flatten(i));
  }
  return res;
}
