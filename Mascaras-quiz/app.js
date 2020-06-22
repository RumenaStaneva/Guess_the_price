'use strict'
const randomContent = document.getElementById('random-content');
const closebtn = document.getElementsByClassName("close");

let rightAnswer = false;
let namePalette = '';

//nikola's guidance <3
const products = {
    makeup: [
        {
            name: "Juice Beauty Phyto-Pigments Ultra-Natural Mascara ",
            price: 24,
            image:"pictures/juice-beauty.png",
            id: 0
        },
        {
            name: 'Marc Jacobs - Beauty Velvet Noir Mascara',
            price: 27,
            image: "pictures/marc-jacobs-velvet-noir.png",
            id: 1
        },
        {
            name: "Chanel - Le Volume de Chanel Mascara",
            price: 32,
            image: "pictures/chanel-le-volume.png", 
            id: 2
        }, 
        {
            name: "Lancôme - Hypnose Doll Lashes Mascara",
            price: 28,
            image: "pictures/lancome-hypnose.png", 
            id: 3
        },
        {
            name: "Pat McGrath - Labs FetishEyes Mascara",
            price: 30,
            image: "pictures/pat-mcgrath.png", 
            id: 4
        }, 
        {
            name: "Maybelline - Lash Sensational Mascara",
            price: 10,
            image: "pictures/maybelline-lash-sensational.png", 
            id: 5
        }, 
        {
            name: "L’Oréal - Voluminous Carbon Black Waterproof Mascara",
            price: 6,
            image: "pictures/loreal-voluminous.png", 
            id: 6
        },
        {
            name: "MAC - Haute and Naughty Lash Mascara",
            price: 24,
            image: "pictures/mac-haute-and-naughty.png", 
            id: 7
        },
        {
            name: "IT Cosmetics - Tightline 3-in-1 Black Primer-Eyeliner-Mascara",
            price: 25,
            image: "pictures/it-cosmetics.png", 
            id: 8
        },
        {
            name: "Giorgio Armani - Beauty Eyes to Kill Mascara",
            price: 25,
            image: "pictures/georgio-armani.png", 
            id: 9
        },
        {
            name: "Benefit - They're Real Mascara",
            price: 25,
            image: "pictures/benefit.png", 
            id: 10
        },
        {
            name: "L'Oréal - Voluminous Lash Paradise Mascara",
            price: 11,
            image: "pictures/loreal-paradise.png", 
            id: 11
        },
        {
            name: "Too Faced - Better Than Sex Mascara",
            price: 23,
            image: "pictures/better-than-sex.png", 
            id: 12
        },
        {
            name: "Kat Von D - Go Big or Go Home Mascara",
            price: 20,
            image: "pictures/kat-von-d.png", 
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
