/*
Task 1.2: Identify the Illegal Operations
Look at the snippet below without running it. 
Identify which line numbers will throw a runtime error and explain why:
*/
const appName = "GroceryHub";
let activeUserCount = 100;
const config = { theme: "light", debug: false };

appName = "GroceryExpress";         // Line 5 // This line throws a runtime error because `appName` is declared as a `const`, which means its value cannot be reassigned after its initial assignment. Attempting to change its value will result in a TypeError.
activeUserCount += 1;               // Line 6
config.theme = "dark";              // Line 7
config = { theme: "dark", debug: true }; // Line 8 // This line throws a runtime error because `config` is declared as a `const`, which means the reference to the object cannot be reassigned. While you can modify the properties of the object, you cannot assign a new object to `config`. Attempting to do so will result in a TypeError.