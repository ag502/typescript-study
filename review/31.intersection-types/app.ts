type Admin = {
  name: string;
  privileges: string[];
};

// interface Admin {
//   name: string;
//   privileges: string[];
// }

type Employess = {
  name: string;
  startDate: Date;
};

// interface Employess {
//   name: string;
//   startDate: Date;
// }

type ElevatedEmployee = Admin & Employess;

// interface ElevatedEmployee extends Admin, Employess {}

const el: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
