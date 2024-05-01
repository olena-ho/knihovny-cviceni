//checking out date and validator libraries
/*
const userEmail = 'olen.ghj@gmail.com';

if (validator.isEmail(userEmail)) {
  const messageEl = document.querySelector('#msg');
  messageEl.textContent = 'Email is fine'
  messageEl.innerHTML += `<br>${dayjs().format('DD/MM/YYYY')}`

  // messageEl.classList.add('msg--valid')
} else {
  const messageEl = document.querySelector('#msg');
  messageEl.textContent = 'Type in a proper email'
  // messageEl.classList.add('msg--invalid')
}

const creditCard = '4125010001000208';
console.log(validator.isCreditCard(creditCard))
*/

//DIC
const inputStr = 'CZ123456789';

const isDIC = (inputStr) => {
  if (inputStr.length < 11 || inputStr.length > 12) {
    return false;
  } else if (inputStr.slice(0, 2).toLowerCase() !== 'cz') {
    return false;
  } else if (!validator.isInt(inputStr.slice(2))) {
    return false;
  }

  return true;
}


console.log(isDIC(inputStr))
// const digits = Number(inputStr.slice(2));
// validator.isInt(digits)
