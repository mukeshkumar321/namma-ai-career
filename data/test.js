
// javascriptQuestion.js
export const questions = {
    beginner: [
        {
            "id": 1,
            "question": "What is JavaScript and why do we need it?",
            "answer": [
                {
                    "type": "text",
                    "content": "JavaScript (JS) is a high-level, interpreted programming language used to make web pages interactive. It runs in the browser and allows dynamic changes on web pages without reloading."
                },
                {
                    "type": "text",
                    "content": "🔹 Without JS → websites are static.\n🔹 With JS → websites become interactive (animations, form validation, dynamic data, etc.)."
                },
                {
                    "type": "code",
                    "content": `// Example
document.getElementById("btn").addEventListener("click", () => {
  alert("Hello from JavaScript!");
});`
                }
            ]
        },
        {
            "id": 2,
            "question": "What are the different data types in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "JavaScript has 8 data types: 7 primitive + 1 non-primitive."
                },
                {
                    "type": "table",
                    "content": {
                        "headers": ["Type", "Description", "Example"],
                        "rows": [
                            ["String", "Textual data", "`'hello'`"],
                            ["Number", "Integers & floating values", "`10, 3.14`"],
                            ["Boolean", "Logical values", "`true, false`"],
                            ["Null", "Represents empty value", "`null`"],
                            ["Undefined", "Variable declared but not assigned", "`undefined`"],
                            ["Symbol", "Unique identifiers (ES6)", "`Symbol('id')`"],
                            ["BigInt", "Large integers", "`123n`"],
                            ["Object", "Collection of properties", "`{name: 'Gulshan'}`"]
                        ]
                    }
                }
            ]
        },
        {
            "id": 3,
            "question": "What is the difference between var, let and const?",
            "answer": [
                {
                    "type": "text",
                    "content": "`var`, `let`, and `const` are used to declare variables in JavaScript, but they differ in scope, re-declaration, re-assignment, and hoisting."
                },
                {
                    "type": "text",
                    "content": "🔹 var → Function-scoped, can be re-declared and re-assigned, hoisted with `undefined`."
                },
                {
                    "type": "text",
                    "content": "🔹 let → Block-scoped, cannot be re-declared in the same scope, can be re-assigned, hoisted but in a temporal dead zone (TDZ)."
                },
                {
                    "type": "text",
                    "content": "🔹 const → Block-scoped, cannot be re-declared or re-assigned, hoisted but in TDZ. However, objects and arrays declared with const can still be mutated."
                }
            ]
        },
        {
            "id": 4,
            "question": "What is the difference between == and === in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "`==` is the equality operator that checks values after type coercion.\n`===` is the strict equality operator that checks both value and type."
                },
                {
                    "type": "code",
                    "content": `console.log(5 == "5");   // true (type coercion)\nconsole.log(5 === "5");  // false (different types)`
                }
            ]
        },
        {
            "id": 5,
            "question": "What is null and undefined in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "`null` is an intentional absence of value. \n`undefined` means a variable has been declared but not yet assigned."
                },
                {
                    "type": "code",
                    "content": `let a;\nconsole.log(a); // undefined\n\nlet b = null;\nconsole.log(b); // null`
                }
            ]
        },
        {
            "id": 6,
            "question": "What is scope and what are the types of scope in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Scope defines where variables are accessible in the code."
                },
                {
                    "type": "text",
                    "content": "Types of scopes:\n🔹 Global Scope → Accessible everywhere\n🔹 Function Scope → Variables inside functions\n🔹 Block Scope → Variables inside `{}` using let/const\n🔹 Lexical Scope → Inner functions can access outer function variables"
                }
            ]
        },
        {
            "id": 7,
            "question": "What is hoisting in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before execution."
                },
                {
                    "type": "code",
                    "content": `console.log(x); // undefined\nvar x = 10;\n\nsayHello(); // Hello!\nfunction sayHello() {\n  console.log("Hello!");\n}`
                }
            ]
        },
        {
            "id": 8,
            "question": "What is type coercion and type conversion?",
            "answer": [
                {
                    "type": "text",
                    "content": "Type coercion → Automatic conversion by JS engine.\nType conversion → Explicit conversion by developer."
                },
                {
                    "type": "code",
                    "content": `console.log("5" * 2); // 10 (coercion)\nconsole.log(Number("123")); // 123 (conversion)`
                }
            ]
        },
        {
            "id": 9,
            "question": "What is the difference between DOM and BOM?",
            "answer": [
                {
                    "type": "text",
                    "content": "DOM (Document Object Model) → Represents the HTML structure of the page.\nBOM (Browser Object Model) → Represents browser-related objects."
                },
                {
                    "type": "table",
                    "content": {
                        "headers": ["Aspect", "DOM", "BOM"],
                        "rows": [
                            ["Definition", "Tree structure of HTML", "Objects provided by browser"],
                            ["Example", "document.getElementById()", "window.alert(), window.history"]
                        ]
                    }
                }
            ]
        },
        {
            "id": 10,
            "question": "What is the difference between localStorage and sessionStorage?",
            "answer": [
                {
                    "type": "text",
                    "content": "Both store data in the browser, but differ in persistence."
                },
                {
                    "type": "table",
                    "content": {
                        "headers": ["Feature", "localStorage", "sessionStorage"],
                        "rows": [
                            ["Lifetime", "Until manually cleared", "Until tab/browser is closed"],
                            ["Storage capacity", "5-10 MB", "5 MB"],
                            ["Scope", "Across tabs and windows", "Per tab only"]
                        ]
                    }
                },
                {
                    "type": "code",
                    "content": `localStorage.setItem("name", "Gulshan");\nsessionStorage.setItem("id", 101);`
                }
            ]
        },
        {
            "id": 11,
            "question": "What are operators in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Operators are symbols used to perform operations on values and variables."
                },
                {
                    "type": "text",
                    "content": "🔹 Arithmetic (+, -, *, /, %, **)\n🔹 Comparison (==, ===, >, <, <=, >=)\n🔹 Logical (&&, ||, !)\n🔹 Assignment (=, +=, -=, etc.)\n🔹 Ternary (condition ? expr1 : expr2)"
                },
                {
                    "type": "code",
                    "content": `let x = 5;\nconsole.log(x > 3 && x < 10); // true\nconsole.log(x % 2 === 1 ? "Odd" : "Even"); // Odd`
                }
            ]
        },
        {
            "id": 12,
            "question": "What are control statements in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Control statements manage the flow of execution in a program."
                },
                {
                    "type": "text",
                    "content": "🔹 if-else\n🔹 switch\n🔹 loops (for, while, do-while, for..of, for..in)"
                },
                {
                    "type": "code",
                    "content": `let day = 2;\nswitch(day) {\n  case 1: console.log("Mon"); break;\n  case 2: console.log("Tue"); break;\n  default: console.log("Other");\n}`
                }
            ]
        },
        {
            "id": 13,
            "question": "What are events in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Events are actions that happen in the browser (click, input, submit, etc.), and JavaScript can respond to them."
                },
                {
                    "type": "code",
                    "content": `document.querySelector("button").addEventListener("click", () => {\n  console.log("Button clicked!");\n});`
                }
            ]
        },
        {
            "id": 14,
            "question": "What are arrays and strings in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Array → Ordered collection of elements.\nString → Sequence of characters."
                },
                {
                    "type": "code",
                    "content": `let arr = [1,2,3];\narr.push(4); // [1,2,3,4]\n\nlet str = "hello";\nconsole.log(str.toUpperCase()); // HELLO`
                }
            ]
        }
    ],
    intermediate: [
        {
            "id": 15,
            "question": "What is a function in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "A function is a block of reusable code designed to perform a specific task."
                },
                {
                    "type": "code",
                    "content": `function greet(name) {\n  return "Hello " + name;\n}\nconsole.log(greet("Gulshan")); // Hello Gulshan`
                }
            ]
        },
        {
            "id": 16,
            "question": "What are arrow functions?",
            "answer": [
                {
                    "type": "text",
                    "content": "Arrow functions provide a shorter syntax for writing functions and do not have their own `this` keyword."
                },
                {
                    "type": "code",
                    "content": `const add = (a, b) => a + b;\nconsole.log(add(2, 3)); // 5`
                }
            ]
        },
        {
            "id": 17,
            "question": "What are higher-order functions?",
            "answer": [
                {
                    "type": "text",
                    "content": "A higher-order function is a function that takes another function as an argument or returns a function."
                },
                {
                    "type": "code",
                    "content": `const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(num => num * 2);\nconsole.log(doubled); // [2, 4, 6, 8]`
                }
            ]
        },
        {
            "id": 18,
            "question": "What is a callback function?",
            "answer": [
                {
                    "type": "text",
                    "content": "A callback function is a function passed as an argument to another function to be executed later."
                },
                {
                    "type": "code",
                    "content": `function fetchData(callback) {\n  setTimeout(() => {\n    callback(\"Data received\");\n  }, 1000);\n}\nfetchData(msg => console.log(msg));`
                }
            ]
        },
        {
            "id": 19,
            "question": "What is a Promise in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "A Promise is an object representing the eventual completion or failure of an asynchronous operation."
                },
                {
                    "type": "code",
                    "content": `const promise = new Promise((resolve, reject) => {\n  let success = true;\n  success ? resolve(\"Done\") : reject(\"Error\");\n});\n\npromise.then(res => console.log(res)).catch(err => console.log(err));`
                }
            ]
        },
        {
            "id": 20,
            "question": "What is async/await?",
            "answer": [
                {
                    "type": "text",
                    "content": "`async/await` is syntactic sugar over Promises that makes asynchronous code look synchronous."
                },
                {
                    "type": "code",
                    "content": `async function getData() {\n  let response = await Promise.resolve(\"Hello Async\");\n  console.log(response);\n}\ngetData();`
                }
            ]
        },
        {
            "id": 21,
            "question": "What is the event loop in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "The event loop continuously checks the call stack and callback queue, executing tasks asynchronously without blocking the main thread."
                },
                {
                    "type": "code",
                    "content": `console.log(\"Start\");\nsetTimeout(() => console.log(\"Async Task\"), 0);\nconsole.log(\"End\");\n// Output: Start → End → Async Task`
                }
            ]
        },
        {
            "id": 22,
            "question": "What is setTimeout and setInterval?",
            "answer": [
                {
                    "type": "text",
                    "content": "`setTimeout` executes a function once after a delay.\n`setInterval` repeatedly executes a function at given intervals."
                },
                {
                    "type": "code",
                    "content": `setTimeout(() => console.log(\"One time\"), 1000);\nlet id = setInterval(() => console.log(\"Repeating\"), 2000);\nclearInterval(id); // stops interval`
                }
            ]
        },
        {
            "id": 23,
            "question": "What are spread and rest operators?",
            "answer": [
                {
                    "type": "text",
                    "content": "Spread (`...`) expands elements, Rest (`...`) collects multiple elements."
                },
                {
                    "type": "code",
                    "content": `let arr = [1,2,3];\nlet arr2 = [...arr, 4, 5];\nconsole.log(arr2); // [1,2,3,4,5]\n\nfunction sum(...nums) {\n  return nums.reduce((a,b) => a+b);\n}\nconsole.log(sum(1,2,3)); // 6`
                }
            ]
        },
        {
            "id": 24,
            "question": "What are template literals?",
            "answer": [
                {
                    "type": "text",
                    "content": "Template literals allow embedding variables and expressions inside backticks (``)."
                },
                {
                    "type": "code",
                    "content": "let name = 'Gulshan';\nconsole.log(`Hello ${name}!`);"
                }
            ]
        },
        {
            "id": 25,
            "question": "What is destructuring in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Destructuring allows unpacking values from arrays or objects into variables."
                },
                {
                    "type": "code",
                    "content": "let [a, b] = [1, 2];\nlet {name, age} = {name: 'Preeti', age: 25};\nconsole.log(a, b, name, age);"
                }
            ]
        },
        {
            "id": 26,
            "question": "What are ES6 modules?",
            "answer": [
                {
                    "type": "text",
                    "content": "ES6 introduced modules using `export` and `import` for better code organization."
                },
                {
                    "type": "code",
                    "content": `// math.js\nexport const add = (a, b) => a + b;\n\n// app.js\nimport { add } from './math.js';\nconsole.log(add(2,3));`
                }
            ]
        },
        {
            "id": 27,
            "question": "Difference between for...in and for...of?",
            "answer": [
                {
                    "type": "text",
                    "content": "`for...in` iterates over object keys.\n`for...of` iterates over iterable values."
                },
                {
                    "type": "code",
                    "content": "let arr = [10,20,30];\nfor (let i in arr) console.log(i); // 0,1,2\nfor (let val of arr) console.log(val); // 10,20,30"
                }
            ]
        },
        {
            "id": 28,
            "question": "What is event bubbling and capturing?",
            "answer": [
                {
                    "type": "text",
                    "content": "Event bubbling → event moves from child → parent.\nEvent capturing → event moves from parent → child."
                },
                {
                    "type": "code",
                    "content": "element.addEventListener('click', handler, true); // capturing\n element.addEventListener('click', handler, false); // bubbling"
                }
            ]
        },
        {
            "id": 29,
            "question": "What is the 'this' keyword in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "`this` refers to the object that is currently executing the function."
                },
                {
                    "type": "code",
                    "content": "const obj = {\n  name: 'Gulshan',\n  greet() { console.log(this.name); }\n};\nobj.greet(); // Gulshan"
                }
            ]
        },
        {
            "id": 30,
            "question": "What are default and rest parameters?",
            "answer": [
                {
                    "type": "text",
                    "content": "Default parameters provide a fallback value.\nRest parameters collect all remaining arguments."
                },
                {
                    "type": "code",
                    "content": "function greet(name = 'Guest') { console.log(`Hello ${name}`); }\n\ngreet(); // Hello Guest"
                }
            ]
        },
        {
            "id": 31,
            "question": "How is error handling done in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Error handling is done using `try...catch...finally` blocks."
                },
                {
                    "type": "code",
                    "content": "try {\n  throw new Error('Something went wrong');\n} catch (err) {\n  console.log(err.message);\n} finally {\n  console.log('Cleanup');\n}"
                }
            ]
        }
    ],
    advanced: [
        {
            "id": 32,
            "question": "What is Execution Context in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Execution context is the environment where JavaScript code is executed. It stores variable environment, lexical environment, and the value of 'this'."
                },
                {
                    "type": "text",
                    "content": "🔹 Types: Global Execution Context (GEC) and Function Execution Context (FEC)."
                },
                {
                    "type": "code",
                    "content": "let x = 10;\nfunction add(a, b) {\n  let sum = a + b;\n  return sum;\n}\nconsole.log(add(2, 3));"
                }
            ]
        },
        {
            "id": 33,
            "question": "What is the Call Stack in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Call Stack is a mechanism to keep track of function calls in JavaScript. It works on the principle of LIFO (Last In, First Out)."
                },
                {
                    "type": "code",
                    "content": "function one() {\n  two();\n}\nfunction two() {\n  three();\n}\nfunction three() {\n  console.log(\"End of stack\");\n}\none();"
                }
            ]
        },
        {
            "id": 34,
            "question": "What is the Event Loop in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "The Event Loop manages execution of synchronous and asynchronous tasks by coordinating between the Call Stack and Callback Queue."
                },
                {
                    "type": "code",
                    "content": "console.log(\"Start\");\n\nsetTimeout(() => {\n  console.log(\"Async Task\");\n}, 0);\n\nconsole.log(\"End\");\n\n// Output:\n// Start\n// End\n// Async Task"
                }
            ]
        },
        {
            "id": 35,
            "question": "What are Promises in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Promises represent the eventual completion or failure of an asynchronous operation. A promise can be in one of three states: pending, fulfilled, or rejected."
                },
                {
                    "type": "code",
                    "content": "let promise = new Promise((resolve, reject) => {\n  let success = true;\n  success ? resolve(\"Task Done\") : reject(\"Task Failed\");\n});\n\npromise.then(res => console.log(res)).catch(err => console.log(err));"
                }
            ]
        },
        {
            "id": 36,
            "question": "What is async/await in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "async/await is syntax sugar over Promises. 'async' makes a function return a Promise, and 'await' pauses execution until the Promise resolves."
                },
                {
                    "type": "code",
                    "content": "async function fetchData() {\n  let data = await Promise.resolve(\"Data received\");\n  console.log(data);\n}\nfetchData();"
                }
            ]
        },
        {
            "id": 37,
            "question": "What is a Closure in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "A closure is a function that retains access to variables from its outer scope even after the outer function has returned."
                },
                {
                    "type": "code",
                    "content": "function outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  };\n}\nlet counter = outer();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2"
                }
            ]
        },
        {
            "id": 38,
            "question": "What is Prototype in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Prototype is an object from which other objects inherit properties. It enables JavaScript's prototypal inheritance."
                },
                {
                    "type": "code",
                    "content": "function Person(name) {\n  this.name = name;\n}\nPerson.prototype.sayHello = function () {\n  console.log(`Hello, my name is ${this.name}`);\n};\n\nlet p1 = new Person(\"Gulshan\");\np1.sayHello();"
                }
            ]
        },
        {
            "id": 39,
            "question": "What is Currying in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Currying is the process of transforming a function with multiple arguments into a sequence of functions, each taking a single argument."
                },
                {
                    "type": "code",
                    "content": "function curry(a) {\n  return function(b) {\n    return function(c) {\n      return a + b + c;\n    };\n  };\n}\nconsole.log(curry(2)(3)(4)); // 9"
                }
            ]
        },
        {
            "id": 40,
            "question": "What is Debouncing in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Debouncing is used to ensure a function is executed only after a certain period of inactivity, useful for optimizing performance."
                },
                {
                    "type": "code",
                    "content": "function debounce(fn, delay) {\n  let timer;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}\n\nwindow.addEventListener(\"resize\", debounce(() => {\n  console.log(\"Resized!\");\n}, 500));"
                }
            ]
        },
        {
            "id": 41,
            "question": "What is Throttling in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Throttling ensures that a function executes at most once in a specified time interval, even if triggered multiple times."
                },
                {
                    "type": "code",
                    "content": "function throttle(fn, limit) {\n  let flag = true;\n  return function(...args) {\n    if (flag) {\n      fn(...args);\n      flag = false;\n      setTimeout(() => flag = true, limit);\n    }\n  };\n}\n\nwindow.addEventListener(\"scroll\", throttle(() => {\n  console.log(\"Scrolling...\");\n}, 1000));"
                }
            ]
        },
        {
            "id": 42,
            "question": "What is Event Delegation in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Event delegation is a technique where a single event listener is added to a parent element to manage events for its child elements using event bubbling."
                },
                {
                    "type": "code",
                    "content": "document.getElementById(\"list\").addEventListener(\"click\", function(e) {\n  if (e.target && e.target.nodeName === \"LI\") {\n    console.log(\"Item clicked: \" + e.target.textContent);\n  }\n});"
                }
            ]
        },
        {
            "id": 43,
            "question": "What are Generators in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Generators are special functions that can pause execution using `yield` and resume later, defined with `function*` syntax."
                },
                {
                    "type": "code",
                    "content": "function* generatorExample() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nlet gen = generatorExample();\nconsole.log(gen.next().value); // 1\nconsole.log(gen.next().value); // 2\nconsole.log(gen.next().value); // 3"
                }
            ]
        },
        {
            "id": 44,
            "question": "What are Iterators in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "An iterator is an object that defines a sequence and returns values one at a time via the `next()` method."
                },
                {
                    "type": "code",
                    "content": "let arr = [10, 20, 30];\nlet iterator = arr[Symbol.iterator]();\nconsole.log(iterator.next().value); // 10\nconsole.log(iterator.next().value); // 20\nconsole.log(iterator.next().value); // 30"
                }
            ]
        },
        {
            "id": 45,
            "question": "What is a WeakMap in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "WeakMap is a collection of key-value pairs where keys must be objects, and values can be arbitrary. Keys are weakly referenced."
                },
                {
                    "type": "code",
                    "content": "let weakMap = new WeakMap();\nlet obj = {};\nweakMap.set(obj, \"data\");\nconsole.log(weakMap.get(obj)); // data"
                }
            ]
        },
        {
            "id": 46,
            "question": "What is a WeakSet in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "WeakSet is a collection of objects where each object can only appear once. Objects are weakly referenced, helping garbage collection."
                },
                {
                    "type": "code",
                    "content": "let weakSet = new WeakSet();\nlet obj = {};\nweakSet.add(obj);\nconsole.log(weakSet.has(obj)); // true"
                }
            ]
        },
        {
            "id": 47,
            "question": "What is Garbage Collection in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Garbage collection is the process of automatically freeing memory by removing objects that are no longer reachable in the program."
                },
                {
                    "type": "text",
                    "content": "JavaScript uses the Mark-and-Sweep algorithm for garbage collection."
                }
            ]
        },
        {
            "id": 48,
            "question": "What is a Polyfill in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "A polyfill is a piece of code (usually JavaScript) that provides modern functionality in older browsers that do not natively support it."
                },
                {
                    "type": "code",
                    "content": "if (!Array.prototype.includes) {\n  Array.prototype.includes = function(value) {\n    return this.indexOf(value) !== -1;\n  };\n}"
                }
            ]
        },
        {
            "id": 49,
            "question": "What is the difference between Map and WeakMap?",
            "answer": [
                {
                    "type": "table",
                    "content": {
                        "headers": ["Feature", "Map", "WeakMap"],
                        "rows": [
                            ["Keys", "Any type (object or primitive)", "Only objects"],
                            ["Garbage Collection", "Keys are strong references", "Keys are weak references"],
                            ["Size property", "Yes, has size", "No size property"],
                            ["Iteration", "Iterable", "Not iterable"]
                        ]
                    }
                }
            ]
        },
        {
            "id": 50,
            "question": "What is the difference between Set and WeakSet?",
            "answer": [
                {
                    "type": "table",
                    "content": {
                        "headers": ["Feature", "Set", "WeakSet"],
                        "rows": [
                            ["Values", "Any type", "Only objects"],
                            ["Garbage Collection", "Strongly referenced", "Weakly referenced"],
                            ["Iteration", "Iterable", "Not iterable"],
                            ["Size property", "Yes, has size", "No size property"]
                        ]
                    }
                }
            ]
        },
        {
            "id": 51,
            "question": "What is the 'this' keyword in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "'this' refers to the object that is executing the current function. Its value depends on how the function is called."
                },
                {
                    "type": "code",
                    "content": "console.log(this); // window (in browser global scope)\n\nfunction test() {\n  console.log(this);\n}\ntest(); // window\n\nconst obj = { name: 'Gulshan', greet() { console.log(this.name); } };\nobj.greet(); // Gulshan"
                }
            ]
        },
        {
            "id": 52,
            "question": "Difference between call(), apply(), and bind() in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "These methods are used to set the 'this' value for functions."
                },
                {
                    "type": "table",
                    "content": {
                        "headers": ["Method", "Usage", "Arguments"],
                        "rows": [
                            ["call()", "Invokes function immediately", "Comma-separated arguments"],
                            ["apply()", "Invokes function immediately", "Arguments as an array"],
                            ["bind()", "Returns a new function with 'this' bound", "Comma-separated arguments"]
                        ]
                    }
                },
                {
                    "type": "code",
                    "content": "const obj = {name: 'Gulshan'};\nfunction greet(greeting) { console.log(greeting + ' ' + this.name); }\n\ngreet.call(obj, 'Hello'); // Hello Gulshan\ngreet.apply(obj, ['Hi']); // Hi Gulshan\nconst boundGreet = greet.bind(obj, 'Hey');\nboundGreet(); // Hey Gulshan"
                }
            ]
        },
        {
            "id": 53,
            "question": "What are ES6 Classes in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "ES6 introduced classes as syntactic sugar over JavaScript's prototype-based inheritance."
                },
                {
                    "type": "code",
                    "content": "class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  greet() {\n    console.log(`Hello, my name is ${this.name}`);\n  }\n}\nconst p1 = new Person('Gulshan', 29);\np1.greet(); // Hello, my name is Gulshan"
                }
            ]
        },
        {
            "id": 54,
            "question": "What is Inheritance in JavaScript ES6 classes?",
            "answer": [
                {
                    "type": "text",
                    "content": "Inheritance allows one class to extend another class, gaining its properties and methods using the 'extends' keyword."
                },
                {
                    "type": "code",
                    "content": "class Person {\n  constructor(name) { this.name = name; }\n  greet() { console.log(`Hello, ${this.name}`); }\n}\nclass Student extends Person {\n  constructor(name, course) {\n    super(name);\n    this.course = course;\n  }\n}\nconst s1 = new Student('Gulshan', 'MERN');\ns1.greet(); // Hello, Gulshan"
                }
            ]
        },
        {
            "id": 55,
            "question": "What are Async Iterators in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Async iterators allow iterating over asynchronous data using 'for await...of' loop."
                },
                {
                    "type": "code",
                    "content": "async function* asyncGen() {\n  yield await Promise.resolve(1);\n  yield await Promise.resolve(2);\n}\n\n(async () => {\n  for await (let num of asyncGen()) {\n    console.log(num);\n  }\n})(); // 1 2"
                }
            ]
        },
        {
            "id": 56,
            "question": "What are Service Workers in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Service Workers are scripts that run in the background and enable features like offline caching, push notifications, and background sync."
                },
                {
                    "type": "code",
                    "content": "if ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/sw.js')\n    .then(reg => console.log('Service Worker registered'))\n    .catch(err => console.log(err));\n}"
                }
            ]
        },
        {
            "id": 57,
            "question": "What are Memory Leaks in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Memory leaks occur when memory that is no longer needed is not released, causing performance issues. Common causes: forgotten timers, global variables, closures retaining references."
                },
                {
                    "type": "code",
                    "content": "// Example of memory leak\nlet obj = {};\nfunction leak() {\n  obj.ref = obj;\n}\nleak();"
                }
            ]
        },
        {
            "id": 58,
            "question": "What are JavaScript Modules?",
            "answer": [
                {
                    "type": "text",
                    "content": "Modules allow splitting code into separate files and exporting/importing functionality using ES6 'export' and 'import' syntax."
                },
                {
                    "type": "code",
                    "content": "// file: math.js\nexport function add(a, b) { return a + b; }\n\n// file: main.js\nimport { add } from './math.js';\nconsole.log(add(2, 3)); // 5"
                }
            ]
        },
        {
            "id": 59,
            "question": "What are Generators vs Async Generators?",
            "answer": [
                {
                    "type": "text",
                    "content": "Generators yield values synchronously, whereas Async Generators yield Promises that resolve asynchronously."
                },
                {
                    "type": "code",
                    "content": "async function* asyncGen() {\n  yield await Promise.resolve(1);\n  yield await Promise.resolve(2);\n}\n(async () => {\n  for await (let val of asyncGen()) console.log(val);\n})(); // 1 2"
                }
            ]
        },
        {
            "id": 60,
            "question": "What are Symbols in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Symbols are unique and immutable primitive values, often used as object keys to avoid name collisions."
                },
                {
                    "type": "code",
                    "content": "const sym1 = Symbol('id');\nconst obj = {};\nobj[sym1] = 123;\nconsole.log(obj[sym1]); // 123"
                }
            ]
        },
        {
            "id": 61,
            "question": "What is the Fetch API in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "The Fetch API provides a modern way to make network requests similar to XMLHttpRequest but using Promises."
                },
                {
                    "type": "code",
                    "content": "fetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(err => console.error(err));"
                }
            ]
        },
        {
            "id": 62,
            "question": "What is Intersection Observer in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Intersection Observer API is used to asynchronously observe changes in the intersection of a target element with an ancestor element or the viewport."
                },
                {
                    "type": "code",
                    "content": "let observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if(entry.isIntersecting) console.log('Visible in viewport');\n  });\n});\n\nlet target = document.querySelector('#myElement');\nobserver.observe(target);"
                }
            ]
        },
        {
            "id": 63,
            "question": "What is EventTarget in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "EventTarget is a DOM interface implemented by objects that can receive events and may have listeners for them (like DOM elements, document, window)."
                },
                {
                    "type": "code",
                    "content": "const btn = document.querySelector('button');\nbtn.addEventListener('click', () => console.log('Button clicked'));"
                }
            ]
        },
        {
            "id": 64,
            "question": "What is a Proxy in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "A Proxy object allows you to create a wrapper for another object or function and intercept operations like get, set, or function calls."
                },
                {
                    "type": "code",
                    "content": "let obj = {name: 'Gulshan'};\nlet proxy = new Proxy(obj, {\n  get(target, prop) {\n    return prop in target ? target[prop] : 'Property not found';\n  }\n});\nconsole.log(proxy.name); // Gulshan\nconsole.log(proxy.age); // Property not found"
                }
            ]
        },
        {
            "id": 65,
            "question": "What is Reflect in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Reflect is a built-in object that provides methods for interceptable JavaScript operations, similar to those used in Proxy handlers."
                },
                {
                    "type": "code",
                    "content": "let obj = {x: 10};\nconsole.log(Reflect.get(obj, 'x')); // 10\nReflect.set(obj, 'y', 20);\nconsole.log(obj.y); // 20"
                }
            ]
        },
        {
            "id": 66,
            "question": "What is WeakRef in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "WeakRef allows creating a weak reference to an object without preventing garbage collection of that object."
                },
                {
                    "type": "code",
                    "content": "let obj = {name: 'Gulshan'};\nlet weakRef = new WeakRef(obj);\nconsole.log(weakRef.deref()); // {name: 'Gulshan'}"
                }
            ]
        },
        {
            "id": 67,
            "question": "What is the difference between Regular Expressions (RegExp) and String methods?",
            "answer": [
                {
                    "type": "text",
                    "content": "RegExp provides powerful pattern matching for strings and can be reused for multiple tests, whereas String methods are simple and specific."
                },
                {
                    "type": "code",
                    "content": "let str = 'hello123';\nconsole.log(/\\d+/.test(str)); // true\nconsole.log(str.includes('123')); // true"
                }
            ]
        },
        {
            "id": 68,
            "question": "What is Event Bubbling and Event Capturing?",
            "answer": [
                {
                    "type": "text",
                    "content": "Event Bubbling: Event propagates from target element up to the root.\nEvent Capturing: Event propagates from root down to the target element."
                },
                {
                    "type": "code",
                    "content": "document.querySelector('#child').addEventListener('click', e => console.log('Child'), false); // bubbling\ndocument.querySelector('#child').addEventListener('click', e => console.log('Child'), true); // capturing"
                }
            ]
        },
        {
            "id": 69,
            "question": "What is the difference between shallow copy and deep copy in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Shallow copy copies the object but nested objects are still referenced. Deep copy duplicates everything recursively."
                },
                {
                    "type": "code",
                    "content": "let obj = {a:1, b:{c:2}};\nlet shallow = {...obj};\nlet deep = JSON.parse(JSON.stringify(obj));\nobj.b.c = 99;\nconsole.log(shallow.b.c); // 99\nconsole.log(deep.b.c); // 2"
                }
            ]
        },
        {
            "id": 70,
            "question": "What are Microtasks and Macrotasks in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Microtasks (Promises, process.nextTick) run after the current stack but before rendering. Macrotasks (setTimeout, setInterval) run after microtasks and UI updates."
                },
                {
                    "type": "code",
                    "content": "console.log('Start');\nsetTimeout(() => console.log('Macrotask'), 0);\nPromise.resolve().then(() => console.log('Microtask'));\nconsole.log('End');\n// Output: Start, End, Microtask, Macrotask"
                }
            ]
        },

        {
            "id": 71,
            "question": "What is Optional Chaining in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Optional Chaining (`?.`) allows reading nested properties without worrying about intermediate null or undefined values."
                },
                {
                    "type": "code",
                    "content": "let user = { profile: { name: 'Gulshan' } };\nconsole.log(user.profile?.name); // Gulshan\nconsole.log(user.contact?.email); // undefined"
                }
            ]
        },
        {
            "id": 72,
            "question": "What is Nullish Coalescing in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Nullish Coalescing (`??`) provides a default value only if the left-hand side is `null` or `undefined`."
                },
                {
                    "type": "code",
                    "content": "let x = null;\nlet y = x ?? 10;\nconsole.log(y); // 10\nlet z = 0 ?? 5;\nconsole.log(z); // 0"
                }
            ]
        },
        {
            "id": 73,
            "question": "What is BigInt in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "BigInt is a primitive type that allows representing integers larger than 2^53 - 1."
                },
                {
                    "type": "code",
                    "content": "let big = 9007199254740991n;\nlet sum = big + 1n;\nconsole.log(sum); // 9007199254740992n"
                }
            ]
        },
        {
            "id": 74,
            "question": "What are Web Workers in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Web Workers run scripts in background threads, allowing heavy computations without blocking the main thread."
                },
                {
                    "type": "code",
                    "content": "const worker = new Worker('worker.js');\nworker.postMessage('Start');\nworker.onmessage = (e) => console.log(e.data);"
                }
            ]
        },
        {
            "id": 75,
            "question": "What is the Intl API in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Intl API provides language-sensitive string comparison, number formatting, and date/time formatting."
                },
                {
                    "type": "code",
                    "content": "const num = 1234567.89;\nconsole.log(new Intl.NumberFormat('de-DE').format(num)); // 1.234.567,89\nconsole.log(new Intl.DateTimeFormat('en-US').format(new Date()));"
                }
            ]
        },
        {
            "id": 76,
            "question": "How to optimize performance in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Performance optimization includes minimizing DOM operations, using requestAnimationFrame, debouncing/throttling, lazy loading, and avoiding memory leaks."
                }
            ]
        },
        {
            "id": 77,
            "question": "What are Proxy traps in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Proxy traps are methods in a Proxy handler object that intercept operations like get, set, has, deleteProperty, apply, and construct."
                },
                {
                    "type": "code",
                    "content": "let obj = {a:1};\nlet proxy = new Proxy(obj, {\n  get(target, prop) {\n    console.log(`Getting ${prop}`);\n    return target[prop];\n  }\n});\nconsole.log(proxy.a); // Getting a \\n 1"
                }
            ]
        },
        {
            "id": 78,
            "question": "What is Memory Management in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "JavaScript automatically manages memory allocation and garbage collection, but developers should avoid memory leaks by cleaning up references, timers, and closures properly."
                }
            ]
        },
        {
            "id": 79,
            "question": "What are Advanced RegExp features in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "Advanced RegExp features include lookahead (?=), lookbehind (?<=), named capture groups (?<name>...), Unicode flags, and sticky matching."
                },
                {
                    "type": "code",
                    "content": "const str = 'abc123';\nconst regex = /(?<letters>[a-z]+)(?<numbers>\\d+)/;\nconst result = str.match(regex);\nconsole.log(result.groups.letters); // abc\nconsole.log(result.groups.numbers); // 123"
                }
            ]
        },
        {
            "id": 80,
            "question": "What are ES6+ Module features in JavaScript?",
            "answer": [
                {
                    "type": "text",
                    "content": "ES6 modules support import/export, dynamic imports, default exports, and allow scoped execution to avoid polluting the global namespace."
                },
                {
                    "type": "code",
                    "content": "// static import\nimport { add } from './math.js';\nconsole.log(add(2,3));\n\n// dynamic import\nimport('./math.js').then(mod => console.log(mod.add(5,5)));"
                }
            ]
        }
    ],
};
