console.log('-----------------------------------------------------')
console.log('"this" rules apply to classes')
console.log('-----------------------------------------------------')

class WrongButton {
  constructor(value) {
    this.value = value;
  }

  click() {
    console.log(this.value);
  }
}

let aButton = new WrongButton("hello");

setTimeout(aButton.click, 100);

console.log('-----------------------------------------------------')
console.log('But we can bind the methods')
console.log('-----------------------------------------------------')

class Button {
  constructor(value) {
    this.value = value;
  }

  click = () => {
    console.log(this.value);
  }
}

let anotherButton = new Button("hello");

setTimeout(anotherButton.click, 200);
