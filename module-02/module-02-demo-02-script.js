// Lecture Activity: Expressions, Statements, and Variables
/*
Tonight you will be demonstrating your ability to work with expressions, statements, and variables. Create an HTML page and link an external JavaScript file to it. Inside the JavaScript file:

    Define a variable “myGreeting” and place a string containing a generic greeting inside it.
    Output the contents of “myGreeting” using console.log(...).
    Define a constant variable “pi” and place a number containing the value for Pi inside of it.
    Attempt to re-assign “pi” to something else - what happens? Why?
    Define a new variable “myNumber” and place a number of your choice inside it.
    Call the “min” function inside of the “Math” object on both “myNumber” and “pi” - what is the result? Why?
*/

// declares a variable named myGreeting but no value
let myGreeting;
console.log(myGreeting); // output: undefined

// assign a string value to myGreeting
myGreeting = "Hello world!";
console.log(myGreeting); // output: Hello world!

// change the string value of myGreeting
myGreeting = "Hola!";
console.log(myGreeting); // output: Hola!

// declare and assign a value to a constant variable
const pi = 3.14;
console.log(pi); //output: 3.14

// changing the value of pi will throw an error
// pi = 222;

// declare and assign a value to a variable named myNumber
let myNumber = 5;
console.log(myNumber); // output: 5

// calling a function
Math.min(myNumber, pi); // returns 3.14 but no output

// calling a function and then outputting it in console log
console.log(Math.min(myNumber, pi)); // output: 3.14
console.log(Math.max(myNumber, pi)); // output: 5