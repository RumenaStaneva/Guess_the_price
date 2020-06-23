'use strict'
const randomContent = document.getElementById('random-content');
const closebtn = document.getElementsByClassName("close");

let rightAnswer = false;
let namePalette = '';

//nikola's guidance <3
const products = {
    makeup: [
        {
            name: "L'Oreal Paris - Satin Lipstick || Shade: Charme Dore 116",
            price: 9,
            image:"pictures/loreal-satin.png",
            id: 0
        },
        {
            name: 'NARS - Velvet Matte Lip Pencil || Shade: DOLCE VITA Dusty Rose',
            price: 27,
            image: "pictures/nars-lip-pencil.png",
            id: 1
        },
        {
            name: "Stila - Stay All Day Liquid Lipstick || Shade: Sheer Morello",
            price: 22,
            image: "pictures/stila.png", 
            id: 2
        }, 
        {
            name: "NYX - Soft Matte Lip Cream || Shade: Rome",
            price: 6,
            image: "pictures/nyx.png", 
            id: 3
        },
        {
            name: "Kylie Cosmetics - Lip Kit || Shade: Posie K",
            price: 27,
            image: "pictures/kylie.png", 
            id: 4
        }, 
        {
            name: "Yves Saint Laurent || Shade: 08 Black Red Code - Deep Burgundy",
            price: 37,
            image: "pictures/yves-saint.png", 
            id: 5
        }, 
        {
            name: "Anastasia Beverly Hills || Shade: American Doll",
            price: 20,
            image: "pictures/anastasia.png", 
            id: 6
        },
        {
            name: "Jeffree Star - Velour Liquid Lipstick || Shade: Androgyny",
            price: 24,
            image: "pictures/jeffree-star.png", 
            id: 7
        },
        {
            name: "Fenty Beauty - Stunna lip paint || Shade: Uncensored - Perfect universal red",
            price: 25,
            image: "pictures/fenty-beauty.png", 
            id: 8
        },
        {
            name: "Fenty Beauty - Gloss Bomb Universal Lip Luminizer || Shade: Diamond Milk",
            price: 19,
            image: "pictures/fenty-gloss-bomb.png", 
            id: 9
        },
        {
            name: "MAC - Retro Matte || Shade: 705 Flat Out Fabulous",
            price: 25,
            image: "pictures/mac.png", 
            id: 10
        },
        {
            name: "Too Faced - Melted Matte || Shade: Bend & Snap!",
            price: 19,
            image: "pictures/too-faced.png", 
            id: 11
        },
        {
            name: "Huda Beauty -Power Bullet Matte Lipstick || Shade: Pool Party",
            price: 22,
            image: "pictures/huda-beauty-bullet.png", 
            id: 12
        },
        {
            name: "Huda Beauty - Demi Matte Cream Lipstick || Shade: Provocateur",
            price: 20,
            image: "pictures/huda-beauty.png", 
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
