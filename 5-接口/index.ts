/**
 * 接口 interface
 * 
 * 在面向对象中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计立面，接口起到一种限制和规范的作用。
 * 
 * 1. 属性类接口
 * 2. 函数类型接口
 * 3. 可索引接口
 * 4. 类类型接口
 * 5. 接口扩展
 */

// 1. 属性类接口: 对 json 的约束
interface FullName {
    firstName: string;
    secondName: string;
    sex?: string;   // 可传可不传

    // 表示 FullName 可以有任意数量的属性
    [propName: string]: any;
}

// name 参数必须实现 FullName 接口
function printName (name: FullName) {
    console.log(name.firstName + ' --- ' + name.secondName);
}

/**
 * 注意
 * var fullName = {firstName: 'zrh', secondName: 'loedan', age: 18};
 * printName(fullName); 不会报错，因为传递变量在编译时不会经过额外属性检查
 * 
 * 但是直接写 
 * printName({firstName: 'zrh', secondName: 'loedan', age: 18}); 会报错，因为编译时会经过额外属性检查
 * 
 * 建议使用属性接口时，是包含接口里面的属性，不要扩展其他属性，因为容易 ts 编译失败
 */
var fullName = {firstName: 'zrh', secondName: 'loedan', age: 18};
printName(fullName);


/**
 * 可选属性
 * 接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 可选属性在应用“option bags”模式时很常用，
 * 即给函数传入的参数对象中只有部分属性赋值了。
 * 下面是应用了“option bags”的例子：
 */
interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color: "black"});

/**
 * 只读属性
 * 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性:
 */
interface Point {
    readonly x: number;
    readonly y: number;
}
// 你可以通过赋值一个对象字面量来构造一个Point。 赋值后， x和y再也不能被改变了。
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

// TypeScript 具有 ReadonlyArray<T> 类型，它与 Array<T> 相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
// 上面代码的最后一行，可以看到就算把整个 ReadonlyArray 赋值到一个普通数组也是不可以的。 但是你可以用类型断言重写：
a = ro as number[];


// 2. 函数类型接口: 对方法传入的参数以及返回值进行约束
interface Encrypt {
    (key: string, value: string): string;
}

// 使用函数类型接口
var md5: Encrypt = function (key: string, value: string): string {
    return key + value; // 模拟 md 算法后返回
}
console.log(md5('zrh', 'loedan'));


// 3. 可索引接口: 对数组、对象的约束（不常用）
// 对数组的约束
interface UserArr {
    [index: number]: string;
}
var arr3:UserArr = ['a', 'b'];
console.log(arr3[0]);   // a

// 对对象的约束
interface UserObj {
    [index: string]: string;
}
var arr4: UserObj = {name: 'zrh', age: '18'};

// 4. 类类型接口: 对类的约束，和抽象类有点类似
interface Car {
    name: string;
    run(str: string): void;
}

class Jeep implements Car {
    name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public run(arg: string): void {
        if (str == '价格') {
            console.log('一百万');
        }
    }
}

var j = new Jeep('牧马人');
j.run('价格');


// 5. 接口扩展: 接口可以扩展接口
interface House {
    getPrice(): number;
}

// 接口继承另一个接口
interface Villa extends House {
    getArea(): number;
}

class Estate {
    decoration (): string {
        return '正在装修中';
    }
}

// 即继承父类，也实现接口
class ZhongLiangLaJi extends Estate implements Villa {
    public getPrice(): number {
        return 10000000;
    }

    public getArea(): number {
        return 10000;
    }
}

var z = new ZhongLiangLaJi();
z.getArea();
