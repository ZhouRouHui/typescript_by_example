

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


/**
 * 1. 导出的几种方式
 * 方式一：直接导出
 * export var url: string = 'xxxx';
 * export function fn(): void {}
 * 
 * 方式二：统一导出
 * var url: string = 'xxx';
 * function fn(): void {}
 * export { url, fn };
 * 
 * 方式三：export default 默认导出
 * 每个模块都可以有一个 default 导出。默认导出使用 default 关键字标记；并且一个模块只能够有一个 default 导出。需要使用一种特殊的导入形式来。
 * function fn(): void {}
 * export default fn;
 */
import { url, getData as gd } from './modules/demo';
console.log(url);
gd();
import fn from './modules/demo';
fn();


/**
 * 2. import 导入的几种方式
 * 方式一：export default 方式导出的
 * import fn from 'path';
 * 
 * 方式二：非 export default 方式导出的
 * import { url, getData } from 'path'
 */



/**
 * 讲义 7 内容的模块化实现
 */
import { UserModel, UserClass } from './models/user';

var us = new UserClass();
us.username = 'zrh';
us.pwd = '123456';

UserModel.add(us);
