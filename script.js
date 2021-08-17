function add (a, b) {
    return a + b
}

console.log(add(5,5))

function subtract (a, b) {
    return a - b 
}

console.log(subtract(10,4))

function multiply (a, b) {
    return a * b
}

console.log(multiply(10,10))

function divide (a, b) {
    return a / b
}

console.log(divide(100, 10))

function operate (operator, a, b) {
    if (operator === add) {
        return add(a,b)
} else if (operator === multiply) {
    return multiply(a,b)
} else if (operator === subtract) {
    return subtract(a,b)
} else if (operator === divide) {
    return divide(a,b)
} else {
    return "Not an operator"
}
};

console.log(operate(subtract,4,4))




function one () {
    let one = document.querySelector('input[name="one"]');
    one.addEventListener('click', function () {
        let display = document.querySelector('input[name="display"]')
        display.value = 1
    })
}
one()
function two () {
    let two = document.querySelector('input[name="two"]');
    two.addEventListener('click', function (e) {
        let display = document.querySelector('input[name="display"]')
        display.value = 2
    })
}
two()

//document.querySelector('input[name="one"]').addEventListener('click', one);