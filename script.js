const bill = document.getElementById('bill');
const customInput = document.querySelector('.button.input');
const buttons = document.querySelectorAll('.button');
const numbOfPeople = document.getElementById('numbPeople');
const outTipAmount = document.getElementById('tip-amount')
const outTotalPrice = document.getElementById('total');
const resetBtn = document.querySelector('.resetBtn');






bill.addEventListener("input", function() {
  let value = parseFloat(bill.value); 


//   Reset Btn control
  if (bill.value !== '') {
   resetBtn.disabled = false;
  } else {
  resetBtn.disabled = true;
  }

  resetBtn.addEventListener('click', () => {
    location.reload();
  });

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const tipPercentage = parseInt(button.value);
      const tipAmount = (tipPercentage / 100) * value;
      const totalAmount = value + tipAmount;
      const numberOfPeople = parseInt(numbOfPeople.value);
      const amountPerPerson = (totalAmount / numberOfPeople).toFixed(2);
      const tipPerPerson = (tipAmount / numberOfPeople).toFixed(2);
    
        
    outTipAmount.textContent = tipPerPerson;
    outTotalPrice.textContent = amountPerPerson;


    
    });
  });

  customInput.addEventListener('input', () => {
    const customValue = parseFloat(customInput.value);
    const tipAmount = (customValue / 100) * value;
    const totalAmount = value + tipAmount;
    const numberOfPeople = parseInt(numbOfPeople.value);
    const amountPerPerson = (totalAmount / numberOfPeople).toFixed(2);
    const tipPerPerson = (tipAmount / numberOfPeople).toFixed(2);

    outTipAmount.textContent = tipPerPerson;
    outTotalPrice.textContent = amountPerPerson;

  });
});

