/**
 * @param {Array<string>} items
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */
export default function listFormat(items, options = {}) {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];

  let res = items.filter((i) => !!i);

  if (options.sorted) {
    res.sort();
  }

  if (options.unique) {
    const resSet = new Set(res);
    res = Array.from(resSet);
  }

  if (options.length && options.length > 0) {
    const remaining = res.length - options.length;
    if (remaining > 0) {
      const other = remaining > 1 ? "others" : "other";
      const first = res.slice(0, options.length).join(", ");
      const final = first + ` and ${remaining} ${other}`;
      return final;
    }
  }

  const last = res.pop();
  const answer = res.join(", ") + ` and ${last}`;
  return answer;
}
