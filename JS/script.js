document.getElementById("name").focus();

const otherJobInput = document.getElementById("other-title");
otherJobInput.style.display = "none";
const otherJob = document.getElementById("title");

otherJob.addEventListener('click', () => {
  if (otherJob.value === "other") {
    otherJobInput.style.display = "block";
  } else {
    otherJobInput.style.display = "none";
  }
});

const selectTheme = document.createElement("option");
selectTheme.textContent = "Please select a T-shirt theme";
const colorList = document.getElementById("color");
colorList.add(selectTheme, 0);
selectTheme.selected = true;
selectTheme.hidden = true;

colorList.hidden = true;


const design = document.getElementById("design");
design.addEventListener('change', () => {
  if (design.value === "js puns") {
    colorList.hidden = false;
    colorList[1].hidden = false;
    colorList[2].hidden = false;
    colorList[3].hidden = false;
    colorList[4].hidden = true;
    colorList[5].hidden = true;
    colorList[6].hidden = true;
  } else if (design.value === "heart js") {
    colorList.hidden = false;
    colorList[1].hidden = true;
    colorList[2].hidden = true;
    colorList[3].hidden = true;
    colorList[4].hidden = false;
    colorList[5].hidden = false;
    colorList[6].hidden = false;
  } else {
  colorList.hidden = true;
  }
});

let costStatement = document.createElement('h3');
const activSection = document.querySelector('.activities');
activSection.appendChild(costStatement);

let totalActivCost = 0;

const activityList = document.querySelectorAll('input[type=checkbox]');

activSection.addEventListener('change', (e) => {
  const selectedActivity = e.target;
  const cost = selectedActivity.getAttribute('data-cost');
  const time = selectedActivity.getAttribute('data-day-and-time');
  if (selectedActivity.checked) {
    totalActivCost += Number(cost);
  } else {
    totalActivCost -= Number(cost);
  }
  for (let i = 0; i < activityList.length; i++) {
    const activityListItem = activityList[i];
    const timeItem = activityListItem.getAttribute('data-day-and-time');
    if (timeItem === time && activityListItem !== selectedActivity) {
      if (activityListItem.checked) {
        activityListItem.checked = false;
        activityListItem.disabled = true;
        totalActivCost -= Number(activityListItem.getAttribute('data-cost'));
      } else {
        activityListItem.disabled = false;
      }
    }
  }
  costStatement.textContent = `Total: $${totalActivCost}`;
});

const paymentMethod = document.getElementById('payment');
paymentMethod[0].hidden = true;

const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
paypal.hidden = true;
bitcoin.hidden = true;

paymentMethod.addEventListener('change', (e) => {
  if (e.target.value === "credit card") {
    creditCard.hidden = false;
    paypal.hidden = true;
    bitcoin.hidden = true;
  } else if (e.target.value === "paypal") {
    creditCard.hidden = true;
    paypal.hidden = false;
    bitcoin.hidden = true;
  } else if (e.target.value === "bitcoin") {
    creditCard.hidden = true;
    paypal.hidden = true;
    bitcoin.hidden = false;
  }
});


/* A common error indicator for an invalid field is to turn the input or form
section’s border red. But an even better approach is to append an element to
the DOM near the input or section, give it some friendly error message, and
show it when the field is invalid, and hide it when the field is valid.
*/
function validateName() {
  if (/* the input value meets the requirements for that
input as stated in the project instructions */1 === 1) {
    // remove any error indicators
    return true;
  } else {
    //add an error indicator
    return false;
  }
}


function validateEmail() {
  if (/* the input value meets the requirements for that
input as stated in the project instructions */1 === 1) {
    // remove any error indicators
    return true;
  } else {
    //add an error indicator
    return false;
  }
}

function validateActivitySection() {
  if (/* the input value meets the requirements for that
input as stated in the project instructions */1 === 1) {
    // remove any error indicators
    return true;
  } else {
    //add an error indicator
    return false;
  }
}

function validateCreditCardNo() {
  if (/* the input value meets the requirements for that
input as stated in the project instructions */1 === 1) {
    // remove any error indicators
    return true;
  } else {
    //add an error indicator
    return false;
  }
}

function validateZipCode() {
  if (/* the input value meets the requirements for that
input as stated in the project instructions */1 === 1) {
    // remove any error indicators
    return true;
  } else {
    //add an error indicator
    return false;
  }
}

function validateCVV() {
  if (/* the input value meets the requirements for that
input as stated in the project instructions */1 === 1) {
    // remove any error indicators
    return true;
  } else {
    //add an error indicator
    return false;
  }
}

function formValidation() {
  if (paymentMethod.value === "credit card") {
    if (validateName === true && validateEmail === true && validateActivitySection === true && validateCreditCardNo === true && validateZipCode === true && validateCVV === true) {
      //
      return true;
    }
  } else if (paymentMethod.value === "paypal" || paymentMethod.value === "bitcoin") {
    if (validateName === true && validateEmail === true && validateActivitySection === true) {
      //
      return true;
    }
  } else {
    return false;
  }
}


// !! NOTE TO SELF CHECK CODE BELOW !!

const form = document.querySelector('form');
form.addEventListener('submit', () => {
  console.log("validation on");
  formValidation();
});
