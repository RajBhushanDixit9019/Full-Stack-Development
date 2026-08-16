/*
Task 3: Advanced — Deep vs. Shallow Reference Mutation Guard
Real-World Scenario: In state management (like React or Redux), mutating nested objects directly causes UI bugs. You need to write a utility that prevents accidental mutation of nested reference types.

-> Your Task:
    Write a function updateDatabasePort(configObj, newPort) that returns a completely independent deep copy of configObj with the port updated to newPort.

=> Constraint:

    1. Mutating the returned object's database.port must not alter the original appConfig.database.port.

    2. Do not use external libraries (like Lodash); use vanilla JavaScript primitives, objects, and spread syntax/recursion.
*/

const appConfig = {
  theme: "dark",
  database: {
    host: "localhost",
    port: 5432
  }
};

// making a deep copy of the appConfig object and updating the port without mutating the original object
function updateDatabasePort(configObj, newPort) {
  return {
    ...configObj,                       // 1. Copy outer object
    database: {
      ...configObj.database,            // 2. Copy the inner 'database' object (breaks the shared reference!)
      port: newPort                     // 3. Update the port in the copy
    }
  };
}

const updatedConfig = updateDatabasePort(appConfig, 3306);

console.log(updatedConfig.database.port); // 3306 (Updated!)
console.log(appConfig.database.port);     // 5432 (Original remains untouched!)
