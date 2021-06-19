// 1.导入的 {} 中定义的变量
import { flag, sum } from './aaa.js';
if (flag) {
    console.log('小明是天才，哈哈哈');
    console.log(sum(20, 30));
}

// 2.直接导入export定义的变量
import { num1, height } from './aaa.js';
console.log(num1);
console.log(height);

// 3.导入export的function
import { mul } from './aaa.js';
console.log(mul(30, 50));

import { Person } from './aaa.js';
const p = new Person();
p.run();

// 4.导入 default 可以自己命名
import addr from './aaa.js';
// console.log(addr);
addr('你好啊')

// 5.统一全部导入 把全部变量函数导入到aaa这个对象
import * as aaa from './aaa.js';
console.log(aaa.flag);