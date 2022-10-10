// function Logger(constructor: Function) {
//   console.log("Logging...");
//   console.log(constructor);
// }

// @Logger
// class Person {
//   name = "Max";

//   constructor() {
//     console.log("Creating person object");
//   }
// }

// const pers = new Person();

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    reportingURL = "http://www...";
  };
}

@reportableClassDecorator
class BugReport {
  type = "report";

  constructor(public title: string) {}
}

// const bug = new BugReport("Needs dark mode");
// console.log(bug);

function Logger(logString: string) {
  return function (contructor: Function) {
    console.log(logString);
    console.log(contructor);
  };
}

function withTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);

        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@Logger("Logging-Person")
@withTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "max";

  constructor() {
    console.log("Creating person object");
  }
}

new Person();
