// optional property
function printName(obj: { first: string; last?: string }) {
  // object is possibly undefined
  console.log(obj.last.toLocaleLowerCase());

  if (obj.last !== undefined) {
    console.log(obj.last.toLowerCase());
  }

  console.log(obj.last?.toLowerCase());
}

// union type -> 무엇이든 하나를 타입으로 가질 수  있다
function printId(id: number | string) {
  console.log(`your ID is: ${id}`);
}

printId(101);
printId("202");

printId({ myID: 22342 }); // 에러

// 유니언 타입은 타입 모두에게 유효한 작업만 가능
function printId2(id: number | string) {
  console.log(id.toUpperCase());
}

// 유니온 타입에서 하나의 타입에만 해당하는 작업을 하기 위해서는 타입을 좁여야 함
function printId3(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

function welcomPeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log(`hello ${x.join("")}`);
  } else {
    console.log(`welcome ${x}`);
  }
}

// 유니언의 모든 멤버가 프로퍼티를 공통으로 가진다면, 좁히기 없이도 해당 프로퍼티 사용 가능
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

// 타입 별칭
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log(`${pt.x} ${pt.y}`);
}

printCoord({ x: 100, y: 100 });

// interface
interface Point2 {
  x: number;
  y: number;
}

function printCoord2(pt: Point2) {
  console.log(`${pt.x} ${pt.y}`);
}

printCoord2({ x: 100, y: 100 });

// 타입 단언
const myCanvas = document.querySelector("main_canvas") as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.querySelector("main_canvas");

// 리터럴 타입
function printText(s: string, alignment: "left" | "right" | "center") {}

printText("Hello World", "left");

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

interface Options {
  width: number;
}

function configure(x: Options | "auto") {}

configure({ width: 100 });
configure("auto");
configure("automatic");

// 리터럴 추론
const obj = { counter: 0 };
obj.counter = 1;

const req = { url: "https://example.com", method: "GET" };

function handleReq(url: string, method: "GET" | "POST") {}

handleReq(req.url, req.method);

// way1
const req2 = { url: "https://example.com", method: "GET" as "GET" };
handleReq(req2.url, req2.method);

// way2
const req3 = { url: "https://example.com", method: "GET" } as const;
handleReq(req3.url, req3.method);

// null 과 undefined

function doSomething(x: string | undefined) {
  if (x === undefined) {
    // do nothing
  } else {
    console.log(`Hello, ${x.toUpperCase()}`);
  }
}

function liveDangerous(x?: number | undefined) {
  console.log(x!.toFixed());
}

// 열거형
enum Direction {
  Up = 1,
  Down, // 2
  Left, // 3
  Right, // 4
}

enum Direction2 {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {}

respond("Princess Caroline", UserResponse.No);

enum E {
  A = Math.random(),
  B, // 앞에서 나온 A는 계산된 멤버이므로 초기화 필요
}
