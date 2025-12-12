
// 3. Implement operations as separate functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

// 4. Handle invalid inputs (division by zero)
function divide(a, b) {
    if (b === 0) {
        return "Error"; // 防止除以零
    }
    return a / b;
}

// Main function to handle the calculation
function calculate() {
    // 2. Use getElementById() to fetch user inputs
    const num1Input = document.getElementById("num1").value;
    const num2Input = document.getElementById("num2").value;
    const operator = document.getElementById("operator").value;
    const resultDisplay = document.getElementById("resultDisplay");

    // 簡單驗證：確保輸入不為空
    if (num1Input === "" || num2Input === "") {
        alert("Please enter both numbers.");
        return;
    }

    // 轉換字串為數字
    const n1 = parseFloat(num1Input);
    const n2 = parseFloat(num2Input);
    
    let result = 0;

    // 根據運算符號呼叫對應函數
    if (operator === "+") {
        result = add(n1, n2);
    } else if (operator === "-") {
        result = subtract(n1, n2);
    } else if (operator === "*") {
        result = multiply(n1, n2);
    } else if (operator === "/") {
        result = divide(n1, n2);
    }

    // 5. Result Display
    if (result === "Error") {
        resultDisplay.innerText = "Result = Cannot divide by zero";
        resultDisplay.style.color = "red";
    } else {
        // rounded to 2 decimal places
        resultDisplay.innerText = "Result = " + result.toFixed(2);
        resultDisplay.style.color = "black";
    }
}