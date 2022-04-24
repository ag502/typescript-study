type Combinable = number | string;
type CoversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: CoversionDescriptor
) {}

type User = {
  name: string;
  age: number;
};

const u1: User = { name: "Max", age: 26 };

function greet(user: { name: string; age: number }) {}
function isOlder(user: { name: string; age: number }) {}

function greet2(user: User) {}
function isOlder2(user: User) {}
