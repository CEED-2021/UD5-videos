console.log('-----------------------------------------------------')
console.log('We can have static methods')
console.log('-----------------------------------------------------')

class User {
  #name;

  constructor(name) {
    this.#name = name
  }

  static createAdmin(name) {
    const admin = new User(name)
    admin.role = 'admin'
    admin.pass = 'notshared'
    return admin
  }
}

let user = User.createAdmin('Michael')
console.log(user)

console.log('-----------------------------------------------------')
console.log('We can have static properties')
console.log('-----------------------------------------------------')

class Product {
  static #counter = 0;
  #name;
  #id;

  constructor(name) {
    this.#name = name;
    this.#id = Product.#counter++;
  }

  get id() { return this.#id }
}

let p1 = new Product('product 1');
console.log(p1.id)

let p2 = new Product('product 2');
console.log(p2.id)
