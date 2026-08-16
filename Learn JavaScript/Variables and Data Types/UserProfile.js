/*
Task 1: Pick const or let
Scenario: You are building a user profile display.

-> Declare a variable for username with the value "Rahul". (This will never change).

-> Declare a variable for userAge with the value 24.

-> Increase userAge by 1 (because it's their birthday!).

-> Print: "Rahul is now 25 years old."

Question: Which variable should be const and which should be let? Write the code.
*/

const username = "Rahul"; // This will never change, so we use const
let userAge = 24; // This value will change, so we use let

userAge += 1; // Increase userAge by 1
console.log(`${username} is now ${userAge} years old.`); // Print the message