'use strict'
const randomContent = document.getElementById('random-content');
const closebtn = document.getElementsByClassName("close");

let rightAnswer = false;
let namePalette = '';

//nikola's guidance <3
const products = {
    makeup: [{
            name: "NARS - All Day Luminous Weightless Foundation",
            price: 35,
            image: "pictures/nars-all-day-luminous-weightless-foundation.png",
            id: 0
        },
        {
            name: 'HUDA BEAUTY - FauxFilter Luminous Matte Liquid Foundation',
            price: 34,
            image: "pictures/HUDA-BEAUTY-fauxfilter.png",
            id: 1
        },
        {
            name: "TOO FACED - Born This Way Foundation( 30ml )",
            price: 29,
            image: "pictures/TOO-FACED-Born-This-Way-Foundation.png",
            id: 2
        },
        {
            name: "IT COSMETICS - Travel Size Your Skin But Better CC+( 12ml )",
            price: 14,
            image: "pictures/IT-COSMETICS-Travel-Size-Your-Skin-But-Better.png",
            id: 3
        },
        {
            name: "NYX PROFESSIONAL MAKEUP - Born To Glow Naturally Radiant Foundation( 30ml )",
            price: 10,
            image: "pictures/NYX-PROFESSIONAL-MAKEUP-Born-To-Glow.png",
            id: 4
        },
        {
            name: "NYX PROFESSIONAL MAKEUP - Can't Stop Won't Stop 24 Hour Foundation( 30ml )",
            price: 15,
            image: "pictures/NYX-PROFESSIONAL-MAKEUP-Can't-Stop-Won't-Stop.png",
            id: 5
        },
        {
            name: "URBAN DECAY - Stay Naked Foundation( 30ml )",
            price: 31,
            image: "pictures/URBAN-DECAY-Stay-Naked-Foundation.png",
            id: 6
        },
        {
            name: "ANASTASIA BEVERLY HILLS - Luminous Foundation( 30ml )",
            price: 43,
            image: "pictures/ANASTASIA-BEVERLY-HILLS-Luminous-Foundation.png",
            id: 7
        },
        {
            name: "LAURA MERCIER - Flawless Fusion Ultra-Longwear Foundation( 30ml )",
            price: 36,
            image: "pictures/LAURA-MERCIER-Flawless-Fusion.png",
            id: 8
        },
        {
            name: "BEAUTYBLENDER - Bounce( 30ml )",
            price: 32,
            image: "pictures/BEAUTYBLENDER-Bounce.png",
            id: 9
        },
        {
            name: "MILK MAKEUP - Blur Liquid Matte Foundation( 30ml )",
            price: 36,
            image: "pictures/MILK-MAKEUP-Blur-Liquid-Matte.png",
            id: 10
        },
        {
            name: "LAURA MERCIER - Silk Crème Oil Free Photo Edition Foundation( 30ml )",
            price: 36,
            image: "pictures/LAURA-MERCIER-Silk-Crème.png",
            id: 11
        },
        {
            name: "COVER FX - Power Play Foundation( 35ml )",
            price: 38,
            image: "pictures/COVER-FX-Power-Play-Foundation.png",
            id: 12
        },
        {
            name: "BENEFIT - Hello Happy Flawless Liquid Foundation Mini( 10ml )",
            price: 13,
            image: "pictures/COVER-FX-Power-Play-Foundation.png",
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
        if (currentId == newId) {
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

function getUserInput() {
    return parseInt(userInput.value)
}

//and here 
function trueOrfalse() {
    let enteredPrice = getUserInput()
    if (usedIds.length == numberOfProducts) {
        document.getElementById('winning').style.display = 'block';
        document.getElementById('restart').addEventListener('click', function () {
            usedIds = [];
            document.getElementById('winning').style.display = 'none';
            random();
            render();
        })
        return;
    } else if (whichProduct.price == enteredPrice) {
        document.getElementById('correct').style.display = 'block';
        random();
        render();

    } else {
        document.getElementById('wrong').style.display = 'block';

    }



}


//when clicked ouside 

//ask Nikola
for (let i = 0; i < closebtn.length; i++) {
    closebtn[i].addEventListener("click", function () {
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