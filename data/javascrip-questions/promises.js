export const promises_questions = [
    {
        id: 1,
        question: "What is a callback in JavaScript?",
        answer: [
            {
                type: "text",
                content: "A callback is a function passed as an argument to another function, which is executed after some operation completes."
            },
            {
                type: "code",
                content: `function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Alice", sayBye);

// Output:
// Hello, Alice
// Goodbye!`,
                language: "javascript"
            }
        ]
    },
    {
        id: 2,
        question: "Synchronous vs Asynchronous callbacks",
        answer: [
            {
                type: "list",
                content: [
                    "Synchronous callback: executed immediately during the function call.",
                    "Asynchronous callback: executed later, e.g., after I/O or a timer.",
                    "Asynchronous callbacks allow non-blocking code execution."
                ]
            },
            {
                type: "code",
                content: `// Synchronous
[1, 2, 3].forEach(num => console.log(num));

// Asynchronous
setTimeout(() => console.log("Async callback"), 1000);`,
                language: "javascript"
            }
        ]
    },
    {
        id: 3,
        question: "What is callback hell and how to avoid it?",
        answer: [
            {
                type: "text",
                content: "Callback hell occurs when multiple nested callbacks make code hard to read and maintain."
            },
            {
                type: "list",
                content: [
                    "Use Promises to flatten the chain",
                    "Use async/await for readable sequential code",
                    "Modularize callbacks into separate functions"
                ]
            }
        ]
    },
    {
        id: 4,
        question: "What is a Promise in JavaScript?",
        answer: [
            {
                type: "text",
                content: "A Promise represents the eventual completion or failure of an asynchronous operation, allowing chaining and avoiding callback hell."
            },
            {
                type: "list",
                content: [
                    "States: pending, fulfilled, rejected",
                    "Methods: .then(), .catch(), .finally()",
                    "Once resolved or rejected, the state is immutable"
                ]
            }
        ]
    },
    {
        id: 5,
        question: "Difference between callbacks and Promises",
        answer: [
            {
                type: "list",
                content: [
                    "Promises avoid nested callbacks and improve readability",
                    "Promises provide better error handling with .catch()",
                    "Promises can be chained for sequential asynchronous operations"
                ]
            }
        ]
    },
    {
        id: 6,
        question: "Promise chaining and sequential execution",
        answer: [
            {
                type: "text",
                content: "Promises allow sequential execution using .then(), where each then receives the previous result."
            },
            {
                type: "code",
                content: `Promise.resolve(2)
  .then(x => x * 2)
  .then(x => x + 1)
  .then(console.log); // Output: 5`,
                language: "javascript"
            }
        ]
    },
    {
        id: 7,
        question: "Promise.all, Promise.race, Promise.allSettled, Promise.any",
        answer: [
            {
                type: "list",
                content: [
                    "Promise.all: resolves when all Promises resolve, rejects if any reject",
                    "Promise.race: resolves/rejects as soon as one Promise settles",
                    "Promise.allSettled: waits for all Promises, gives result of each",
                    "Promise.any: resolves as soon as one Promise resolves, ignores rejections unless all reject"
                ]
            }
        ]
    },
    {
        id: 8,
        question: "Error handling in Promises",
        answer: [
            {
                type: "text",
                content: "Errors propagate down the chain until a .catch() handles them."
            },
            {
                type: "code",
                content: `Promise.resolve()
  .then(() => { throw new Error("Fail"); })
  .then(() => console.log("Won't run"))
  .catch(err => console.log(err.message)); // Output: Fail`,
                language: "javascript"
            }
        ]
    },
    {
        id: 9,
        question: "Converting callback-based functions to Promises",
        answer: [
            {
                type: "text",
                content: "Wrap callback-based functions in a Promise constructor for cleaner async handling."
            },
            {
                type: "code",
                content: `const fs = require('fs');

function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if(err) reject(err);
      else resolve(data);
    });
  });
}

readFilePromise('file.txt').then(console.log).catch(console.error);`,
                language: "javascript"
            }
        ]
    },
    {
        id: 10,
        question: "What is async/await?",
        answer: [
            {
                type: "text",
                content: "Async/await is syntax sugar over Promises, allowing asynchronous code to be written in a synchronous style."
            },
            {
                type: "code",
                content: `async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch(err) {
    console.error(err);
  }
}

fetchData();`,
                language: "javascript"
            }
        ]
    },
    {
        id: 11,
        question: "Difference between async/await and Promises",
        answer: [
            {
                type: "list",
                content: [
                    "Async functions always return a Promise",
                    "await pauses execution until Promise resolves or rejects",
                    "Errors handled with try/catch instead of .catch()",
                    "Provides readable sequential code"
                ]
            }
        ]
    },
    {
        id: 12,
        question: "Sequential vs parallel async/await execution",
        answer: [
            {
                type: "text",
                content: "Sequential awaits pause one after another; parallel awaits can be done using Promise.all."
            },
            {
                type: "code",
                content: `// Sequential
const a = await task1();
const b = await task2(a);
const c = await task3(b);

// Parallel
const [a, b, c] = await Promise.all([task1(), task2(), task3()]);`,
                language: "javascript"
            }
        ]
    },
    {
        id: 13,
        question: "Error handling in async/await",
        answer: [
            {
                type: "text",
                content: "Use try/catch blocks to catch errors in async functions."
            },
            {
                type: "code",
                content: `async function run() {
  try {
    const data = await fetchSomething();
    console.log(data);
  } catch(err) {
    console.error(err);
  }
}`,
                language: "javascript"
            }
        ]
    },
    {
        id: 14,
        question: "Common pitfalls in async programming",
        answer: [
            {
                type: "list",
                content: [
                    "Callback hell due to nested callbacks",
                    "Not returning Promises in .then() chains",
                    "Forgetting try/catch with async/await",
                    "Blocking the Event Loop with synchronous heavy tasks",
                    "Mixing await and non-Promise values incorrectly"
                ]
            }
        ]
    },
    {
        id: 15,
        question: "Best practices for callbacks, Promises, and async/await",
        answer: [
            {
                type: "list",
                content: [
                    "Prefer Promises or async/await over callbacks",
                    "Always handle errors properly",
                    "Use Promise.all for parallel tasks, await for sequential dependent tasks",
                    "Avoid deep nesting and modularize functions",
                    "Keep code readable and maintainable"
                ]
            }
        ]
    }
]
