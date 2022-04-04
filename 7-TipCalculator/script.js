const amount  = document.getElementById('amount');
const guests  = document.getElementById('guest');
const quality  = document.getElementById('quality');
const tipAmount  = document.getElementById('tip-amount');

const calculate = () => {
  const tip = ((amount.value * quality.value) / guests.value).toFixed(2);
  amount.value = '';
  guests.value = '';
  if (tip === 'NaN'){
    tipAmount.innerHTML = 'Tip $0 each';
  }
  else{
    tipAmount.innerHTML = 'Tip $' + tip + ' each';
  }
  showTipAmount();
}


const showTipAmount = () => {
  let x = tipAmount;
  x.className = 'show';
  setTimeout(() => {x.className = x.className.replace('show', '');}, 3000);
}