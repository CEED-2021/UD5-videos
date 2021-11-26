let user1, user2;

console.log('--------------------------')
console.log('Creating multiple users')
console.log('--------------------------')

user1 = {
  name: 'Jane', surname: 'Smith',
  admin: false,
  validated: false,
  fullName: function() { return `${this.name} ${this.surname}`}
}

user2 = {
  name: 'John', surname: 'Doe',
  admin: false,
  validated: false,
  fullName: function() { return `${this.name} ${this.surname}`}
}
// .... and so on

console.log(user1.fullName(), '---', user2.fullName());


console.log('--------------------------')
console.log('Using a factory function')
console.log('--------------------------')

function makeUserv1(name, surname) {
  return {
    name, surname,
    admin: false,
    validated: false,
    fullName: function() { return `${this.name} ${this.surname}`}
  }
}
user1 = makeUserv1('Jane', 'Smith')
user2 = makeUserv1('Jon', 'Doe')

console.log(user1.fullName(), '---', user2.fullName());

// CONSTRUCTOR
console.log('--------------------------')
console.log('Using a construtor call (new)')
console.log('--------------------------')


// - A new empty object is created and assigned to this.
// - The function body executes. Usually it modifies this, adds new properties to it.
// - The value of this is returned.
function makeUserv2(name, surname) {
  // this = {}; (implicit)
  this.name = name;
  this.surname = surname;
  this.admin = false;
  this.validated = false;
  this.fullName = function() { return `${this.name} ${this.surname}`}

  // return this; (implicit)
}

user3 = new makeUserv1('Joe', 'Bloggs');
console.log(user3.fullName());

// We can override the return value if we return an object
// So we can use the first version as a constructor

// function makeUserv1(name, surname) {
//   return {
//     name, surname,
//     admin: false,
//     validated: false
//   }
// }

user3 = new makeUserv1('Joe', 'Bloggs')
console.log(user3.fullName());

// But if we return anything else, the return value will be ignored
function makeUserv3(name, surname) {
  this.thisWillBeReturned = "I will survive!"

  return 'Banana';
}

user3 = new makeUserv3('Joe', 'Bloggs')
console.log(user3);
