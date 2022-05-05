function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj.age);

// const mergedObj2 = merge({ name: "Max", hobbies: ["Sports"] }, 30); => error
// console.log(mergedObj2);
