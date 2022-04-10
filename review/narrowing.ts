function padLeft(padding: number | string, input: string) {
  return "".repeat(padding) + input;
}

function padLeft2(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return "".repeat(padding) + input;
  }
  return padding + input;
}

// typeof type guards
function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    // object is possibly null
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
  }
}

// truthness narrowing
function printAll2(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
  }
}

// equality narrowing
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
    y.toUpperCase();
  } else {
    console.log(x);
    console.log(y);
  }
}

// the in operator narrowing
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}
