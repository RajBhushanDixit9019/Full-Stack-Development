/*
Task 3.2:Detect the Accidental Global Leak
Identify the memory-leak security vulnerability in this Express middleware function:

-> Task: Explain what happens to authToken when this function executes in non-strict mode, and rewrite it using strict JS practices.
*/

//code
function authenticateUser(req, res, next) {
  authToken = req.headers["authorization"]; // ❌ Potential bug here
  
  if (authToken) {
    req.user = { authenticated: true };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
}

/*
Answer: In non-strict mode, the assignment `authToken = req.headers["authorization"];` creates a global variable `authToken` if it hasn't been declared previously. This can lead to unintended side effects and bugs, as it pollutes the global scope.
*/