//input1, input2, total

function calculate() {
    // create the variables
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let total = document.getElementById("total");

// Convert inputs to numbers
  let num1 = Number(input1);
  let num2 = Number(input2);

// Check if input is not a number
  if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid Inputs!");
    return;
  }

  // Multiply and display in the result box
  let result = num1 * num2;
  document.getElementById("total").value = result;
    console.log("Results", result);
}