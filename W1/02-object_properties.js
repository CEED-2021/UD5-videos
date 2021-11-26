let o;

// Properties can be functions
const property = "value";
function hello() { console.log('hello')}

o = {
  property: "value",
  hello: hello
}
console.log(o);
o.hello();

// It works with the abbreviated syntax
o = {
  property,
  hello
}
console.log(o);
o.hello();

// We can define the function inside the object literal
o = {
  property: "value",
  hello: function () { console.log('hello from the object')},
  moreHello: () => console.log('hello hello')
}
o.hello();
o.moreHello();

// We can delete properties
delete o.moreHello
console.log(o)
