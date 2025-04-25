const { execSync } = require("child_process");
const fs = require("fs");

describe("Calculator Main Program", () => {
    const testFilePath = "./test.js";

    beforeAll(() => {
        if (!fs.existsSync(testFilePath)) {
            throw new Error("test.js file not found. Ensure the file exists in the same directory.");
        }
    });

    it("should display the welcome message and options", () => {
        const output = execSync(`node ${testFilePath}`, { input: "\n" }).toString();
        expect(output).toContain("Welcome to the Calculator!");
        expect(output).toContain("Options:");
        expect(output).toContain("1. Add");
        expect(output).toContain("2. Subtract");
        expect(output).toContain("3. Multiply");
        expect(output).toContain("4. Divide");
    });

    it("should perform addition correctly", () => {
        const output = execSync(`node ${testFilePath}`, { input: "1\n5\n3\n" }).toString();
        expect(output).toContain("The result is: 8");
    });

    it("should perform subtraction correctly", () => {
        const output = execSync(`node ${testFilePath}`, { input: "2\n10\n4\n" }).toString();
        expect(output).toContain("The result is: 6");
    });

    it("should perform multiplication correctly", () => {
        const output = execSync(`node ${testFilePath}`, { input: "3\n6\n7\n" }).toString();
        expect(output).toContain("The result is: 42");
    });

    it("should handle division correctly", () => {
        const output = execSync(`node ${testFilePath}`, { input: "4\n20\n4\n" }).toString();
        expect(output).toContain("The result is: 5");
    });

    it("should handle division by zero", () => {
        const output = execSync(`node ${testFilePath}`, { input: "4\n10\n0\n" }).toString();
        expect(output).toContain("Error! Division by zero.");
    });

    it("should handle invalid choices", () => {
        const output = execSync(`node ${testFilePath}`, { input: "5\n" }).toString();
        expect(output).toContain("Invalid choice. Please restart the program and select a valid option.");
    });
});