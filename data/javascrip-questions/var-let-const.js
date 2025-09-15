export const var_let_const_questions = [
    // 1. Basic differences between var, let, and const
    {
        id: 1,
        question: "What is the difference between var, let, and const in JavaScript?",
        answer: [
            {
                type: "text",
                content: `In JavaScript, **var**, **let**, and **const** are used to declare variables.  
Each has different **scope**, **hoisting behavior**, and **mutability**. Understanding the differences is crucial to avoid bugs.`
            },
            {
                type: "table",
                content: {
                    headers: ["Keyword", "Scope", "Hoisting", "Reassignment", "Best Use"],
                    rows: [
                        ["var", "Function-scoped", "Hoisted (initialized as undefined)", "Allowed", "Legacy code; avoid in modern JS"],
                        ["let", "Block-scoped", "Hoisted (not initialized, TDZ)", "Allowed", "Variables that change over time"],
                        ["const", "Block-scoped", "Hoisted (not initialized, TDZ)", "Not allowed", "Constants and immutable references"]
                    ]
                }
            },
            {
                type: "code",
                content: `// var example
function varExample() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10, accessible outside block
}

// let example
function letExample() {
  if (true) {
    let y = 20;
  }
  console.log(y); // ReferenceError, block scoped
}

// const example
const z = 30;
z = 40; // TypeError, cannot reassign

// Reassignment allowed for object properties with const
const person = { name: "Alice" };
person.name = "Bob"; // ✅ allowed
console.log(person.name); // Bob`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Prefer \`const\` by default for immutability.  
- Use \`let\` only when reassignment is needed.  
- Avoid \`var\` in modern code due to function scoping and hoisting issues.  
- For objects/arrays with \`const\`, you can mutate properties/elements but cannot reassign the reference.`
            }
        ]
    },

    // 2. Temporal Dead Zone (TDZ)
    {
        id: 2,
        question: "What is the Temporal Dead Zone (TDZ) in JavaScript?",
        answer: [
            {
                type: "text",
                content: `The **Temporal Dead Zone (TDZ)** is the time between entering a block scope and the variable being declared using \`let\` or \`const\`.  
Accessing the variable in this zone results in a ReferenceError.`
            },
            {
                type: "code",
                content: `{
  console.log(a); // ReferenceError
  let a = 10;

  console.log(b); // ReferenceError
  const b = 20;
}

// var does not have TDZ
console.log(c); // undefined
var c = 30;`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Always declare variables at the top of their block or before usage.  
- Prefer \`let\` and \`const\` for block-scoped variables to avoid TDZ-related bugs.  
- Avoid relying on hoisting behavior of \`var\`.`
            }
        ]
    },

    // 3. Mutating const objects and arrays
    {
        id: 3,
        question: "Can const objects and arrays be mutated in JavaScript?",
        answer: [
            {
                type: "text",
                content: `Variables declared with \`const\` cannot be reassigned, but **objects and arrays themselves can be mutated**.  
This is because \`const\` prevents reassignment of the variable reference, not the content of the object or array.`
            },
            {
                type: "code",
                content: `const arr = [1, 2, 3];
arr.push(4); // ✅ allowed
console.log(arr); // [1, 2, 3, 4]

const obj = { name: "Alice" };
obj.name = "Bob"; // ✅ allowed
console.log(obj.name); // Bob

obj = { name: "Charlie" }; // ❌ TypeError, cannot reassign reference`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Use \`const\` for objects/arrays to avoid accidental reassignment.  
- Consider Object.freeze() if immutability is required.  
- Prefer functional updates for state in React (avoid direct mutation).`
            }
        ]
    },

    // 4. Hoisting pitfalls
    {
        id: 4,
        question: "What are common hoisting pitfalls with var, let, and const?",
        answer: [
            {
                type: "text",
                content: `**Hoisting** is JavaScript’s behavior of moving declarations to the top of their scope.  
Hoisting works differently for \`var\`, \`let\`, and \`const\`.`
            },
            {
                type: "table",
                content: {
                    headers: ["Keyword", "Hoisting Behavior", "Pitfall Example"],
                    rows: [
                        ["var", "Hoisted and initialized as undefined", `console.log(a); // undefined\nvar a = 10;`],
                        ["let", "Hoisted but not initialized (TDZ)", `console.log(b); // ReferenceError\nlet b = 20;`],
                        ["const", "Hoisted but not initialized (TDZ)", `console.log(c); // ReferenceError\nconst c = 30;`]
                    ]
                }
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Always declare variables at the top of their block or scope.  
- Avoid using \`var\` to prevent confusing hoisting behavior.  
- Understand TDZ for \`let\` and \`const\` to avoid ReferenceErrors.`
            }
        ]
    },

    // 5. var in loops and closures
    {
        id: 5,
        question: "Why does var in a loop cause unexpected closures in JavaScript?",
        answer: [
            {
                type: "text",
                content: `Variables declared with \`var\` are **function-scoped**, not block-scoped.  
When used inside loops with closures (like setTimeout), all closures share the same \`var\` variable, leading to unexpected behavior.`
            },
            {
                type: "code",
                content: `for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i); // 4, 4, 4
  }, 1000);
}

// Using let (block-scoped)
for (let j = 1; j <= 3; j++) {
  setTimeout(() => {
    console.log(j); // 1, 2, 3
  }, 1000);
}`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Prefer \`let\` for loop counters when using closures.  
- Avoid \`var\` in loops to prevent shared-state issues.  
- For legacy var code, use an IIFE to create a new scope.`
            }
        ]
    },

    // 6. const inside loops
    {
        id: 6,
        question: "How does const behave inside loops?",
        answer: [
            {
                type: "text",
                content: `Variables declared with \`const\` are block-scoped.  
Each iteration of a loop creates a **new binding** for \`const\`, so closures capture the correct value.`
            },
            {
                type: "code",
                content: `for (const x of [1, 2, 3]) {
  console.log(x); // 1, 2, 3
  // x = 5; // ❌ TypeError
}

// const with closures
for (const y of [10, 20, 30]) {
  setTimeout(() => console.log(y), 1000); // 10, 20, 30
}`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Use const when the variable should not be reassigned within the block.  
- Works well with closures in loops for predictable behavior.`
            }
        ]
    },

    // 7. Fixing closure issues with var
    {
        id: 7,
        question: "How to fix closure issues in loops when using var?",
        answer: [
            {
                type: "text",
                content: `If you must use \`var\` in loops, closures can be fixed using an IIFE or a function that creates a new scope for each iteration.`
            },
            {
                type: "code",
                content: `for (var i = 1; i <= 3; i++) {
  (function(current) {
    setTimeout(() => console.log(current), 1000);
  })(i);
}

// Output: 1, 2, 3`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Prefer using \`let\` or \`const\` instead of \`var\`.  
- IIFEs are a workaround for legacy code.  
- Understand closure behavior to prevent unexpected values in async callbacks.`
            }
        ]
    }
]
