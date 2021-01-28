'use strict'
const randomContent = document.getElementById('random-content');
const closebtn = document.getElementsByClassName("close");

let rightAnswer = false;
let namePalette = '';

//nikola's guidance <3
const products = {
    makeup: [
        {
            name: "CLINIQUE - Dramatically Different Moisturizing Lotion+a ",
            price: 30,
            image:"pictures/clinique-dramatically-different-moisturizing-lotion.png",
            id: 0
        },
        {
            name: 'LANCÔME - Absolue Revitalizing Anti-Aging Eye Cream',
            price: 128,
            image: "pictures/lancome-absolue-revitalizing-anti-aging-eye-cream.png",
            id: 1
        },
        {
            name: "Laura Mercier - Nourishing Rose Oil For Face & Body",
            price: 65,
            image: "pictures/laura-mercier-nourishing-rose-oil-for-face-body.png", 
            id: 2
        }, 
        {
            name: "CLINIQUE - Clarifying Lotion 2",
            price: 18,
            image: "pictures/clinique-clarifying-lotion-2.png", 
            id: 3
        },
        {
            name: "OLEHENRIKSEN - Banana Bright Eye Crème",
            price: 39,
            image: "pictures/OLEHENRIKSEN-Banana-Bright-Eye-Crème.png", 
            id: 4
        }, 
        {
            name: "Mario Badescu - Facial Spray with Aloe, Cucumber and Green Tea",
            price: 7,
            image: "pictures/mario-badescu-facial-spray-with-aloe-vera.png", 
            id: 5
        }, 
        {
            name: "The Ordinary - Supersize Hyaluronic Acid 2% + B5 - 60ml",
            price: 16,
            image: "pictures/the-ordinary-supersize-hyaloronic-acid.png", 
            id: 6
        },
        {
            name: "Pixi - Clarity Concentrate 30ml",
            price: 26,
            image: "pictures/pixi-clarity-concentrate.png", 
            id: 7
        },
        {
            name: "Origins - Anti-Aging Power Serum",
            price: 80,
            image: "pictures/origins-anti-aging-power-serum.png", 
            id: 8
        },
        {
            name: "Embryolisse Laboratories - Lait-Creme Concentre( 30ml )",
            price: 13,
            image: "pictures/embryolisse-lait-creme-concentre.png", 
            id: 9
        },
        {
            name: "Anastasia - Hydrating Oil",
            price: 49,
            image: "pictures/anastasia-oil.png", 
            id: 10
        },
        {
            name: "Revolution - Skincare Blemish and Pore Refining Serum - 10% Niacinamide + 1% Zinc 30ml",
            price: 7,
            image: "pictures/revolution.png", 
            id: 11
        },
        {
            name: "Farsali - Unicorn Essence",
            price: 54,
            image: "pictures/UnicornEssence30ml_main_1024x1024.png", 
            id: 12
        },
        {
            name: "NUXE - Huile Prodigieuse( 50ml )",
            price: 19,
            image: "pictures/nuxe.png", 
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
