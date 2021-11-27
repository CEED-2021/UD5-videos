let o;

console.log('-----------------------------------------------------')
console.log('This is how it was (and still is) done')
console.log('-----------------------------------------------------')

class PrivateV1 {

  _discount = 0.1;

  constructor(initialPrice) {
    this._price = initialPrice || 0;
  }

  _isGoodClient() {
    return true;
  }

  get price() {
    const discount = this._isGoodClient() ? this._discount : 0
    return this._price * (1 - discount)
  }
}

o = new PrivateV1(100);
console.log(o.price)

console.log('-----------------------------------------------------')
console.log('But the propierties are not really private')
console.log('-----------------------------------------------------')


console.log(o._price)
console.log(o._discount)
console.log(o._isGoodClient())

console.log('-----------------------------------------------------')
console.log('This is how it should be done now')
console.log('-----------------------------------------------------')

class PrivateV2 {

  #discount = 0.1;
  #price

  constructor(initialPrice) {
    this.#price = initialPrice || 0;
  }

  #isGoodClient() {
    return true;
  }

  get price() {
    const discount = this.#isGoodClient() ? this.#discount : 0
    return this.#price * (1 - discount)
  }
}

o = new PrivateV2(100);
console.log(o.price)

console.log('-----------------------------------------------------')
console.log('Now the properties are private')
console.log('-----------------------------------------------------')

console.log(o['#price'])
console.log(o['#discount'])

// This will generate syntax errors:
//console.log(o.#price)
//console.log(o.#discount)
// console.log(o.#isGoodClient())

