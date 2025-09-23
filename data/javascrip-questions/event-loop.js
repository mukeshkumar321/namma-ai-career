export const event_loop_questions = [
    {
        id: 1,
        question: "What is the Event Loop in JavaScript?",
        answer: [
            {
                type: "text",
                content: "The Event Loop is a mechanism that allows JavaScript (single-threaded) to perform **non-blocking asynchronous operations**. It manages the execution of code, callbacks, promises, and other tasks in an organized way."
            },
            {
                type: "list",
                content: [
                    "JavaScript has a single thread for executing code.",
                    "Asynchronous tasks (like I/O) are sent to the **task queue** or **microtask queue**.",
                    "The Event Loop continuously checks the **call stack** and queues, executing tasks without blocking the main thread."
                ]
            },
            {
                type: "code",
                content: `console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Output:
// Start
// End
// Promise
// Timeout`,
                language: "javascript"
            }
        ]
    },
    {
        id: 2,
        question: "What is the difference between Macrotasks and Microtasks?",
        answer: [
            {
                type: "text",
                content: "Macrotasks and microtasks are two types of task queues in the Event Loop, processed differently."
            },
            {
                type: "list",
                content: [
                    "Macrotasks: setTimeout, setInterval, setImmediate, I/O callbacks",
                    "Microtasks: Promise callbacks, process.nextTick (Node.js), MutationObserver (browser)",
                    "Microtasks run **before** the next macrotask after the current call stack"
                ]
            },
            {
                type: "code",
                content: `console.log("Start");

setTimeout(() => console.log("Macrotask"), 0);
Promise.resolve().then(() => console.log("Microtask"));

console.log("End");

// Output:
// Start
// End
// Microtask
// Macrotask`,
                language: "javascript"
            }
        ]
    },
    {
        id: 3,
        question: "Explain the call stack in JavaScript.",
        answer: [
            {
                type: "text",
                content: "The call stack is a **data structure** that stores function calls. When a function is invoked, it’s pushed to the stack; after execution, it is popped off."
            },
            {
                type: "code",
                content: `function first() { second(); console.log("First"); }
function second() { console.log("Second"); }

first();

// Execution order:
// first() → second() → console.log("Second") → console.log("First")`,
                language: "javascript"
            }
        ]
    },
    {
        id: 4,
        question: "How does setTimeout work in Event Loop?",
        answer: [
            {
                type: "text",
                content: "setTimeout schedules a function in the **macrotask queue**. Even with 0ms, it waits for the call stack to be empty."
            },
            {
                type: "code",
                content: `console.log("Start");

setTimeout(() => console.log("Timeout 0ms"), 0);

console.log("End");

// Output:
// Start
// End
// Timeout 0ms`,
                language: "javascript"
            }
        ]
    },
    {
        id: 5,
        question: "Difference between process.nextTick() and setImmediate() in Node.js?",
        answer: [
            {
                type: "list",
                content: [
                    "process.nextTick(): runs after the current operation, before next event loop (microtask queue).",
                    "setImmediate(): runs on next iteration of Event Loop (macrotask queue).",
                    "Use nextTick for urgent callbacks, setImmediate for scheduling future tasks."
                ]
            },
            {
                type: "code",
                content: `const fs = require('fs');

fs.readFile(__filename, () => {
  setImmediate(() => console.log("setImmediate"));
  process.nextTick(() => console.log("nextTick"));
});

// Output:
// nextTick
// setImmediate`,
                language: "javascript"
            }
        ]
    },
    {
        id: 6,
        question: "How are Promises handled in the Event Loop?",
        answer: [
            {
                type: "text",
                content: "Promise callbacks are added to the **microtask queue**, so they run after the current stack but before the next macrotask."
            },
            {
                type: "code",
                content: `console.log("Start");

Promise.resolve().then(() => console.log("Promise 1"))
Promise.resolve().then(() => console.log("Promise 2"));

console.log("End");

// Output:
// Start
// End
// Promise 1
// Promise 2`,
                language: "javascript"
            }
        ]
    },
    {
        id: 7,
        question: "Blocking vs Non-blocking code in Event Loop?",
        answer: [
            {
                type: "text",
                content: "Blocking code prevents the Event Loop from executing other tasks. Non-blocking code allows asynchronous tasks to run without blocking."
            },
            {
                type: "list",
                content: [
                    "Blocking: CPU-heavy loops, synchronous I/O.",
                    "Non-blocking: setTimeout, async I/O, Promises, fetch API."
                ]
            },
            {
                type: "code",
                content: `// Blocking
for(let i=0;i<1e9;i++){}

// Non-blocking
setTimeout(() => console.log("Async"), 0);`,
                language: "javascript"
            }
        ]
    },
    {
        id: 8,
        question: "What is the starvation problem in Event Loop?",
        answer: [
            {
                type: "text",
                content: "Starvation happens when microtasks keep executing and macrotasks never get a chance to run."
            },
            {
                type: "code",
                content: `Promise.resolve().then(function endless() {
  console.log("Microtask keeps running");
  Promise.resolve().then(endless);
});`,
                language: "javascript"
            },
            {
                type: "text",
                content: "Avoid infinite microtask loops to prevent starving macrotasks."
            }
        ]
    },
    {
        id: 9,
        question: "How does Event Loop affect UI rendering?",
        answer: [
            {
                type: "text",
                content: "JavaScript is single-threaded in browsers. Long-running JS blocks UI rendering, causing jank or delays."
            },
            {
                type: "list",
                content: [
                    "Use asynchronous operations to keep UI responsive.",
                    "Break heavy computation into smaller chunks.",
                    "Use Web Workers for CPU-intensive tasks."
                ]
            }
        ]
    },
    {
        id: 10,
        question: "How to debug Event Loop and async behavior?",
        answer: [
            {
                type: "list",
                content: [
                    "Use console logs to track execution order.",
                    "Use Node.js `--inspect` or Chrome DevTools debugger.",
                    "Understand microtask vs macrotask queues.",
                    "Check stack traces for async callbacks."
                ]
            }
        ]
    },
    {
        id: 11,
        question: "What happens if you mix microtasks and macrotasks?",
        answer: [
            {
                type: "text",
                content: "Microtasks always complete before the next macrotask, which can cause unexpected order if mixed."
            },
            {
                type: "code",
                content: `console.log("Start");

setTimeout(() => console.log("Macrotask"), 0);

Promise.resolve().then(() => console.log("Microtask 1"))
Promise.resolve().then(() => console.log("Microtask 2"));

console.log("End");

// Output:
// Start
// End
// Microtask 1
// Microtask 2
// Macrotask`,
                language: "javascript"
            }
        ]
    },
    {
        id: 12,
        question: "Explain Event Loop behavior with nested setTimeout and Promises.",
        answer: [
            {
                type: "code",
                content: `console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
  Promise.resolve().then(() => console.log("Promise inside Timeout"));
}, 0);

Promise.resolve().then(() => console.log("Promise 1"));

console.log("End");

// Output:
// Start
// End
// Promise 1
// Timeout 1
// Promise inside Timeout`,
                language: "javascript"
            }
        ]
    },
    {
        id: 13,
        question: "How does Node.js handle I/O tasks in the Event Loop?",
        answer: [
            {
                type: "text",
                content: "Node.js uses the libuv library. I/O tasks are handled asynchronously via the Event Loop, freeing the main thread while waiting for operations to complete."
            },
            {
                type: "list",
                content: [
                    "I/O callbacks are queued as macrotasks.",
                    "process.nextTick() runs before I/O callbacks.",
                    "Allows Node.js to handle thousands of concurrent I/O operations efficiently."
                ]
            }
        ]
    },
    {
        id: 14,
        question: "Explain Event Loop with long-running CPU tasks and solutions.",
        answer: [
            {
                type: "text",
                content: "Long CPU tasks block the Event Loop and delay all async operations."
            },
            {
                type: "list",
                content: [
                    "Break tasks into smaller chunks with setTimeout or setImmediate.",
                    "Use Web Workers (browser) or Worker Threads (Node.js) for heavy computation.",
                    "Avoid blocking synchronous code in production."
                ]
            }
        ]
    },
    {
        id: 15,
        question: "What are real-world pitfalls of the Event Loop in production?",
        answer: [
            {
                type: "list",
                content: [
                    "Infinite microtask loops starving macrotasks.",
                    "Blocking synchronous operations causing slow response.",
                    "Uncaught exceptions halting Node.js server.",
                    "Misunderstanding timers causing out-of-order execution.",
                    "Memory leaks from unremoved listeners or retained closures."
                ]
            },
            {
                type: "text",
                content: "Best Practice: Monitor Event Loop lag, use async patterns, and test edge cases."
            }
        ]
    }
]
