// Comparison Operators
// == : equal to
// === : equal to but with type
// != : not equal
// !== : not equal
// < : less than
// > : greater than
// >= : greater or equal
// <= : less or equal
***************

// if statement 

if (1 == 1) {
    console.log("They are the same")
}

if (2 > 1) {
    console.log("2 is greater")
}

var someNumber = 1

if (someNumber == 1) {
    console.log("The numbers are the same")
}

var yourNumber = 1
var myNumber = 2

if (yourNumber == myNumber) {
    console.log("Our numbers are the same")
} 

// Activity: What if?

var answer = prompt("Whay is your favorite color?")

if(answer == "blue") {
    console.log("That is my favorite color too!")
}

// Else statement 

if (1 == 1) {
    console.log("They are the same")
} else {
    console.log("They are not the same")
}


var name = "Denis"
var sisName = "Aizhan"

if (name == "Denis" + sisName == "Aizhan") {
    console.log("Hello my name is " + name + " and my sister name is " + sisName + " !")
} else {
    console.log("Hello, " + name + " and " + sisName + ". Nice to meet you")
}

// Activity: Now What 

var answer = prompt("What is your favorite animal?")

if (answer == "Dog") {
    console.log("That is my favorite too")
} else {
    console.log("I think that a " + answer + " would be nice also.")
}

// else if 

if (1 == 2) {
    console.log("One is the same")
} else if (2 == 2) {
    console.log("Two is the same")
} else {
    console.log("Neither are the same")
}

var myName = "Jason"
var yourName = "Denis"

if (myName == yourName) {
    console.log("We have the same name")
} else if (myName != yourName) {
    console.log("Hello " + yourName)
} else {
    console.log("I'm not sure who you are!")
}

// Activity: But what if this other thing 

var answer = prompt("What is your favorite food?")

if (answer == "pizza") {
    console.log("Pizza is great")
} else if (answer == "burger") {
    console.log("Burger are great too")
} else if (answer == "tacos") {
    console.log("Taco Tue should be everyday")
} else if (answer == "pasta") {
    console.log("Pasta is so fun to eat")
} else {
    console.log(answer + " sounds great too")
}

// Assignment: Decisions decisions 

var answer = prompt("Perfect gift for my wife?")

if (answer == "roses") {
    console.log("roses are so beautiful")
} else if (answer == "jewelry") {
    console.log("jewelry is expensive")
} else if (answer == "card") {
    console.log("only 10000000 accepted")
} else if (answer == "money") {
    console.log("money is great also")
} else if (answer == "electronics") {
    console.log("she loves Iphone")
} else if (answer == "books") {
    console.log("reading books is good")
} else if (answer == "puppy") {
    console.log("The best choice")
} else if (answer == "candy") {
    console.log("She loves Lolipops")
} else {
    console.log(answer + " not to bad as well")
}

// Comparing multiple sets of data in the if statement 

// && : and
// || : or

if (1 == 1 && 2 == 2) {
    console.log("They are both the same")
}

if (1 == 1 || 2 == 2) {
    console.log("One or both are the same")
}

// Nasting 

if (1 == 1) {
    if (2 == 2) {
        console.log("both are the same")
    } else if ( 3 == 2 ) {
        // do something
    } else {
        // do something
    }
} else if (3 == 1) {
    // do something
}