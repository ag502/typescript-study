function add(n1: number, n2: number, showResult: boolean, pharse: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(pharse + result);
  } else {
    return result;
  }
}

let number1: number = 5; // not good
let number2: number; // good
const number3 = 2.8;

const printResult = true;
const resultPharse = "Result is: ";

add(number1, number3, printResult, resultPharse);
