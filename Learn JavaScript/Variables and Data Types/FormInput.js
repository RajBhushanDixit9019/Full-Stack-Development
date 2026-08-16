/*
Task 2: Intermediate — Form Input Calculator & Type Guard
Real-World Scenario: On an e-commerce checkout page, users type quantities into text inputs. Even if they type numbers, HTML inputs pass them as strings.

Your Task:
Write a function calculateCartTotal(itemPrice, quantityInput):

-> Requirements:

    1. Implement a Type Guard: If either itemPrice or quantityInput is NaN, null, or negative after conversion, throw an Error ("Invalid input data types").

    2. Ensure both values are strictly parsed as numbers before calculation.

    3. Return the calculated total price.
*/

function calculateCartTotal(itemPrice, quantityInput){
    const price = Number(itemPrice);
    const quantity = Number(quantityInput);

    if(isNaN(price) || isNaN(quantity) || price < 0 || quantity < 0){
        throw new Error("Invalid input data types");
    }

    return price * quantity;
}

const total = calculateCartTotal("10.5", "3");
console.log(total); // Output: 31.5