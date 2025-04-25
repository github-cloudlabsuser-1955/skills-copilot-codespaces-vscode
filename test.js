// Calculator class definition
class Calculator {
    // Method to add two numbers
    add(a, b) {
        return a + b;
    }

    // Method to subtract two numbers
    subtract(a, b) {
        return a - b;
    }

    // Method to multiply two numbers
    multiply(a, b) {
        return a * b;
    }

    // Method to divide two numbers
    divide(a, b) {
        if (b === 0) {
            return "Error! Division by zero.";
        }
        return a / b;
    }
}

// Main program
function main() {
    const calculator = new Calculator();

    console.log("Welcome to the Calculator!");
    console.log("Options:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");

    const prompt = require("prompt-sync")();
    const choice = parseInt(prompt("Enter your choice (1/2/3/4): "));

    if ([1, 2, 3, 4].includes(choice)) {
        const num1 = parseFloat(prompt("Enter the first number: "));
        const num2 = parseFloat(prompt("Enter the second number: "));

        let result;
        switch (choice) {
            case 1:
                result = calculator.add(num1, num2);
                console.log(`The result is: ${result}`);
                break;
            case 2:
                result = calculator.subtract(num1, num2);
                console.log(`The result is: ${result}`);
                break;
            case 3:
                result = calculator.multiply(num1, num2);
                console.log(`The result is: ${result}`);
                break;
            case 4:
                result = calculator.divide(num1, num2);
                console.log(`The result is: ${result}`);
                break;
        }
    } else {
        console.log("Invalid choice. Please restart the program and select a valid option.");
    }
}

// Run the main program
main();