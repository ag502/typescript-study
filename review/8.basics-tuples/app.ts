const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple
} = {
  name: "lee",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

// unexpected actions
person.role = [1];
person.role = [1, "admin", "test"];

// push is not supported
person.role.push("admin");
person.role[1] = 2;
