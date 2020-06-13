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
        {
            name: "Jeffree Star - Blood Sugar palette",
            price: 52,
            image: "pictures/bloodSugar.png", 
            id: 3
        },
        {
            name: "Jeffree Star - Jawbreaker Palette",
            price: 58,
            image: "pictures/jawBreaker.png", 
            id: 4
        }, 
        {
            name: "Fenty Beauty - Moroccan Spice Eyeshadow Palette",
            price: 59,
            image: "pictures/fentyBeauty.png", 
            id: 5
        }, 
        {
            name: "Huda Beauty - Rose Gold Remastered Palette",
            price: 56,
            image: "pictures/hudaBeautyRose.png", 
            id: 6
        },
        {
            name: "Huda Beauty - Desert Dusk Palette",
            price: 56,
            image: "pictures/hudaDesertDusk.png", 
            id: 7
        },
        {
            name: "Morphe X Jaclyn Hill Eyeshadow Palette",
            price: 16,
            image: "pictures/morpheXJacklynHillSmall.png", 
            id: 8
        },
        {
            name: "Huda Beauty - Mercury Retrograde Palette",
            price: 58,
            image: "pictures/hudaMercury.png", 
            id: 9
        },
        {
            name: "Morphe - The Jaclyn Hill Eyeshadow Palette",
            price: 39,
            image: "pictures/jacklinHillMorphe.png", 
            id: 10
        },
        {
            name: "Anastasia Beverly Hills - Riviera Eye Shadow Palette",
            price: 46,
            image: "pictures/jacklinHillMorphe.png", 
            id: 11
        },
        {
            name: "Anastasia Beverly Hills - Soft Glam Eye Shadow Palette",
            price: 46,
            image: "pictures/jacklinHillMorphe.png", 
            id: 12
        },
        {
            name: "ICONIC London - Loose Pigment Palette",
            price: 45,
            image: "pictures/iconicLondon.png", 
            id: 13
        },
        {
            name: "Lime Crime - Venus XL Palette",
            price: 56,
            image: "pictures/limeCrime.png", 
            id: 14
        },
        {
            name: "Urban Decay - Naked Ultra Violet Palette",
            price: 43,
            image: "pictures/urbanDecayViolet.png", 
            id: 15
        },
        {
            name: "Urban Decay - Naked Heat Eyeshadow Palette",
            price: 43,
            image: "pictures/urbanDecayHeat.png", 
            id: 16
        },
        {
            name: "Urban Decay - Born To Run Eyeshadow Palette",
            price: 43,
            image: "pictures/urbanDecayBornToHeat.png", 
            id: 17
        },
        {
            name: "BEAUTY BAY - Bright 42 colour palette",
            price: 23,
            image: "pictures/beautyBayPalette.png", 
            id: 18
        },
        {
            name: "Juvia's Place - Zuzu eyeshadow palette",
            price: 23,
            image: "pictures/juviasPlaceZuzu.png", 
            id: 19
        },
        {
            name: "Anastasia Beverly Hills - Amrezy eyeshadow palette",
            price: 54,
            image: "pictures/ABHAmrezy.png", 
            id: 20
        },
        {
            name: "BPerfect - Stacey Marie Carnival palette",
            price: 48,
            image: "pictures/carnival.png", 
            id: 21
        },
        {
            name: "Jeffree Star - Conspiracy Palette",
            price: 52,
            image: "pictures/jsConspiracy.png", 
            id: 22
        },


    ],
    shoes: {}
} 

let newId;
let usedIds = [];
const numberOfProducts = 23;
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
