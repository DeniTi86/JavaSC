// Activity: Truth or dare 

var answer = prompt("Do you like cheese? Type Y or N")
var isItTrue

if (answer == "Y") {
    isItTrue = true
    console.log("Your answer was " + isItTrue)
} else if (answer == "N") {
    isItTrue = false
    console.log("Your answer was " + isItTrue)
} else {
    console.log("I don't understand")
}

