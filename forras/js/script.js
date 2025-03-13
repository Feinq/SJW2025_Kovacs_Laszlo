const fruits = [
    {
        id: 1, 
        name: "Banán",
        fat: 0.33,
        fiber: 2.6,
        calory: 89,
        protein: 1.09,
        carbohydrate: 22.8
    },
    {
        id: 2, 
        name: "Alma",
        fat: 0.17,
        fiber: 1.3,
        calory: 52,	
        protein: 0.26,
        carbohydrate: 13.8
    },
    {
        id: 3, 
        name: "Narancs",	
        fat: 0.12,	
        fiber: 2,
        calory: 47, 	
        protein: 0.94,
        carbohydrate: 11.8
    },
];

const fruitSelect = document.getElementById("fruit");
const quantityInput = document.getElementById("quantity");
const calculateBtn = document.getElementById("calculate-btn");
const resetBtn = document.getElementById("reset-btn");
const infoElements = document.querySelectorAll(".info-item");
const errorMessage = document.createElement("p");
errorMessage.style.color = "red";
errorMessage.textContent = "Kérlek válassz egy gyümölcsöt!";

function updateInfo(fruit, quantity) {
    document.getElementById("fat-value").textContent = `${(fruit.fat * quantity).toFixed(1)} g`;
    document.getElementById("fiber-value").textContent = `${(fruit.fiber * quantity).toFixed(1)} g`;
    document.getElementById("calories-value").textContent = `${(fruit.calory * quantity).toFixed(1)} kcal`;
    document.getElementById("protein-value").textContent = `${(fruit.protein * quantity).toFixed(1)} g`;
    document.getElementById("carbs-value").textContent = `${(fruit.carbohydrate * quantity).toFixed(1)} g`;
}

calculateBtn.addEventListener("click", function() {
    const selectedFruitId = parseInt(fruitSelect.value);
    const quantity = parseFloat(quantityInput.value);

    if (!selectedFruitId) {
        if (!document.body.contains(errorMessage)) {
            document.querySelector(".calculator-form").appendChild(errorMessage);
        }
        return;
    }

    if (document.body.contains(errorMessage)) {
        document.querySelector(".calculator-form").removeChild(errorMessage);
    }

    const selectedFruit = fruits.find(fruit => fruit.id === selectedFruitId);

    updateInfo(selectedFruit, quantity);
});

resetBtn.addEventListener("click", function() {
    fruitSelect.value = "";
    quantityInput.value = 1;
    if (document.body.contains(errorMessage)) {
        document.querySelector(".calculator-form").removeChild(errorMessage);
    }
    infoElements.forEach(item => {
        item.querySelector("p").textContent = "";
    });
});

window.addEventListener("DOMContentLoaded", function() {
    fruits.forEach(fruit => {
        const option = document.createElement("option");
        option.value = fruit.id;
        option.textContent = fruit.name;
        fruitSelect.appendChild(option);
    });
});