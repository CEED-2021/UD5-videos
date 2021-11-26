class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

// let myCar = new Model("Ford", "Mustang");
// document.getElementById("demo").innerHTML = myCar.show();


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

class Brazo extends Vehiculo {
  arrancar() { console.log('AAHAAAHAHAHAHAH!!!') }  
}

function colocar(vehiculo) {
  vehiculo.arrancar()
  vehiculo.mover()
}

let camion = new Camion()
colocar(camion)

// Don't try this at home
let miBrazo = new Brazo();
colocar(miBrazo)



