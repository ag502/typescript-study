// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10);
// logText("하이");
// logText(true);

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText<string>("하이");

function logText(text: string) {
  console.log(text);
  //   text.split("").reverse().join("");
  return text;
}

function logNumber(num: number) {
  console.log(num);
  return num;
}

logText("a");
logNumber(10);
logText(true);