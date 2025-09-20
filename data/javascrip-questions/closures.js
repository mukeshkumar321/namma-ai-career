export const closures_questions = [
    {
        id: 1,
        question: "What is a closure in JavaScript and why is it used?",
        answer: [
            {
                type: "text",
                content: `A **closure** in JavaScript is a combination of a function and its **lexical environment**.  
It allows a function to access variables from its outer function even after the outer function has finished executing.`
            },
            {
                type: "list",
                content: [
                    "Closures enable **data encapsulation** and **privacy**, since outer variables are not directly accessible from outside.",
                    "They help **maintain state** across multiple function calls (e.g., counters, memoization).",
                    "Closures are commonly used in **callbacks, event handlers, and functional programming patterns**."
                ]
            },
            {
                type: "code",
                content: `function outer() {
  let counter = 0;

  return function inner() {
    counter++;
    return counter;
  };
}

const increment = outer();
console.log(increment()); // 1
console.log(increment()); // 2`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Avoid unnecessary closures inside loops to prevent memory leaks.\n- Use closures for encapsulation but don’t overuse them to keep code readable.\n- Understand the lexical scope to predict closure behavior accurately."
            }
        ]
    },
    {
        id: 2,
        question: "How do closures help in data encapsulation?",
        answer: [
            {
                type: "text",
                content: `Closures can create **private variables** that cannot be accessed directly from outside the function.  
This is useful to prevent unwanted access or modification of internal state.`
            },
            {
                type: "list",
                content: [
                    "Variables defined in an outer function are **private** to that function.",
                    "Inner functions can access and modify these variables using closure.",
                    "External code cannot directly access private variables."
                ]
            },
            {
                type: "code",
                content: `function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
console.log(account.deposit(50)); // 150
console.log(account.getBalance()); // 150
console.log(account.balance); // undefined (private)`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Use closures to protect sensitive data.\n- Keep the closure logic minimal to avoid memory overhead.\n- Prefer exposing only necessary methods to interact with private data."
            }
        ]
    },
    {
        id: 3,
        question: "What are common pitfalls when using closures?",
        answer: [
            {
                type: "text",
                content: `Closures are powerful, but they can cause unexpected issues if not used carefully.`
            },
            {
                type: "list",
                content: [
                    "Memory leaks: References to outer variables are retained even if not needed.",
                    "Accidental sharing of state in loops if `var` is used instead of `let`.",
                    "Overusing closures can make debugging and readability harder.",
                    "Closures may lead to unexpected behavior when referencing mutable objects."
                ]
            },
            {
                type: "code",
                content: `for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // 3, 3, 3
  }, 1000);
}

for (let j = 0; j < 3; j++) {
  setTimeout(function() {
    console.log(j); // 0, 1, 2
  }, 1000);
}`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Use `let`/`const` inside loops to avoid closure traps.\n- Clean up closures that are no longer needed to free memory.\n- Keep closure usage predictable and avoid deep nested closures."
            }
        ]
    },
    {
        id: 4,
        question: "Explain closure with practical example in event handling.",
        answer: [
            {
                type: "text",
                content: `Closures are often used in **event handlers** to maintain state specific to each handler.`
            },
            {
                type: "list",
                content: [
                    "Each handler can remember data from the creation scope.",
                    "Helps in creating modular and reusable event logic.",
                    "Avoids polluting the global scope with temporary variables."
                ]
            },
            {
                type: "code",
                content: `function setupButtons() {
  for (let i = 1; i <= 3; i++) {
    document.getElementById('btn' + i).addEventListener('click', function() {
      alert('Button ' + i + ' clicked');
    });
  }
}

// HTML buttons with ids btn1, btn2, btn3`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Use closures for event handlers that require state.\n- Avoid creating unnecessary closures inside high-frequency events (e.g., scroll, mousemove) to improve performance.\n- Use `let` instead of `var` to preserve the correct value in loops."
            }
        ]
    },
    {
        id: 5,
        question: "Can closures lead to performance issues?",
        answer: [
            {
                type: "text",
                content: `Yes, closures can lead to **memory overhead** because they **retain references** to outer variables even after the outer function has finished execution.`
            },
            {
                type: "list",
                content: [
                    "Closures keep the outer function’s variables in memory, which can prevent garbage collection.",
                    "Heavy or unnecessary closures in loops or event listeners can slow down performance.",
                    "Proper cleanup and minimal usage help prevent memory leaks."
                ]
            },
            {
                type: "code",
                content: `function createHeavyClosure() {
  const largeArray = new Array(1000000).fill('data');
  return function() {
    console.log(largeArray[0]);
  };
}

const closure = createHeavyClosure(); // large array stays in memory`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Avoid storing large objects in closures unless necessary.\n- Nullify references if closures are no longer needed.\n- Profile memory usage for apps with many closures."
            }
        ]
    },
    {
        id: 6,
        question: "How are closures used in the Module Pattern?",
        answer: [
            {
                type: "text",
                content: `Closures are the core of the **Module Pattern** in JavaScript.  
They allow us to create **private state and methods**, exposing only what we want as a public API.`
            },
            {
                type: "list",
                content: [
                    "Encapsulates data and functions, preventing external code from accessing private variables.",
                    "Helps maintain **clean and modular code**.",
                    "Commonly used in libraries and reusable components."
                ]
            },
            {
                type: "code",
                content: `const CounterModule = (function() {
  let counter = 0; // private

  function increment() {
    counter++;
    return counter;
  }

  function decrement() {
    counter--;
    return counter;
  }

  return {
    increment,
    decrement
  };
})();

console.log(CounterModule.increment()); // 1
console.log(CounterModule.increment()); // 2
console.log(CounterModule.counter); // undefined (private)`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Use module pattern to **encapsulate reusable logic**.\n- Keep private state minimal to reduce memory usage.\n- Expose only the necessary methods to the outside."
            }
        ]
    },
    {
        id: 7,
        question: "What is currying and how do closures enable it?",
        answer: [
            {
                type: "text",
                content: `**Currying** is a technique of transforming a function with multiple arguments into a series of functions, each taking a single argument.  
Closures allow the intermediate functions to **remember previous arguments**.`
            },
            {
                type: "list",
                content: [
                    "Currying enables **partial application** of functions.",
                    "Closures store arguments until all required arguments are received.",
                    "Helps create more reusable and composable functions."
                ]
            },
            {
                type: "code",
                content: `function multiply(a) {
  return function(b) {
    return a * b; // closure remembers 'a'
  };
}

const double = multiply(2);
console.log(double(5)); // 10
console.log(double(10)); // 20`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Use currying for **higher-order functions** and functional programming.\n- Avoid over-currying for simple operations to keep code readable.\n- Use arrow functions for cleaner syntax in curried functions."
            }
        ]
    },
    {
        id: 8,
        question: "How can closures be used for memoization?",
        answer: [
            {
                type: "text",
                content: `**Memoization** is an optimization technique where the result of expensive function calls is **cached**.  
Closures allow storing the cache in the function’s lexical scope.`
            },
            {
                type: "list",
                content: [
                    "Avoids recomputation of the same input multiple times.",
                    "Improves performance for functions with repeated calls.",
                    "Cache is private and not accessible from outside, thanks to closures."
                ]
            },
            {
                type: "code",
                content: `function memoize(fn) {
  const cache = {}; // private cache via closure
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const factorial = memoize(function(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
});

console.log(factorial(5)); // 120 (computed)
console.log(factorial(5)); // 120 (cached)`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Use memoization for **pure functions** to avoid side effects.\n- Keep cache size in check to prevent memory issues.\n- Use JSON.stringify carefully for complex objects to avoid cache misses."
            }
        ]
    },
    {
        id: 9,
        question: "Explain partial application using closures.",
        answer: [
            {
                type: "text",
                content: `**Partial application** is the process of fixing some arguments of a function and producing another function that takes the remaining arguments.  
Closures allow the new function to **remember the fixed arguments**.`
            },
            {
                type: "list",
                content: [
                    "Improves code reuse by pre-filling common parameters.",
                    "Closures store the fixed arguments in memory.",
                    "Similar to currying but may not always take one argument at a time."
                ]
            },
            {
                type: "code",
                content: `function greet(greeting, name) {
  return greeting + ', ' + name;
}

function partial(fn, fixedGreeting) {
  return function(name) {
    return fn(fixedGreeting, name);
  };
}

const sayHello = partial(greet, 'Hello');
console.log(sayHello('Mukesh')); // Hello, Mukesh
console.log(sayHello('Anjali')); // Hello, Anjali`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Use partial application for **repetitive function calls with common arguments**.\n- Combine with currying for flexible functional programming.\n- Ensure the partially applied function has a clear and predictable API."
            }
        ]
    },
    {
        id: 10,
        question: "How do closures impact asynchronous JavaScript?",
        answer: [
            {
                type: "text",
                content: `Closures are very common in **asynchronous JavaScript** (callbacks, promises, async/await) because they **retain access to the outer function variables** until the asynchronous operation completes.`
            },
            {
                type: "list",
                content: [
                    "They allow passing state into asynchronous callbacks without using global variables.",
                    "Closures can unintentionally cause memory leaks if references are kept longer than necessary.",
                    "Helps maintain the correct variable values in async loops and event handlers."
                ]
            },
            {
                type: "code",
                content: `function fetchData(id) {
  let startTime = Date.now(); // closure variable
  setTimeout(function() {
    console.log('Fetched data for ID:', id, 'after', Date.now() - startTime, 'ms');
  }, 1000);
}

fetchData(1);
fetchData(2);`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Avoid capturing large objects unnecessarily in async closures.\n- Use closures to pass necessary state to callbacks.\n- Clean up timers or listeners to prevent memory leaks in long-running applications."
            }
        ]
    },
    {
        id: 11,
        question: "How do closures work with higher-order functions?",
        answer: [
            {
                type: "text",
                content: `A **higher-order function** is a function that takes another function as an argument or returns a function.  
Closures are often used in higher-order functions to **remember variables from the outer scope**.`
            },
            {
                type: "list",
                content: [
                    "Enables function composition and chaining.",
                    "Allows preserving state across multiple function calls.",
                    "Commonly used in array methods like map, filter, reduce."
                ]
            },
            {
                type: "code",
                content: `function multiplier(factor) {
  return function(number) {
    return number * factor; // closure remembers 'factor'
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log([1,2,3].map(double)); // [2,4,6]
console.log([1,2,3].map(triple)); // [3,6,9]`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Use closures with higher-order functions for clean, reusable logic.\n- Avoid unnecessary closures in performance-critical loops."
            }
        ]
    },
    {
        id: 12,
        question: "How do closures interact with `this` in JavaScript?",
        answer: [
            {
                type: "text",
                content: `Closures **do not change the value of \`this\`**.  
The inner function inside a closure will use the \`this\` of its **lexical context** if it's an arrow function, or the **caller** if it's a normal function.`
            },
            {
                type: "list",
                content: [
                    "Arrow functions inherit `this` from the outer scope.",
                    "Regular functions have their own `this` depending on how they are called.",
                    "Closures can help capture outer variables, but `this` must be handled carefully."
                ]
            },
            {
                type: "code",
                content: `function Person(name) {
  this.name = name;

  this.greet = () => {
    console.log('Hello, ' + this.name); // arrow fn closure captures 'this' from Person
  };
}

const p = new Person('Mukesh');
p.greet(); // Hello, Mukesh`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Use arrow functions inside closures to preserve `this` from outer scope.\n- Avoid mixing regular and arrow functions in deeply nested closures for clarity."
            }
        ]
    },
    {
        id: 13,
        question: "How are closures used with generator functions?",
        answer: [
            {
                type: "text",
                content: `Closures can be used with **generators** to maintain state between successive calls to \`.next()\`.`
            },
            {
                type: "list",
                content: [
                    "Generators yield values lazily, closures can remember variables across yields.",
                    "Useful for implementing iterators with private state."
                ]
            },
            {
                type: "code",
                content: `function* counterGenerator() {
  let count = 0; // closure variable
  while (true) {
    yield ++count;
  }
}

const gen = counterGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Use closures in generators for encapsulating state.\n- Avoid holding large objects in generator closures to prevent memory leaks."
            }
        ]
    },
    {
        id: 14,
        question: "How do closures affect React hooks?",
        answer: [
            {
                type: "text",
                content: `Closures are critical in **React hooks** because functions inside hooks often capture variables from their lexical scope.  
Misunderstanding closures can cause **stale state bugs**.`
            },
            {
                type: "list",
                content: [
                    "State and props accessed inside a closure may be outdated if not handled correctly.",
                    "`useEffect`, `useCallback`, and `useMemo` rely heavily on closures.",
                    "Adding correct dependencies ensures closures have the latest values."
                ]
            },
            {
                type: "code",
                content: `import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + 1); // closure captures 'prev' correctly
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div>{count}</div>;
}`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Use functional updates (`prev => prev + 1`) to avoid stale closures.\n- Always include dependencies in `useEffect` to ensure closures have correct values.\n- Avoid creating unnecessary closures inside render to improve performance."
            }
        ]
    },
    {
        id: 15,
        question: "Can closures cause memory leaks in JavaScript?",
        answer: [
            {
                type: "text",
                content: `Yes, closures can **retain references to variables** longer than necessary, preventing garbage collection and causing memory leaks.`
            },
            {
                type: "list",
                content: [
                    "Keeping large objects or DOM references in closures unnecessarily can consume memory.",
                    "Closures in long-lived callbacks, timers, or event listeners are common sources of leaks.",
                    "Proper cleanup and scoping are essential."
                ]
            },
            {
                type: "code",
                content: `function setup() {
  const largeData = new Array(1000000).fill('data');
  return function useData() {
    console.log(largeData[0]);
  };
}

const closure = setup(); // largeData stays in memory even if not needed`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Nullify references in closures when they are no longer needed.\n- Remove event listeners or timers that use closures.\n- Profile memory in applications that heavily use closures."
            }
        ]
    },
];