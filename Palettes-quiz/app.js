'use strict'
const randomContent = document.getElementById('random-content');
const closebtn = document.getElementsByClassName("close");

let rightAnswer = false;
let namePalette = '';

//nikola's guidance <3
const products = {
    makeup: [
        {
            name: "James Charles Eyeshadow Palette",
            price: 39,
            image:"pictures/jchh.png",
            id: 0
        },
        {
            name: 'Anastasia Beverly Hills - Norvina',
            price: 42,
            image: "pictures/norvina.png",
            id: 1
        },
        {
            name: "Huda Beauty - Nude Eye Shadow Palette",
            price: 56,
            image: "pictures/huda.png", 
            id: 2
        }, 

    ],
    shoes: {}
} 

let newId;
let usedIds = [];
const numberOfProducts = 3;
function random() {
    newId = Math.floor(Math.random() * numberOfProducts)
    for (let i = 0; i < usedIds.length; i++) {
        let currentId = usedIds[i];
        if(currentId == newId){
            random();
            return;
        }
        
    }
    usedIds.push(newId)
    
}
random()
let userInput;
let btn;
let whichProduct;
function render() {
    const xProduct = products.makeup.find(x => x.id === newId);
    whichProduct = xProduct;
    randomContent.innerHTML = `
    <li id="namePalette">${whichProduct.name}</li>
    <li>
    <img src=${whichProduct.image} id="picture">
    </li>
    <input id="input" type="number">
    <li>
    <button id="button-submit" type="button">Submit</button>
</li>`

 //btn.removeEventListener('click', trueOrfalse);
 userInput = document.getElementById('input');
 btn = document.getElementById('button-submit');
 btn.addEventListener('click', trueOrfalse);
 userInput.addEventListener("keydown", enter);
}
render()

//const makeup = products.makeup;

  function getUserInput(){
    return parseInt(userInput.value)
}

//and here 
function trueOrfalse(){
    let enteredPrice = getUserInput()
    if(usedIds.length == numberOfProducts){
        document.getElementById('win').style.display='block';
        document.getElementById('restart').addEventListener('click', function() {
            usedIds = [];
            document.getElementById('win').style.display='none';
            random();
            render();
        })
        return;
    }else if (whichProduct.price == enteredPrice) {
        document.getElementById('correct').style.display='block';
        random();
        render();
    
    } else {
        document.getElementById('wrong').style.display='block';
        
    }
    
    //document.getElementById('input').value = '';
    
}


//when clicked ouside 

//ask Nikola
for (let i = 0; i < closebtn.length; i++) {
    closebtn[i].addEventListener("click", function() {
      this.parentElement.style.display = 'none';
    });
  }
  
//when pushed enter

function enter(pushed) {
    if (pushed.keyCode === 13) {
    pushed.preventDefault();
    btn.click();
    }
  }
