/*
Task 2.1: Fix the Asynchronous Loop Bug
In an old Node.js script, a developer wrote a loop to log task IDs after a 1-second delay.
 However, it prints Task ID: 3 three times instead of 0, 1, 2.

 Task: Fix the bug using modern ES6 variable scoping so it logs 0, 1, and 2.

 Bonus Question: Explain how var vs let changes the creation of closure environments inside the loop.
*/
// ❌ BUGGY CODE
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log("Task ID: " + i);
  }, 1000);
}

// ✅ FIXED
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log("Task ID: " + i);
  }, 1000);
}

/* Bonus Explanation: Using `var` declares the variable `i` in the function scope, 
which means that all iterations of the loop share the same `i`. 
By the time the `setTimeout` callbacks execute, the loop has completed and `i` has a value of 3, 
resulting in "Task ID: 3" being logged three times.*/
