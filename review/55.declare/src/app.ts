// import _ from "lodash";

// console.log(_.shuffle([1, 2, 3]));

import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { Product } from "./product.model";

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];

// products
//   .map((prod) => {
//     return new Product(prod.title, prod.price);
//   })
//   .forEach((prod) => console.log(prod.getInformation()));

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod);
}
