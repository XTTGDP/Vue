var name = '小明';
var age = 18;
var flag = true;

function sum(num1, num2) {
    return num1 + num2;
};

if (flag) {
    console.log(sum(20, 30));
}

// 1.导出方式一 以对象 {}
export {
    flag, sum
}
// 2.导出方式二 声明变量的同时导出
export var num1 = 1000;
export var height = 1.99;

// 3.导出函数/类 
export function mul(num1, num2) {
    return num1 * num2;
}

export class Person {
    run() {
        console.log('在奔跑');
    }
}

// 4.导出 default  一个模块只能有一个default
// const address = '北京市';
// export default address;

export default function (argument) {
    console.log(argument);
}
