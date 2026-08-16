/*
Task 4: Predict the Block Scope Output
Look at this code without running it:
 */

let isLogged = true;

if (isLogged) {
  let welcomeMessage = "Welcome back, User!";
}

console.log(welcomeMessage); // This is the line is causing the error. Why? Because welcomeMessage is declared with let inside the if block, so it is not accessible outside of that block. This will throw a ReferenceError: welcomeMessage is not defined. We should declare welcomeMessage outside the if block if we want to access it later, or use var instead of let (though using var is generally discouraged due to its function scope behavior).

