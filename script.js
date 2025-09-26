const outputAcctNumber = document.getElementById('acct-number');
const outputCardName = document.getElementById('card-name');
const outputExpMonth = document.getElementById('exp-month');
const outputExpYear = document.getElementById('exp-year');
const outputCvc = document.getElementById('cvc');

const inputCardName = document.getElementById('name-input');
const inputCardNumber = document.getElementById('card-number-input');
const date = document.getElementById('date');
const input = document.querySelectorAll('.input');
const monthInput = document.querySelector('.month-input')
const inputMonth = document.getElementById('month-input');
const inputYear = document.getElementById('year-input');
const inputCVC = document.getElementById('cvc-input');
const confirmButton = document.getElementById('submit');
const continueButton = document.getElementById('continue');
const nameErrorMsg = document.getElementById('name-error');
const cardNumberErrorMsg = document.getElementById('number-error');
const DateErrorMsg = document.getElementById('date-error');
const cvcErrorMsg = document.getElementById('cvc-error');
const form = document.querySelector('.form');
const completed = document.querySelector('.completed')

inputCardNumber.addEventListener('input', (e) => {
    const cardNumber = e.target.value.replace(/\D/g, "");
    cardNumber.substring(0, 16);
    const formatted = cardNumber.match(/.{1,4}/g)?.join(" ") || "";
    e.target.value = formatted;


    if (inputCardNumber.value === '') {
    outputAcctNumber.innerText = '0000 0000 0000 0000';
    } else {
        outputAcctNumber.innerText = inputCardNumber.value;
    }
});


inputCardName.addEventListener('input', () => {

    if (inputCardName.value === '') {
        outputCardName.innerText = 'Jane Appleseed';
        return false;
    } else if (/\d/.test(inputCardName.value)) {
        return false;
    } else {
        outputCardName.innerText = inputCardName.value;
        return true;
    }
});

inputMonth.addEventListener('input', () => {
    if (inputMonth.value === '') {
        outputExpMonth.innerText = '00';
    } else if (/[a-zA-Z]/.test(inputMonth.value)) {
        return false;
    } else if (inputMonth.value > 12 || inputMonth.value <  ) {
        return false;
    } else {
        outputExpMonth.innerText = inputMonth.value;
    }
});

inputYear.addEventListener('input', () => {
    if (inputYear.value === '') {
        outputExpYear.innerText = '00';
    } else if (/[a-zA-Z]/.test(inputYear.value)) {
        return false;
    } else if (inputYear.value < 26) {
        return false;
    } else {
        outputExpYear.innerText = inputYear.value;
    }
});

inputCVC.addEventListener('input', () => {
    if (inputCVC.value === '') {
        outputCvc.innerText = '000';
    } else if (/[a-zA-Z]/.test(inputCVC.value)) {
        return false;
    } else {
        outputCvc.innerText = inputCVC.value
    }
})


const nameCheck = (inputCardName) => {
    const cardName = inputCardName.value;

    if (cardName === '') {
        inputCardName.style.border = 'solid, hsl(0, 100%, 66%), 1px';
        nameErrorMsg.innerText = "Please insert name!";
        nameErrorMsg.style.color = 'hsl(0, 100%, 66%)';
        nameErrorMsg.style.fontSize = '.75rem';
        nameErrorMsg.style.marginTop = '.5em';
        return false;
    } else if (/\d/.test(cardName)) {
        inputCardName.style.border = 'solid, hsl(0, 100%, 66%), 1px';
        nameErrorMsg.innerText = "Not a name!";
        nameErrorMsg.style.color = 'hsl(0, 100%, 66%)';
        nameErrorMsg.style.fontSize = '.75rem';
        nameErrorMsg.style.marginTop = '.5em';
        return false;
    } else {
        inputCardName.style.borderColor = 'hsl(270, 3%, 87%)';
        nameErrorMsg.style.display = 'none';
        return true;
    }
}

const numberCheck = (inputCardNumber) => {
    const cardNumber = inputCardNumber.value.replace(/\D/g, "");
    

    if (cardNumber === '') {
        inputCardNumber.style.border = '1px solid hsl(0, 100%, 66%)';
        cardNumberErrorMsg.innerText = "Please insert card number!";
        cardNumberErrorMsg.style.color = 'hsl(0, 100%, 66%)';
        cardNumberErrorMsg.style.fontSize = '.75rem';
        cardNumberErrorMsg.style.marginTop = '.5em';
        return false;
    } else if (isNaN(cardNumber)) {
        cardNumberErrorMsg.innerText = 'Wrong format, numbers only';
        cardNumberErrorMsg.style.color = 'hsl(0, 100%, 66%)';
        cardNumberErrorMsg.style.fontSize = '.75rem';
        cardNumberErrorMsg.style.marginTop = '.5em';
        return false;
    } else if (cardNumber.length < 16) {
        cardNumberErrorMsg.innerText = 'Incomplete card number!';
        cardNumberErrorMsg.style.color = 'hsl(0, 100%, 66%)';
        cardNumberErrorMsg.style.fontSize = '.75rem';
        cardNumberErrorMsg.style.marginTop = '.5em';
        return false;
    } else {
        inputCardNumber.style.borderColor = 'hsl(270, 3%, 87%)';
        cardNumberErrorMsg.style.display = 'none';
        return true;
    }
}

const dateCheck = (inputMonth, inputYear) => {
  const cardMonth = inputMonth.value;
  const cardYear = inputYear.value;


  if (cardMonth === '' && cardYear === '') {
    inputMonth.style.border = '1px solid hsl(0, 100%, 66%)';
    inputYear.style.border = '1px solid hsl(0, 100%, 66%)';
    DateErrorMsg.innerText = "Can't be blank";
    DateErrorMsg.style.color = "hsl(0, 100%, 66%)";
    DateErrorMsg.style.fontSize = '.75rem';
    DateErrorMsg.style.marginTop = '.5em';
    return false;
  } else if (/[a-zA-Z]/.test(cardMonth)) {
    DateErrorMsg.innerText = "Wrong date format";
    DateErrorMsg.style.color = "hsl(0, 100%, 66%)";
    DateErrorMsg.style.fontSize = '.75rem';
    DateErrorMsg.style.marginTop = '.5em';
    return false;;
  }  else if (cardMonth > 12) {
    inputMonth.style.border = '1px solid hsl(0, 100%, 66%)';
    DateErrorMsg.innerText = "Not a month";
    DateErrorMsg.style.color = "hsl(0, 100%, 66%)";
    DateErrorMsg.style.fontSize = '.75rem';
    DateErrorMsg.style.marginTop = '.5em';
    return false;
  } else {
    inputMonth.style.borderColor = 'hsl(270, 3%, 87%)';
    inputYear.style.borderColor = 'hsl(270, 3%, 87%)';

        if (cardYear === '') {
            inputYear.style.border = '1px solid hsl(0, 100%, 66%)';
            DateErrorMsg.innerText = "Can't be blank";
            DateErrorMsg.style.color = "hsl(0, 100%, 66%)";
            DateErrorMsg.style.fontSize = '.75rem';
            DateErrorMsg.style.marginTop = '.5em';
            return false;
        } else if (/[a-zA-Z]/.test(cardYear)) {
            DateErrorMsg.innerText = "Wrong date format";
            DateErrorMsg.style.color = 'hsl(0, 100%, 66%)';
            DateErrorMsg.style.fontSize = '.75rem';
            DateErrorMsg.style.marginTop = '.5em';
            return false;
        } else if (cardYear < 26) {
            inputYear.style.border = '1px solid hsl(0, 100%, 66%)';
            DateErrorMsg.innerText = "Can't be the year";
            DateErrorMsg.style.color = 'hsl(0, 100%, 66%)';
            DateErrorMsg.style.fontSize = '.75rem';
            DateErrorMsg.style.marginTop = '.5em';
            return false;
        } else {
            DateErrorMsg.style.display = 'none';
            inputYear.style.borderColor = 'hsl(270, 3%, 87%)';
            return true;
        }
  }
};

const cvcCheck = (inputCVC) => {
    const cardCvc = inputCVC.value;

    if (cardCvc === '') {
        inputCVC.style.border = '1px solid hsl(0, 100%, 66%)';
        cvcErrorMsg.innerText = "Can't be blank";
        cvcErrorMsg.style.color = 'hsl(0, 100%, 66%)';
        cvcErrorMsg.style.fontSize = '.75rem';
        cvcErrorMsg.style.marginTop = '.5em';
        return false;
    } else if (/[a-zA-Z]/.test(cardCvc)) {
        inputCVC.style.border = '1px solid hsl(0, 100%, 66%)';
        cvcErrorMsg.innerText = "Wrong CVC format";
        cvcErrorMsg.style.color = 'hsl(0, 100%, 66%)';
        cvcErrorMsg.style.fontSize = '.75rem';
        cvcErrorMsg.style.marginTop = '.5em';
        return false;
    } else if (cardCvc.length < 3) {
        inputCVC.style.border = '1px solid hsl(0, 100%, 66%)';
        cvcErrorMsg.innerText = "Wrong CVC format";
        cvcErrorMsg.style.color = 'hsl(0, 100%, 66%)';
        cvcErrorMsg.style.fontSize = '.75rem';
        cvcErrorMsg.style.marginTop = '.5em';
        return false;
    } else {
        inputCVC.style.borderColor = 'hsl(270, 3%, 87%)';
        cvcErrorMsg.style.display = 'none';
        return true;
    }
}



confirmButton.addEventListener('click', (e) => {
    nameCheck(inputCardName);
    numberCheck(inputCardNumber);
    dateCheck(inputMonth, inputYear);
    cvcCheck(inputCVC)
    e.preventDefault();

    if (nameCheck(inputCardName) && numberCheck(inputCardNumber) && dateCheck(inputMonth, inputYear) && cvcCheck(inputCVC)) {
        form.classList.add('hide');
        completed.classList.remove('hide');
        
    }

});

continueButton.addEventListener('click', () => {
    form.classList.remove('hide');
    completed.classList.add('hide')
});

