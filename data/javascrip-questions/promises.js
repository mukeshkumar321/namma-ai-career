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
    },
    // ================== CALLBACKS ==================
    {
        id: 21,
        question: "Implement a function fetchUser(id, callback) that simulates fetching user data after 2 seconds. If the id is invalid, return an error via callback.",
        answer: [
            {
                type: "text",
                content: "This question tests whether you understand how callbacks are used to handle asynchronous tasks and how to follow Node.js style error-first callbacks."
            },
            {
                type: "code",
                content: `function fetchUser(id, callback) {
  setTimeout(() => {
    if (typeof id !== "number" || id <= 0) {
      return callback(new Error("Invalid user id"), null);
    }
    callback(null, { id, name: "User" + id });
  }, 2000);
}

// Usage
fetchUser(1, (err, user) => {
  if (err) return console.error("Error:", err.message);
  console.log("Fetched:", user);
});`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Interview Notes:**\n- Tests ability to implement async behavior with callbacks.\n- Checks understanding of error-first callback pattern.\n- Common in Node.js before Promises/async/await."
            }
        ]
    },
    {
        id: 22,
        question: "You are given three async functions: getUser, getPosts, and getComments. Chain them using callbacks to get final data (simulate callback hell).",
        answer: [
            {
                type: "text",
                content: "This tests whether you can manage multiple asynchronous operations with callbacks, and highlights the readability issue known as 'callback hell'."
            },
            {
                type: "code",
                content: `function getUser(cb) {
  setTimeout(() => cb(null, { userId: 1, name: "Alice" }), 1000);
}

function getPosts(userId, cb) {
  setTimeout(() => cb(null, { postId: 2, title: "Post Title" }), 1000);
}

function getComments(postId, cb) {
  setTimeout(() => cb(null, { commentId: 3, text: "Nice post!" }), 1000);
}

// Callback Hell
getUser((err, user) => {
  if (err) return console.error(err);
  getPosts(user.userId, (err, post) => {
    if (err) return console.error(err);
    getComments(post.postId, (err, comment) => {
      if (err) return console.error(err);
      console.log({ user, post, comment });
    });
  });
});`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Interview Notes:**\n- Demonstrates understanding of callback nesting.\n- Interviewer wants to see if candidate recognizes 'callback hell' and can suggest Promises/async as alternatives."
            }
        ]
    },

    // ================== PROMISES ==================
    {
        id: 23,
        question: "Write a function getNumber() that returns a promise. If the random number is even, resolve it; if it’s odd, reject it.",
        answer: [
            {
                type: "text",
                content: "This question checks whether you can create and handle Promises manually."
            },
            {
                type: "code",
                content: `function getNumber() {
  return new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10);
    if (num % 2 === 0) resolve(num);
    else reject(new Error("Odd number: " + num));
  });
}

getNumber()
  .then(num => console.log("Resolved:", num))
  .catch(err => console.error("Rejected:", err.message));`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Interview Notes:**\n- Tests Promise constructor knowledge.\n- Checks ability to handle resolve/reject flows."
            }
        ]
    },
    {
        id: 24,
        question: "Implement a sequence using promises to print 1 after 1 second, 2 after 2 seconds, and 3 after 3 seconds.",
        answer: [
            {
                type: "text",
                content: "This question evaluates whether you understand Promise chaining for sequential execution."
            },
            {
                type: "code",
                content: `const delay = (ms, value) => new Promise(res => setTimeout(() => res(value), ms));

delay(1000, 1)
  .then(num => { console.log(num); return delay(2000, 2); })
  .then(num => { console.log(num); return delay(3000, 3); })
  .then(num => console.log(num));`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Interview Notes:**\n- Checks chaining knowledge.\n- Candidate must avoid nesting and show linear Promise usage."
            }
        ]
    },
    {
        id: 25,
        question: "Use Promise.all to fetch data from three APIs simultaneously and return all results once all are resolved.",
        answer: [
            {
                type: "code",
                content: `const urls = ["api1", "api2", "api3"];

Promise.all(urls.map(url => fetch(url).then(res => res.json())))
  .then(results => console.log(results))
  .catch(err => console.error("Error:", err));`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Interview Notes:**\n- Tests concurrency knowledge.\n- Checks if candidate knows Promise.all rejects on the first failure."
            }
        ]
    },
    {
        id: 26,
        question: "Implement fetchFastest(urls) that uses Promise.race to return the fastest API response.",
        answer: [
            {
                type: "code",
                content: `function fetchFastest(urls) {
  return Promise.race(urls.map(url => fetch(url).then(res => res.json())));
}

fetchFastest(["api1", "api2", "api3"])
  .then(result => console.log("Fastest result:", result))
  .catch(err => console.error("Error:", err));`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Interview Notes:**\n- Tests understanding of Promise.race.\n- Interviewer checks if candidate knows that the first settled (resolved/rejected) Promise decides the outcome."
            }
        ]
    },

    // ================== ASYNC/AWAIT ==================
    {
        id: 27,
        question: "Create a wait(ms) function that delays execution for given milliseconds using async/await.",
        answer: [
            {
                type: "code",
                content: `function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log("Start");
  await wait(2000);
  console.log("After 2s");
}
run();`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Interview Notes:**\n- Checks ability to combine Promises with async/await.\n- Shows understanding of pause-like behavior with await."
            }
        ]
    },
    {
        id: 28,
        question: "Write an async function that throws an error if a fetched number is odd. Handle the error using try/catch.",
        answer: [
            {
                type: "code",
                content: `async function fetchNumber() {
  const num = Math.floor(Math.random() * 10);
  if (num % 2 !== 0) throw new Error("Odd number: " + num);
  return num;
}

(async () => {
  try {
    const num = await fetchNumber();
    console.log("Even:", num);
  } catch (err) {
    console.error("Error:", err.message);
  }
})();`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Interview Notes:**\n- Tests error handling in async functions.\n- Important for production-level reliability."
            }
        ]
    },
    {
        id: 29,
        question: "Implement two functions: fetchAllSequential(urls) → fetch URLs one by one, fetchAllParallel(urls) → fetch URLs in parallel using Promise.all.",
        answer: [
            {
                type: "code",
                content: `async function fetchAllSequential(urls) {
  const results = [];
  for (const url of urls) {
    const res = await fetch(url);
    results.push(await res.json());
  }
  return results;
}

async function fetchAllParallel(urls) {
  const results = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
  return results;
}`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Interview Notes:**\n- Checks candidate’s ability to differentiate sequential vs parallel async patterns.\n- Important for performance optimizations."
            }
        ]
    },

    // ================== EVENT LOOP ==================
    {
        id: 30,
        question: "Predict the output of the following code snippet:",
        answer: [
            {
                type: "code",
                content: `console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");

// Output:
// A
// D
// C
// B`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Interview Notes:**\n- Tests understanding of Event Loop order: synchronous → microtasks → macrotasks.\n- Commonly asked to differentiate between setTimeout and Promises."
            }
        ]
    },

    // ================== ADVANCED ==================
    {
        id: 31,
        question: "Implement a retry mechanism that retries a failed async task up to 3 times.",
        answer: [
            {
                type: "code",
                content: `async function retry(fn, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === retries - 1) throw err;
    }
  }
}

// Usage
retry(() => fetch("api")).then(console.log).catch(console.error);`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Interview Notes:**\n- Tests resilience patterns in async tasks.\n- Important for real-world APIs that may fail intermittently."
            }
        ]
    },
    {
        id: 32,
        question: "Write a timeoutPromise(promise, ms) function that resolves the given promise within ms milliseconds, otherwise rejects with a timeout error.",
        answer: [
            {
                type: "code",
                content: `function timeoutPromise(promise, ms) {
  let timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), ms));
  return Promise.race([promise, timeout]);
}

// Usage
timeoutPromise(fetch("api"), 3000)
  .then(console.log)
  .catch(console.error);`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Interview Notes:**\n- Tests ability to combine Promises with timing control.\n- Used in production systems to prevent indefinite hangs."
            }
        ]
    },
    {
        id: 33,
        question: "Implement a debounce function for an API call (e.g., search bar).",
        answer: [
            {
                type: "code",
                content: `function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Usage
const search = debounce(query => console.log("Searching:", query), 500);
search("JS");
search("JavaScript");`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Interview Notes:**\n- Tests optimization knowledge.\n- Common for real-time search inputs to prevent excessive API calls."
            }
        ]
    },
    {
        id: 34,
        question: "Implement a throttle function for scroll or resize events.",
        answer: [
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

// Usage
const logScroll = throttle(() => console.log("Scrolled"), 1000);
window.addEventListener("scroll", logScroll);`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Interview Notes:**\n- Tests ability to control performance-heavy event handlers.\n- Important for UI performance optimization."
            }
        ]
    },
    {
        id: 35,
        question: "Write a custom myPromiseAll implementation without using built-in Promise.all.",
        answer: [
            {
                type: "code",
                content: `function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;
    promises.forEach((p, index) => {
      Promise.resolve(p).then(val => {
        results[index] = val;
        completed++;
        if (completed === promises.length) resolve(results);
      }).catch(reject);
    });
  });
}

// Usage
myPromiseAll([Promise.resolve(1), Promise.resolve(2)])
  .then(console.log) // [1, 2]
  .catch(console.error);`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Interview Notes:**\n- Tests deep understanding of Promise mechanics.\n- Checks if candidate can reimplement core utilities."
            }
        ]
    },
];