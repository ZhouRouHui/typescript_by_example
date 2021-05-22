

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
function func10<T>(arg1: T): T {
    return arg1;
}
func10<string>('zrh');


// 3. 泛型类
class MinClass<T> {
    public list: T[] = [];

    public add(value: T): void {
        this.list.push(value);
    }

    public min(): T {
        var minNum = this.list[0];
        for (var i = 1; i < this.list.length - 1; i++) {
            if (this.list[i] < minNum) {
                minNum = this.list[i]
            }
        }

        return minNum;
    }
}

// 实例化类，并且指定了类的 T 代表的类型是 number
var mc = new MinClass<number>();
mc.add(12);
mc.add(16);
mc.add(90);
mc.min();


// 4. 泛型接口
// 方式一
interface ConfigFn {
    <T>(val1: T): T
}
var func11: ConfigFn = function<T> (val1: T): T {
    return val1;
}
// 调用
func11<number>(123);

// 方式二
interface Conf<T> {
    (arg1: T): T;
}
function func12<T> (arg1: T): T {
    return arg1;
}
// 调用
var func13: Conf<number> = func12;
func13(123);


// 5. 把类作为参数类型的泛型类
class MysqlDb<T> {
    public add(info: T): boolean {
        console.log(info);
        return true;
    }

    public update(info: T, id: number): boolean {
        console.log(info);
        console.log(id);
        return true;
    }
}

class User {
    public name: string | undefined;
    public pwd: string | undefined;
}

var u = new User();
u.name = 'zrh';
u.pwd = '111111';

// 将 User 作为 T 的类型
var db = new MysqlDb<User>();
db.add(u);

class Category {
    public title: string | undefined;
    public desc: string | undefined;

    constructor(args: {
        title: string | undefined,
        desc: string | undefined
    }) {
        this.title = args.title;
        this.desc = args.desc;
    }
}
var cate = new Category({title: 'china', desc: 'chinese news'});
var db1 = new MysqlDb<Category>();
db1.add(cate);
