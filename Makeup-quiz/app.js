const userInput = document.getElementById('input');
const btn = document.getElementById('button-submit');
const closebtn = document.getElementsByClassName("close");

let rightAnswer = false;

function getUserInput(){
    return parseInt(userInput.value)
}

document.getElementById("input").addEventListener("keyup", function(pushed) {
  if (pushed.keyCode === 13) {
    pushed.preventDefault();
   document.getElementById("button-submit").click();
  }
});

function trueOrfalse(){
    let enteredPrice = getUserInput()
    
    if (products.makeup.jamesPalette.price == enteredPrice) {
        document.getElementById('correct').style.display='block';
        rightAnswer = true;
        nextPic()
    } else {
        alert("Wrong")
    }
    document.getElementById('input').value = '';
}
function nextPic(){
    
    if(rightAnswer == true){
    document.getElementById("picture").src = "pictures/norvina.png";
    document.getElementById("namePalette").innerHTML = 'Norvina ABH palette';
} 
}

function pop(){
    
    document.getElementById('correct').style.display='block';
    
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


//ask Nikola
for (i = 0; i < closebtn.length; i++) {
  closebtn[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}


btn.addEventListener('click', trueOrfalse);
//closebtn.addEventListener("click",close)

