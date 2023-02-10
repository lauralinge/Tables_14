const table = document.querySelector("table");
const addButton = document.querySelectorAll("button")[0];
const input1 = document.querySelectorAll("input")[0];
const input2 = document.querySelectorAll("input")[1];
const input3 = document.querySelectorAll("input")[2];


addButton.addEventListener("click", function() {
  if (!input1.value && !input2.value && !input3.value) {
    alert("Įveskite duomenis!");
    return
  }

  const newRow = table.insertRow(-1)
  newRow.classList.add("table")

  const nameCell = newRow.insertCell(0)
  const lastnameCell = newRow.insertCell(1)
  const ageCell = newRow.insertCell(2)

  nameCell.innerHTML = input1.value
  lastnameCell.innerHTML = input2.value
  ageCell.innerHTML = input3.value
  
  input1.value = ""
  input2.value = ""
  input3.value = ""
})

