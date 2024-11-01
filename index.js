function calculateTotal() {
    // Get the input values
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    // Validate inputs
    if (isNaN(subtotal) || isNaN(tipPercentage) || subtotal < 0 || tipPercentage < 0) {
        alert("Please enter valid numbers for subtotal and tip percentage.");
        return;
    }

    // Calculate the total amount including tip
    const tipAmount = (tipPercentage / 100) * subtotal;
    const totalAmount = subtotal + tipAmount;

    // Display the result
    const resultElement = document.getElementById("result");
    resultElement.innerText = "Total Amount (including tip): $" + totalAmount.toFixed(2);
}
