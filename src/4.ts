class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class Home {
  private tenants: Person[] = [];
  protected door: boolean = false;

  constructor(protected key: Key) {}

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log("Welcome Home!");
    } else throw "The Door is Closed!";
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends Home {
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) this.door = true;
    return this.door;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
