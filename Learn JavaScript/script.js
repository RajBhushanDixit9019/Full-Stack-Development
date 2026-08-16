// REAL-WORLD SCENARIO: E-Commerce Cart Checkout

// 1. CONST: For fixed values that shouldn't change
const customerName = "Rahul";
const itemUnitPrice = 400; // Price in ₹
const taxRate = 0.18;      // 18% GST

// 2. LET: For values that change as the user interacts or calculates
let quantity = 2;
let subtotal = itemUnitPrice * quantity; // Initially 800

// Apply a ₹100 discount if subtotal is over ₹500
if (subtotal > 500) {
  let discount = 100;
  subtotal = subtotal - discount; // Value updates to 700
}

// Calculate final total including tax
const finalTotal = subtotal + (subtotal * taxRate);

console.log(`Receipt for ${customerName}: ₹${finalTotal}`);
// Output: Receipt for Rahul: ₹826