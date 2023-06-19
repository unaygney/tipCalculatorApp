
const bill = document.getElementById('bill');
const customInput = document.querySelector('.button.input');
const buttons = document.querySelectorAll('.button');
const numbOfPeople = document.getElementById('numbPeople');
const outTipAmount = document.getElementById('tip-amount')
const outTotalPrice = document.getElementById('total');
const resetBtn = document.querySelector('.resetBtn');

function calculateTip() {
  const value = parseFloat(bill.value);
  const numberOfPeople = parseInt(numbOfPeople.value);

  if (isNaN(value) || isNaN(numberOfPeople)) {
    return;
  }

  const selectedButton = document.querySelector('.button.active');
  const tipPercentage = parseInt(selectedButton.value);

  const tipAmount = (tipPercentage / 100) * value;
  const totalAmount = value + tipAmount;
  const amountPerPerson = (totalAmount / numberOfPeople).toFixed(2);
  const tipPerPerson = (tipAmount / numberOfPeople).toFixed(2);

  outTipAmount.textContent = tipPerPerson;
  outTotalPrice.textContent = amountPerPerson;
}

bill.addEventListener("input", calculateTip);
customInput.addEventListener("input", calculateTip);
numbOfPeople.addEventListener("input", calculateTip);

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    calculateTip();
  });
});

resetBtn.addEventListener('click', () => {
  location.reload();
});







