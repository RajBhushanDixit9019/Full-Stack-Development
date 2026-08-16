/*
Task 3: The Simple Shopping Counter
Scenario: A user is scanning items at a checkout counter.

1. Start with let totalBill = 0;.

2. Add a Milk carton (₹40) to totalBill.

3. Add Bread (₹35) to totalBill.

4. Add Eggs (₹60) to totalBill.

5. Print: "Your total bill is ₹135".

Task: Write the step-by-step code using let reassignment (totalBill += ... or totalBill = totalBill + ...).
*/


let totalBill = 0;

totalBill += 40; // Add Milk carton
totalBill += 35; // Add Bread
totalBill += 60; // Add Eggs

console.log(`Your total bill is ₹${totalBill}`);