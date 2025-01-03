import { FunctionFactory } from "opinbox-survey-builder";

let randomValue = Math.random()
console.log("Loaded expressions")

// Using querySelector to select the button
const nextButton = document.querySelector('input.sd-btn.sd-navigation__next-btn[type="button"]');

// Optionally, you can verify the selection:
if (nextButton) {
    console.log('Button found:', nextButton);
} else {
    console.log('Button not found.');
}

export function testButton() {
    console.log("I execute testButton")
    if (nextButton) {
        console.log({ nextButton })
    }
    return "Hi"
}

// Create a random variable once the survey is created
export function randomOnce() {
    console.log("I execute randomOnce")
    return randomValue
}

// Create a random variable on each change of the user input
// Most likely not a very interesting expression
export function randomOnChange() {
    console.log("I execute randomOnChange")
    return Math.random()
}

FunctionFactory.Instance.register("random", randomOnce);
FunctionFactory.Instance.register("testButton", testButton);
