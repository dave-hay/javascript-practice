# JavaScript Practice

## Overview

This repository contains JavaScript utility functions aimed at enhancing web development practices. Below is a quick overview of each function:

### 1. `getElementsByTagName(element, tagName)`

- **Description**: A custom implementation of the native JavaScript method `Element.getElementsByTagName()`. It searches for elements with a specified tag name within a given element.
- **Parameters**:
  - `element`: The DOM element within which to search for descendants.
  - `tagName`: The tag name string to search for.
- **Returns**: An array of Elements that match the tag name within the specified element.
- **Usage Example**:
  ```javascript
  const divs = getElementsByTagName(document.body, "div");
  ```

### 2. `classnames(...args)`

- **Description**: A utility function used for conditionally joining CSS class names together, especially useful in React applications.
- **Parameters**: Variable. Each argument can be a string, object, or array representing class names.
- **Returns**: A single string with class names separated by spaces.
- **Usage Example**:
  ```javascript
  const buttonClass = classnames("btn", {
    "btn-large": true,
    "btn-active": true,
  });
  ```

### 3. `promiseAll(promises)`

- **Description**: A custom implementation of `Promise.all()`. This function takes an array of promises and returns a single Promise that resolves when all of the input promises have resolved.
- **Parameters**:
  - `promises`: An array of Promises.
- **Returns**: A single Promise that resolves to an array of the results of the input promises.
- **Usage Example**:
  ```javascript
  const data = await promiseAll([
    fetch("/api/user"),
    fetch("/api/posts"),
    fetch("/api/tags"),
  ]);
  ```

### 4. `flatten(array)`

- **Description**: A function that flattens a nested array structure into a single-level array.
- **Parameters**:
  - `array`: An array, potentially containing nested arrays.
- **Returns**: A new array with all elements flattened to a single level.
- **Usage Example**:
  ```javascript
  const flatArray = flatten([1, [2, [3, 4], 5], 6]);
  ```

### 5. `listFormat(items, options)`

- **Description**: Formats a list of strings into a single string, with options for sorting, limiting length, and removing duplicates. Useful for concatenating items in a user-friendly format, such as in summarizing social media reactions.
- **Parameters**:
  - `items`: An array of strings to be formatted.
  - `options`: An object with optional keys `sorted`, `length`, and `unique`.
- **Returns**: A formatted string based on the specified options.
- **Usage Example**:
  ```javascript
  const formattedList = listFormat(["Bob", "Ben", "Tim", "Jane", "John"], {
    length: 3,
    unique: true,
  });
  // Output: "Bob, Ben, Tim and 2 others"
  ```

These functions provide utility and convenience for various common tasks in front-end development, from DOM manipulation to promise handling and array operations.
