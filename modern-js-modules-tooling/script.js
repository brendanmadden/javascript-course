// Importing Module
// All modules are executed in strict mode by default
import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
("./shoppingCart.js");

console.log(`Importing Module`);

addToCart(`bread`, 5);
console.log(price, tq);
