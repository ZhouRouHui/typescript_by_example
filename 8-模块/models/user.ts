import { Mysql } from '../modules/db';


// 操作用户表：定义一个 User 类和数据表做映射
class UserClass {
    public username: string | undefined;
    public pwd: string | undefined;
}

var UserModel = new Mysql<UserClass>();

export { UserClass, UserModel };
