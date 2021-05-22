

/**
 * 数据类型
 * 
 * 静态类型校验是 ts 的特色和优点，有利于支撑大型项目和后期维护。
 * 声明变量的方式：
 * `var key[: type1 [| type2...]] = value`，
 * 如 `var name: string | undefind = ‘zrh’`，此时 name 变量既可以是字符串，也可以是 undefind（声明了却未赋值）。
 * 当没有声明类型的时候，如 `var name = ‘zrh’`，ts 会自动进行类型推断，本例推断类型为 `string`，之后再给 `name` 变量赋值其他类型，将不能编译通过。
 * 
 * ts 的数据类型有一下 10 种
 * 1. 布尔类型：boolean
 * 2. 数字类型：number，包括整型和浮点型
 * 3. 字符串类型：string
 * 4. 数组类型：array
 * 5. 元祖类型：tuple
 * 6. 枚举类型：enum
 * 7. 任意类型：any
 * 8. Null 和 undefined
 * 9. Void 类型
 * 10. Never 类型
 * 11. 类型断言
 * 
 * 
 * 类型 boolean 和 Boolean 的区别: 
 * boolean 是 ts 中的数据类型，js 中没有，而 Boolean 是 es 中的 interface，包括 number 会有 Number，string 会有 String。。。
 */


// 布尔类型，只要两个值：[true | false]
var flag: boolean = true;
flag = false;

// 数字类型，包括整型和浮点型
var num: number = 1;
num = 12.3;

// 字符串类型
var str1: string = 'zrh';

// 数组类型
// es 5 中定义数组：var arr = [1, 'a', 3.3];
// 方式一，声明指定类型的数组
var arr: number[] = [1, 2, 3, 4, 5]
// 方式二，利用 es5 中的 interface 进行申明，这种定义的类型称之为泛型，String，Number 的都支持
var arr1: Array<string> = ["a", 'b', 'c'];
// 方式三，利用 any
var arr2: any = [1, 'a', true, undefined, null];

// 元祖类型：属于数组的一种
// 元祖类型的定义，在申明值得时候必须按照内部类型的顺序存值，且不能超过数量。
var tuple: [string, number, boolean] = ['a', 2, true];

// 枚举类型
/**
 * 语法
 * enum 枚举名{
 *  标识符[=整型常数],
 *  标识符[=整型常数],
 *  ...
 *  标识符[=整型常数]
 * }
 */
// 不定值得案例，默认会从 0，1... 递增
const enum Color {
    red,
    blue,
    green
}
var c: Color = Color.blue;  // 结果为 1
// 定义值得案例
const enum PayState {
    success = 1,
    fail = 2
};
var state: PayState = PayState.success; // 结果为 1

// 任意类型
// 与 es5 中没有指定类型类似，可以存放任意类型的数据。
var var1: any = 1;
var1 = 'zrh';
var1 = true;

// null 和 undefined 是其他（never 类型）数据类型的子类型
var var2: undefined = undefined;
var var3: null = null;
var var4: undefined | null = undefined;
var var5: string | undefined | null = 'string';

// void 类型
// ts 中 void 表示没有任何类型，一般用于定义方法的时候方法没有返回任何类型的值
function func1(): void {
    console.log('func1');
}
// 带返回值的方法
function func2(): number {
    console.log('func2');
    return 2;
}

// never 类型
// never 类型时其他类型（包括 null 和 undefined）等子类型，代表从不会出现的值。这意味着声明 never 的变量只能被 never 类型所赋值
var var6: never;
var6 = (() => {
    throw new Error("我的返回也相当于从来不会出现的类型");
})();


// 类型断言
// 对一个 any 类型的数据进行类型断言，类型断言有两种形式,两种形式是等价的.
// 方式一：尖括号方式
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// 方式二：as 方式
let someValue1: any = "this is a string";
let strLength1: number = (someValue1 as string).length;
