const userInput = document.getElementById('input');
const btn = document.getElementById('button-submit');
const closebtn = document.getElementsByClassName("close");

let rightAnswer = false;
let namePalette = '';

function getUserInput(){
    return parseInt(userInput.value)
}

//edit here to take the name
/* function getNamePalette() {
    namePalette = document.getElementById("namePalette").textContent;
    if(namePalette === 'The James Charles Eyeshadow Palette'){
        namePalette = 'jamesPalette';
    } 
} */


//and here 
function trueOrfalse(){
    let enteredPrice = getUserInput()
    /*let name = getNamePalette();

    for(property in products.makeup){
        name = property
        if(name == namePalette){
        console.log('Correct!');
        break;
        } else {
            console.log('Wrong!');
            
        }
        
        
    } */
    if (products.makeup.jamesPalette.price == enteredPrice) {
        document.getElementById('correct').style.display='block';
        rightAnswer = true;
        nextPic()
    } else {
        document.getElementById('wrong').style.display='block';
        
    }
    
    document.getElementById('input').value = '';
}

//make it random
function nextPic(){
    
    if(rightAnswer == true){
    document.getElementById("picture").src = "pictures/norvina.png";
    document.getElementById("namePalette").innerHTML = 'Norvina ABH palette';
} 
}
//fix it, not working
function pop(){
    document.getElementById('correct').style.display='block';
}

//const makeup = products.makeup;

//nikola's guidance <3
const products = {
    makeup: {
        jamesPalette: {
            name: "The James Charles Eyeshadow Palette",
            price: 49
        },
        norvinaPalette: {
            name: 'Norvina',
            price: 42
        }
    },
    shoes: {}
} 


//ask Nikola
for (i = 0; i < closebtn.length; i++) {
  closebtn[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}
//when pushed enter
document.getElementById("input").addEventListener("keyup", function(pushed) {
    if (pushed.keyCode === 13) {
      pushed.preventDefault();
     document.getElementById("button-submit").click();
    }
  });


//when clicked ouside 


btn.addEventListener('click', trueOrfalse);
//closebtn.addEventListener("click",close)

