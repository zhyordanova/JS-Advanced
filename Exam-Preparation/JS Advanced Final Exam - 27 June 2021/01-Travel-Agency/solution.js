window.addEventListener('load', solution);

function solution() {
  // select input fields
  const nameInput = document.getElementById('fname');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const addressInput = document.getElementById('address');
  const codeInput = document.getElementById('code');

  // select submit button
  const submitBtn = document.getElementById('submitBTN');

  // console.log(nameInput.value)
  // console.log(emailInput.value)
  // console.log(phoneInput.value)
  // console.log(addressInput.value)
  // console.log(codeInput.value)
  // console.log(submitBtn)

  // select previe ul
  const infoPreview = document.getElementById('infoPreview');

  // select action buttons
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');

  // add event listener on submitBtn
  submitBtn.addEventListener('click', onSubmit);

  function onSubmit(event) {
    event.preventDefault();

    if (!nameInput.value == '' && !emailInput.value == '') {
      infoPreview.innerHTML = `
        <li>Full Name: ${nameInput.value}</li>
        <li>Email: ${emailInput.value}</li>
        <li>Phone Number: ${phoneInput.value}</li>
        <li>Address: ${addressInput.value}</li>
        <li>Postal Code: ${codeInput.value}</li>`;

      submitBtn.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;
    }

    const backUpName = nameInput.value;
    const backUpEmail = emailInput.value;
    const backUpPhone = phoneInput.value;
    const backUpAdress = addressInput.value;
    const backUpCode = codeInput.value;

    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    addressInput.value = '';
    codeInput.value = '';

    editBtn.addEventListener('click', onEdit);
    continueBtn.addEventListener('click', onContinue);

    function onEdit() {
      nameInput.value = backUpName;
      emailInput.value = backUpEmail;
      phoneInput.value = backUpPhone;
      addressInput.value = backUpAdress;
      codeInput.value = backUpCode;
  
      infoPreview.innerHTML = ``;
  
      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;
    }

    function onContinue() {
      const divElement = document.getElementById('block');
      divElement.innerHTML = ``;
      
      const finalScreen = document.createElement('h3');
      finalScreen.textContent = 'Thank you for your reservation!';

      divElement.appendChild(finalScreen);

    }
  }
}
