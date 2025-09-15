
// javascriptQuestion.js
export const questions = {
    core: [
        // 1. Difference between var, let, and const
        {
            id: 1,
            question: "What is the difference between var, let, and const in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `In JavaScript, \`var\`, \`let\`, and \`const\` are used to declare variables, but they differ in **scope, hoisting, and mutability**.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Feature", "var", "let", "const"],
                        rows: [
                            ["Scope", "Function-scoped", "Block-scoped", "Block-scoped"],
                            ["Hoisting", "Hoisted & initialized as undefined", "Hoisted but not initialized (TDZ)", "Hoisted but not initialized (TDZ)"],
                            ["Re-declaration", "Allowed", "Not allowed in same scope", "Not allowed"],
                            ["Re-assignment", "Allowed", "Allowed", "Not allowed"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10
}

function testLet() {
  if (true) {
    let y = 20;
  }
  console.log(y); // ReferenceError
}

const z = 30;
z = 40; // TypeError`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use \`const\` by default.  
- Use \`let\` when reassignment is required.  
- Avoid \`var\` in modern code.`
                }
            ]
        },

        // 2. Explain hoisting
        {
            id: 2,
            question: "Explain hoisting in JavaScript with examples.",
            answer: [
                {
                    type: "text",
                    content: `**Hoisting** is JavaScript's default behavior of moving **variable and function declarations** to the top of their scope before execution.`
                },
                {
                    type: "list",
                    content: [
                        "Variables with **var** are hoisted and initialized as `undefined`.",
                        "Variables with **let/const** are hoisted but stay in the **Temporal Dead Zone** until initialized.",
                        "Function declarations are hoisted fully.",
                        "Function expressions are not hoisted with values."
                    ]
                },
                {
                    type: "code",
                    content: `console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;

sayHello(); // Works
function sayHello() { console.log("Hello"); }

sayHi(); // TypeError
var sayHi = function() { console.log("Hi"); };`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Declare variables at the top of their scope.  
- Use \`let\` and \`const\` to avoid TDZ confusion.  
- Place function declarations before use.`
                }
            ]
        },

        // 3. What is a closure?
        {
            id: 3,
            question: "What is a closure in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `A **closure** is a function that retains access to its outer scope variables even after the outer function has finished executing.`
                },
                {
                    type: "code",
                    content: `function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    return counter;
  }
}
const inc = outer();
console.log(inc()); // 1
console.log(inc()); // 2`,
                    language: "javascript"
                },
                {
                    type: "list",
                    content: [
                        "Used for **data privacy** (private variables).",
                        "Useful in **callbacks and event handlers**.",
                        "Helps in **state preservation**."
                    ]
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use closures to avoid polluting global scope.  
- Clean up references to prevent memory leaks.`
                }
            ]
        },

        // 4. What are higher-order functions?
        {
            id: 4,
            question: "What are higher-order functions in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `A **higher-order function (HOF)** is a function that either:  
1. Takes one or more functions as arguments, OR  
2. Returns a function.`
                },
                {
                    type: "code",
                    content: `function multiplier(factor) {
  return function(x) {
    return x * factor;
  }
}
const double = multiplier(2);
console.log(double(5)); // 10

// Example with built-in HOF
const nums = [1,2,3];
const squares = nums.map(n => n * n);`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use HOFs like \`map\`, \`filter\`, \`reduce\` for clean, declarative code.`
                }
            ]
        },

        // 5. call, apply, bind
        {
            id: 5,
            question: "Explain call, apply, and bind methods in JavaScript.",
            answer: [
                {
                    type: "text",
                    content: `All three are used to explicitly set the \`this\` value in a function.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Method", "Usage", "Difference"],
                        rows: [
                            ["call()", "fn.call(thisArg, arg1, arg2...)", "Arguments passed individually"],
                            ["apply()", "fn.apply(thisArg, [args])", "Arguments passed as array"],
                            ["bind()", "fn.bind(thisArg, arg1...)", "Returns new function with bound this"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `const person = { name: "Mukesh" };
function greet(msg) {
  console.log(msg + ", " + this.name);
}
greet.call(person, "Hello"); // Hello, Mukesh
greet.apply(person, ["Hi"]); // Hi, Mukesh

const bound = greet.bind(person, "Welcome");
bound(); // Welcome, Mukesh`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use \`call/apply\` when you need immediate invocation.  
- Use \`bind\` when you need to preserve \`this\` for later use (e.g., event handlers).`
                }
            ]
        },

        // 6. Shallow vs Deep copy
        {
            id: 6,
            question: "What is the difference between shallow copy and deep copy in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `A **shallow copy** copies only the first level of an object, while a **deep copy** recursively copies all nested objects.`
                },
                {
                    type: "code",
                    content: `const obj = { a: 1, b: { c: 2 } };

// Shallow copy
const shallow = { ...obj };
shallow.b.c = 99;
console.log(obj.b.c); // 99 (affected)

// Deep copy
const deep = JSON.parse(JSON.stringify(obj));
deep.b.c = 42;
console.log(obj.b.c); // 99 (not affected)`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use structuredClone() (modern browsers) for deep copy.  
- Use libraries like Lodash (\`_.cloneDeep\`) for complex objects.`
                }
            ]
        },

        // 7. Arrow functions
        {
            id: 7,
            question: "What are arrow functions and how do they differ from regular functions?",
            answer: [
                {
                    type: "text",
                    content: `Arrow functions are a concise syntax for writing functions in ES6. They differ mainly in how they handle \`this\`.`
                },
                {
                    type: "list",
                    content: [
                        "Do not have their own \`this\`; they inherit from enclosing scope.",
                        "Cannot be used as constructors.",
                        "Do not have \`arguments\` object."
                    ]
                },
                {
                    type: "code",
                    content: `const regular = function() { return this; };
const arrow = () => this;

console.log(regular()); // global or undefined
console.log(arrow());   // lexical this`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use arrow functions for callbacks and short functions.  
- Avoid them when you need \`this\` binding (e.g., object methods).`
                }
            ]
        },

        // 8. null, undefined, NaN
        {
            id: 8,
            question: "What is the difference between null, undefined, and NaN in JavaScript?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Value", "Type", "Meaning"],
                        rows: [
                            ["null", "object", "Intentional absence of value"],
                            ["undefined", "undefined", "Variable declared but not assigned"],
                            ["NaN", "number", "Invalid number result (e.g., 0/0, parseInt('abc'))"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `let a;
console.log(a); // undefined

let b = null;
console.log(b); // null

console.log(0/0); // NaN`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use \`null\` intentionally when resetting values.  
- Handle NaN checks using \`Number.isNaN()\`.`
                }
            ]
        },

        // 9. == vs ===
        {
            id: 9,
            question: "What is the difference between == and === in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: "`==` is loose equality (performs type coercion). `===` is strict equality (no coercion)."
                },
                {
                    type: "code",
                    content: `console.log(5 == "5");  // true (type conversion)
console.log(5 === "5"); // false (no conversion)`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Always use \`===\` unless intentional coercion is required.`
                }
            ]
        },

        // 10. Strict mode
        {
            id: 10,
            question: "What is strict mode in JavaScript and why is it used?",
            answer: [
                {
                    type: "text",
                    content: `Strict mode is a restricted variant of JavaScript that helps catch errors and enforces cleaner coding practices.`
                },
                {
                    type: "list",
                    content: [
                        "Disallows undeclared variables.",
                        "Prevents accidental deletion of variables.",
                        "Disables \`this\` pointing to global object in functions.",
                        "Throws errors for unsafe actions."
                    ]
                },
                {
                    type: "code",
                    content: `"use strict";
x = 10; // ReferenceError: x is not defined`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Always enable strict mode (modern JS modules have it by default).`
                }
            ]
        }

    ],
    asynchronous: [
        // 11. What is the event loop in JavaScript?
        {
            id: 11,
            question: "What is the event loop in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `The **event loop** is a mechanism in JavaScript that allows non-blocking asynchronous operations. Since JavaScript is **single-threaded**, the event loop manages execution by handling the **call stack, callback queue, and microtask queue**.`
                },
                {
                    type: "list",
                    content: [
                        "Call Stack → Executes synchronous code.",
                        "Web APIs → Handle async tasks (setTimeout, fetch, DOM events).",
                        "Callback Queue → Stores async callbacks (macrotasks).",
                        "Microtask Queue → Stores promises/callbacks (microtasks)."
                    ]
                },
                {
                    type: "code",
                    content: `console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Output: Start → End → Promise → Timeout`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Prefer Promises/async-await over callbacks.  
- Keep async tasks small to avoid blocking UI.`
                }
            ]
        },

        // 12. Callback vs Promise vs Async/Await
        {
            id: 12,
            question: "What is the difference between callbacks, promises, and async/await?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Feature", "Callbacks", "Promises", "Async/Await"],
                        rows: [
                            ["Definition", "Functions passed as arguments to handle async results", "Object representing future completion/failure", "Syntactic sugar over Promises"],
                            ["Readability", "Callback hell (nested)", "Chained with then/catch", "Looks synchronous"],
                            ["Error Handling", "Manually handled", "catch()", "try...catch"],
                            ["Best Use", "Legacy APIs", "Modern async tasks", "Clean & readable async code"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `// Callback
setTimeout(() => console.log("Callback"), 1000);

// Promise
fetch("/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/Await
async function getData() {
  try {
    const res = await fetch("/data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use \`async/await\` for cleaner flow.  
- Avoid deeply nested callbacks.  
- Always handle rejections with \`.catch()\` or try/catch.`
                }
            ]
        },

        // 13. Microtask vs Macrotask
        {
            id: 13,
            question: "What is the difference between microtasks and macrotasks in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `JavaScript schedules asynchronous tasks in two categories:  
- **Microtasks** → Higher priority (executed immediately after current task).  
- **Macrotasks** → Lower priority (executed after microtasks).`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Type", "Examples", "Execution"],
                        rows: [
                            ["Microtask", "Promise.then, queueMicrotask, MutationObserver", "Executed before next rendering"],
                            ["Macrotask", "setTimeout, setInterval, setImmediate", "Executed after microtasks"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `setTimeout(() => console.log("Macrotask"), 0);
Promise.resolve().then(() => console.log("Microtask"));
console.log("Sync");

// Output: Sync → Microtask → Macrotask`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use microtasks (Promises) for immediate execution.  
- Use macrotasks (setTimeout) when you need to defer work until after rendering.`
                }
            ]
        },

        // 14. What is a Promise and how does it work?
        {
            id: 14,
            question: "What is a Promise in JavaScript and how does it work?",
            answer: [
                {
                    type: "text",
                    content: `A **Promise** is an object representing the eventual completion (success) or failure of an asynchronous operation.`
                },
                {
                    type: "list",
                    content: [
                        "States: pending → fulfilled → rejected",
                        "Methods: then(), catch(), finally()"
                    ]
                },
                {
                    type: "code",
                    content: `const promise = new Promise((resolve, reject) => {
  let success = true;
  success ? resolve("Done") : reject("Error");
});

promise
  .then(res => console.log(res))
  .catch(err => console.error(err))
  .finally(() => console.log("Cleanup"));`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Always handle both resolve & reject.  
- Use \`Promise.all\` for parallel tasks.  
- Use \`Promise.race\` when you need the fastest result.`
                }
            ]
        },

        // 15. async/await
        {
            id: 15,
            question: "Explain async/await in JavaScript.",
            answer: [
                {
                    type: "text",
                    content: `**async/await** is syntactic sugar over Promises, making asynchronous code look synchronous.`
                },
                {
                    type: "code",
                    content: `async function fetchData() {
  try {
    const res = await fetch("https://api.example.com");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}
fetchData();`,
                    language: "javascript"
                },
                {
                    type: "list",
                    content: [
                        "async → function always returns a Promise",
                        "await → pauses execution until Promise resolves/rejects"
                    ]
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Always wrap \`await\` in try...catch.  
- Use \`Promise.all\` inside async for parallel tasks.`
                }
            ]
        },

        // 16. Event Delegation
        {
            id: 16,
            question: "What is event delegation in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `**Event delegation** is a technique where a parent element handles events for its child elements using event bubbling.`
                },
                {
                    type: "code",
                    content: `document.getElementById("list").addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});

// Instead of attaching event listener to each <li>`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Improves performance (fewer listeners).  
- Useful for dynamically added elements.`
                }
            ]
        },

        // 17. setTimeout vs setInterval vs requestAnimationFrame
        {
            id: 17,
            question: "What is the difference between setTimeout, setInterval, and requestAnimationFrame?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Method", "Usage", "When to Use"],
                        rows: [
                            ["setTimeout", "Executes once after delay", "Delayed tasks"],
                            ["setInterval", "Executes repeatedly at interval", "Polling, repeated tasks"],
                            ["requestAnimationFrame", "Optimized for animation frames", "Smooth UI animations"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `setTimeout(() => console.log("Timeout"), 1000);

let count = 0;
const interval = setInterval(() => {
  console.log(++count);
  if (count === 3) clearInterval(interval);
}, 1000);

function animate() {
  console.log("Frame");
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use \`setTimeout\` for one-time tasks.  
- Use \`setInterval\` carefully (consider drift).  
- Use \`requestAnimationFrame\` for animations (better performance).`
                }
            ]
        },
    ],
    objects_oops: [
        // 18. What are JavaScript objects?
        {
            id: 18,
            question: "What are JavaScript objects?",
            answer: [
                {
                    type: "text",
                    content: `A **JavaScript object** is a collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type (primitive or reference). Objects allow structured storage and represent real-world entities.`
                },
                {
                    type: "code",
                    content: `const user = {
  name: "Alice",
  age: 25,
  isAdmin: true,
  greet: function() {
    console.log("Hello " + this.name);
  }
};

user.greet(); // Hello Alice`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use **dot notation** for readability (\`obj.key\`).  
- Use **Object.freeze()** or **Object.seal()** for immutability when needed.  
- Prefer **classes** for reusable object blueprints.`
                }
            ]
        },

        // 19. What is prototypal inheritance in JavaScript?
        {
            id: 19,
            question: "What is prototypal inheritance in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `**Prototypal inheritance** is a feature where objects can inherit properties and methods from another object (its prototype). Every JS object has an internal link to its prototype (accessible via __proto__).`
                },
                {
                    type: "code",
                    content: `const parent = {
  greet() { console.log("Hello from parent"); }
};

const child = Object.create(parent);
child.greet(); // Hello from parent`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use \`Object.create()\` for prototype chains.  
- Prefer ES6 \`class\` syntax for clarity.  
- Avoid modifying \`Object.prototype\` (can break built-ins).`
                }
            ]
        },

        // 20. Difference between classical OOP and prototypal OOP
        {
            id: 20,
            question: "What is the difference between classical OOP and prototypal OOP?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Aspect", "Classical OOP", "Prototypal OOP"],
                        rows: [
                            ["Inheritance", "Class-based hierarchy", "Objects inherit from objects"],
                            ["Flexibility", "Rigid structure", "More flexible and dynamic"],
                            ["Implementation", "Defined classes & constructors", "Prototype chains"],
                            ["Syntax", "Java, C++ style classes", "JavaScript’s Object.create() & prototypes"]
                        ]
                    }
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- In JavaScript, prefer \`class\` for readability but understand it's syntactic sugar over prototypes.`
                }
            ]
        },

        // 21. Difference between deep copy and shallow copy in JavaScript
        {
            id: 21,
            question: "What is the difference between deep copy and shallow copy in JavaScript?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Type", "Definition", "Example"],
                        rows: [
                            ["Shallow Copy", "Copies only references of nested objects", "Object.assign({}, obj)"],
                            ["Deep Copy", "Creates a full independent copy", "structuredClone(obj) or JSON.parse(JSON.stringify(obj))"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `const obj = { a: 1, b: { c: 2 } };

// Shallow Copy
const shallow = { ...obj };
shallow.b.c = 99;
console.log(obj.b.c); // 99 (linked)

// Deep Copy
const deep = structuredClone(obj);
deep.b.c = 42;
console.log(obj.b.c); // 99 (unchanged)`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use \`structuredClone\` in modern JS for deep copies.  
- Avoid JSON.parse(JSON.stringify()) if object contains Dates, Functions, or undefined.`
                }
            ]
        },

        // 22. What is the difference between == and === in JavaScript?
        {
            id: 22,
            question: "What is the difference between == and === in JavaScript?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Operator", "Definition", "Example"],
                        rows: [
                            ["== (Loose Equality)", "Compares values with type coercion", `"5" == 5 → true`],
                            ["=== (Strict Equality)", "Compares values and types", `"5" === 5 → false`]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `console.log(0 == false);  // true (coercion)
console.log(0 === false); // false (different types)`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practice:**  
- Always use \`===\` unless type coercion is explicitly desired.`
                }
            ]
        },

        // 23. What are getters and setters in JavaScript?
        {
            id: 23,
            question: "What are getters and setters in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `Getters and setters allow controlled access to object properties.  
- **Getter** → retrieves a property value.  
- **Setter** → updates a property value with validation or side effects.`
                },
                {
                    type: "code",
                    content: `const user = {
  firstName: "Alice",
  lastName: "Smith",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  }
};

console.log(user.fullName); // Alice Smith
user.fullName = "Bob Jones";
console.log(user.firstName); // Bob`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use getters/setters for computed properties.  
- Avoid heavy logic inside them (keep them fast).`
                }
            ]
        },

        // 24. What are JavaScript classes?
        {
            id: 24,
            question: "What are JavaScript classes?",
            answer: [
                {
                    type: "text",
                    content: `A **class** in JavaScript is syntactic sugar over prototypes that provides a cleaner, more familiar syntax for object creation and inheritance.`
                },
                {
                    type: "code",
                    content: `class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a noise");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks");
  }
}

const d = new Dog("Rex");
d.speak(); // Rex barks`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use classes for reusable blueprints.  
- Prefer composition over deep inheritance hierarchies.`
                }
            ]
        },

        // 25. What is the difference between var, let, and const in JavaScript?
        {
            id: 25,
            question: "What is the difference between var, let, and const in JavaScript?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Keyword", "Scope", "Re-declaration", "Re-assignment", "Hoisting"],
                        rows: [
                            ["var", "Function-scoped", "Allowed", "Allowed", "Hoisted (initialized as undefined)"],
                            ["let", "Block-scoped", "Not allowed", "Allowed", "Hoisted but in TDZ"],
                            ["const", "Block-scoped", "Not allowed", "Not allowed", "Hoisted but in TDZ"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `var x = 1;
let y = 2;
const z = 3;

// Re-declare
var x = 10; // OK
// let y = 20; // Error
// const z = 30; // Error`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Prefer \`const\` by default.  
- Use \`let\` when reassignment is required.  
- Avoid \`var\` in modern code.`
                }
            ]
        },
    ],
    es6: [
        // 26. What are arrow functions in JavaScript?
        {
            id: 26,
            question: "What are arrow functions in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `An **arrow function** is a concise syntax introduced in ES6 for writing functions. Unlike regular functions, arrow functions do **not have their own 'this', arguments, or prototype**.`
                },
                {
                    type: "code",
                    content: `// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(2, 3));      // 5
console.log(addArrow(2, 3)); // 5`,
                    language: "javascript"
                },
                {
                    type: "list",
                    content: [
                        "Shorter syntax",
                        "No 'this' binding (inherits from lexical scope)",
                        "Cannot be used as constructors"
                    ]
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use arrow functions for callbacks.  
- Avoid arrow functions for object methods where \`this\` is required.`
                }
            ]
        },

        // 27. What are template literals?
        {
            id: 27,
            question: "What are template literals in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `**Template literals** (backticks \\\` \\\`) allow embedding variables and expressions into strings using \${}. They support **multi-line strings** and **string interpolation**.`
                },
                {
                    type: "code",
                    content: `const name = "Alice";
const age = 25;

const greeting = \`Hello, my name is \${name} and I am \${age} years old.\`;
console.log(greeting);

// Multi-line string
const multiLine = \`
This is
a multi-line
string.
\`;`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use template literals instead of string concatenation.  
- Use for generating HTML snippets dynamically.`
                }
            ]
        },

        // 28. What is destructuring in JavaScript?
        {
            id: 28,
            question: "What is destructuring in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `**Destructuring** is a syntax introduced in ES6 that allows extracting values from arrays or properties from objects into distinct variables.`
                },
                {
                    type: "code",
                    content: `// Array destructuring
const [a, b] = [10, 20];
console.log(a, b); // 10 20

// Object destructuring
const user = { name: "Alice", age: 25 };
const { name, age } = user;
console.log(name, age); // Alice 25`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use default values while destructuring.  
- Destructure function parameters for clarity.`
                }
            ]
        },

        // 29. What are rest and spread operators?
        {
            id: 29,
            question: "What are rest and spread operators in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `Both use the **... (three dots)** syntax:  
- **Rest** → collects arguments into an array.  
- **Spread** → expands elements of an array/object.`
                },
                {
                    type: "code",
                    content: `// Rest
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6

// Spread
const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use rest for variadic functions.  
- Use spread for cloning and merging arrays/objects.`
                }
            ]
        },

        // 30. What are JavaScript modules (import/export)?
        {
            id: 30,
            question: "What are JavaScript modules (import/export)?",
            answer: [
                {
                    type: "text",
                    content: `ES6 introduced **modules** that allow splitting code into reusable files using \`export\` and \`import\`.`
                },
                {
                    type: "code",
                    content: `// math.js
export const add = (a, b) => a + b;
export default function multiply(a, b) {
  return a * b;
}

// app.js
import multiply, { add } from "./math.js";
console.log(add(2, 3));      // 5
console.log(multiply(2, 3)); // 6`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use **default export** for main functionality.  
- Use **named exports** for utilities.  
- Keep modules small and focused.`
                }
            ]
        },

        // 31. What are Map, Set, WeakMap, and WeakSet?
        {
            id: 31,
            question: "What are Map, Set, WeakMap, and WeakSet in JavaScript?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Collection", "Description", "Unique Features"],
                        rows: [
                            ["Map", "Key-value pairs", "Keys can be any type"],
                            ["Set", "Unique values", "Prevents duplicates"],
                            ["WeakMap", "Key-value pairs", "Keys must be objects, garbage-collected"],
                            ["WeakSet", "Unique object values", "Objects only, garbage-collected"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `const map = new Map();
map.set("a", 1);
console.log(map.get("a")); // 1

const set = new Set([1, 2, 2, 3]);
console.log(set); // Set {1, 2, 3}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use Map when keys are not just strings.  
- Use Set to store unique values.  
- Use WeakMap/WeakSet for memory-sensitive objects.`
                }
            ]
        },

        // 32. What are default parameters in JavaScript?
        {
            id: 32,
            question: "What are default parameters in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `Default parameters allow assigning a default value to function parameters if no value or \`undefined\` is passed.`
                },
                {
                    type: "code",
                    content: `function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();        // Hello Guest
greet("Alice"); // Hello Alice`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practice:**  
- Use default parameters instead of manual checks (\`if (!param) {...}\`).`
                }
            ]
        },

        // 33. What are optional chaining and nullish coalescing operators?
        {
            id: 33,
            question: "What are optional chaining and nullish coalescing operators in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `ES2020 introduced two operators:  
- **Optional chaining (?.)** → safely access nested properties without errors.  
- **Nullish coalescing (??)** → provide fallback only for null or undefined (not falsy values).`
                },
                {
                    type: "code",
                    content: `const user = { profile: { name: "Alice" } };

console.log(user.profile?.name);  // Alice
console.log(user.address?.city);  // undefined

const value = null ?? "default";
console.log(value); // "default"`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use \`?.\` to avoid verbose null checks.  
- Use \`??\` instead of \`||\` when 0 or "" should not be replaced.`
                }
            ]
        },
    ],
    dom_browser: [
        // 34. What is the DOM in JavaScript?
        {
            id: 34,
            question: "What is the DOM in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `The **DOM (Document Object Model)** is a programming interface for HTML and XML documents. It represents the page as a tree structure where each node is an object that can be manipulated using JavaScript.`
                },
                {
                    type: "code",
                    content: `document.title = "New Page Title";
const heading = document.getElementById("main-heading");
heading.textContent = "Hello, DOM!";`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Avoid excessive DOM manipulation (it is slow).  
- Use modern APIs like \`querySelector\`.  
- Use Document Fragments or virtual DOM (e.g., React) for efficiency.`
                }
            ]
        },

        // 35. How do you select elements in the DOM?
        {
            id: 35,
            question: "How do you select elements in the DOM?",
            answer: [
                {
                    type: "list",
                    content: [
                        "`document.getElementById('id')` → Selects element by ID",
                        "`document.getElementsByClassName('class')` → Returns HTMLCollection",
                        "`document.getElementsByTagName('tag')` → Returns HTMLCollection",
                        "`document.querySelector('selector')` → Returns first matching element",
                        "`document.querySelectorAll('selector')` → Returns NodeList of matches"
                    ]
                },
                {
                    type: "code",
                    content: `const el1 = document.getElementById("header");
const el2 = document.querySelector(".menu");
const els = document.querySelectorAll("p");`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Prefer \`querySelector\` and \`querySelectorAll\` (support CSS selectors).  
- Use IDs for unique elements, classes for groups.`
                }
            ]
        },

        // 36. What are DOM events and how are they handled?
        {
            id: 36,
            question: "What are DOM events and how are they handled?",
            answer: [
                {
                    type: "text",
                    content: `**Events** are actions or occurrences (like clicks, key presses, mouse movement) that happen in the browser.  
Events can be handled using:  
1. Inline event handlers (not recommended)  
2. DOM Level 0 (element.onclick = function)  
3. DOM Level 2 (addEventListener - preferred)`
                },
                {
                    type: "code",
                    content: `// Preferred modern way
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  alert("Button clicked!");
});`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use \`addEventListener\` (allows multiple handlers, supports bubbling/capturing).  
- Remove event listeners when not needed (memory efficiency).`
                }
            ]
        },

        // 37. What is the difference between localStorage, sessionStorage, and cookies?
        {
            id: 37,
            question: "What is the difference between localStorage, sessionStorage, and cookies?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Feature", "localStorage", "sessionStorage", "Cookies"],
                        rows: [
                            ["Capacity", "5-10 MB", "5-10 MB", "~4 KB"],
                            ["Expires", "Never (until cleared)", "On tab/browser close", "Manually set"],
                            ["Sent to Server", "No", "No", "Yes, with every request"],
                            ["Use Case", "Persistent client data", "Temporary session data", "Authentication, server communication"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme")); // dark

sessionStorage.setItem("token", "abc123");

document.cookie = "user=Alice; expires=Fri, 31 Dec 2025 23:59:59 UTC";`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use localStorage for non-sensitive persistent data.  
- Use sessionStorage for per-session state.  
- Use cookies only when server needs the data (e.g., authentication).`
                }
            ]
        },

        // 38. What is event bubbling and capturing?
        {
            id: 38,
            question: "What is event bubbling and capturing?",
            answer: [
                {
                    type: "text",
                    content: `When an event occurs, it goes through **three phases**:  
1. **Capturing phase** → Event travels from root to target.  
2. **Target phase** → Event reaches the target element.  
3. **Bubbling phase** → Event bubbles back up to root.`
                },
                {
                    type: "code",
                    content: `document.getElementById("child").addEventListener(
  "click",
  () => console.log("Child clicked"),
  true // true = capture phase, false = bubble phase
);`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use bubbling (default) for most cases.  
- Use capturing when you need to intercept events early.`
                }
            ]
        },

        // 39. What is the difference between innerHTML, innerText, and textContent?
        {
            id: 39,
            question: "What is the difference between innerHTML, innerText, and textContent?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Property", "Description", "Example"],
                        rows: [
                            ["innerHTML", "Returns/sets HTML including tags", "el.innerHTML = '<b>Hi</b>'"],
                            ["innerText", "Returns/sets visible text only", "el.innerText = 'Hello'"],
                            ["textContent", "Returns/sets all text (including hidden)", "el.textContent = 'Hello'"]
                        ]
                    }
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use \`textContent\` when only text is needed (faster).  
- Avoid \`innerHTML\` with user input (XSS risk).`
                }
            ]
        },

        // 40. What are web workers in JavaScript?
        {
            id: 40,
            question: "What are web workers in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `**Web Workers** allow running JavaScript in the background on a separate thread, preventing UI blocking for heavy computations.`
                },
                {
                    type: "code",
                    content: `// worker.js
self.onmessage = (e) => {
  const result = e.data * 2;
  postMessage(result);
};

// main.js
const worker = new Worker("worker.js");
worker.postMessage(10);
worker.onmessage = (e) => console.log(e.data); // 20`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use web workers for CPU-intensive tasks.  
- Don’t manipulate DOM inside workers (not allowed).  
- Terminate unused workers to save memory.`
                }
            ]
        },
        // 66. What is the DOM in JavaScript?
        {
            id: 66,
            question: "What is the DOM in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `The **DOM (Document Object Model)** is a programming interface for web documents.  
It represents the structure of an HTML or XML document as a tree of nodes, where each node is an object that can be manipulated using JavaScript.`
                },
                {
                    type: "code",
                    content: `// Example: Changing text content
document.getElementById("title").textContent = "New Title";`,
                    language: "javascript"
                },
                {
                    type: "list",
                    content: [
                        "DOM allows dynamic updates of content, structure, and styling.",
                        "DOM is language-agnostic but most commonly manipulated using JavaScript.",
                        "Changes in the DOM immediately reflect in the rendered webpage."
                    ]
                }
            ]
        },

        // 67. Difference between DOM and BOM?
        {
            id: 67,
            question: "Difference between DOM and BOM?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Aspect", "DOM (Document Object Model)", "BOM (Browser Object Model)"],
                        rows: [
                            ["Definition", "Represents structure of the document", "Represents browser window and features"],
                            ["Objects", "document, elements, attributes", "window, navigator, screen, history"],
                            ["Usage", "Manipulating HTML & XML", "Interacting with browser outside the document"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `// DOM Example
document.querySelector("p").style.color = "blue";

// BOM Example
console.log(window.innerWidth);
alert("This is BOM feature!");`,
                    language: "javascript"
                }
            ]
        },

        // 68. What is Event Delegation in JavaScript?
        {
            id: 68,
            question: "What is Event Delegation in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `**Event Delegation** is a technique where a single event listener is attached to a parent element to manage events for its child elements.  
This works due to **event bubbling** in the DOM.`
                },
                {
                    type: "code",
                    content: `document.getElementById("list").addEventListener("click", function(e) {
  if (e.target && e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});

// <ul id="list">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>`,
                    language: "javascript"
                },
                {
                    type: "list",
                    content: [
                        "Efficient – fewer event listeners needed.",
                        "Handles dynamically added elements.",
                        "Uses event bubbling mechanism."
                    ]
                }
            ]
        },

        // 69. Difference between innerHTML, innerText, and textContent?
        {
            id: 69,
            question: "Difference between innerHTML, innerText, and textContent?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Property", "Description", "Example"],
                        rows: [
                            ["innerHTML", "Returns/sets HTML inside an element", "div.innerHTML = '<b>Hello</b>'"],
                            ["innerText", "Returns/sets *rendered* text only (ignores hidden text)", "div.innerText"],
                            ["textContent", "Returns/sets *all* text inside element (including hidden)", "div.textContent"]
                        ]
                    }
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use \`textContent\` when only text is needed (safer, avoids XSS).  
- Use \`innerHTML\` only when inserting HTML (sanitize inputs).`
                }
            ]
        },

        // 70. What is LocalStorage and SessionStorage?
        {
            id: 70,
            question: "What is LocalStorage and SessionStorage?",
            answer: [
                {
                    type: "text",
                    content: `Both are part of the **Web Storage API** in HTML5:  
- **localStorage**: Stores data with no expiration date (persists even after browser is closed).  
- **sessionStorage**: Stores data for the current session only (cleared when the tab is closed).`
                },
                {
                    type: "code",
                    content: `// localStorage
localStorage.setItem("name", "Alice");
console.log(localStorage.getItem("name")); // Alice

// sessionStorage
sessionStorage.setItem("token", "123");
console.log(sessionStorage.getItem("token")); // 123`,
                    language: "javascript"
                },
                {
                    type: "list",
                    content: [
                        "Key-value storage, up to ~5-10 MB.",
                        "Data stored as strings (need JSON for objects).",
                        "Safer than cookies for client-side storage."
                    ]
                }
            ]
        },

        // 71. Difference between cookies, localStorage, and sessionStorage?
        {
            id: 71,
            question: "Difference between cookies, localStorage, and sessionStorage?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Feature", "Cookies", "localStorage", "sessionStorage"],
                        rows: [
                            ["Size Limit", "~4KB", "5–10 MB", "5–10 MB"],
                            ["Expires", "Manual/auto via expiry", "Never (until cleared)", "On tab close"],
                            ["Sent to Server?", "Yes, with every request", "No", "No"],
                            ["Use Case", "Authentication, server tracking", "Persistent local storage", "Temporary session storage"]
                        ]
                    }
                }
            ]
        },

        // 72. What are Service Workers in JavaScript?
        {
            id: 72,
            question: "What are Service Workers in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `**Service Workers** are background scripts that run separately from the web page.  
They enable features like **offline caching, background sync, and push notifications**.`
                },
                {
                    type: "code",
                    content: `navigator.serviceWorker.register("/sw.js").then(() => {
  console.log("Service Worker registered");
});`,
                    language: "javascript"
                },
                {
                    type: "list",
                    content: [
                        "Acts as a proxy between browser and network.",
                        "Improves performance via caching strategies.",
                        "Essential for Progressive Web Apps (PWAs)."
                    ]
                }
            ]
        },

        // 73. What is the difference between synchronous and asynchronous DOM updates?
        {
            id: 73,
            question: "What is the difference between synchronous and asynchronous DOM updates?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Aspect", "Synchronous DOM Updates", "Asynchronous DOM Updates"],
                        rows: [
                            ["Execution", "UI updates immediately as script runs", "UI updates deferred until browser is ready"],
                            ["Example", "document.body.style.background = 'red';", "requestAnimationFrame, async rendering"],
                            ["Performance", "May cause layout thrashing", "Optimized for smoother rendering"]
                        ]
                    }
                }
            ]
        },

        // 74. What is Shadow DOM?
        {
            id: 74,
            question: "What is Shadow DOM?",
            answer: [
                {
                    type: "text",
                    content: `The **Shadow DOM** is a web standard that allows encapsulation of DOM and CSS in a component, preventing style or DOM conflicts with the rest of the page.`
                },
                {
                    type: "code",
                    content: `const shadow = document.getElementById("host").attachShadow({ mode: "open" });
shadow.innerHTML = "<style>p{color:red;}</style><p>Shadow DOM content</p>";`,
                    language: "javascript"
                },
                {
                    type: "list",
                    content: [
                        "Encapsulates styles and DOM structure.",
                        "Used in Web Components.",
                        "Prevents CSS bleeding across components."
                    ]
                }
            ]
        },

        // 75. What are Custom Events in JavaScript?
        {
            id: 75,
            question: "What are Custom Events in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `**Custom Events** let developers define and dispatch their own events beyond standard DOM events.`
                },
                {
                    type: "code",
                    content: `const event = new CustomEvent("userLoggedIn", { detail: { user: "Alice" } });

document.addEventListener("userLoggedIn", (e) => {
  console.log("User:", e.detail.user);
});

document.dispatchEvent(event);`,
                    language: "javascript"
                },
                {
                    type: "list",
                    content: [
                        "Useful for decoupling components.",
                        "Can pass extra data via \`detail\` property.",
                        "Improves modularity in event-driven apps."
                    ]
                }
            ]
        },
    ],
    memory_performance: [// 41. What is debouncing in JavaScript?
        {
            id: 41,
            question: "What is debouncing in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `**Debouncing** is a programming technique used to limit how often a function executes. It ensures that the function runs **only after a certain delay** has passed since the last time it was invoked.  
It is commonly used to optimize events like keypress, resize, or scroll that fire multiple times in quick succession.`
                },
                {
                    type: "code",
                    content: `function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Usage: Search input optimization
const handleSearch = debounce((query) => {
  console.log("Searching for:", query);
}, 300);

document.getElementById("search").addEventListener("input", (e) => {
  handleSearch(e.target.value);
});`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use for API calls, form validations, window resize, or autocomplete.  
- Choose appropriate delay (e.g., 200–500ms for user input).`
                }
            ]
        },

        // 42. What is throttling in JavaScript?
        {
            id: 42,
            question: "What is throttling in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `**Throttling** ensures a function executes at most **once in a given interval**, regardless of how many times the event fires.  
It is often used for performance-heavy operations like scrolling or window resizing.`
                },
                {
                    type: "code",
                    content: `function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Usage: Optimize scroll events
const handleScroll = throttle(() => {
  console.log("Scroll event at", new Date().toISOString());
}, 1000);

window.addEventListener("scroll", handleScroll);`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use throttling for continuous events (scroll, mousemove).  
- Choose interval carefully (e.g., 100–300ms).`
                }
            ]
        },

        // 43. What are memory leaks in JavaScript? How do you prevent them?
        {
            id: 43,
            question: "What are memory leaks in JavaScript? How do you prevent them?",
            answer: [
                {
                    type: "text",
                    content: `A **memory leak** occurs when allocated memory is no longer needed but is not released.  
In JavaScript, garbage collection removes unused memory, but leaks happen when references prevent cleanup.`
                },
                {
                    type: "list",
                    content: [
                        "**Common Causes of Memory Leaks:**",
                        "- Unused global variables",
                        "- Forgotten timers/intervals",
                        "- Event listeners not removed",
                        "- Closures holding unnecessary references"
                    ]
                },
                {
                    type: "code",
                    content: `// Memory leak example
let leaks = [];
function createLeak() {
  leaks.push(new Array(1000000).join("x"));
}

// Prevention: clear references
leaks = null;

// Event listener cleanup
const btn = document.getElementById("btn");
function clickHandler() { console.log("clicked"); }
btn.addEventListener("click", clickHandler);
// Later...
btn.removeEventListener("click", clickHandler);`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Always clear intervals/timers.  
- Remove event listeners when not needed.  
- Avoid unnecessary global variables.  
- Use browser dev tools (Memory tab, heap snapshots).`
                }
            ]
        },

        // 44. How does garbage collection work in JavaScript?
        {
            id: 44,
            question: "How does garbage collection work in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `JavaScript uses **automatic garbage collection** to free memory.  
The most common algorithm is **mark-and-sweep**:  
1. Start from global objects (roots).  
2. Mark all objects reachable from roots.  
3. Collect (sweep) objects not marked (unreachable).`
                },
                {
                    type: "code",
                    content: `let obj = { name: "Alice" };
obj = null; // Now the object is unreachable and eligible for garbage collection`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Set unused objects to \`null\`.  
- Be cautious with closures that keep unnecessary references.  
- Monitor memory usage with DevTools.`
                }
            ]
        },

        // 45. How can you optimize JavaScript performance in large applications?
        {
            id: 45,
            question: "How can you optimize JavaScript performance in large applications?",
            answer: [
                {
                    type: "list",
                    content: [
                        "**1. Reduce DOM Manipulation** – Batch updates, use DocumentFragment or virtual DOM.",
                        "**2. Optimize Loops** – Use modern array methods (map, filter, reduce) wisely.",
                        "**3. Debounce & Throttle** – Control expensive event handlers.",
                        "**4. Use Async Operations** – Prefer asynchronous APIs (fetch, promises).",
                        "**5. Code Splitting** – Lazy load modules to reduce initial load.",
                        "**6. Minify & Bundle** – Use tools like Webpack, Rollup.",
                        "**7. Memory Management** – Clear timers, remove event listeners."
                    ]
                },
                {
                    type: "code",
                    content: `// Example: Using requestAnimationFrame for smooth rendering
function animate() {
  // Perform animation logic
  requestAnimationFrame(animate);
}
animate();`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Profile performance with browser DevTools.  
- Avoid blocking main thread.  
- Use caching (localStorage, IndexedDB, service workers).`
                }
            ]
        },
        // 76. What is Garbage Collection in JavaScript?
        {
            id: 76,
            question: "What is Garbage Collection in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `**Garbage Collection (GC)** is the automatic process of reclaiming memory by removing objects that are no longer reachable in the program.  
JavaScript uses a **mark-and-sweep** algorithm to identify unused memory.`
                },
                {
                    type: "code",
                    content: `let obj = { name: "Alice" };
obj = null; // Now the object is eligible for garbage collection`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Avoid unnecessary global variables.  
- Break references when objects are no longer needed.  
- Watch out for closures holding large objects unnecessarily.`
                }
            ]
        },

        // 77. What are Memory Leaks in JavaScript and how to prevent them?
        {
            id: 77,
            question: "What are Memory Leaks in JavaScript and how to prevent them?",
            answer: [
                {
                    type: "text",
                    content: `A **Memory Leak** occurs when memory that is no longer needed is not released, leading to increasing memory usage.`
                },
                {
                    type: "list",
                    content: [
                        "Common causes: global variables, forgotten timers, detached DOM nodes, closures holding large data.",
                        "Prevention: nullify unused references, use let/const over var, remove event listeners when not needed."
                    ]
                },
                {
                    type: "code",
                    content: `// Example of detached DOM node causing memory leak
const div = document.createElement("div");
document.body.appendChild(div);
div.addEventListener("click", () => console.log("Clicked"));
document.body.removeChild(div); // Listener still holds reference, memory leak`,
                    language: "javascript"
                }
            ]
        },

        // 78. What is Lazy Loading in JavaScript?
        {
            id: 78,
            question: "What is Lazy Loading in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `**Lazy Loading** is the practice of loading resources or executing code only when they are needed, improving performance and reducing initial load time.`
                },
                {
                    type: "code",
                    content: `// Lazy load an image
const img = document.createElement("img");
img.loading = "lazy";
img.src = "large-image.jpg";
document.body.appendChild(img);

// Lazy load module
document.getElementById("btn").addEventListener("click", async () => {
  const module = await import("./heavyModule.js");
  module.init();
});`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use lazy loading for images, scripts, and modules.  
- Combine with IntersectionObserver for efficient viewport-based loading.`
                }
            ]
        },

        // 79. What is Debouncing vs Throttling for performance optimization?
        {
            id: 79,
            question: "What is Debouncing vs Throttling for performance optimization?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Aspect", "Debouncing", "Throttling"],
                        rows: [
                            ["Purpose", "Delay function until user stops triggering", "Limit function to run at fixed intervals"],
                            ["Use Case", "Search input, resize events", "Scroll events, mousemove"],
                            ["Implementation", "setTimeout", "setTimeout or timestamps"]
                        ]
                    }
                }
            ]
        },

        // 80. What is Tree Shaking in JavaScript?
        {
            id: 80,
            question: "What is Tree Shaking in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `**Tree Shaking** is a technique used in module bundlers (like Webpack) to remove unused code from the final bundle, reducing file size.`
                },
                {
                    type: "code",
                    content: `// math.js
export function add(a,b){ return a+b; }
export function subtract(a,b){ return a-b; }

// main.js
import { add } from './math.js'; // subtract is not used -> removed in final bundle`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use ES6 modules (import/export) for tree-shaking.  
- Avoid CommonJS modules if tree shaking is needed.`
                }
            ]
        },

        // 81. What are Web Workers and how do they improve performance?
        {
            id: 81,
            question: "What are Web Workers and how do they improve performance?",
            answer: [
                {
                    type: "text",
                    content: `**Web Workers** allow running JavaScript in background threads, preventing UI blocking.  
They communicate with the main thread via messages.`
                },
                {
                    type: "code",
                    content: `// main.js
const worker = new Worker("worker.js");
worker.postMessage({ num: 5 });
worker.onmessage = e => console.log("Result:", e.data);

// worker.js
onmessage = e => {
  const result = e.data.num * 2;
  postMessage(result);
};`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use Web Workers for heavy computation.  
- Avoid sharing DOM (not accessible in worker).  
- Use transferable objects for efficiency.`
                }
            ]
        },

        // 82. How to optimize loops and iterations in JavaScript?
        {
            id: 82,
            question: "How to optimize loops and iterations in JavaScript?",
            answer: [
                {
                    type: "list",
                    content: [
                        "Use simple for-loops instead of for-in for arrays.",
                        "Cache array length in for-loops: `for(let i=0,l=arr.length;i<l;i++)`.",
                        "Prefer array methods like map/filter over manual loops for readability.",
                        "Avoid DOM operations inside loops (batch updates outside loop)."
                    ]
                }
            ]
        },

        // 83. What is the difference between synchronous and asynchronous scripts?
        {
            id: 83,
            question: "What is the difference between synchronous and asynchronous scripts?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Aspect", "Synchronous", "Asynchronous"],
                        rows: [
                            ["Loading", "Blocks parsing of HTML until executed", "Does not block HTML parsing"],
                            ["Execution Order", "Executed in order of appearance", "Executed when ready (async/defer)"],
                            ["Attributes", "<script>", "<script async> or <script defer>"]
                        ]
                    }
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use \`defer\` for scripts that depend on DOM.  
- Use \`async\` for independent scripts to improve performance.`
                }
            ]
        },

        // 84. How to avoid reflows and repaints in the browser?
        {
            id: 84,
            question: "How to avoid reflows and repaints in the browser?",
            answer: [
                {
                    type: "list",
                    content: [
                        "Batch DOM updates together instead of changing repeatedly.",
                        "Use `documentFragment` for multiple DOM insertions.",
                        "Use `class` toggling instead of individual style changes.",
                        "Read and write DOM separately to avoid layout thrashing."
                    ]
                }
            ]
        },

        // 85. What are Lazy Functions and why are they used?
        {
            id: 85,
            question: "What are Lazy Functions and why are they used?",
            answer: [
                {
                    type: "text",
                    content: `**Lazy Functions** delay computation until the first time they are needed.  
Useful for improving initial load time and reducing unnecessary execution.`
                },
                {
                    type: "code",
                    content: `function lazyAdd() {
  let sum;
  return function(a,b) {
    if(sum === undefined) sum = a + b;
    return sum;
  };
}

const addOnce = lazyAdd();
console.log(addOnce(2,3)); // 5
console.log(addOnce(5,7)); // 5 (cached)`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use for expensive computations that may not be needed.  
- Combine with memoization for repeated calls.`
                }
            ]
        },
    ],
    miscellaneous: [
        // 46. What is the difference between var, let, and const?
        {
            id: 46,
            question: "What is the difference between var, let, and const?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Keyword", "Scope", "Hoisting", "Reassignment", "Best Use"],
                        rows: [
                            ["var", "Function-scoped", "Hoisted (initialized as undefined)", "Allowed", "Legacy code"],
                            ["let", "Block-scoped", "Hoisted (not initialized, TDZ)", "Allowed", "Variables that change"],
                            ["const", "Block-scoped", "Hoisted (not initialized, TDZ)", "Not allowed", "Constants and immutable references"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `var a = 10; // function scoped
let b = 20; // block scoped
const c = 30; // cannot reassign

if (true) {
  var x = 1; // accessible outside block
  let y = 2; // block scoped
}
console.log(x); // 1
console.log(y); // ReferenceError`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Avoid \`var\` (leads to bugs due to function scoping).  
- Use \`const\` by default.  
- Use \`let\` only when reassignment is needed.`
                }
            ]
        },

        // 47. What are arrow functions and how are they different from regular functions?
        {
            id: 47,
            question: "What are arrow functions and how are they different from regular functions?",
            answer: [
                {
                    type: "text",
                    content: `**Arrow functions** are a concise syntax for writing functions introduced in ES6.  
Key differences from regular functions:`
                },
                {
                    type: "list",
                    content: [
                        "Do not have their own `this` (lexically bind to parent scope).",
                        "Cannot be used as constructors (no `new`).",
                        "Do not have `arguments` object (use rest parameters instead).",
                        "Always anonymous."
                    ]
                },
                {
                    type: "code",
                    content: `// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

// 'this' example
function Counter() {
  this.count = 0;
  setInterval(function() {
    this.count++; // 'this' refers to global/window
  }, 1000);
}

function CounterArrow() {
  this.count = 0;
  setInterval(() => {
    this.count++; // 'this' refers to CounterArrow instance
  }, 1000);
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use arrow functions for callbacks, event handlers, array methods.  
- Use regular functions when you need your own \`this\` or to define methods on prototypes.`
                }
            ]
        },

        // 48. What are template literals in ES6?
        {
            id: 48,
            question: "What are template literals in ES6?",
            answer: [
                {
                    type: "text",
                    content: "**Template literals** (backtick strings ``) allow multi-line strings and string interpolation using `${expression}`."
                },
                {
                    type: "code",
                    content: `const name = "Alice";
const age = 25;

// Old way
const str1 = "My name is " + name + " and I am " + age + " years old.";

// Template literal
const str2 = \`My name is \${name} and I am \${age} years old.\`;

// Multi-line
const str3 = \`Hello,
This is a multi-line string.\`;

console.log(str2); // My name is Alice and I am 25 years old.
console.log(str3); 
/* 
Hello,
This is a multi-line string.
*/`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**  \n- Prefer template literals for readability.  \n- Use tagged templates for advanced formatting (e.g., localization, escaping HTML)."
                }
            ]
        },

        // 49. What is object destructuring in ES6?
        {
            id: 49,
            question: "What is object destructuring in ES6?",
            answer: [
                {
                    type: "text",
                    content: `**Destructuring** allows unpacking values from arrays or properties from objects into variables in a clean way.`
                },
                {
                    type: "code",
                    content: `const user = { name: "Alice", age: 25, country: "India" };

// Without destructuring
const name1 = user.name;
const age1 = user.age;

// With destructuring
const { name, age } = user;

console.log(name, age); // Alice 25

// Nested destructuring
const person = { info: { city: "Delhi", pin: 110001 } };
const { info: { city } } = person;
console.log(city); // Delhi`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use defaults in destructuring to avoid undefined values.  
- Use destructuring in function parameters for cleaner APIs.`
                }
            ]
        },

        // 50. What is the spread operator (...) in ES6?
        {
            id: 50,
            question: "What is the spread operator (...) in ES6?",
            answer: [
                {
                    type: "text",
                    content: `The **spread operator** expands an iterable (array, string, object) into individual elements.  
It is used for copying, merging, and passing arguments.`
                },
                {
                    type: "code",
                    content: `// Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // {a: 1, b: 2, c: 3}

// Function arguments
function sum(a, b, c) { return a + b + c; }
const nums = [1, 2, 3];
console.log(sum(...nums)); // 6`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use for immutability (avoid direct mutation).  
- Spread creates shallow copies (not deep copy).`
                }
            ]
        },

        // 51. What is the rest parameter in ES6?
        {
            id: 51,
            question: "What is the rest parameter in ES6?",
            answer: [
                {
                    type: "text",
                    content: `The **rest parameter** collects multiple arguments into an array. It is useful when you don’t know the number of arguments in advance.`
                },
                {
                    type: "code",
                    content: `function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// Rest with destructuring
const [first, ...rest] = [10, 20, 30, 40];
console.log(first, rest); // 10 [20, 30, 40]`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use rest in function parameters instead of \`arguments\`.  
- Keep rest parameter last in parameter list.`
                }
            ]
        },

        // 52. What are default parameters in ES6?
        {
            id: 52,
            question: "What are default parameters in ES6?",
            answer: [
                {
                    type: "text",
                    content: `**Default parameters** allow functions to have default values for parameters if no value or undefined is passed.`
                },
                {
                    type: "code",
                    content: `function greet(name = "Guest") {
  return \`Hello, \${name}!\`;
}

console.log(greet()); // Hello, Guest!
console.log(greet("Alice")); // Hello, Alice`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use default parameters instead of checking with \`||\`.  
- Avoid using mutable objects/arrays as defaults (can lead to bugs).`
                }
            ]
        },

        // 53. What are ES6 modules?
        {
            id: 53,
            question: "What are ES6 modules?",
            answer: [
                {
                    type: "text",
                    content: `**Modules** in ES6 allow splitting code into reusable files.  
They use \`import\` and \`export\` statements.`
                },
                {
                    type: "code",
                    content: `// math.js
export const add = (a, b) => a + b;
export default function subtract(a, b) { return a - b; }

// main.js
import subtract, { add } from "./math.js";

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use named exports for multiple utilities.  
- Use default export for single responsibility modules.  
- Keep modules small and focused.`
                }
            ]
        },

        // 54. What are Promises in JavaScript?
        {
            id: 54,
            question: "What are Promises in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation.  
It has 3 states: **pending**, **fulfilled**, **rejected**.`
                },
                {
                    type: "code",
                    content: `const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) resolve("Data received!");
    else reject("Error fetching data");
  }, 1000);
});

fetchData
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
  .finally(() => console.log("Done"));`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Chain promises instead of nesting.  
- Use \`.finally\` for cleanup.  
- Prefer async/await for readability.`
                }
            ]
        },

        // 55. What is async/await in JavaScript?
        {
            id: 55,
            question: "What is async/await in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `**async/await** is syntactic sugar over Promises, making asynchronous code look synchronous.  
- \`async\` makes a function return a Promise.  
- \`await\` pauses execution until the Promise resolves/rejects.`
                },
                {
                    type: "code",
                    content: `async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchData();`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Always wrap \`await\` in try/catch for error handling.  
- Use \`Promise.all\` for parallel async tasks.  
- Avoid blocking long async chains inside loops (use \`map + Promise.all\`).`
                }
            ]
        },
    ],
    advanced: [
        // 56. What is the Event Loop in JavaScript?
        {
            id: 56,
            question: "What is the Event Loop in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `The **Event Loop** is a mechanism that allows JavaScript (single-threaded) to handle asynchronous tasks efficiently.  
It manages execution between the **call stack**, **callback queue (macrotasks)**, and **microtask queue**.`
                },
                {
                    type: "code",
                    content: `console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Output:
// Start
// End
// Promise
// Timeout`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Explanation:**  
- Synchronous code runs first.  
- Microtasks (Promises) run before macrotasks (setTimeout, setInterval, I/O).  

**Best Practices:**  
- Use Promises/async-await for predictable async flow.  
- Avoid blocking long-running synchronous tasks (they freeze UI).`
                }
            ]
        },

        // 57. What is the difference between microtasks and macrotasks?
        {
            id: 57,
            question: "What is the difference between microtasks and macrotasks?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Feature", "Microtasks", "Macrotasks"],
                        rows: [
                            ["Examples", "Promise callbacks, queueMicrotask, MutationObserver", "setTimeout, setInterval, I/O"],
                            ["Execution Order", "Executed immediately after current call stack", "Executed after microtasks are cleared"],
                            ["Priority", "Higher", "Lower"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `setTimeout(() => console.log("Macrotask"), 0);
Promise.resolve().then(() => console.log("Microtask"));
console.log("Sync");

// Output:
// Sync
// Microtask
// Macrotask`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use microtasks (Promises) for fast, immediate async jobs.  
- Use macrotasks (setTimeout) for deferred operations.`
                }
            ]
        },

        // 58. Explain Closures in JavaScript with examples.
        {
            id: 58,
            question: "Explain Closures in JavaScript with examples.",
            answer: [
                {
                    type: "text",
                    content: `A **closure** is a function that "remembers" the variables from its lexical scope, even after the outer function has executed.`
                },
                {
                    type: "code",
                    content: `function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2`,
                    language: "javascript"
                },
                {
                    type: "list",
                    content: [
                        "Closures are used for data privacy (private variables).",
                        "They enable function factories and currying.",
                        "They help maintain state between function calls."
                    ]
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Avoid unnecessary closures (can lead to memory leaks).  
- Useful for encapsulation in functional programming.`
                }
            ]
        },

        // 59. What is Prototypal Inheritance in JavaScript?
        {
            id: 59,
            question: "What is Prototypal Inheritance in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `JavaScript uses **prototypal inheritance**, where objects can inherit properties and methods from another object via the prototype chain.`
                },
                {
                    type: "code",
                    content: `function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return "Hello, " + this.name;
};

const p1 = new Person("Alice");
console.log(p1.greet()); // Hello, Alice`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Prefer ES6 \`class\` syntax (syntactic sugar over prototypes).  
- Avoid deep prototype chains (can cause performance issues).`
                }
            ]
        },

        // 60. Difference between Classical OOP and Prototypal Inheritance?
        {
            id: 60,
            question: "Difference between Classical OOP and Prototypal Inheritance?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Aspect", "Classical OOP", "Prototypal Inheritance"],
                        rows: [
                            ["Language Example", "Java, C++", "JavaScript"],
                            ["Inheritance Style", "Classes define blueprints", "Objects inherit directly from other objects"],
                            ["Flexibility", "Rigid hierarchy", "More flexible, dynamic"],
                            ["Code Reuse", "Via classes", "Via delegation"]
                        ]
                    }
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use prototypal style when flexibility and composition are needed.  
- Use classes when structure and readability are important.`
                }
            ]
        },

        // 61. What is Currying in JavaScript?
        {
            id: 61,
            question: "What is Currying in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `**Currying** is a technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.`
                },
                {
                    type: "code",
                    content: `function curryAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(curryAdd(1)(2)(3)); // 6`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Useful for functional programming and reusability.  
- Avoid overusing currying (can reduce readability).`
                }
            ]
        },

        // 62. What is Memoization in JavaScript?
        {
            id: 62,
            question: "What is Memoization in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `**Memoization** is an optimization technique where results of expensive function calls are cached, so repeated calls with the same arguments return the cached result.`
                },
                {
                    type: "code",
                    content: `function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const factorial = memoize(function f(n) {
  return n <= 1 ? 1 : n * f(n - 1);
});

console.log(factorial(5)); // 120
console.log(factorial(5)); // From cache`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use for heavy computations.  
- Clear cache when not needed (to avoid memory bloat).`
                }
            ]
        },

        // 63. What are Module Patterns in JavaScript?
        {
            id: 63,
            question: "What are Module Patterns in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `The **Module Pattern** is a design pattern that encapsulates private data and exposes only what is necessary (like public APIs).`
                },
                {
                    type: "code",
                    content: `const CounterModule = (function() {
  let count = 0;

  function increment() { count++; }
  function getCount() { return count; }

  return {
    increment,
    getCount
  };
})();

CounterModule.increment();
console.log(CounterModule.getCount()); // 1`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use module patterns for encapsulation.  
- Prefer ES6 modules (\`import/export\`) for modern apps.`
                }
            ]
        },

        // 64. What is Debouncing in JavaScript?
        {
            id: 64,
            question: "What is Debouncing in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `**Debouncing** is a technique to ensure a function is executed only after a certain delay since the last time it was invoked. Useful for limiting API calls and handling input events.`
                },
                {
                    type: "code",
                    content: `function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

window.addEventListener("resize", debounce(() => {
  console.log("Resized after delay");
}, 300));`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use for input fields, search boxes, resize events.  
- Pick delay time wisely (too short = useless, too long = laggy).`
                }
            ]
        },

        // 65. What is Throttling in JavaScript?
        {
            id: 65,
            question: "What is Throttling in JavaScript?",
            answer: [
                {
                    type: "text",
                    content: `**Throttling** ensures a function is executed at most once in a specified time interval, even if it's called multiple times. Useful for scroll and resize events.`
                },
                {
                    type: "code",
                    content: `function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

window.addEventListener("scroll", throttle(() => {
  console.log("Scroll event handled");
}, 500));`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: `**Best Practices:**  
- Use throttling for frequent events (scroll, mousemove).  
- Adjust interval depending on UX needs.`
                }
            ]
        },
    ],
}