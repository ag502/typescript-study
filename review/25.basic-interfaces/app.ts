interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Max",
  age: 30,
  greet(phrase) {
    console.log(`${phrase} ${this.name}`);
  },
};

user1.greet("HI there I am");
