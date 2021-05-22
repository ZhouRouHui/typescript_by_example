

/**
 * 功能：定义一个操作数据库的库，支持 mysql，mongodb，mssql。
 * 要求：mysql，mongodb mssql 功能一样，有 add，update，delete，get 方法
 * 注意：约束统一的规范，以及代码重用。
 * 解决方案：需要约束代码规范所以要定义接口，需要代码重用所以使用泛型
 * 1. 接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范。
 * 2. 泛型：解决类，接口，方法的复用性。
 */

interface DBI<T> {
    get(id: number): any[];
    add(data: T): boolean;
    update(data: T, id: number): boolean;
    delete(id: number): boolean;
}

/**
 * 注意：要实现一个泛型接口，类必须定义为泛型类
 */

// mysql 操作类
class Mysql<T> implements DBI<T> {
    get(id: number): any[] {
        console.log(id);
        return [];
    }
    add(data: T): boolean {
        console.log(data);
        return true;
    }
    update(data: T, id: number): boolean {
        console.log(data);
        console.log(id);
        return true;
    }
    delete(id: number): boolean {
        console.log(id);
        return true;
    }
}

// mssql 操作类
class Mssql<T> implements DBI<T> {
    get(id: number): any[] {
        return [];
    }
    add(data: T): boolean {
        console.log(data);
        return true;
    }
    update(data: T, id: number): boolean {
        console.log(data);
        console.log(id);
        return true;
    }
    delete(id: number): boolean {
        console.log(id);
        return true;
    }
}

// mongodb 操作类
class Mongodb<T> implements DBI<T> {
    get(id: number): any[] {
        return [];
    }
    add(data: T): boolean {
        console.log(data);
        return true;
    }
    update(data: T, id: number): boolean {
        console.log(data);
        console.log(id);
        return true;
    }
    delete(id: number): boolean {
        console.log(id);
        return true;
    }
}

// 操作用户表：定义一个 User 类和数据表做映射
class Users {
    public username: string | undefined;
    public pwd: string | undefined;
}

var us = new Users();
us.username = 'zrh';
us.pwd = '123456';

var mysql = new Mysql<Users>();
mysql.add(us);