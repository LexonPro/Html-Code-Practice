// ================= VARIABLES =================

let a = 10; // Block-scoped variable
const PI = 3.14; // Constant, cannot be changed
var old = "Avoid var"; // Function-scoped (Old JS)

// ================= DATA TYPES =================

let num = 10; // Number
let str = "Hello"; // String
let bool = true; // Boolean
let arr = [1, 2, 3]; // Array
let obj = { name: "John", age: 20 }; // Object
let noValue = null; // Empty value
let undef = undefined; // Not assigned

// ================= OPERATORS =================

let sum = 5 + 3; // Arithmetic
let compare = 5 > 3; // Comparison
let logical = true && false; // Logical operators

// ================= CONDITIONAL STATEMENTS =================

if (a > 5) {
    console.log("Greater");
} else {
    console.log("Smaller");
}

// ================= SWITCH =================

switch (a) {
    case 10:
        console.log("Ten");
        break;
    default:
        console.log("Other");
}

// ================= LOOPS =================

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

// For-of loop (arrays)
for (let item of arr) {
    console.log(item);
}

// For-in loop (objects)
for (let key in obj) {
    console.log(key, obj[key]);
}

// ================= FUNCTIONS =================

// Normal function
function add(x, y) {
    return x + y; // Return value
}

// Arrow function
const multiply = (a, b) => a * b;

// ================= DOM MANIPULATION =================

// Select elements
let title = document.getElementById("title");
let items = document.querySelectorAll(".item");

// Change text
title.innerText = "Updated Text";

// Change styles
title.style.color = "red";

// Create new element
let newDiv = document.createElement("div");
newDiv.innerText = "Hello";
document.body.appendChild(newDiv); // Add to page

// ================= EVENTS =================

document.getElementById("btn").addEventListener("click", () => {
    alert("Button clicked"); // Runs on click
});

// ================= ARRAYS =================

arr.push(4); // Add to end
arr.pop(); // Remove last
arr.shift(); // Remove first
arr.unshift(0); // Add at start

arr.map(x => x * 2); // Apply to every element
arr.filter(x => x > 2); // Filter items
arr.reduce((a, b) => a + b, 0); // Sum all values

// ================= OBJECTS =================

let user = {
    name: "Alex",
    age: 22,
    city: "Delhi",
    greet() {
        console.log("Hello!"); // Method
    }
};

console.log(user.name); // Access property
user.greet(); // Call method

// ================= CLASSES =================

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    info() {
        return `${this.name} is ${this.age} years old`;
    }
}

let p1 = new Person("John", 21);

// ================= JSON =================

let jsonText = JSON.stringify(obj); // Object → JSON
let jsonObj = JSON.parse(jsonText); // JSON → Object

// ================= ASYNC / AWAIT =================

async function getData() {
    let response = await fetch("https://api.example.com"); // Wait for API
    let data = await response.json(); // Convert to JSON
    console.log(data);
}

// ================= ERROR HANDLING =================

try {
    throw "Error occurred!";
} catch (e) {
    console.log(e); // Print error
}
