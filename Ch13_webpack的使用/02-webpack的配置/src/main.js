// 1.使用common.js的模块化规范
const { add, mul } = require('./mathUtils.js');

console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化规范
import { uname, age, height } from './info';
console.log(uname);
console.log(age);
console.log(height);