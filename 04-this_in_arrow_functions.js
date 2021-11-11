// --------------------------------------
// Default binding
// --------------------------------------
"use strict"

const a = () => {
  console.log('**in a**');
  console.log(this?.whoami)
}

console.log('------------------------');
console.log('default binding');
console.log('------------------------');
a();

// --------------------------------------
// Implicit binding
// --------------------------------------
let o

o = {
  whoami: "I'm o",
  a
}
console.log('------------------------');
console.log('implicit binding to o')
console.log('------------------------');
// WTF?
o.a();

// --------------------------------------
// Explicit binding
// --------------------------------------

console.log('------------------------');
console.log('expicit binding to o')
console.log('------------------------');
// REALLY???
o.a.call(o)

// --------------------------------------
// Defining arrows in the object
// --------------------------------------
console.log('------------------------');
console.log('Defining arrows in the object')
console.log('------------------------');

// "this" is the global object when we run this code:
o = {
  whoami: "A humble object called 'o'",

  myA: () => {
    console.log('**in a**');
    console.log(this?.whoami)
    this.myB();
  },
  // The above is the same as:
  //myA: function(){...}.bind(this),

  myB: () => {
    console.log('**in b**');
    console.log(this?.whoami);
  }
}

// This is the global object, so this one is the function that will be called
this.myB = function() {
  console.log("This is not the function you're looking for")
}

// So:
o.myA(); // This will call the wrong myB()

console.log('trying to explicitly bind the function:')
o.myA.call(o); // This will call it too
