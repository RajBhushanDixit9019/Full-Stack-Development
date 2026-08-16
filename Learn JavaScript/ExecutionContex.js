/*
Task 3.1: Execution Context & Memory Audit
Trace the following script through Phase 1 (Memory Creation) and Phase 2 (Code Execution) line-by-line. Predict the exact output printed to the console (or any errors thrown).

-> Questions to answer:

     1. What is stored in memory for x inside evaluateScope during Phase 1?
     answer: During Phase 1 (Memory Creation), the variable `x` inside the `evaluateScope` function is hoisted and stored in memory, but it is not yet assigned a value. It is in the "uninitialized" state, which means it exists in memory but cannot be accessed until it is assigned a value during Phase 2 (Code Execution).

     2. Why does Value 1 output what it does?
     answer: Value 1 outputs `10` because the `console.log("Value 1:", x);` statement is executed in the global scope where `x` is defined as `10`. The `x` inside the function is not yet declared or assigned, so it refers to the global `x`.

     3. Does line 6 cause a Temporal Dead Zone error? Why or why not?
     answer: No, line 6 does not cause a Temporal Dead Zone error. The `let x = 20;` statement is within the `if` block, and the `x` variable is declared with `let`, which means it is block-scoped and will be initialized when the block is entered.
*/

var x = 10;

function evaluateScope() {
  console.log("Value 1:", x);
  
  if (true) {
    let x = 20;
    console.log("Value 2:", x);
  }
  
  console.log("Value 3:", x);
}

evaluateScope();