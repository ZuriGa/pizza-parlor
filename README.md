# Pizza Parlor Project.
#### By: Zuri Gallegos
_*Fourth independent project for Epicodus*_

## Project Description:
website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc.), a size to order a pizza, and see the final cost.

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

## Setup/Installation:
* _You can clone this repository, you can do this by going to this link https://github.com/ZuriGa/pizza-parlor.git_
* _follow the link above and click on the <> Code button then click on the copy button. Wherever you are storing your projects on your computer, use this git command: git clone url-of-remote-repo. A new folder should be created on your computer and you can navigate it now._
* _You can also fork this repository by clicking the "Fork" button in the remote repository._ 
![My_Image](/images/fork.jpeg)\
Click "create new fork" and then select your account as the "Owner", after this you have your own copy of this repository to your GitHub Account. 

## GitHub Pages Link:
https://zuriga.github.io/pizza-parlor/

## Technology used:
* _JavaScript_
* _HTML_
* _CSS_

## Known Bugs:
* _No known Bugs_

## License 

MIT License

Copyright (c) 2023 Zuri Gallegos
