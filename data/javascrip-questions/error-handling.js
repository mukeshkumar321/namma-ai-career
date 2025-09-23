export const error_handling_questions = [
    {
        id: 1,
        question: "What are the main types of errors in JavaScript?",
        answer: [
            {
                type: "list",
                content: [
                    "SyntaxError – invalid code structure",
                    "ReferenceError – accessing undefined variables",
                    "TypeError – performing invalid operations on a type",
                    "RangeError – numeric values outside allowed range",
                    "EvalError – related to eval() (rare)",
                    "URIError – malformed URI functions"
                ]
            },
            {
                type: "code",
                content: `console.log(x); // ReferenceError: x is not defined`,
                language: "javascript"
            }
        ]
    },
    {
        id: 2,
        question: "How does try...catch work in JavaScript?",
        answer: [
            {
                type: "text",
                content: "`try...catch` allows handling errors gracefully instead of crashing the program. You can also use `finally` to run code regardless of success or failure."
            },
            {
                type: "code",
                content: `try {
  let data = JSON.parse("{bad json}");
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("Cleanup code always runs");
}`,
                language: "javascript"
            }
        ]
    },
    {
        id: 3,
        question: "Can try...catch handle asynchronous errors?",
        answer: [
            {
                type: "text",
                content: "No, `try...catch` handles only synchronous errors. For async operations, you need to use Promises, async/await, or `.catch()`."
            },
            {
                type: "code",
                content: `// Incorrect: won't catch async error
try {
  setTimeout(() => { throw new Error("Async error"); }, 1000);
} catch (err) {
  console.log("Not caught");
}

// Correct way using async/await
(async () => {
  try {
    await Promise.reject(new Error("Async error"));
  } catch (err) {
    console.log("Caught:", err.message);
  }
})();`,
                language: "javascript"
            }
        ]
    },
    {
        id: 4,
        question: "What is the difference between operational errors and programmer errors?",
        answer: [
            {
                type: "text",
                content: `- Operational errors: expected runtime issues, like network failures, DB unavailability, or invalid user input.  
- Programmer errors: bugs in code, like undefined variable access or logic mistakes.`
            },
            {
                type: "text",
                content: "**Best Practice:** Handle operational errors at runtime gracefully. Programmer errors should be fixed in code, not caught dynamically."
            }
        ]
    },
    {
        id: 5,
        question: "How does error propagation work in JavaScript?",
        answer: [
            {
                type: "text",
                content: "Errors propagate up the call stack if not caught locally. The nearest enclosing try...catch handles it; otherwise, the program may crash."
            },
            {
                type: "code",
                content: `function level1() { level2(); }
function level2() { throw new Error("Problem"); }

try {
  level1();
} catch (e) {
  console.log("Caught:", e.message);
}`,
                language: "javascript"
            }
        ]
    },
    {
        id: 6,
        question: "What is the difference between throw 'error' and throw new Error()?",
        answer: [
            {
                type: "text",
                content: "- `throw 'error'` throws a string (not recommended, no stack trace).  \n- `throw new Error('message')` throws an Error object with message and stack trace."
            },
            {
                type: "code",
                content: `throw "Something went wrong"; // ❌
throw new Error("Something went wrong"); // ✅`,
                language: "javascript"
            }
        ]
    },
    {
        id: 7,
        question: "How do you handle global errors in browsers and Node.js?",
        answer: [
            {
                type: "text",
                content: "Global error listeners catch uncaught exceptions to prevent app crash and enable logging."
            },
            {
                type: "code",
                content: `// Browser
window.onerror = (msg, url, line) => {
  console.log("Global Error:", msg);
};

// Node.js
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});`,
                language: "javascript"
            }
        ]
    },
    {
        id: 8,
        question: "How do you handle unhandled Promise rejections globally?",
        answer: [
            {
                type: "text",
                content: "In Node.js, use `process.on('unhandledRejection')` to catch promises without a .catch handler."
            },
            {
                type: "code",
                content: `process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection:", reason);
});`,
                language: "javascript"
            }
        ]
    },
    {
        id: 9,
        question: "How do you create and use custom error types?",
        answer: [
            {
                type: "text",
                content: "Custom errors help provide meaningful messages and differentiate error types."
            },
            {
                type: "code",
                content: `class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

throw new ValidationError("Email is invalid");`,
                language: "javascript"
            }
        ]
    },
    {
        id: 10,
        question: "What are best practices for error handling in production?",
        answer: [
            {
                type: "list",
                content: [
                    "Throw Error objects, not strings",
                    "Use try/catch selectively",
                    "Separate operational errors from programmer errors",
                    "Log errors with context (stack trace, request info, user ID)",
                    "Use monitoring and alerting tools (Sentry, Datadog)",
                    "Fail gracefully and avoid crashing the system"
                ]
            }
        ]
    },
    {
        id: 11,
        question: "How should async/await errors be handled?",
        answer: [
            {
                type: "code",
                content: `async function fetchData() {
  try {
    const res = await fetch("https://api.example.com");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("API Error:", err.message);
  }
}`,
                language: "javascript"
            },
            {
                type: "text",
                content: "Always wrap `await` in try/catch or handle with `.catch()` on the promise."
            }
        ]
    },
    {
        id: 12,
        question: "What are Error Boundaries in React?",
        answer: [
            {
                type: "text",
                content: "Error Boundaries are components that catch errors in rendering, lifecycle methods, and constructors of child components."
            },
            {
                type: "code",
                content: `class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error, info) { console.log(error, info); }
  render() { return this.state.hasError ? <h1>Something went wrong.</h1> : this.props.children; }
}`,
                language: "javascript"
            }
        ]
    },
    {
        id: 13,
        question: "How do you handle errors in Express.js middleware?",
        answer: [
            {
                type: "code",
                content: `app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});`,
                language: "javascript"
            },
            {
                type: "text",
                content: "Express recognizes error middleware by 4 arguments `(err, req, res, next)`."
            }
        ]
    },
    {
        id: 14,
        question: "How does synchronous vs asynchronous error handling differ in Node.js?",
        answer: [
            {
                type: "list",
                content: [
                    "Synchronous: use try/catch around blocking code.",
                    "Asynchronous: handle errors via callbacks (`err, data`), promises, or async/await.",
                    "Always follow Node.js callback convention: error-first pattern."
                ]
            },
            {
                type: "code",
                content: `fs.readFile("file.txt", (err, data) => {
  if (err) return console.error(err);
  console.log(data.toString());
});`,
                language: "javascript"
            }
        ]
    },
    {
        id: 15,
        question: "Why is logging and monitoring important in error handling?",
        answer: [
            {
                type: "list",
                content: [
                    "Detect production issues early",
                    "Identify patterns and recurring bugs",
                    "Provide context for debugging (stack, request, user ID)",
                    "Use structured logging and monitoring tools (Winston, Sentry, Datadog)"
                ]
            }
        ]
    },
    {
        id: 16,
        question: "How can error wrapping improve debugging?",
        answer: [
            {
                type: "text",
                content: "Error wrapping involves creating a new error that includes the original error as a cause. This preserves context and stack trace."
            },
            {
                type: "code",
                content: `class AppError extends Error {
  constructor(message, cause) {
    super(message);
    this.name = "AppError";
    this.cause = cause;
  }
}

try {
  throw new Error("DB connection failed");
} catch (err) {
  throw new AppError("Failed to fetch user", err);
}`,
                language: "javascript"
            }
        ]
    },
    {
        id: 17,
        question: "What are memory leak risks related to error handling?",
        answer: [
            {
                type: "text",
                content: "Unremoved global error listeners, unhandled promises, or retaining references in catch blocks can cause memory leaks in long-running Node.js processes."
            }
        ]
    },
    {
        id: 18,
        question: "How do you handle errors in event-driven Node.js code?",
        answer: [
            {
                type: "code",
                content: `const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on("error", (err) => {
  console.error("Event error:", err);
});

emitter.emit("error", new Error("Something went wrong"));`,
                language: "javascript"
            },
            {
                type: "text",
                content: "EventEmitters will crash Node.js if an 'error' event has no listener."
            }
        ]
    },
    {
        id: 19,
        question: "What are common patterns to handle API call failures gracefully?",
        answer: [
            {
                type: "list",
                content: [
                    "Retry logic with exponential backoff",
                    "Circuit breaker pattern",
                    "Failover or fallback responses",
                    "Logging and alerting when repeated failures occur"
                ]
            }
        ]
    },
    {
        id: 20,
        question: "How do you test error handling in JavaScript?",
        answer: [
            {
                type: "text",
                content: "Testing ensures your code handles failures correctly and doesn’t crash unexpectedly."
            },
            {
                type: "code",
                content: `// Using Jest for async function
test("fetchData throws error on failure", async () => {
  await expect(fetchData()).rejects.toThrow("API Error");
});`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practice:** Write tests for both expected failures and edge cases, including async operations."
            }
        ]
    }
]
