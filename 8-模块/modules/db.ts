
/**
 * 数据库操作接口
 */
interface DBI<T> {
    get(id: number): any[];
    add(data: T): boolean;
    update(data: T, id: number): boolean;
    delete(id: number): boolean;
}

// mysql 操作类
export class Mysql<T> implements DBI<T> {
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
export class Mssql<T> implements DBI<T> {
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
export class Mongodb<T> implements DBI<T> {
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
