'use strict'
const randomContent = document.getElementById('random-content');
const closebtn = document.getElementsByClassName("close");

let rightAnswer = false;
let namePalette = '';

//nikola's guidance <3
const products = {
    makeup: [
        {
            name: "Ofra X X Nikkie Tutorials Glazed Donut Highlighter",
            price: 35,
            image:"pictures/ofra.png",
            id: 0
        },
        {
            name: 'Jeffree Star - Skin Frost || Shade: Sarcophagus',
            price: 29,
            image: "pictures/jeffree-star-skin-frost.png",
            id: 1
        },
        {
            name: "Jeffree Star - Liquid Frost || Shade: Canary Bling",
            price: 25,
            image: "pictures/jeffree-star-liquid.png", 
            id: 2
        }, 
        {
            name: "Anastasia Beverly Hills - Sugar Glow Kit",
            price: 53,
            image: "pictures/ABH-sugar-glow.png", 
            id: 3
        },
        {
            name: "Fenty Beauty - Killawatt Foil Freestyle Highlighter || Shade: Mimosa sunrise/Sangria sunset",
            price: 36,
            image: "pictures/fenty-beuty.png", 
            id: 4
        }, 
        {
            name: "Fenty Beauty - Diamond Bomb All-Over Diamond Veil || Shade: Pure platinum sparkle",
            price: 39,
            image: "pictures/fenty-bomb.png", 
            id: 5
        }, 
        {
            name: "Huda Beauty - 3D Highlighter Palette || Shade: Pink Sands",
            price: 45,
            image: "pictures/huda-beauty.png", 
            id: 6
        },
        {
            name: "Glossier - Haloscope || Shade: Moonstone",
            price: 22,
            image: "pictures/glossier.png", 
            id: 7
        },
        {
            name: "Juvia's Place - Heroine Glow II",
            price: 16,
            image: "pictures/juvias-place.png", 
            id: 8
        },
        {
            name: "Ofra - Glow Up Highlighter Palette",
            price: 49,
            image: "pictures/ofra-palette.png", 
            id: 9
        },
        {
            name: "Cover | Fix - Custom Enhancer Drops || Shade: Rose Gold",
            price: 25,
            image: "pictures/cover-fix.png", 
            id: 10
        },
        {
            name: "Kat Von D - Alchemist Holographic Palette",
            price: 32,
            image: "pictures/KVD.png", 
            id: 11
        },
        {
            name: "Too Faced - Diamond Highlighter || Shade: Diamond Fire",
            price: 23,
            image: "pictures/too-faced.png", 
            id: 12
        },
        {
            name: "ICONIC London - Illuminator || Shade: Blush",
            price: 41,
            image: "pictures/iconic.png", 
            id: 13
        },
        


    ]
    
} 

let newId;
let usedIds = [];
const numberOfProducts = 14;
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
        document.getElementById('winning').style.display='block';
        document.getElementById('restart').addEventListener('click', function() {
            usedIds = [];
            document.getElementById('winning').style.display='none';
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
