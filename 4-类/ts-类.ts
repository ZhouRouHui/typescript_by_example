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
 *  readonly: 将属性设置为只读的，只读属性必须在声明时或构造函数里被初始化。
 * 4. 静态属性，静态方法
 * 5. 在构造函数的参数上使用public等同于创建了同名的成员变量。
 * 6. 抽象类 abstract
 */


// 1. 定义
class Person {

    // 属性
    public name: string;
    public static set = '男';

    // 构造方法
    public constructor (name: string) {
        this.name = name;
    }

    // 类方法
    public run (): void {
        console.log(this.name);
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    // static 定义静态方法
    public static print() {
        console.log('这里是静态方法');
    }
}

var p = new Person('zrh');
p.run();

p.setName("loedan");
p.getName();

// 调用静态方法
Person.print();


// 2. 继承（extend + super）
class Man extends Person {

    // ts 中 extends + super 才能真正的实现类的继承
    public constructor(name: string) {

        // super 相当于初始化父类的构造方法
        super(name);
    }

    // 类方法
    public run (): void {
        console.log(this.name + ' 子类');
    }

    public work(): void {
        alert(`by func work + ${this.name}`);
    }
}

var m = new Man('loedan');
m.run();
m.work();


// 6. abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体的实现并且必须在派生类中实现。
// 抽象类不能被实例化
// 抽象方法只能出现在抽象类里面
// 抽象方法在子类中必须实现
abstract class Animal {
    public name: string;
    public constructor(name: string) {
        this.name = name;
    }

    // 抽象方法在子类中必须实现
    abstract eat(): any;
}

class Dog extends Animal {
    public constructor(name: string) {
        super(name);
    }

    public eat() {
        console.log('eat from func dog');
    }
}

var d = new Dog('小狗');
d.eat();

class Cat extends Animal {
    public constructor(name: string) {
        super(name);
    }

    public eat() {
        console.log('eat from func cat');
    }
}


var cat = new Cat('小猫');
cat.eat();
