function addition (a, b) {
        return a + b
}
function subtraction (a, b) {
    return a - b 
}
function multiplication (a, b) {
    return a * b
}
function division (a, b) {
    return a / b
}
function operate (operator, a, b) {
    if (operator === 'add') {
        return addition(a,b)
} else if (operator === 'multiply') {
    return multiplication(a,b)
} else if (operator === 'subtract') {
    return subtraction(a,b)
} else if (operator === 'divide') {
    return division(a,b)
} else {
    return "Not an operator"
}
};

let result;
let num1 = 0;
let num2 = 0;
let operateBtn;
let keyContent;
let displayedNum;
let display = document.querySelector('#display')
let add = document.querySelector('input[name="add"]')
let subtract = document.querySelector('input[name="subtract"]')
let multiply = document.querySelector('input[name="multiply"]')
let divide = document.querySelector('input[name="divide"]')
let equals = document.querySelector('input[name="equal"]')

function clear () {
    let clear = document.querySelector('input[name="clear"]');
    clear.addEventListener('click', function (e) {
        display.textContent = ""
        num1 = 0;
        add.style.backgroundColor = "lightsalmon"
        subtract.style.backgroundColor = "lightsalmon"
        multiply.style.backgroundColor = "lightsalmon"
        divide.style.backgroundColor = "lightsalmon"
        decimal.disabled = false;
    })
}
clear();

function backspace () {
    let str1 = display.textContent
    let str2 = str1.slice(0, -1)
    display.textContent = str2
}
let back = document.querySelector('input[name="backspace"]')
back.addEventListener('click', function (e) {
        backspace()
    })

let decimal = document.querySelector('input[name="decimal"]')
decimal.addEventListener('click', function (e) {
            decimal.disabled = true;
    })

let keys = document.querySelectorAll('.calculatorBtn');
    keys.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            add.style.backgroundColor = "lightsalmon"
            subtract.style.backgroundColor = "lightsalmon"
            multiply.style.backgroundColor = "lightsalmon"
            divide.style.backgroundColor = "lightsalmon"
            if (display.textContent == result) {
                display.textContent = ""
                keyContent = btn.value 
                displayedNum = display.textContent
                display.textContent = displayedNum + keyContent
            }
            else {
                keyContent = btn.value 
                displayedNum = display.textContent
                display.textContent = displayedNum + keyContent 
            }
        })
    })
function plus () {
    decimal.disabled = false;
        add.style.backgroundColor = '#fcd2c2'
        if (num1 == 0) {
            num1 = parseFloat(display.textContent) 
            operateBtn = add.name
            display.textContent = ""
        } 
        else if (num1 !==0) {
            num2 = parseFloat(display.textContent)
            result = operate(operateBtn, num1, num2)
            display.textContent = result
            num1 = result
            operateBtn = add.name
        } 
}
add.addEventListener('click', function (e) {
    plus()
    })

function minus () {
    decimal.disabled = false;
        subtract.style.backgroundColor = '#fcd2c2'
        if (num1 == 0) {
            num1 = parseFloat(display.textContent) 
            operateBtn = subtract.name
            display.textContent = ""
        } 
        else if (num1 !== 0) {
            num2 = parseFloat(display.textContent)
            result = operate(operateBtn, num1, num2)
            display.textContent = result
            num1 = result
            operateBtn = subtract.name
        } 
}
subtract.addEventListener('click', function (e) {
     minus()
    })

function times() {
    decimal.disabled = false;
        multiply.style.backgroundColor = '#fcd2c2'
        if (num1 == 0) {
            num1 = parseFloat(display.textContent) 
            operateBtn = multiply.name
            display.textContent = ""
        } 
        else if (num1 !==0) {
            num2 = parseFloat(display.textContent)
            result = operate(operateBtn, num1, num2)
            display.textContent = result
            num1 = result
            operateBtn = multiply.name
        } 
}
multiply.addEventListener('click', function (e) {
    times()
    })

function divides () {
    decimal.disabled = false;
    divide.style.backgroundColor = '#fcd2c2'
    if (num1 == 0) {
        num1 = parseFloat(display.textContent) 
        operateBtn = divide.name
        display.textContent = ""
    } 
    else if (num1 !==0) {
        num2 = parseFloat(display.textContent)
        if (num2 === 0) {
            display.textContent = "Error"
        }
        else {
        result = operate(operateBtn, num1, num2)
        result = Math.round(result * 10000) / 10000
        display.textContent = result
        num1 = result
        operateBtn = divide.name
        }
}}
divide.addEventListener('click', function (e) {
     divides()
    })

function sum () {
    decimal.disabled = false;
    num2 = parseFloat(display.textContent)
    if (operateBtn === "divide" && num2 === 0) {
        display.textContent = "Error"
    }
    else {
    result = operate(operateBtn, num1, num2)
    result = Math.round(result * 10000)/ 10000
    display.textContent = result 
    num1 = 0;
    num2 = 0;
    add.style.backgroundColor = "lightsalmon"
    subtract.style.backgroundColor = "lightsalmon"
    multiply.style.backgroundColor = "lightsalmon"
    divide.style.backgroundColor = "lightsalmon"
    }
}
equals.addEventListener('click', function(e) {
    sum();
})

window.addEventListener('keydown', function (e) {
    if (e.key >= "0" && e.key <= "9" || e.key === ".") {
        if (e.key === ".") {
            decimal.disabled = true;
            if (display.textContent.includes(".")) {
                e.preventDefault();
                return false
            }
        }
        if (display.textContent == result) {
            display.textContent = ""
            keyContent = e.key 
            displayedNum = display.textContent
            display.textContent = displayedNum + keyContent
        }
        else {
            keyContent = e.key 
            displayedNum = display.textContent
            display.textContent = displayedNum + keyContent 
        }
    
}})
document.addEventListener('keydown', function (e) {
    if (e.key === "Backspace") {
        backspace()
    }
})
document.addEventListener('keydown', function(e) {
    if (e.key === "+") {
       plus()
    }
})
document.addEventListener('keydown', function (e) {
    if (e.key === "-") {
        minus()
    }
})
document.addEventListener('keydown', function(e) {
    if (e.key === "*") {
        times()
    }
})
document.addEventListener('keydown', function(e) {
    if (e.key === "/") {
        divides()
    }
})
document.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        sum()
    }
})