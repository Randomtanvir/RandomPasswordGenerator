const passBox = document.getElementById('passBox');
const inputSlider = document.getElementById('inputSlider');
const sliderValue = document.getElementById('sliderValue');
const lowerCase = document.getElementById('Lowercase');
const upperCase = document.getElementById('Uppercase');
const nubers = document.getElementById('Nubers');
const symbols = document.getElementById('Symbols');
const genBtn = document.getElementById('genBtn');
const coppyIcon = document.getElementById('coppyicon');


// show input selector
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click',()=>{
    passBox.value = generatPassowrd()
});

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let numberChars = "0123456789";
let symbolChars = "@#$%^&*+=-";

// Function to generate password 
const generatPassowrd = ()=> {
    let genPass = "";
    let allCharactor = "";

    allCharactor += lowerCase.checked ? lowerChars : "";
    allCharactor += upperCase.checked ? upperChars : "";
    allCharactor += nubers.checked ? numberChars : "";
    allCharactor += symbols.checked ? symbolChars : "";

    
    for (let i = 1; i <= inputSlider.value; i++) {
        
        genPass += allCharactor.charAt(Math.floor(Math.random() * allCharactor.length));
        
    }
    
    if (genPass.length===0) {
        alert("Select some one")
    }
    return genPass
}


coppyIcon.addEventListener('click',()=>{
    if (passBox.value!== '' || passBox.value.length>= 1) { 
        navigator.clipboard.writeText(passBox.value);
        coppyIcon.innerText = "check";
        coppyIcon.title = "Password Copied"
    }

    setTimeout(() => {
        coppyIcon.innerText = "content_copy";
        coppyIcon.title = ""
    }, 500);
})
