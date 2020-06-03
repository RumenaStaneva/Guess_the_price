const userInput = document.getElementById('input');
const btn = document.getElementById('button-submit');


let rightAnswer = false;

function getUserInput(){
    return parseInt(userInput.value)
}

function trueOrfalse(){
    let enteredPrice = getUserInput()
    
    if (products.makeup.jamesPalette.price == enteredPrice) {
        alert("Correct! Bravo");
        rightAnswer = true;
        nextPic()
    } else {
        alert("Wrong")
    }
    document.getElementById('input').value = '';
}
function nextPic(){
    
    if(rightAnswer == true){
    document.getElementById("picture").src = 'norvina.png';
    document.getElementById("namePalette").innerHTML = 'Norvina ABH palette';
} 
}

//const makeup = products.makeup;

//nikola's guidance <3
const products = {
    makeup: {
        jamesPalette: {
            name: "James Palette",
            price: 49
        },
        norvinaPalette: {
        name: 'Norvina',
        price: 42
        }
    },
    shoes: {}
} 

btn.addEventListener('click', trueOrfalse);


