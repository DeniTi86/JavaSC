// True or False : boolean. Без ковычек это boolean с ковычками string

var isItReal = true
var isItFun = false

// version 1 : booleans with if statements

var areYouAwake = true

if (areYouAwake == true) {
    console.log("Glad you are awake")
}

// version 2 : without "== true"

var areYouHappy = true

if (areYouHappy) {
    console.log("I'am happy too")
}

// Oposite ver 1

var areYouAwake = false

if (areYouAwake == false) {
    console.log("Wake up!")
}

// ver 2

var areYouAwake = false

if (areYouAwake != true) {
    console.log("Wake up!")
}

// ver 3

var areYouAwake = false

if (!areYouAwake) {
    console.log("Cheer up!")
}