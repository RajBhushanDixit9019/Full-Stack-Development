/*
Task 2.2: Updating Nested State Safely
In frontend development (e.g., React), 
mutating objects directly can cause state bugs. Given this state object:

-> Task: Write JavaScript code that creates a new updated copy of userProfile where:

   1. city is changed to "Mumbai".

   2. A new role "admin" is added to the roles array.

-> Constraint: The original userProfile object must remain completely untouched (immutable update using object/array spread syntax ...).
*/

const userProfile = {
  id: "usr_55",
  personalInfo: {
    name: "Rahul",
    city: "Bengaluru",
  },
  roles: ["developer"],
};

console.log("Original userProfile:", userProfile);

// Create a new updated copy of userProfile
const updatedUserProfile = {
  ...userProfile,
  personalInfo: {
    ...userProfile.personalInfo,
    city: "Mumbai", // Update city
  },
  roles: [...userProfile.roles, "admin"], // Add new role
};

console.log("Updated userProfile:", updatedUserProfile);
