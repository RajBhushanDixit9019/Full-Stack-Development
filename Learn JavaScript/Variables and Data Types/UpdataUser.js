/*
Practice Task: The User Address Updater
Scenario: You are updating a user profile in an application, but you need to change their city without accidentally altering the original profile data.

-> Your Task:

    1. Write a function named updateUserCity(profile, newCity) that takes the userProfile object and a new city string (e.g., "Mumbai").

    2. Inside the function, use the nested spread syntax (...) to create a new copy of the object, updating only the city inside the nested address object.

    3. Test your function by printing both the updated profile and the original userProfile. Verify that userProfile.address.city is still "Bengaluru".
*/

const userProfile = {
  name: "Rahul",
  role: "Developer",
  address: {
    city: "Bengaluru",
    pincode: 560001
  }
};

function updateUserCity(profile, newCity) {
    return{
        ...profile,
        address:{
            ...profile.address,
            city: newCity
        }
    };
}

const updatedProfile = updateUserCity(userProfile, "Mumbai");

console.log(updatedProfile.address.city); // Output: "Mumbai"
console.log(userProfile.address.city);    // Output: "Bengaluru" (Original remains unchanged)