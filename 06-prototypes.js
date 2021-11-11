let o, p;

console.log('----------------------------------------------')
console.log("An object has a prototype (another object). By default, it's Object.prototype")
console.log('----------------------------------------------')
o = {}
p = Object.getPrototypeOf(o);
console.log( p === Object.prototype)

console.log('----------------------------------------------')
console.log("We can change the prototype with Object.create")
console.log('----------------------------------------------')

let a_prototype = {
  whoami: "a_prototype"
}

o = Object.create(a_prototype);
p = Object.getPrototypeOf(o);
console.log(p);

console.log('----------------------------------------------')
console.log('We can change the prototype on the fly');
console.log('----------------------------------------------')
let another_prototipe = {
  whoami: "another_prototipe"
}

o = Object.create(a_prototype);
p = Object.getPrototypeOf(o);
console.log(p);

Object.setPrototypeOf(o, another_prototipe);
p = Object.getPrototypeOf(o);
console.log(p);

console.log('----------------------------------------------')
console.log('Objects can have a null prototype');
console.log('----------------------------------------------')
o = Object.create(null);
p = Object.getPrototypeOf(o);
console.log(p);

console.log('----------------------------------------------')
console.log("If an object does not have a property, it's searched on their prototype");
console.log('----------------------------------------------')

a_prototype = {
  whoami: "a prototype",
  parentProperty: "I'm not in o"
}

o = Object.create(a_prototype);
console.log(o)
console.log(o.parentProperty)

console.log('----------------------------------------------')
console.log('But they are always written to the object');
console.log('----------------------------------------------')
a_prototype = {
  whoami: "a prototype"
}

o = Object.create(a_prototype);
console.log(a_prototype);
console.log(o);

o.whoami = "I'm o"
console.log(a_prototype);
console.log(o);
console.log(`who am I?: ${o.whoami}`);

console.log('----------------------------------------------')
console.log('"this" is always the object, not the prototype');
console.log('----------------------------------------------')

a_prototype = {
  whoami: "a prototype",
  tellmeWhoAreYou: function() { 
    return this.whoami 
  }
}

o = Object.create(a_prototype);
o.whoami = "I'm o";

console.log(o.tellmeWhoAreYou());