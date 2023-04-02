// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const numberToString = () => {
  let numberVal = document.getElementById("numberToStr").value;

  document.getElementById("displayNumber").innerHTML = numberVal;
  //console.log("The number" + ' ' + document.getElementById("numberToStr").value + ' ' + "is now a string")
  console.log("The number" + ' ' + document.getElementById("numberToStr").value.toString() + ' ' + "is now a string")
  
} 

numberToString(this)

// Write a JavaScript program to convert a string to the number.
 const stringToNumber = (inputString) => {
  console.log(Number(inputString))
 }
stringToNumber("23")


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
const variableOne = 5
const variableTwo = true
const variableThree = NaN
const variableFour = null
const variableFive = undefined
const variableSix = "Mickey"

console.log(typeof variableOne)
console.log(typeof variableTwo)
console.log(typeof variableThree)
console.log(typeof variableFour)
console.log(typeof variableFive)
console.log(typeof variableSix)


// Write a JavaScript program that adds 2 numbers together.

const addTwoNumbers = (num1, num2) => {
  return num1 + num2
}

addTwoNumbers

console.log("The total is:" + addTwoNumbers(23, 43))


// Write a JavaScript program that runs only when 2 things are true.
let myVariable = true
let yourVariable = 25

if(myVariable && yourVariable ){
  console.log("Both are true")
};



// Write a JavaScript program that runs when 1 of 2 things are true.
const tVariable = 34
const fVariable = " "

if(tVariable || fVariable){
  console.log("One is true")
}


// Write a JavaScript program that runs when both things are not true.  

myVariable = false
yourVariable = " "

if (!myVariable && yourVariable){
  console.log("Neither are true")
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
