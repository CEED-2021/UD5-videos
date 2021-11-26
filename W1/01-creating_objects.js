
let o;


// -----------------------------------------------------
// Object literals
// -----------------------------------------------------

o = {
  property: "value",
  anotherProperty: "another value"
}

console.log(o)

let property = "value";
const anotherProperty = "another value"

// Abbreviated form
o = {
  property,
  anotherProperty
}

console.log(o)

// Computed property names
const prefix = "patata_"
o = {
  [prefix + "property"]: "hello",
  [prefix + "anotherPropoerty"]: "world"
};

console.log(o)

// -----------------------------------------------------
// new Object();
// -----------------------------------------------------

o = new Object();
console.log(o)


// -----------------------------------------------------
// Object.create()
// -----------------------------------------------------

o = Object.create(null);
console.log(o)
