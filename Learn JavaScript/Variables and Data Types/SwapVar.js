/*
Task 2: Swap Two Variables
Scenario: You have two variables containing items in a list:
Task: Write code to swap their values so that itemA holds "Banana" and itemB holds "Apple". Print both items to verify.
*/
let itemA = "Apple";
let itemB = "Banana";

// Swap the values
let temp = itemA;
itemA = itemB;
itemB = temp;

console.log("itemA:", itemA); // Should print "Banana"
console.log("itemB:", itemB); // Should print "Apple"