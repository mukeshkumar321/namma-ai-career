export const currying_questions = [
    {
        id: 1,
        question: "What is currying in JavaScript?",
        answer: [
            {
                type: "text",
                content: `**Currying** is a functional programming technique in JavaScript where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.  
It allows partial application of functions and helps in creating more reusable and composable code.`
            },
            {
                type: "code",
                content: `// Regular function
function add(a, b) {
  return a + b;
}

// Curried version
function addCurried(a) {
  return function(b) {
    return a + b;
  };
}

const addFive = addCurried(5);
console.log(addFive(10)); // 15
console.log(addCurried(3)(4)); // 7`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Use currying to create reusable functions with pre-defined arguments.  
- Helps with functional composition and avoiding repeated code.`
            }
        ]
    },

    {
        id: 2,
        question: "Why is currying useful in JavaScript?",
        answer: [
            {
                type: "text",
                content: `Currying allows **partial function application**, meaning you can fix some arguments and get a new function that takes the remaining arguments.  
It improves **code reusability, readability, and functional composition**.`
            },
            {
                type: "code",
                content: `function multiply(a, b, c) {
  return a * b * c;
}

// Curried version
const curriedMultiply = a => b => c => a * b * c;

const doubleAndTriple = curriedMultiply(2)(3);
console.log(doubleAndTriple(4)); // 24`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Use when functions are reused with common arguments.  
- Avoid excessive nesting as it can hurt readability.`
            }
        ]
    },

    {
        id: 3,
        question: "How can you implement a generic curry function?",
        answer: [
            {
                type: "text",
                content: `A **generic curry function** can transform any multi-argument function into a curried version.`
            },
            {
                type: "code",
                content: `function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

// Example usage
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2, 3)); // 6`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Always check the number of arguments supplied (\`fn.length\`).  
- Useful for functional programming and creating reusable utilities.`
            }
        ]
    },

    {
        id: 4,
        question: "What is the difference between currying and partial application?",
        answer: [
            {
                type: "text",
                content: `**Currying** transforms a function so that it takes one argument at a time.  
**Partial application** allows you to fix a few arguments of a function, creating a new function that takes the remaining arguments.`
            },
            {
                type: "code",
                content: `// Currying
const curriedAdd = a => b => a + b;
console.log(curriedAdd(2)(3)); // 5

// Partial application
function add(a, b, c) {
  return a + b + c;
}
const addTwoAndThree = add.bind(null, 2, 3);
console.log(addTwoAndThree(4)); // 9`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Use currying for creating nested reusable functions.  
- Use partial application when you want to preset some arguments without converting the function fully into unary functions.`
            }
        ]
    },

    {
        id: 5,
        question: "Can arrow functions be used for currying?",
        answer: [
            {
                type: "text",
                content: `Yes, arrow functions are ideal for concise currying because they allow a compact syntax and automatically bind the outer \`this\` context.`
            },
            {
                type: "code",
                content: `const multiply = a => b => c => a * b * c;

console.log(multiply(2)(3)(4)); // 24
const doubleAndTriple = multiply(2)(3);
console.log(doubleAndTriple(5)); // 30`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Use arrow functions for simple, short curried functions.  
- Avoid deep nesting for readability; use generic curry function for complex cases.`
            }
        ]
    },

    {
        id: 6,
        question: "Interview Coding Question: Create a curried function for greeting",
        answer: [
            {
                type: "text",
                content: `Write a function that takes greeting, name, and punctuation as separate calls, e.g., greet('Hello')('John')('!') => 'Hello, John!'`
            },
            {
                type: "code",
                content: `function greet(greeting) {
  return function(name) {
    return function(punctuation) {
      return \`\${greeting}, \${name}\${punctuation}\`;
    };
  };
}

console.log(greet('Hello')('John')('!')); // Hello, John!`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Demonstrates understanding of currying.  
- Useful for creating configurable functions dynamically.`
            }
        ]
    },

    {
        id: 7,
        question: "Interview Coding Question: Currying with array sum",
        answer: [
            {
                type: "text",
                content: `Write a curried function that takes numbers one by one and returns their total sum after the last call using a chaining approach.`
            },
            {
                type: "code",
                content: `function sum(a) {
  let total = a;
  function inner(b) {
    if (b !== undefined) {
      total += b;
      return inner;
    } else {
      return total;
    }
  }
  inner.toString = () => total;
  return inner;
}

console.log(+sum(1)(2)(3)(4)); // 10
console.log(sum(5)(10)(15).toString()); // 30`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Useful to show understanding of function chaining and closures.  
- In interviews, explain how closure preserves the accumulated total.`
            }
        ]
    },
    {
        "id": 8,
        "question": "Advanced Interview Question: Currying with dynamic argument length",
        "answer": [
            {
                "type": "text",
                "content": "Create a curried function that can accept any number of arguments over multiple calls and return the total sum when finally invoked without arguments."
            },
            {
                "type": "code",
                "content": "function flexibleSum(...args) {\n  let numbers = [...args];\n  function inner(...next) {\n    if (next.length === 0) {\n      return numbers.reduce((a, b) => a + b, 0);\n    }\n    numbers.push(...next);\n    return inner;\n  }\n  return inner;\n}\n\nconsole.log(flexibleSum(1)(2,3)(4,5,6)()); // 21",
                "language": "javascript"
            },
            {
                "type": "text",
                "content": "Best Practices: Demonstrates mastery in handling variable arguments and dynamic currying; often asked to test deeper understanding of closures and functional patterns."
            }
        ]
    },
    {
        "id": 9,
        "question": "Currying with function composition",
        "answer": [
            {
                "type": "text",
                "content": "Write a curried function that takes two functions `f` and `g` and returns a new function representing `f(g(x))`."
            },
            {
                "type": "code",
                "content": "const compose = f => g => x => f(g(x));\n\nconst double = n => n * 2;\nconst increment = n => n + 1;\n\nconst doubleAfterIncrement = compose(double)(increment);\nconsole.log(doubleAfterIncrement(3)); // 8",
                "language": "javascript"
            },
            {
                "type": "text",
                "content": "Best Practices: Tests understanding of higher-order functions and functional composition using currying."
            }
        ]
    },
    {
        "id": 10,
        "question": "Curried filter function",
        "answer": [
            {
                "type": "text",
                "content": "Create a curried function to filter an array with a condition function."
            },
            {
                "type": "code",
                "content": "const filterArray = condition => arr => arr.filter(condition);\n\nconst isEven = n => n % 2 === 0;\nconst evenNumbers = filterArray(isEven)([1,2,3,4,5,6]);\nconsole.log(evenNumbers); // [2,4,6]",
                "language": "javascript"
            },
            {
                "type": "text",
                "content": "Best Practices: Demonstrates currying for reusability; common in functional programming and data transformation."
            }
        ]
    },
    {
        "id": 11,
        "question": "Async currying with Promises",
        "answer": [
            {
                "type": "text",
                "content": "Write a curried function that takes a value, waits for a delay, and then returns a Promise resolving to the value."
            },
            {
                "type": "code",
                "content": "const asyncCurried = delay => value => new Promise(resolve => {\n  setTimeout(() => resolve(value), delay);\n});\n\nasyncCurried(1000)('Hello').then(console.log); // 'Hello' after 1 second",
                "language": "javascript"
            },
            {
                "type": "text",
                "content": "Best Practices: Shows understanding of async programming combined with currying; useful for delaying or sequential async tasks."
            }
        ]
    },
    {
        "id": 12,
        "question": "Curried calculator",
        "answer": [
            {
                "type": "text",
                "content": "Implement a curried calculator function: `calc(5)('add')(3)` should return 8, `calc(10)('multiply')(2)` should return 20."
            },
            {
                "type": "code",
                "content": "function calc(a) {\n  return function(operation) {\n    return function(b) {\n      switch(operation) {\n        case 'add': return a + b;\n        case 'subtract': return a - b;\n        case 'multiply': return a * b;\n        case 'divide': return a / b;\n        default: return null;\n      }\n    };\n  };\n}\n\nconsole.log(calc(5)('add')(3)); // 8\nconsole.log(calc(10)('multiply')(2)); // 20",
                "language": "javascript"
            },
            {
                "type": "text",
                "content": "Best Practices: Shows ability to combine currying with conditional logic; common interview exercise."
            }
        ]
    },
    {
        "id": 13,
        "question": "Curried memoization function",
        "answer": [
            {
                "type": "text",
                "content": "Create a curried memoization function: `memoize(fn)(arg)` caches results of `fn` for repeated arguments."
            },
            {
                "type": "code",
                "content": "function memoize(fn) {\n  const cache = {};\n  return function(arg) {\n    if (cache[arg] !== undefined) return cache[arg];\n    const result = fn(arg);\n    cache[arg] = result;\n    return result;\n  };\n}\n\nconst factorial = memoize(n => n <= 1 ? 1 : n * factorial(n-1));\nconsole.log(factorial(5)); // 120\nconsole.log(factorial(5)); // cached 120",
                "language": "javascript"
            },
            {
                "type": "text",
                "content": "Best Practices: Combines currying, closures, and caching; tests deeper understanding of JavaScript internals."
            }
        ]
    }
]
