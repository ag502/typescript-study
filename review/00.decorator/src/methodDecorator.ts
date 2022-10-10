function Log(
  target: object,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  const newMethod = function () {
    console.log("hi");
    originalMethod();
  };

  const adjDescriptor: PropertyDescriptor = {
    configurable: false,
    enumerable: false,
    get() {
      return newMethod;
    },
  };

  return adjDescriptor;
}

class Greeter {
  constructor(public greeting: string) {}

  @Log
  greet() {
    console.log("hello");
  }
}

new Greeter("hi").greet();
