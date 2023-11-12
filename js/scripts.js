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
    let basePrice = 10;
    if (this.size === "medium") {
        basePrice *= 1.2;
    } else if (this.size === "large") {
        basePrice *= 1.8;
    }
    const addedToppingsCost = (this.toppings.length - 2) * 1;
    const totalCost = basePrice + addedToppingsCost;
    return totalCost.toFixed(2);
};

// UI Logic
function initPizzaOrder() {
const sizeRadios = document.querySelectorAll('input[name="size"]');
const toppingsCheckboxes = document.querySelectorAll('input[name="toppings"]');
const calculateButton = document.getElementById("calculateButton");
const toppingsSection = document.getElementById("toppingsSection");
const pizza = new Pizza("small", []);
sizeRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
        pizza.size = radio.value;
        if (pizza.size) {
            toppingsSection.style.display = "block";
        } else {
            toppingsSection.style.display = "none";
        }
    });
});
toppingsCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            pizza.addTopping(checkbox.value);
        } else {
            pizza.removeTopping(checkbox.value);
        }
    });
});
calculateButton.addEventListener("click", () => {
    const message = `You ordered a ${pizza.size} pizza with toppings: ${pizza.toppings.join(", ")}. Your total cost is $${pizza.calculateCost()}.`;
    const popupMessage = document.getElementById("popup-message");
    popupMessage.textContent = message;
    const popup = document.getElementById("popup");
    popup.style.display = "block"
});
function handleFormSubmission(event) {
    event.preventDefault();
}
    document.querySelector("form#pizzaForm").addEventListener("submit", handleFormSubmission);
}
window.addEventListener("load", initPizzaOrder);
