/*
Task 1: Basic — API Payload Sanitizer
Real-World Scenario: When an API returns user data, numbers sometimes arrive as strings (e.g., "24" instead of 24), and missing fields arrive as null or undefined.

Your Task:
Write a function formatUserProfile(rawUser) that takes an object:

-> Requirements:

    1. Convert ageString into a proper Number and store it as age.

    2. Convert isVerifiedInput (which is a string "true") into a proper Boolean isVerified.

    3. If bio is null or undefined, default it to "No bio provided".

    4. Return a clean, formatted object.
*/

const rawUser = {
  name: "Rahul",
  ageString: "24",
  isVerifiedInput: "true",
  bio: null
};
console.log(rawUser); // Output: { name: 'Rahul', ageString: '24', isVerifiedInput: 'true', bio: null }
function formatUserProfile(rawUser){
    const formattedUser = {
        name: rawUser.name,
        age: Number(rawUser.ageString),
        isVerified: rawUser.isVerifiedInput === "true",
        bio: rawUser.bio ?? "No bio provided"
    }
    return formattedUser;
}

const User = formatUserProfile(rawUser);
console.log(User); // Output: { name: 'Rahul', age: 24, isVerified: true, bio: 'No bio provided' }