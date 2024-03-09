let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

function calculate() {
  var displayValue = document.getElementById('display').value;
  try {
    var replacedValue = displayValue.replace(/x/g, '*').replace(/:/g, '/');
    var result = eval(replacedValue);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function calculatePercentage() {
  try {
    displayValue = eval(displayValue + "/100");
    document.getElementById("display").value = displayValue;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}