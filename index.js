"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var str = 'hello  world';
/**
 * 装饰器：装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。
 * 通俗的讲，装饰器就是一个方法，可以注入到类，方法，属性参数上来扩展类，属性，方法，参数的功能。
 * 常见的装饰器有：类装饰器，属性装饰器，方法装饰器，参数装饰器。
 * 装饰器的写法：普通装饰器(无法传参)，装饰器工厂(可传参)。
 * 装饰器是过去几年中 js 最大的成就之一，已是 es7 的标准特性之一。
 */
// 1. 类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视，修改或者替换类定义。传入一个参数。
// 普通装饰器
function logClass(obj) {
    // params 就是当前类
    console.log(obj);
    // 可以通过原型链给当前类添加属性和方法
    obj.prototype.url = 'xxx';
    obj.prototype.run = function () {
        console.log('这是来自于装饰器的 run 方法');
    };
}
// 装饰器工厂
function logClassFactory(params) {
    // 这里的 params 就是调用装饰器时传入的参数
    // 这里的 obj 就是当前类
    return function (obj) {
        console.log(obj);
        console.log(params);
        obj.prototype.url = params;
    };
}
// @logClass   // 调用普通装饰器，必须紧挨着类上面，不用加分号
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () { };
    HttpClient = __decorate([
        logClassFactory('www.baidu.com')
    ], HttpClient);
    return HttpClient;
}());
var client = new HttpClient();
console.log(client.url);
// 布尔类型，只要两个值：[true | false]
var flag = true;
flag = false;
// 数字类型，包括整型和浮点型
var num = 1;
num = 12.3;
// 字符串类型
var str1 = 'zrh';
// 数组类型
// es 5 中定义数组：var arr = [1, 'a', 3.3];
// 方式一，声明指定类型的数组
var arr = [1, 2, 3, 4, 5];
// 方式二，利用 es5 中的 interface 进行申明，这种定义的类型称之为泛型，String，Number 的都支持
var arr1 = ["a", 'b', 'c'];
// 方式三，利用 any
var arr2 = [1, 'a', true, undefined, null];
// 元祖类型：属于数组的一种
// 元祖类型的定义，在申明值得时候必须按照内部类型的顺序存值，且不能超过数量。
var tuple = ['a', 2, true];
var c = 1 /* blue */; // 结果为 1
;
var state = 1 /* success */; // 结果为 1
// 任意类型
// 与 es5 中没有指定类型类似，可以存放任意类型的数据。
var var1 = 1;
var1 = 'zrh';
var1 = true;
// null 和 undefined 是其他（never 类型）数据类型的子类型
var var2 = undefined;
var var3 = null;
var var4 = undefined;
var var5 = 'string';
// void 类型
// ts 中 void 表示没有任何类型，一般用于定义方法的时候方法没有返回任何类型的值
function func1() {
    console.log('func1');
}
// 带返回值的方法
function func2() {
    console.log('func2');
    return 2;
}
// never 类型
// never 类型时其他类型（包括 null 和 undefined）等子类型，代表从不会出现的值。这意味着声明 never 的变量只能被 never 类型所赋值
var var6;
var6 = (function () {
    throw new Error("我的返回也相当于从来不会出现的类型");
})();
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
function func3(arg1, arg2) {
    return arg1 + " --- " + arg2;
}
// 匿名函数申明
var func4 = function (arg1) {
    // return arg1;
};
// 2. 可选参数
// 可选参数必须在参数列表的最后
function func5(arg) {
    if (arg) {
        console.log(arg);
    }
    else {
        console.log('empyt args');
    }
}
// 3. 默认参数
function func6(arg) {
    if (arg === void 0) { arg = 'zrh'; }
    console.log(arg);
}
// 4. 剩余参数，参数解构
// 参数到方法中会以数组方式接收，... 用来结构数组
function func7() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
func7(1, 2, 3, 4);
function func8(arg, arg1) {
    if (typeof arg === 'string') {
        return '我执行的是 function func8(arg: string): string;';
    }
    else {
        return '我执行的是 function func8(arg: number): string;';
    }
}
func8('zrh');
// 6. 箭头函数 es6
// 箭头函数里面的 this 指向上下文
// es5 的写法
setTimeout(function () {
    console.log('this is from es5');
}, 1000);
// es6 的写法
setTimeout(function () {
    console.log('this if from es6');
}, 1000);
// 7. 对象参数属性限定
function func9(info) {
    console.log(info.name, info.age);
}
var info = { name: 'zrh' };
func9(info);
// 
/**
 * ts 里面的类
 *
 * 1. 定义
 * 2. 继承（extend + super）
 * 3. 类里面的修饰符（public，protected，private）
 *  public: 公有，在类里面，子类，类外面都可以访问
 *  protected: 保护类型，在类里面，子类里面可以访问，在类外面没法访问
 *  private: 私有，在类里面可以访问，子类和类外部都没法访问
 * 4. 静态属性，静态方法
 * 5. 抽象类 abstract
 */
// 1. 定义
var Person = /** @class */ (function () {
    // 构造方法
    function Person(name) {
        this.name = name;
    }
    // 类方法
    Person.prototype.run = function () {
        console.log(this.name);
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    // static 定义静态方法
    Person.print = function () {
        console.log('这里是静态方法');
    };
    Person.set = '男';
    return Person;
}());
var p = new Person('zrh');
p.run();
p.setName("loedan");
p.getName();
// 调用静态方法
Person.print();
// 2. 继承（extend + super）
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    // ts 中 extends + super 才能真正的实现类的继承
    function Man(name) {
        // super 相当于初始化父类的构造方法
        return _super.call(this, name) || this;
    }
    // 类方法
    Man.prototype.run = function () {
        console.log(this.name + ' 子类');
    };
    Man.prototype.work = function () {
        alert("by func work + " + this.name);
    };
    return Man;
}(Person));
var m = new Man('loedan');
m.run();
m.work();
// 5. abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体的实现并且必须在派生类中实现。
// 抽象类不能被实例化
// 抽象方法只能出现在抽象类里面
// 抽象方法在子类中必须实现
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log('eat from func dog');
    };
    return Dog;
}(Animal));
var d = new Dog('小狗');
d.eat();
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        console.log('eat from func cat');
    };
    return Cat;
}(Animal));
var cat = new Cat('小猫');
cat.eat();
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
// name 参数必须实现 FullName 接口
function printName(name) {
    console.log(name.firstName + ' --- ' + name.secondName);
}
/**
 * 注意
 * var fullName = {firstName: 'zrh', secondName: 'loedan', age: 18};
 * printName(fullName); 不会报错
 *
 * 但是直接写
 * printName({firstName: 'zrh', secondName: 'loedan', age: 18}); 会报错
 *
 * 建议使用属性接口时，是包含接口里面的属性，不要扩展其他属性，因为容易 ts 编译失败
 */
var fullName = { firstName: 'zrh', secondName: 'loedan', age: 18 };
printName(fullName);
// 使用函数类型接口
var md5 = function (key, value) {
    return key + value; // 模拟 md 算法后返回
};
console.log(md5('zrh', 'loedan'));
var arr3 = ['a', 'b'];
console.log(arr3[0]);
var arr4 = { name: 'zrh', age: '18' };
var Jeep = /** @class */ (function () {
    function Jeep(name) {
        this.name = name;
    }
    Jeep.prototype.run = function (arg) {
        if (str == '价格') {
            console.log('一百万');
        }
    };
    return Jeep;
}());
var j = new Jeep('牧马人');
j.run('价格');
var Estate = /** @class */ (function () {
    function Estate() {
    }
    Estate.prototype.decoration = function () {
        return '正在装修中';
    };
    return Estate;
}());
// 即继承父类，也实现接口
var ZhongLiangLaJi = /** @class */ (function (_super) {
    __extends(ZhongLiangLaJi, _super);
    function ZhongLiangLaJi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZhongLiangLaJi.prototype.getPrice = function () {
        return 10000000;
    };
    ZhongLiangLaJi.prototype.getArea = function () {
        return 10000;
    };
    return ZhongLiangLaJi;
}(Estate));
var z = new ZhongLiangLaJi();
z.getArea();
/**
 * 泛型
 *
 * 1. 泛型的定义: 支持不特定的数据类型，但是要求传入的参数类型要和返回的数据类型一致
 * 2. 泛型函数
 * 3. 泛型类
 * 4. 泛型接口
 * 5. 把类作为参数类型的泛型类
 */
// 2. 泛型函数
function func10(arg1) {
    return arg1;
}
func10('zrh');
// 3. 泛型类
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 1; i < this.list.length - 1; i++) {
            if (this.list[i] < minNum) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
// 实例化类，并且指定了类的 T 代表的类型是 number
var mc = new MinClass();
mc.add(12);
mc.add(16);
mc.add(90);
mc.min();
var func11 = function (val1) {
    return val1;
};
// 调用
func11(123);
function func12(arg1) {
    return arg1;
}
// 调用
var func13 = func12;
func13(123);
// 5. 把类作为参数类型的泛型类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb.prototype.update = function (info, id) {
        console.log(info);
        console.log(id);
        return true;
    };
    return MysqlDb;
}());
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.name = 'zrh';
u.pwd = '111111';
// 将 User 作为 T 的类型
var db = new MysqlDb();
db.add(u);
var Category = /** @class */ (function () {
    function Category(args) {
        this.title = args.title;
        this.desc = args.desc;
    }
    return Category;
}());
var cate = new Category({ title: 'china', desc: 'chinese news' });
var db1 = new MysqlDb();
db1.add(cate);
/**
 * 功能：定义一个操作数据库的库，支持 mysql，mongodb，mssql。
 * 要求：mysql，mongodb mssql 功能一样，有 add，update，delete，get 方法
 * 注意：约束统一的规范，以及代码重用。
 * 解决方案：需要约束代码规范所以要定义接口，需要代码重用所以使用泛型
 * 1. 接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范。
 * 2. 泛型：解决类，接口，方法的复用性。
 */
/**
 * 注意：要实现一个泛型接口，类必须定义为泛型类
 */
// mysql 操作类
var Mysql = /** @class */ (function () {
    function Mysql() {
    }
    Mysql.prototype.get = function (id) {
        console.log(id);
        return [];
    };
    Mysql.prototype.add = function (data) {
        console.log(data);
        return true;
    };
    Mysql.prototype.update = function (data, id) {
        console.log(data);
        console.log(id);
        return true;
    };
    Mysql.prototype.delete = function (id) {
        console.log(id);
        return true;
    };
    return Mysql;
}());
// mssql 操作类
var Mssql = /** @class */ (function () {
    function Mssql() {
    }
    Mssql.prototype.get = function (id) {
        return [];
    };
    Mssql.prototype.add = function (data) {
        console.log(data);
        return true;
    };
    Mssql.prototype.update = function (data, id) {
        console.log(data);
        console.log(id);
        return true;
    };
    Mssql.prototype.delete = function (id) {
        console.log(id);
        return true;
    };
    return Mssql;
}());
// mongodb 操作类
var Mongodb = /** @class */ (function () {
    function Mongodb() {
    }
    Mongodb.prototype.get = function (id) {
        return [];
    };
    Mongodb.prototype.add = function (data) {
        console.log(data);
        return true;
    };
    Mongodb.prototype.update = function (data, id) {
        console.log(data);
        console.log(id);
        return true;
    };
    Mongodb.prototype.delete = function (id) {
        console.log(id);
        return true;
    };
    return Mongodb;
}());
// 操作用户表：定义一个 User 类和数据表做映射
var Users = /** @class */ (function () {
    function Users() {
    }
    return Users;
}());
var us = new Users();
us.username = 'zrh';
us.pwd = '123456';
var mysql = new Mysql();
mysql.add(us);
define("8-\u6A21\u5757/modules/demo", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getData = exports.url = void 0;
    exports.url = 'xxx';
    function getData() {
        return [];
    }
    exports.getData = getData;
    function fn() {
        return [];
    }
    exports.default = fn;
});
define("8-\u6A21\u5757/modules/db", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Mongodb = exports.Mssql = exports.Mysql = void 0;
    // mysql 操作类
    var Mysql = /** @class */ (function () {
        function Mysql() {
        }
        Mysql.prototype.get = function (id) {
            console.log(id);
            return [];
        };
        Mysql.prototype.add = function (data) {
            console.log(data);
            return true;
        };
        Mysql.prototype.update = function (data, id) {
            console.log(data);
            console.log(id);
            return true;
        };
        Mysql.prototype.delete = function (id) {
            console.log(id);
            return true;
        };
        return Mysql;
    }());
    exports.Mysql = Mysql;
    // mssql 操作类
    var Mssql = /** @class */ (function () {
        function Mssql() {
        }
        Mssql.prototype.get = function (id) {
            return [];
        };
        Mssql.prototype.add = function (data) {
            console.log(data);
            return true;
        };
        Mssql.prototype.update = function (data, id) {
            console.log(data);
            console.log(id);
            return true;
        };
        Mssql.prototype.delete = function (id) {
            console.log(id);
            return true;
        };
        return Mssql;
    }());
    exports.Mssql = Mssql;
    // mongodb 操作类
    var Mongodb = /** @class */ (function () {
        function Mongodb() {
        }
        Mongodb.prototype.get = function (id) {
            return [];
        };
        Mongodb.prototype.add = function (data) {
            console.log(data);
            return true;
        };
        Mongodb.prototype.update = function (data, id) {
            console.log(data);
            console.log(id);
            return true;
        };
        Mongodb.prototype.delete = function (id) {
            console.log(id);
            return true;
        };
        return Mongodb;
    }());
    exports.Mongodb = Mongodb;
});
define("8-\u6A21\u5757/models/user", ["require", "exports", "8-\u6A21\u5757/modules/db"], function (require, exports, db_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserModel = exports.UserClass = void 0;
    // 操作用户表：定义一个 User 类和数据表做映射
    var UserClass = /** @class */ (function () {
        function UserClass() {
        }
        return UserClass;
    }());
    exports.UserClass = UserClass;
    var UserModel = new db_1.Mysql();
    exports.UserModel = UserModel;
});
/**
 * 模块的概念（官方）：
 *  关于术语的一点说明：请务必注意一点，ts 1.5 里术语名已经发生了变化。“内部模块” 现在称作 “命名空间”。“外部模块” 现在则简称为 “模块”。模块在其自身的作用域里执行，而不是在全局作用域里。
 *  这意味着定义在一个模块里的变量，函数，类等等在模块外部是不可见的，除非你明确的使用 export 形式导出他们。相反，如果想使用其他模块导出的变量，函数，类，接口等的时候，必须要使用 import 导入他们。
 *
 * 模块的概念（自己理解）：
 *  我们可以把一些公共的功能单独抽离成一个文件作为一个模块。
 *  模块里面的变量，函数，类等默认是私有的，如果我们要在外部访问模块里面的数据（变量，函数，类），我们需要通过 export 暴露模块里面的数据。
 *  暴露后我们通过 import 引入模块就可以使用模块里面暴露的数据。
 */
define("8-\u6A21\u5757/index", ["require", "exports", "8-\u6A21\u5757/modules/demo", "8-\u6A21\u5757/modules/demo", "8-\u6A21\u5757/models/user"], function (require, exports, demo_1, demo_2, user_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    demo_2 = __importDefault(demo_2);
    console.log(demo_1.url);
    demo_1.getData();
    demo_2.default();
    var us = new user_1.UserClass();
    us.username = 'zrh';
    us.pwd = '123456';
    user_1.UserModel.add(us);
});
/**
 * 命名空间：
 *  在代码量较大的情况下，为了避免各种变量命名相冲突，可将相似功能的函数，类，接口等放置到命名空间内。
 *
 * 命名空间和模块的区别：
 *  命名空间：内部模块，主要用于组织代码，避免命名冲突
 *  模块：ts 的外部模块的简称，侧重代码的附庸，一个模块里可能会有多个命名空间
 */
define("9-\u547D\u540D\u7A7A\u95F4/index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.B = void 0;
    var A;
    (function (A) {
        var Person = /** @class */ (function () {
            function Person(name) {
                this.name = name;
            }
            return Person;
        }());
        A.Person = Person;
    })(A || (A = {}));
    // namespace 也支持导出
    var B;
    (function (B) {
        var Person = /** @class */ (function () {
            function Person(name) {
                this.name = name;
            }
            return Person;
        }());
        B.Person = Person;
    })(B = exports.B || (exports.B = {}));
    var a = new A.Person('man');
    var b = new B.Person('women');
});
