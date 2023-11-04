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

    const addedToppingsCost = (this.toppings.length - 2) * 1;

    const totalCost = basePrice + addedToppingsCost;

    return totalCost.toFixed(2);

};

// UI Logic

const sizeRadios = document.querySelectorAll('input[name="size"]');
const toppingsCheckboxes = document.querySelectorAll('input[name="toppings"]');
const calculateButton = document.getElementById("calculateButton");
const totalCostElement = document.getElementById("totalCost");

const pizza = new Pizza("small", []);

sizeRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
        pizza.size = radio.value;
        updateTotalCost();

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
        updateTotalCost();
    });
});

calculateButton.addEventListener("click", () => {
    const message = `You ordered a ${pizza.size} pizza with toppings: ${pizza.toppings.join(", ")}. Your total cost is $${pizza.calculateCost()}.`;

    const popupMessage = document.getElementById("popup-message");
    popupMessage.textContent = message;

    const popup = document.getElementById("popup");
    popup.style.display = "block"

});

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

function updateTotalCost() {
}

updateTotalCost();

function handleFormSubmission(event) {
    event.preventDefault();
}

window.addEventListener("load", function () {
    document.querySelector("#pizzaForm").addEventListener("submit", handleFormSubmission);
});