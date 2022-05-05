// type property는 없지만 강제로 부여해 interface union의 type guard를 용이하게 함
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log(`Moving at speed ${speed}`);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });
