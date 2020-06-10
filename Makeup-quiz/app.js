const randomContent = document.getElementById('random-content');
const closebtn = document.getElementsByClassName("close");


let rightAnswer = false;
let namePalette = '';

//nikola's guidance <3
const products = {
    makeup: [
        {
            name: "The James Charles Eyeshadow Palette",
            price: 49,
            image:"pictures/jchh.png",
            id: 0
        },
        {
            name: 'Norvina',
            price: 42,
            image: "pictures/norvina.png",
            id: 1
        },
        {
            name: "Huda Beauty Nude Eye Shadow Palette",
            price: 56,
            image: "pictures/huda.png", 
            id: 2
        }
    ],
    shoes: {}
} 

let newId;
function random() {
    newId = Math.floor(Math.random() * 3)
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
    <input id="input" type="number" value="$">
    <li>
    <button id="button-submit" type="button">Submit</button>
</li>`
 btn.removeEventListener('click', trueOrfalse);
 userInput = document.getElementById('input');
 btn = document.getElementById('button-submit');
 btn.addEventListener('click', trueOrfalse);
}
render()

//const makeup = products.makeup;




  function getUserInput(){
    return parseInt(userInput.value)
}




//and here 
function trueOrfalse(){
    let enteredPrice = getUserInput()
    if (whichProduct.price == enteredPrice) {
        document.getElementById('correct').style.display='block';
        random();
        render();
    
    } else {
        document.getElementById('wrong').style.display='block';
        
    }
    
    document.getElementById('input').value = '';
}


//when clicked ouside 

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

//closebtn.addEventListener("click",close)

