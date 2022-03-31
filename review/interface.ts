interface personAge {
  age: number;
}

function logAge(obj: personAge) {
  console.log(obj.age);
}

let person = { name: "Capt", age: 28 };
logAge(person);

// option property
interface CraftBeer {
  name: string;
  hop?: number;
}

let myBeer = {
  name: "Saporo",
};

function brewBeer(beer: CraftBeer) {
  console.log(beer.hop);
}

brewBeer(myBeer);

// readOnly
interface Beer {
  readonly brand: string;
}

let myBeer2: Beer = {
  brand: "Belgian Monk",
};

// ReadOnly Array
let arr: ReadonlyArray<number> = [1, 2, 3];
arr.splice(0, 1);

interface CraftBeer {
  brand?: string;
  [propName: string]: any;
}

interface login {
  (username: string, password: string): boolean;
}

let loginUser: login;
loginUser = function (id: string, pw: string): boolean {
  return true;
};

// 클래스 타입
interface CraftBeer2 {
  beerName: string;
  nameBeer(beer: string): void;
}

class MyBeer implements CraftBeer2 {
  beerName: string;

  nameBeer(b: string): void {
    this.beerName = b;
  }

  constructor() {
    this.beerName = "test";
  }
}

// interface extends
interface Person {
  name: string;
}

interface Developer extends Person {
  skill: string;
}

let fe = {} as Developer;
fe.name = "josh";
fe.skill = "TypeScript";

