# 📘 JavaScript Basics

JavaScript is a versatile, high-level programming language used to create dynamic and interactive web pages. It runs in the browser and can also be used on the server side (e.g., with Node.js).

---

## 📝 Table of Contents

1. [Variables](#variables)
2. [Data Types](#data-types)
3. [Functions](#functions)
4. [Conditionals](#conditionals)
5. [Loops](#loops)
6. [Arrays](#arrays)
7. [Objects](#objects)
8. [DOM Manipulation](#dom-manipulation-browser)
9. [Event Listeners](#event-listeners)

---

## 📦 Variables

```js
let name = "Alice";   // can be reassigned
const age = 30;       // cannot be reassigned
var city = "Paris";   // old syntax, avoid using
```

---

## 📂 Data Types

```js
let str = "hello";         // string
let num = 42;              // number
let isActive = true;       // boolean
let nothing = null;        // null
let notDefined;            // undefined
let sym = Symbol("id");    // symbol
```

---

## 🔧 Functions

```js
// Function declaration
function greet(name) {
  return "Hello " + name;
}

// Arrow function
const add = (a, b) => a + b;

console.log(greet("Alice"));  // Hello Alice
console.log(add(2, 3));       // 5
```

---

## 🔀 Conditionals

```js
let age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Ternary
let status = age >= 18 ? "Adult" : "Minor";
```

---

## 🔁 Loops

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

---

## 📜 Arrays

```js
let fruits = ["apple", "banana", "cherry"];

console.log(fruits[1]);       // banana
fruits.push("date");          // add to end
fruits.pop();                 // remove from end
fruits.forEach(f => console.log(f));  // loop
```

---

## 🧱 Objects

```js
let person = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log("Hi, I'm " + this.name);
  }
};

console.log(person.name);    // Alice
person.greet();              // Hi, I'm Alice
```

---

## 🌐 DOM Manipulation (Browser)

```html
<!-- index.html -->
<p id="demo">Hello</p>
```

```js
// script.js
let element = document.getElementById("demo");
element.textContent = "Goodbye";
```

---

## 🎯 Event Listeners

```html
<!-- index.html -->
<button id="clickMe">Click Me</button>
```

```js
// script.js
document.getElementById("clickMe").addEventListener("click", () => {
  alert("Button clicked!");
});
```

---

## 📌 Summary

JavaScript is essential for building interactive websites. These basics form the foundation for modern tools like React, Node.js, and frameworks like Vue or Angular.

---
