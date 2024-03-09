let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById("display").value = displayValue;
}

function calculatePercentage() {
  var displayValue = document.getElementById('display').value;
  try {
      var result = eval(displayValue) / 100;
      if (result % 1 !== 0) {
        var formattedResult = result.toString().replace(/\./, ',');
          document.getElementById('display').value = formattedResult;
      } else {
          document.getElementById('display').value = result;
      }
  } catch (error) {
      document.getElementById('display').value = 'Error';
  }
}

function calculate() {
  var displayValue = document.getElementById('display').value;
  try {
      var replacedValue = displayValue.replace(/x/g, '*').replace(/:/g, '/').replace(/,/g, '.').replace(/%/g, '/100*');
      var result = eval(replacedValue);
      if (result % 1 !== 0) {
        var formattedResult = result.toString().replace(/\./, ',');
          document.getElementById('display').value = formattedResult;
      } else {
          document.getElementById('display').value = result;
      }
  } catch (error) {
      document.getElementById('display').value = 'Error';
  }
}
