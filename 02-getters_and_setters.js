console.log('-----------------------------------------------------')
console.log('Getters and setters in classes')
console.log('-----------------------------------------------------')
let aPerson;

class Person {
  constructor() {
    this._age = 0
  }

  get age() { return this._age }
  set age(age) {
    if (age < 0) throw "The person must have born";
    if (age > 150) throw "I don't believe it";
    this._age = age;
  }
}


aPerson = new Person();

try {
  aPerson.age = 300;
}catch(e) {
  console.log(e)
}
console.log(aPerson.age)


console.log('-----------------------------------------------------')
console.log('We don\'t need classes')
console.log('-----------------------------------------------------')

aPerson = {
  _age: 0,
  // This is the same as above:
  get age() { return this._age },
  set age(age) {
    if (age < 0) throw "The person must have born";
    if (age > 150) throw "I don't believe it";
    this._age = age;
  }
}

try {
  aPerson.age = -5;
}catch(e) {
  console.log(e)
}
console.log(aPerson.age)


console.log('-----------------------------------------------------')
console.log('We can have read only and write only properties')
console.log('-----------------------------------------------------')

class Person2 {
  constructor(birthDate) {
    // Setters can't be called in constructors
    //dateOfBirth = birthDate
  }
  set dateOfBirth(dateOfBirth) {
    this._dateOfBirth = new Date(dateOfBirth)
  }

  get age() {
    return this._getAge(this._dateOfBirth)
  }

  _getAge( birthDate ) {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }
}

aPerson = new Person2()

aPerson.dateOfBirth = '2015-10-21'
console.log(aPerson._dateOfBirth)
console.log(aPerson._dateOfBirth.constructor)

console.log(aPerson.age)
