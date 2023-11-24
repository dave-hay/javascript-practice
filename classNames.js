/**
 * classnames is a commonly-used utility in modern front end applications to
 * conditionally join CSS class names together.
 * If you've written React applications, you likely have used a similar library.
 *
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
//
// kinda like flatten
// with objects takes key as the string value
//
function classNames(...args) {
  const resArr = [];

  args.forEach((val) => {
    if (!val) return;

    const valType = typeof val;

    if (valType === "string" || valType === "number") {
      resArr.push(val);
      return;
    }

    if (Array.isArray(val)) {
      resArr.push(classNames(...val));
      return;
    }

    if (valType === "object") {
      for (let [k, v] of Object.entries(val)) {
        if (v) resArr.push(k);
      }
      return;
    }
  });
  return resArr.join(" ");
}
