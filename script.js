// make function that actually adds
function addition(num1, num2) {
    const sum = num1 + num2

    console.log(sum)
    return sum
}
addition(5, 11)

// input values
const inputOne = document.querySelector("#firstNumber")

const inputTwo = document.querySelector("#secondNumber")

// my attempt at making the button work
document.querySelector("#addButton").addEventListener("click", function () {
    if (event.target.id === "addButton") {
        console.log("You clicked")
    }
    // addition(parseInt(inputOne.value), parseInt(inputTwo.value))
    document.querySelector("#answer").innerHTML += `<div>Your answer is ${addition(parseInt(inputOne.value), parseInt(inputTwo.value))}`

})

// creating subtraction function
function subtraction(num1, num2) {
    const sum = num1 - num2

    console.log(sum)
    return sum
}

subtraction(9, 7)

// create button that prints answer to the dom
document.querySelector("#subtractButton").addEventListener("click", function () {
    if (event.target.id === "subtractButton") {
        console.log("You clicked")
    }

    document.querySelector("#answer").innerHTML += `<div>Your answer is ${subtraction(parseInt(inputOne.value), parseInt(inputTwo.value))}`

})