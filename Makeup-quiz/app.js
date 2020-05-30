const userInput = document.getElementById('input');
const btn = document.getElementById('button-submit');

function getUserInput(){
    return parseInt(userInput.value)
}

function trueOrfalse(){
    let enteredPrice = getUserInput()
    if (products.makeup.jamesPalette.price == enteredPrice) {
        alert("Correct! Bravo");
    } else {
        alert("Wrong")
    }
}

const makeup = products.makeup;

//nikola's guidance <3
/* const products = {
    makeup: {
        jamesPalette: {
            name: "James Palette",
            price: 49
        }
    },
    shoes: {}
} */

btn.addEventListener('click', trueOrfalse);

