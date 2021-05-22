

/**
 * 命名空间：
 *  在代码量较大的情况下，为了避免各种变量命名相冲突，可将相似功能的函数，类，接口等放置到命名空间内。
 * 
 * 命名空间和模块的区别：
 *  命名空间：内部模块，主要用于组织代码，避免命名冲突
 *  模块：ts 的外部模块的简称，侧重代码的附庸，一个模块里可能会有多个命名空间
 */

namespace A {
    export class Person {
        public name: string;
        public constructor(name: string) {
            this.name = name;
        }
    }
}

// namespace 也支持导出
export namespace B {
    export class Person {
        public name: string;
        public constructor(name: string) {
            this.name = name;
        }
    }
}

var a = new A.Person('man');

var b = new B.Person('women');
