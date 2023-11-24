/**
 * It is a pure function which takes in an element and a tag name string.
 * Only descendants of the specified element are searched, not the element itself.
 *
 * @param {Element} el
 * @param {string} tagName
 * @return {Array<Element>} - array of Elements, not HTMLCollection of Elements.
 */
function getElementsByTagName(el, tagName) {
  const res = [];
  const tag = tagName.toUpperCase();

  function traverse(el) {
    if (!el) return;

    if (el.tagName === tag) {
      res.push(el);
    }

    for (const child of el.children) {
      traverse(child);
    }
  }

  for (const child of el.children) {
    traverse(child);
  }
  return res;
}

/**
 * Recursively searches for elements with a specified tag name within a given element's descendants.
 *
 * @param {Element} element - The root element from which to start the search.
 *                              This element itself is not included in the search.
 * @param {string} tagName - The tag name to search for. The search is case-insensitive.
 * @returns {Element[]} An array of found elements that match the specified tag name.
 *                       If no elements are found, an empty array is returned.
 */
function getElementsByTagName(element, tagName) {
  let result = [];

  // Recursive function to traverse the DOM tree
  function traverse(node) {
    // Check if the current node is an Element node
    if (node.nodeType === Node.ELEMENT_NODE) {
      // Check if the current node matches the specified tag name
      if (node.tagName.toLowerCase() === tagName.toLowerCase()) {
        result.push(node);
      }
      // Recursively traverse child nodes
      node.childNodes.forEach(traverse);
    }
  }

  // Start traversal from the children of the given element
  element.childNodes.forEach(traverse);

  return result;
}
