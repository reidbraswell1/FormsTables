function displayResults(a) {
  /* Check which radio button is checked */
  if (beginner.checked) {
    programmingExperience = beginner.value;
  }
  if (intermediate.checked) {
    programmingExperience = intermediate.value;
  }
  if (expert.checked) {
    programmingExperience = expert.value;
  }

  /* Append to the table */
  let table = document.getElementById("results");
  let row = table.insertRow();
  let cell1 = row.insertCell();
  let cell2 = row.insertCell();
  let cell3 = row.insertCell();
  let cell4 = row.insertCell();
  let cell5 = row.insertCell();
  cell1.innerText = this.firstName.value;
  cell2.innerText = this.lastName.value;
  cell3.innerText = this.email.value;
  cell4.innerText = programmingExperience;
  cell5.innerText = this.desiredCareer.value;

  /* Reset the form values */
  reset(
    firstName,
    lastName,
    email,
    beginner,
    intermediate,
    expert,
    desiredCareer
  );
}

function reset() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  beginner.checked = false;
  intermediate.checked = false;
  expert.checked = false;
  desiredCareer.value = "";
}
