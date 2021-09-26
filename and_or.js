// Activity: if this or that

// version 1 ("and")

var answer1 = prompt("What is tour favorite color?")
var answer2 = prompt("Pick a number between 1-5")

if (answer1 == "blue" && answer2 == "1") {
    console.log("Those were my choice too")
} else {
    console.log("You choice " + answer1 + " and " + answer2)
}

// version1 ("or")

var answer1 = prompt("What is tour favorite color?")
var answer2 = prompt("Pick a number between 1-5")

if (answer1 == "blue" || answer2 == "1") {
    console.log("At least one of those match")
} else {
    console.log("You choice " + answer1 + " and " + answer2)
}

// version2

var answer1 = prompt("What is tour favorite color?")
var answer2 = prompt("Pick a number between 1-5")

if (answer1 == "blue") {
    if (answer2 == "1") {
        console.log("those were my choices too")
    } else {
        console.log("You didn't choose 1")
    }
} else {
    console.log("You didn't choose blue")
}