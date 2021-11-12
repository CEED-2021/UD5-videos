console.log('----------------------------------------------')
console.log("JavaScript allows classes")
console.log('----------------------------------------------')

class MyClass {
  
  constructor(name) {
    this.name = name;
    console.log(`I'm creating a object with name ${name}`)
  }

  sayHello() {
    console.log(`Hello, I'm ${this.name}!`);
  }
};

let o = new MyClass('the first object');
o.sayHello();

console.log('----------------------------------------------')
console.log("But they are still using prototyping")
console.log('----------------------------------------------')

console.log(typeof MyClass);
console.log(MyClass.prototype.constructor);
console.log(Object.getOwnPropertyNames(MyClass.prototype));


console.log('----------------------------------------------')
console.log("Inside class definition, this refers to the object")
console.log('----------------------------------------------')

function callLater(func) { func() }

class MyClass2 {
  whoami = "MyClass2"

  normalMethod(){ console.log(this?.whoami) }
  arrowMethod = () => { console.log(this?.whoami) }
}

let foo = new MyClass2()
callLater(foo.normalMethod)
callLater(foo.arrowMethod)


console.log('----------------------------------------------')
console.log("Classes can be created dynamically")
console.log('----------------------------------------------')

let MyClass3 = class {
  sayHello() {
    console.log('Hello!');
  }
};

console.log(MyClass3.prototype.constructor.toString())