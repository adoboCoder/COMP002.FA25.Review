let name = "Jonathan"; // this variable is available in the entire program

if (name == "Jonathan") {
    name = "Cruz"; // name is still accessible here
    let helloStatement = "Hello there!";  // this variable is only available inside this if code block
    console.log(helloStatement);
} // after the if block completes, the helloStatement variable is no longer accessible

// the line below will throw an error because helloStatement no longer exists here
// console.log(helloStatement); 
console.log(name);