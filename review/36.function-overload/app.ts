interface ErrorContainer {
  [prop: string]: string;
}

const error: ErrorContainer = {
  email: "Not a valie email",
  username: "Must start with a capital character!",
};

type Combinable = string | number;
type Numeric = number | boolean;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: number, b: string): string;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Max", "Schwarz");
result.split("");
