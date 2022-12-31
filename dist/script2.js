'use strict';

import defaultImport, { a, b, c, c as copyOfC } from './script1.js';

console.log('defaultImport', defaultImport);
console.log('a', a);
console.log('b', b);
console.log('c', c);
console.log('copyOfC', copyOfC);
