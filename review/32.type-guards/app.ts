type Admin = {
  name: string;
  privileges: string[];
};

// interface Admin {
//   name: string;
//   privileges: string[];
// }

type Employee = {
  name: string;
  startDate: Date;
};

// interface Employess {
//   name: string;
//   startDate: Date;
// }

type ElevatedEmployee = Admin & Employee;

// interface ElevatedEmployee extends Admin, Employess {}

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnKownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnKownEmployee) {
  console.log(`Name: ${emp.name}`);

  if ("privileges" in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }
  if ("startDate" in emp) {
    console.log(`Privileges: ${emp.startDate}`);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo ... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(100);
  }
}

useVehicle(v1);
useVehicle(v2);
