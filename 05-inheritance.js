console.log('-----------------------------------------------------')
console.log('Inheritance')
console.log('-----------------------------------------------------')

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  description() {
    return `I'm a ${this.carname}`;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  description() {
    return `${super.description()}, model ${this.model}`;
  }
}

let myCar = new Model("DMC", "DeLorean");
console.log(myCar.description())

console.log('-----------------------------------------------------')
console.log('You can extend dynamically')
console.log('-----------------------------------------------------')

class Optimist {
  hi() { console.log('The glass is half-full') }
}

class Pesimist {
  hi() { console.log('The glass is half-empty') }
}

const GOOD_DAY = true;

class Person extends (GOOD_DAY ? Optimist : Pesimist) {}
// Or:
// let Person = class extends (GOOD_DAY ? Optimist : Pesimist) {}

let lass = new Person()
lass.hi();


console.log('-----------------------------------------------------')
console.log('Liskov substitution')
console.log('-----------------------------------------------------')

class Vehiculo {
  arrancar() { console.log('brum...') }
  mover() { console.log('moving...') }
}

class Camion extends Vehiculo {
  arrancar() { console.log('RUM RUM...') }
}

function colocar(vehiculo) {
  vehiculo.arrancar()
  vehiculo.mover()
}

let camion = new Camion()
colocar(camion)

class Brazo extends Vehiculo {
  arrancar() { console.log('AAHAAAHAHAHAHAH!!!') }
}

// Don't try this at home
let miBrazo = new Brazo();
colocar(miBrazo)



