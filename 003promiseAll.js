/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const res = [];
    let resolved = 0;

    if (resolved === iterable.length) {
      resolve(res);
    }

    iterable.forEach(async (prom, i) => {
      try {
        const val = await prom;
        res[i] = val;
        resolved += 1;
        if (resolved === iterable.length) {
          resolve(res);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
}

/**
 * Promise.resolve(promise) ensures that non-promise values are treated as resolved promises.
 * results[index] = result; preserves the order of results based on the input array.
 * completedPromises keeps track of how many promises have resolved.
 * The function resolves when all promises have resolved or rejects if any promise rejects.
 *
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completedPromises = 0;

    promises.forEach((promise, index) => {
      // Wrap non-promise values in a resolved promise
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          completedPromises++;

          // Resolve when all promises have resolved
          if (completedPromises === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          // Reject the whole promise if any promise rejects
          reject(error);
        });
    });

    // If the array is empty, resolve immediately
    if (promises.length === 0) {
      resolve(results);
    }
  });
}
