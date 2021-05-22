/**
 * es5 里面的类
 * 
 * 1. 定义
 * 2. 原型链（prototype）的使用
 * 3. 静态方法的定义和使用
 * 4. 继承（对象冒充方式继承，原型链方式继承，对象冒充 + 原型链 组合方式继承）
 */

// 1. 定义
// es5 中没有专门的实现类的方法，是通过 function 来构造的
function PersonEs5() {
    this.name = 'zrh';
    this.age = 18;

    this.run = function () {
        console.log('this is from PersonEs5.run()');
    }
 }
 var p = new PersonEs5();
 console.log(p.name);
 p.run();


 // 2. 原型链（prototype）的使用 
 // 通过原型链（prototype）给类添加属性和方法
 PersonEs5.prototype.sex = 'male';
 PersonEs5.prototype.getSex = function () {
     console.log(this.sex);
 }
p.getSex();


// 3. 静态方法的定义和使用
// 定义
PersonEs5.getName = function () {
    console.log('this is static function');
}
// 调用静态方法，直接使用 类名.方法名()，不需要 new 来实例出对象
PersonEs5.getName();


// 4. 继承
// 方式一：对象冒充的组合继承模式
function ManEs5() {
    PersonEs5.call(this);   // 对象冒充实现继承，这样 ManEs5 就继承了 PersonEs5
}
var m = new ManEs5();
// ManEs5 继承了 PersonEs5，所以可以直接用 PersonEs5 构造函数里面的属性和方法方法。
console.log(m.name);
m.run();    
// 缺点：这种方式继承不能用原型链（prototype）添加的属性和方法
// console.log(m.sex);     // 无法获取，得到的是 undefined
// m.getSex();     // 会报错 index.html:65 Uncaught TypeError: m.getSex is not a function

// 方式二：原型链方式实现继承
// 这种方式即可以使用父类构造函数里面的属性和方法，也可以使用原型链上的属性和方法
function Women() {}
Women.prototype = new PersonEs5();  // 这样就实现了继承
var w = new Women();
w.getSex(); // 可以调用 PersonEs5 里面的原型链方法
// 缺点：这种方式继承无法在子类实例化的时候给父类传参，如下：
function Father(name) {
    this.name = name;
    this.getName = function () {
        console.log('my name is ' + this.name);
    }
}
Father.prototype.age = 18;
Father.prototype.getAge = function () {
    console.log(this.age);
}
function Son(name) {}
Son.prototype = new Father();   // 此时无法将 name 传递到 Father 的构造函数中
var s = new Son();

// 方式三：原型链 + 对象冒充的组合形式实现继承，能解决上面量找那个方式的问题
function Daughter(name) {
    Father.call(this, name);    // 对象冒充的时候可以给父类传参
}
Daughter.prototype = new Father();
var d = new Daughter('zxy');
d.getName();

// 推荐使用这种方式
// 方式四：另一种方式实现 原型链 + 对象冒充的继承，性能更优
function Brother(name) {
    Father.call(this, name);    // 这里面已经继承了父类构造函数里面的内容
}
Brother.prototype = Father.prototype;   // 这里只需要继承父类的原型链的内容即可
var b = new Brother('zrh');
b.getName();
b.getAge();