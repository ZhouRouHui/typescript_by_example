/**
 * 函数
 * 
 * 1. 函数的定义
 * 2. 可选参数
 * 3. 默认参数
 * 4. 剩余参数
 * 5. 函数重载
 * 6. 箭头函数 es6
 * 7. 对象参数属性限定
 */

// 1. 函数的定义
// 函数声明法
function func3(arg1: string, arg2: number): string {
    return `${arg1} --- ${arg2}`;
}
// 匿名函数申明
var func4 = function(arg1: string): string | void {
    // return arg1;
}

// 2. 可选参数
// 可选参数必须在参数列表的最后
function func5(arg?: string) {
    if (arg) {
        console.log(arg);
    } else {
        console.log('empyt args');
    }
}

// 3. 默认参数
function func6(arg: string = 'zrh') {
    console.log(arg);
}

// 4. 剩余参数，参数解构
// 参数到方法中会以数组方式接收，... 用来结构数组
function func7(...args: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i]
    }
    return sum;
}
func7(1, 2, 3, 4);

// 5. 函数重载
// java 的重载：指的是两个或者两个以上同名函数，但他们的参数不一样，这时会出现函数重载的情况
// ts 的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的。
// 为了兼容 es5，es6 重载的写法，所以 ts 的重载和 java 的重载有区别。
// es5 中如果有两个同名的方法，下面的方法会替换上面的方法。
function func8(arg: string): string;
function func8(arg: number, arg1?: number): string;
function func8(arg: any, arg1?: any): any {
    if (typeof arg === 'string') {
        return '我执行的是 function func8(arg: string): string;';
    } else {
        return '我执行的是 function func8(arg: number): string;';
    }
}
func8('zrh');

// 6. 箭头函数 es6
// 箭头函数里面的 this 指向上下文
// es5 的写法
setTimeout(function() {
    console.log('this is from es5');
}, 1000);
// es6 的写法
setTimeout(() => {
    console.log('this if from es6');
}, 1000);


// 7. 对象参数属性限定
function func9(info: {name: string, age?: number}) {
    console.log(info.name, info.age);
}
var info = {name: 'zrh'};
func9(info);
