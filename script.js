const screen = document.getElementById('screen');
const message = document.getElementById('message');
const pin = document.getElementById('pin');
const keypad = document.getElementById('keypad');
const menu = document.getElementById('menu');

const insertCardButton = document.createElement('button');
insertCardButton.textContent = 'Insert card';
screen.appendChild(insertCardButton);
message.setAttribute('style','white-space: pre;');
message.textContent = 'Welcome to the ATM Machine. \r\n Please insert your card.';

insertCardButton.addEventListener('click', event => {
  // Hide the "Insert card" button and show the keypad and text box
  event.target.style.display = 'none';
  keypad.style.display = '';
  pin.style.display = '';
  TakeCard.style.display = '';

  // Clear the message and set it to "Please enter your PIN"
  message.textContent = '';
  message.textContent = 'Please enter your PIN.';
});

keypad.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON' && pin.value.length != 4 && pin.style.display === '') {
    // Append the button's value to the PIN text box
    pin.value += event.target.dataset.value;
  }
  if (event.target.tagName === 'BUTTON' && transferdest.style.display === '' && event.target.id != 'enter') {
    transferdest.value += event.target.dataset.value;
  }
});

keypad.addEventListener('click', event => {
  if (event.target.id === 'clear' && pin.style.display === '') {
    // Clear the PIN text box
    pin.value = '';
  }
  if (event.target.id === 'clear' && transferdest.style.display === '') {
    transferdest.value = 'LT';
  }
});

keypad.addEventListener('click', event => {
  if (event.target.id === 'enter' && pin.style.display === '') {
    const enteredPin = pin.value;
    console.log(pin)
    console.log(enteredPin)
    if (enteredPin.length === 4) {
      // Check if the entered PIN is correct (in this example, the correct PIN is "1234")
      if (enteredPin === '1234') {
        // Hide the keypad and text box, and show the menu
        keypad.style.display = 'none';
        pin.style.display = 'none';
        menu.style.display = '';
        pin.value = '';
        message.textContent = 'What would you like to do?';
      } else {
        // Show an error message
        message.textContent = 'Incorrect PIN. Please try again. (Hint: 1234)';
        pin.value = '';
      }
    } else {
      // Show an error message
      message.textContent = 'Please enter a 4-digit PIN.';
      pin.value = '';
    }
  }
  if (event.target.id === 'enter' && transferdest.style.display === '') {
    transferdest.style.display = 'none';
    keypad.style.display = 'none';
    //message.textContent = 'The transfer has been successful \r\n Please take out your card';
    message.textContent = 'Please select how much \r\n you would like to transfer';
    WithdrawOptions.style.display = '';
  }
});

menu.addEventListener('click', event => {
  if (event.target.id === 'withdrawal') {
    WithdrawOptions.style.display = '';
    // Show a message indicating that the withdrawal was successful
    //message.textContent = 'Withdrawal successful. Thank you for using the ATM Machine.';
    menu.style.display = 'none';
    message.textContent = 'Please select how much you \r\n would like to withdraw';
  }
});

menu.addEventListener('click', event => {
  if (event.target.id === 'balance') {
    // Show the user's current balance
    message.textContent = 'Your current balance is $1004.67';
  }
});
menu.addEventListener('click', event => {
  if (event.target.id === 'transfer') {
    // Show the user's current balance
    menu.style.display = 'none';
    transferdest.style.display = '';
    keypad.style.display = '';
    message.textContent = 'Please enter the number of the account \r\n you would like to send money to';
  }
});
WithdrawOptions.addEventListener('click', event => {
  if (event.target.id === 'wo' && message.textContent === 'Please select how much you \r\n would like to withdraw') {
    WithdrawOptions.style.display = 'none';
    message.textContent = 'Your withdrawal of $';
    message.textContent += event.target.dataset.value;
    message.textContent += ' has been successful\r\n';
    message.textContent += 'Please take out your card';
  }
  if (event.target.id === 'wo' && message.textContent === 'Please select how much \r\n you would like to transfer') {
    WithdrawOptions.style.display = 'none';
    message.textContent = 'Your transfer of $';
    message.textContent += event.target.dataset.value;
    message.textContent += ' to \r\n';
    message.textContent += transferdest.value;
    transferdest.value = 'LT';
    message.textContent += '\r\n has been successful \r\n';
    message.textContent += 'Please take out your card';
  }
});
TakeCard.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON'){
    WithdrawOptions.style.display = 'none';
    keypad.style.display = 'none';
    pin.style.display = 'none';
    menu.style.display = 'none';
    transferdest.style.display = 'none';
    message.textContent = 'Welcome to the ATM Machine. \r\n Please insert your card.';
    TakeCard.style.display = 'none';
    insertCardButton.style.display = '';
  }
})
