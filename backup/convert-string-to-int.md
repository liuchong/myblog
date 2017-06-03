---
title: convert string to int
date: 2017-06-03 14:11:25
tags:
---

``` javascript
/**
 * Convert a int string to int.
 *
 * @param {string}
 * @returns {number}
 */
function strToInt(str) {
    return str
        .split('')
        .reverse()
        .map((s, i) => (s.charCodeAt(0) - 48) * (10 ** i))
        .reduce((acc, cur) => acc + cur);
}

module.exports = strToInt;
```