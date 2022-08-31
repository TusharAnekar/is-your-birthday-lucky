const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");

const checkNumber =document.querySelector("#check-number");

const resultMessage = document.querySelector("#result");

var sum = 0;

checkNumber.addEventListener ("click", luckyDOB);

function luckyDOB () {

    if (dateOfBirth.value === "" || luckyNumber.value === "") {
        resultMessage.innerText = "Please enter both values."
    }
    else if (luckyNumber.value === 0 || luckyNumber.value < 1) {
        resultMessage.innerText = "Please enter value greater than 0."
    } 
    else {
        
        const dateOfBirthNumbers = dateOfBirth.value.replaceAll("-","");
    
        for (let i = 0; i < dateOfBirthNumbers.length; i++) {
            sum = sum + Number(dateOfBirthNumbers.charAt(i));
        }

        if (sum % luckyNumber.value ===0) {
            
            resultMessage.innerText = "You have a lucky birthday.";
        } else {
            resultMessage.innerText = "You don't have a lucky birthday.";
        }
    }
}
