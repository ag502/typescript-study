// parameter

function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 20); // 30
sum(10, 20, 30); // error, too many parameters
sum(10); // error, too few parameters

function subtract(a: number, b?: number): number {
  return a - b;
}

subtract(10, 20);
subtract(10, 20, 30); // error, too many parameters
subtract(10);

function multiply(a: number, b = 100): number {
  return a * b;
}

console.log(multiply(10, undefined)); // 1000
multiply(10, 20, 30); // error, too many paramters
console.log(multiply(10)); // 1000

// REST

function sumRest(a: number, ...nums: number[]): number {
  let totalOfNums = 0;
  for (let key in nums) {
    totalOfNums += nums[key];
  }
  return a + totalOfNums;
}

console.log(sumRest(1, 2, 3, 4)); // 10
