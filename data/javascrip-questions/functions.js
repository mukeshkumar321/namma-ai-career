export const functions_questions = [
    // Q1. What is a function in JavaScript?
    {
        id: 1,
        question: "What is a function in JavaScript?",
        answer: [
            {
                type: "text",
                content: `A **function** in JavaScript is a block of reusable code designed to perform a specific task. Functions help in modularity, reusability, and abstraction.`
            },
            {
                type: "code",
                content: `function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Hello, Alice!`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Keep functions small and focused.  
- Use meaningful names.`
            }
        ]
    },

    // Q2. Function Declaration vs Function Expression
    {
        id: 2,
        question: "What is the difference between function declaration and function expression?",
        answer: [
            {
                type: "table",
                content: {
                    headers: ["Aspect", "Function Declaration", "Function Expression"],
                    rows: [
                        ["Syntax", "function greet() {}", "const greet = function() {}"],
                        ["Hoisting", "Hoisted (can be called before definition)", "Not hoisted"],
                        ["Use case", "When functions are used globally", "When functions are used as values"]
                    ]
                }
            },
            {
                type: "code",
                content: `sayHi(); // Works
function sayHi() { console.log("Hi!"); }

sayHello(); // ❌ Error
const sayHello = function() { console.log("Hello!"); };`,
                language: "javascript"
            }
        ]
    },

    // Q3. Arrow Functions
    {
        id: 3,
        question: "What are arrow functions in JavaScript?",
        answer: [
            {
                type: "text",
                content: `**Arrow functions** provide a shorter syntax for writing functions and do not bind their own \`this\`.`
            },
            {
                type: "code",
                content: `const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// No own 'this'
const person = {
  name: "Alice",
  greet: () => console.log("Hi, " + this.name)
};
person.greet(); // Hi, undefined`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Use arrow functions for short, anonymous functions.  
- Do NOT use them when you need your own \`this\` (e.g., object methods, constructors).`
            }
        ]
    },

    // Q4. First-class Functions
    {
        id: 4,
        question: "What does it mean that JavaScript functions are first-class citizens?",
        answer: [
            {
                type: "text",
                content: `In JavaScript, functions are **first-class citizens**, meaning:  
- They can be assigned to variables.  
- They can be passed as arguments.  
- They can be returned from other functions.`
            },
            {
                type: "code",
                content: `function greet() { return "Hello"; }

// Assign
const fn = greet;

// Pass as argument
function execute(fn) { console.log(fn()); }
execute(greet); // Hello

// Return from function
function outer() {
  return function() { return "Hi"; };
}
console.log(outer()()); // Hi`,
                language: "javascript"
            }
        ]
    },

    // Q5. Higher-Order Functions
    {
        id: 5,
        question: "What are higher-order functions in JavaScript?",
        answer: [
            {
                type: "text",
                content: `A **higher-order function (HOF)** is a function that either:  
1. Takes one or more functions as arguments, or  
2. Returns a function.`
            },
            {
                type: "code",
                content: `function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10`,
                language: "javascript"
            },
            {
                type: "text",
                content: `Examples: \`map\`, \`filter\`, \`reduce\` are higher-order functions.`
            }
        ]
    },

    // Q10. Default, Rest, and Spread Parameters
    {
        id: 7,
        question: "What are default, rest, and spread parameters in JavaScript?",
        answer: [
            {
                type: "list",
                content: [
                    "**Default Parameters**: Provide fallback values when no arguments are passed.",
                    "**Rest Parameters**: Collects multiple arguments into an array.",
                    "**Spread Syntax**: Expands an array into individual elements."
                ]
            },
            {
                type: "code",
                content: `function greet(name = "Guest") {
  console.log("Hello, " + name);
}
greet(); // Hello, Guest

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6

const arr = [1, 2, 3];
console.log(Math.max(...arr)); // 3`,
                language: "javascript"
            }
        ]
    },
    // 211. IIFE — explanation and examples
    {
        id: 8,
        question: "What is an IIFE (Immediately Invoked Function Expression)? Give examples and use-cases.",
        answer: [
            {
                type: "text",
                content: "An IIFE (Immediately Invoked Function Expression) is a function that is defined and executed immediately. It creates a private scope, avoiding polluting the enclosing scope. Before ES modules were common, IIFEs were used for modularization and data privacy."
            },
            {
                type: "code",
                content: `// Basic IIFE
(function () {
  const message = "Hello from IIFE";
  console.log(message);
})();

// IIFE with parameters
(function (name) {
  console.log("Hello, " + name);
})("Alice");

// Module pattern using IIFE (private state + public API)
const counter = (function () {
  let count = 0; // private
  return {
    increment() { count += 1; return count; },
    decrement() { count -= 1; return count; },
    get() { return count; }
  };
})();

console.log(counter.get());      // 0
counter.increment();
console.log(counter.get());      // 1`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**When to use:**\n- Encapsulate private state (legacy).  \n- Avoid global variables.  \n**Note:** In modern code prefer ES modules for modularization and encapsulation."
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Use IIFEs only when you need immediate isolation (legacy code or quick scripts).  \n- Prefer named functions or modules when code needs to be testable/readable.  \n- Avoid excessive nesting of IIFEs — that hurts readability."
            }
        ]
    },

    // 212. IIFE coding challenge
    {
        id: 9,
        question: "Coding: Implement a private counter using an IIFE that exposes increment, reset and value methods.",
        answer: [
            {
                type: "code",
                content: `const createCounter = (function () {
  // IIFE returns a factory function
  return function (initial = 0) {
    let count = initial; // private
    return {
      increment() { count += 1; return count; },
      reset() { count = initial; return count; },
      value() { return count; }
    };
  };
})();

const c = createCounter(5);
console.log(c.value());     // 5
c.increment();
console.log(c.value());     // 6
c.reset();
console.log(c.value());     // 5`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Notes:** This shows private state via closure inside the factory returned by the IIFE. In modern code you can implement the same via modules or classes."
            }
        ]
    },

    // 213. Function hoisting — explanation + examples
    {
        id: 10,
        question: "Explain function hoisting in JavaScript. How do declarations, expressions and arrow functions behave?",
        answer: [
            {
                type: "text",
                content: "Hoisting is the JS engine's behavior of moving declarations to the top of their scope at parse time. Different function syntaxes behave differently under hoisting."
            },
            {
                type: "code",
                content: `// Function declaration => hoisted fully (usable before definition)
sayHello(); // works
function sayHello() { console.log("Hello from declaration"); }

// Function expression assigned to var => var is hoisted as undefined
hello(); // TypeError: hello is not a function
var hello = function() { console.log("Hello from var expression"); };

// let/const + function expression or arrow => in TDZ until initialization
sayHi(); // ReferenceError (if sayHi was declared with let/const)
const sayHi = () => { console.log("Hello from arrow"); };`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Key takeaways:**\n- Function declarations are hoisted and can be called before their definition.  \n- Function expressions (var) cause the variable to be hoisted as undefined — calling it before assignment throws `TypeError`.  \n- `let`/`const` declarations (including arrow functions assigned to them) are in the TDZ — calling before initialization throws `ReferenceError`."
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Prefer function declarations for named utility functions you might call early.  \n- Use `const` function expressions or arrow functions for components/helpers in modern code and place them before use.  \n- Avoid relying on hoisting for program correctness — write code in natural top-to-bottom order for readability."
            }
        ]
    },

    // 215. Parameters vs Arguments — explanation + examples
    {
        id: 12,
        question: "What is the difference between parameters and arguments? Show examples (including arguments object and rest parameters).",
        answer: [
            {
                type: "text",
                content: "Parameters are the named variables in a function definition. Arguments are the actual values you pass into a function when calling it."
            },
            {
                type: "code",
                content: `// 'a' and 'b' are parameters
function add(a, b) {
  return a + b;
}

// 2 and 3 are arguments
console.log(add(2, 3)); // 5

// 'arguments' object (array-like) in non-arrow functions
function showArgs() {
  console.log(arguments); // array-like object of passed args
}
showArgs(1, 'a', true);

// Rest parameters (recommended)
function sumAll(...nums) {
  return nums.reduce((s, n) => s + n, 0);
}
console.log(sumAll(1,2,3,4)); // 10

// Note: arrow functions do not have 'arguments' object
const arrow = () => console.log(typeof arguments); // ReferenceError in strict terms (arguments is not defined in arrow)`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Prefer rest parameters (`...args`) over the `arguments` object — `...` gives a real array and clearer intent.  \n- Name parameters meaningfully.  \n- Avoid relying on implicit `arguments` for readability and type-safety."
            }
        ]
    },

    // 216. Coding: sum a variable number of arguments (params vs arguments)
    {
        id: 13,
        question: "Coding: Write a function that sums any number of numeric arguments (demonstrate rest parameters).",
        answer: [
            {
                type: "code",
                content: `// Solution using rest parameters
function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

console.log(sum());           // 0
console.log(sum(1, 2, 3));    // 6
console.log(sum(10, -2, 3));  // 11

// Alternative: using 'arguments' (not recommended)
function sumOld() {
  return Array.prototype.reduce.call(arguments, (acc, n) => acc + n, 0);
}`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Notes:** The rest-based version is clearer, supports destructuring and TypeScript typing, and returns a real array."
            }
        ]
    },

    // 217. Callback functions — concept, patterns, and pitfalls
    {
        id: 14,
        question: "What is a callback function? Describe synchronous vs asynchronous callbacks, and common patterns (including error-first callbacks).",
        answer: [
            {
                type: "text",
                content: "A callback is a function passed as an argument to be invoked later. Callbacks can be synchronous (invoked immediately in the same execution flow) or asynchronous (invoked later, e.g., after I/O)."
            },
            {
                type: "code",
                content: `// Synchronous callback
function greet(name, cb) {
  cb("Hello, " + name);
}
greet("Alice", message => console.log(message)); // Hello, Alice

// Asynchronous callback (simulated I/O)
function fetchData(id, cb) {
  setTimeout(() => {
    if (id === 0) cb(new Error("not found"), null);
    else cb(null, { id, name: "Alice" });
  }, 1000);
}

fetchData(1, (err, data) => {
  if (err) console.error(err);
  else console.log(data);
});`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Error-first callback pattern:** Common in Node.js: callback signature `function(err, result)` where the first argument is an error if any.  \n**Pitfalls:** Callback hell (deep nesting), error handling complexity, inversion of control."
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Prefer named callbacks over anonymous when reusing.  \n- For complex flows use Promises / async-await to avoid deeply nested callbacks.  \n- Always handle errors in callbacks (check the first parameter if using error-first style)."
            }
        ]
    },

    // 218. Coding: Convert callback-based function to Promise/async-await
    {
        id: 15,
        question: "Coding: Convert a callback-based asynchronous function into a Promise-based version and use async/await to call it.",
        answer: [
            {
                type: "code",
                content: `// Callback-based
function getDataCallback(id, cb) {
  setTimeout(() => {
    if (id === 0) cb(new Error("not found"));
    else cb(null, { id, value: "OK" });
  }, 500);
}

// Promisified version
function getDataPromise(id) {
  return new Promise((resolve, reject) => {
    getDataCallback(id, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

// Usage with async/await
(async function () {
  try {
    const data = await getDataPromise(1);
    console.log("Data:", data);
  } catch (err) {
    console.error("Error:", err.message);
  }
})();`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Notes:** Promisifying callback-based APIs improves readability and makes sequential/parallel flows easier using `await` and `Promise.all`."
            }
        ]
    },

    // 219. Arrow functions vs regular functions — thorough comparison
    {
        id: 16,
        question: "What are the differences between arrow functions and regular (function) declarations/expressions?",
        answer: [
            {
                type: "table",
                content: {
                    headers: ["Aspect", "Arrow Function", "Regular Function"],
                    rows: [
                        ["Syntax", "Shorter: `(a) => a * 2`", "Longer: `function(a) { return a * 2; }`"],
                        ["`this` binding", "Lexical — uses `this` from outer scope", "`this` is dynamic, depends on call-site"],
                        ["`arguments` object", "No own `arguments`", "Has `arguments` object"],
                        ["Constructor", "Cannot be used as constructor (no prototype)", "Can be used with `new` (has prototype)"],
                        ["Usage as object method", "Not recommended (uses outer `this`)", "Common and recommended for methods"]
                    ]
                }
            },
            {
                type: "code",
                content: `const obj1 = {
  value: 10,
  regular() {
    console.log("regular this.value:", this.value); // 10
  },
  arrow: () => {
    console.log("arrow this.value:", this.value); // undefined (uses outer this)
  }
};
obj1.regular();
obj1.arrow();

// arguments difference
function showArgs() {
  console.log(arguments);
}
const showArgsArrow = () => {
  console.log(typeof arguments); // undefined (no own 'arguments')
};

showArgs(1,2); // [1,2]
showArgsArrow(1,2); // 'undefined' or ReferenceError depending on context`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Use arrow functions for short callbacks and functional programming (map/filter).  \n- Use regular functions for object methods or when you need `this` to be the caller.  \n- Do not use arrow functions as constructors or methods that rely on `this`."
            }
        ]
    },

    // 220. Coding: Fix 'this' problem in callbacks (use arrow or bind)
    {
        id: 17,
        question: "Coding: Given an object that increments a counter inside setTimeout, fix the `this` problem so `count` updates correctly.",
        answer: [
            {
                type: "code",
                content: `// Problematic code
const obj = {
  count: 0,
  start() {
    setTimeout(function () {
      this.count += 1; // 'this' is not obj -> wrong
      console.log("Count in timeout (bad):", this.count);
    }, 100);
  }
};
obj.start();

// Fix 1: use arrow function (lexical this)
const obj2 = {
  count: 0,
  start() {
    setTimeout(() => {
      this.count += 1;
      console.log("Count in timeout (arrow):", this.count); // 1
    }, 100);
  }
};
obj2.start();

// Fix 2: bind this
const obj3 = {
  count: 0,
  start() {
    setTimeout(function () {
      this.count += 1;
      console.log("Count in timeout (bind):", this.count); // 1
    }.bind(this), 100);
  }
};
obj3.start();`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Notes:** Arrow is often the cleanest option for callbacks that need access to the containing `this`. Use `bind` when an arrow can't be used (rare)."
            }
        ]
    },

    // 221. Additional edge-case: using 'arguments' in arrow vs regular functions
    {
        id: 18,
        question: "Edge case: How does the `arguments` object behave in arrow functions vs regular functions?",
        answer: [
            {
                type: "text",
                content: "Regular functions have an `arguments` object (array-like) representing all passed arguments. Arrow functions do not have their own `arguments`; they inherit from the outer scope (or `arguments` is undefined)."
            },
            {
                type: "code",
                content: `function regular() {
  console.log("regular arguments:", arguments);
}
regular(1,2,3); // [1,2,3]

const arrow = () => {
  try {
    console.log("arrow arguments:", arguments);
  } catch (e) {
    console.log("arrow has no arguments:", e.message);
  }
};
arrow(1,2,3); // ReferenceError or undefined depending on strict mode

// Prefer rest parameter in modern code:
function sum(...nums) {
  console.log(nums); // real array
}
sum(1,2,3);`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Use rest parameters (`...args`) instead of `arguments` for clarity and array methods support.  \n- Avoid relying on `arguments` in new code — it's legacy and incompatible with arrow functions."
            }
        ]
    },
];