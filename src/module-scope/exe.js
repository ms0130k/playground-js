import Bridge1 from './bridge-1.mjs';
import Bridge2 from './bridge-2.mjs';

console.assert(Bridge1.con === Bridge2.con);
console.assert(Bridge1 === Bridge2);
console.log('end');