/*Tier 1: Basic (Syntax, Scope & Mutability)
Task 1.1: Build an Order Summary Generator
Write a short script using const and let to process a food order:

-> Inputs: itemName (string), unitPrice (number), quantity (number), hasPromoCode (boolean).

-> Logic:

    * Calculate subtotal.

    * If hasPromoCode is true, apply a 10% discount to subtotal inside an if block.

    * Calculate an 18% GST on the discounted subtotal.

    * Return a formatted string: "Order for [quantity]x [itemName]: Final Total = ₹[total]".

-> Constraint: Do not use var. Ensure no variables declared inside the if block leak into the outer scope.*/

const itemName = "Pizza";
const unitPrice = 100;
let quantity = 1;
let hasPromoCode = true;

let subtotal = unitPrice * quantity; // Calculate subtotal

if (hasPromoCode) {
  let discount = subtotal * 0.10; // Calculate 10% discount
  subtotal -= discount; // Apply discount to subtotal
}

let gst = subtotal * 0.18; // Calculate GST
let total = subtotal + gst; // Calculate total

console.log(`Order for ${quantity} ${itemName}: Final Total = ₹${total.toFixed(2)}`);