// --------------------------------------
// Default binding
// --------------------------------------
"use strict"

function a() {
  console.log('**in a**');
  console.log(this?.whoami)
  b();
}

function b() {
  console.log('**in b**');
  console.log(this?.whoami);
}

console.log('------------------------');
console.log('default binding');
console.log('------------------------');
a();

// --------------------------------------
// Implicit binding
// --------------------------------------
let o, o2

o = {
  whoami: "I'm o",
  a
}
console.log('------------------------');
console.log('implicit binding to o')
console.log('------------------------');
o.a();

o2 = {
  whoami: "I'm o2",
  o
}
console.log('------------------------');
console.log('implicit binding to o2');
console.log('------------------------');
o2.o.a();


// --------------------------------------
// Implicit binding: it doesn't depend on where the functions are created
// --------------------------------------
o = {
  whoami: "I'm o",
  ownA: function() {
    console.log('**in a**');
    console.log(this?.whoami)
    referenceToOwnB(); // This will loose the reference
    this.ownB(); // This won't, becase we are using implicit binding
  },
  ownB: function() {
    console.log('**in b**');
    console.log(this?.whoami);
  }
}
let referenceToOwnB = o.ownB;

console.log('-------------------------------------------------------');
console.log('implicit binding to o: functions created in an object')
console.log('-------------------------------------------------------');
o.ownA();

// --------------------------------------
// Passing an "object's function" to a method
// --------------------------------------

console.log('------------------------');
console.log('loosing reference');
console.log('------------------------');

function callLater(aFunction) {
  console.log('callLater: calling the function')
  aFunction();
}

o = {
  whoami: "I'm o",
  myFunction: function() { console.log(this?.whoami) }
}
console.log('calling directly');
o.myFunction();

console.log('calling later: this is lost');
callLater(o.myFunction)

// console.log('typical lost of this');
// setTimeout(o.myFunction, 1);
// (this would be the last entry in the log)

// --------------------------------------
// Explicit binding
// --------------------------------------

console.log('------------------------');
console.log('explicit binding');
console.log('------------------------');

o = {
  whoami: "I'm sure I'm o"
}
a.call(o)

// --------------------------------------
// function binding
// --------------------------------------

console.log('------------------------');
console.log('function binding');
console.log('------------------------');

o = {
  whoami: "This time I'll be o",
  a
}
// callLater(o.a) // This won't keep "this"
callLater(o.a.bind(o))

// We can use this for callbacks:
setTimeout(o.a.bind(o), 1);
