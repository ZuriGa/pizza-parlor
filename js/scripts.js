function Pizza(size, initToppings) {
    this.size = size;
    this.toppings = initToppings || ["cheese", "tomato sauce"];

    this.addTopping = function (topping) {
        this.toppings.push(topping);
    };

    this.removeTopping = function (topping) {
        const index = this.toppings.indexOf(topping);
        if (index !== -1) {
            this.toppings.splice(index, 1);
        }

    };
}




Pizza.prototype.calculateCost = function () {
    let basePrice = 10; //Default based price
    //calculates the cost based on size
    if (this.size === "small") {
        basePrice = 10;
    } else if (this.size === "medium") {
        basePrice *= 1.2;
    } else if (this.size === "large") {
        basePrice *= 1.8;
    }

    const addedToppingsCost = this.toppings.length - 2;

    const totalCost = basePrice + addedToppingsCost;

    return totalCost.toFixed(2);

};

const pizza = new Pizza("medium", ["cheese", "mushroom", "pepperoni"]);
pizza.removeTopping("mushroom"); // Remove a topping
console.log(pizza.calculateCost()); // Output: "13.00"