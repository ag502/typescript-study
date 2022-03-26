// function logMessage(value: any) {
//   console.log(value);
// }

// logMessage("hello");
// logMessage(100);

// union type
var seho: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }

  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}

logMessage("hello");
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// function askSomeone(someone: Developer | Person) {
//   //   someone.name;
// }

// askSomeone({ name: "Developer", skill: "웹 개발" });
// askSomeone({ name: "캡틴", age: 100 });

// intersection type
function askSomeone(someone: Developer & Person) {
  someone.name;
  someone.age;
  someone.skill;
}

askSomeone({ name: "Developer", skill: "웹 개발" });
