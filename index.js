const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const passwordLength = 15

let passwordOne = document.getElementById("password1")
let passwordTwo = document.getElementById("password2")
let clipboardEl = document.getElementById("clipboard1")
let clipboardAl = document.getElementById("clipboard2")



// Generates random items from array

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

// Generates the fixed number of random items to a random password 

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}

// Adds the passwords to generator button

const generatedPasswordOne = generateRandomPassword()
const generatedPasswordTwo = generateRandomPassword()

passwordButton.addEventListener("click", function() {
    passwordOne.textContent = generatedPasswordOne
    passwordTwo.textContent = generatedPasswordTwo
})


// copy link to clipborad

 function copyOne(){
	navigator.clipboard.writeText(passwordOne.textContent);
    alert('Password1 copied to clipboard!')
}
function copyTwo(){
	navigator.clipboard.writeText(passwordTwo.textContent);
    alert('Password2 copied to clipboard!')
}



    
    

