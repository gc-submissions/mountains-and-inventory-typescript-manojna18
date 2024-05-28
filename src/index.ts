import "./products";
import "./inventory";
import { findNameOfTallestMountain, mountains } from "./mountains";
import { calculateAverageProductPrice, products } from "./products";
import { inventory, calculateInventoryValue } from "./inventory";

let tallestMtn = findNameOfTallestMountain(mountains);
console.log(tallestMtn);

let avgPrice = calculateAverageProductPrice(products);
console.log(avgPrice);

let inventoryValue = calculateInventoryValue(inventory);
console.log(inventoryValue);
