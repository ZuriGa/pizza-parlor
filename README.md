# TDD 
## Describe: Pizza()
Test 1: "It should return a Pizza object with two properties for toppings and size"\
Code: const myPizza = new Pizza("medium", ["anchovies", "pineapple"]);\
Expected Output: Pizza { size: "medium", toppings: ["anchovies", "pineapple"] }

Test 2: "It should calculate the cost of the pizza based on selected toppings and size"\
Code: calculateCost();\
Output: 10, 12, 18

Test 3: "It should allow toppings to be added to the pizza"\
Code: addTopping();\
Output: 13

Test 4: "It should allow toppings to be remove from pizza"\
Code: removeTopping();\
Output: 12

Test 5: "It should calculate the cost of the pizza after adding or removing toppings"\
Code: updateCost();\
Output: 13, 12
