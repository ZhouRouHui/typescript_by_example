

/**
 * 装饰器：装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。
 * 通俗的讲，装饰器就是一个方法，可以注入到类，方法，属性参数上来扩展类，属性，方法，参数的功能。
 * 常见的装饰器有：类装饰器，属性装饰器，方法装饰器，参数装饰器。
 * 装饰器的写法：普通装饰器(无法传参)，装饰器工厂(可传参)。
 * 装饰器是过去几年中 js 最大的成就之一，已是 es7 的标准特性之一。
 */

// 1. 类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视，修改或者替换类定义。传入一个参数。

// 普通装饰器
function logClass(obj: any) {
    // params 就是当前类
    console.log(obj);

    // 可以通过原型链给当前类添加属性和方法
    obj.prototype.url = 'xxx';
    obj.prototype.run = function () {
        console.log('这是来自于装饰器的 run 方法');
    }
}

// 装饰器工厂
function logClassFactory(params: string) {
    // 这里的 params 就是调用装饰器时传入的参数
    // 这里的 obj 就是当前类
    return function (obj: any) {
        console.log(obj);
        console.log(params);

        obj.prototype.url = params
    }
}

// @logClass   // 调用普通装饰器，必须紧挨着类上面，不用加分号
@logClassFactory('www.baidu.com')
class HttpClient {
    public constructor() {}
    public getData() {}
}

var client: any =  new HttpClient();
console.log(client.url);
