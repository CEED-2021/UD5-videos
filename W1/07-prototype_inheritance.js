console.log('----------------------------------------------')
console.log("A function has a prototype by default")
console.log('----------------------------------------------')

function AFunction() {
  // Plain regular function
}
console.log(AFunction.prototype)

console.log('----------------------------------------------')
console.log("The prototype has a .constructor property pointing to the function")
console.log('----------------------------------------------')

console.log(AFunction.prototype.constructor)
console.log(`Am I AFunction? ${AFunction.prototype.constructor === AFunction}`);

console.log('----------------------------------------------')
console.log("When using new, created objects' prototype is Function.prototype")
console.log('----------------------------------------------')

let o;

o = new AFunction()
console.log(`Does o have the same prototype as the function?: ${Object.getPrototypeOf(o) === AFunction.prototype}`);

console.log('----------------------------------------------')
console.log("We can put 'things' in the prototype")
console.log('----------------------------------------------')

AFunction.prototype.sayHello = function() { console.log('Hello!') }
o = new AFunction();
o.sayHello();

let o2 = new AFunction();
o2.sayHello();

console.log(`Does they share the method? ${o.sayHello === o2.sayHello}`);


console.log('----------------------------------------------')
console.log("Prototypes can be chained")
console.log('----------------------------------------------')

function ASuperFunction() {}
ASuperFunction.prototype.sayGoodBye = function() { console.log('Goodbye!') }

Object.setPrototypeOf(AFunction.prototype, ASuperFunction.prototype );

o = new AFunction();
o.sayHello();
o.sayGoodBye();