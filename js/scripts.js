function Pizza(size, addToppings, removeToppings) {
    this.size = size;
    this.addToppings = addToppings;
    this.removeToppings = removeToppings;
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

    const addedToppingsCost = this.addToppings.length * 1;

    const totalCost = basePrice + addedToppingsCost;

    return totalCost.toFixed(2);

};