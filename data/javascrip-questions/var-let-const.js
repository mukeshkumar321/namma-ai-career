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
    },

    {
        id: 8,
        question: "What is type coercion in JavaScript?",
        answer: [
            {
                type: "text",
                content: `Type coercion is JavaScript’s automatic conversion of values from one data type to another during expression evaluation. It happens mainly with operators like +, -, ==, and logical operators.

JavaScript performs coercion to maintain flexibility, but it can lead to unexpected results if not understood properly.`
            },
            {
                type: "code",
                content: `'5' - 1      // 4  (string → number)
'5' + 1      // "51" (number → string)
true + 1     // 2  (true → 1)
false + 1    // 1  (false → 0)`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Key takeaway:**  
- Arithmetic operators force numeric coercion  
- The + operator may trigger string concatenation`
            }
        ]
    },
    {
        id: 9,
        question: "Why does the + operator behave differently from -, *, /?",
        answer: [
            {
                type: "text",
                content: `The + operator is overloaded in JavaScript. It performs numeric addition or string concatenation depending on operand types, while -, *, / always convert operands to numbers.`
            },
            {
                type: "code",
                content: `'10' - '5'   // 5
'10' * '2'   // 20
'10' / '2'   // 5

'10' + '5'   // "105"
10 + '5'     // "105"`,
                language: "javascript"
            },
            {
                type: "text",
                content: `If any operand is a string, + prefers concatenation over addition.`
            }
        ]
    },
    {
        id: 10,
        question: "Explain loose equality (==) coercion rules",
        answer: [
            {
                type: "text",
                content: `Loose equality (==) allows operands of different types by coercing them to a common type before comparison. This coercion follows complex internal rules defined by the ECMAScript specification.`
            },
            {
                type: "code",
                content: `0 == '0'        // true
false == 0      // true
'' == 0         // true
null == undefined // true`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Step example:**  
[] == false  
→ [] → ""  
→ "" → 0  
→ false → 0  
→ 0 == 0 → true`
            }
        ]
    },
    {
        id: 11,
        question: "Why does [] == false evaluate to true?",
        answer: [
            {
                type: "text",
                content: `This happens due to a chain of implicit conversions involving objects, strings, numbers, and booleans. Arrays are objects, and objects are first converted to primitives.`
            },
            {
                type: "code",
                content: `[] == false // true`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Conversion flow:**  
- [] → "" (toString)  
- "" → 0 (number coercion)  
- false → 0  
- 0 == 0 → true`
            }
        ]
    },
    {
        id: 12,
        question: "Why are empty arrays and objects truthy?",
        answer: [
            {
                type: "text",
                content: `In JavaScript, all objects are truthy regardless of their contents. This includes empty arrays and empty objects.`
            },
            {
                type: "code",
                content: `Boolean([])  // true
Boolean({})  // true
!![]         // true`,
                language: "javascript"
            },
            {
                type: "text",
                content: `Only a small set of values are falsy: false, 0, -0, "", null, undefined, NaN.`
            }
        ]
    },
    {
        id: 13,
        question: "Explain numeric coercion with null and undefined",
        answer: [
            {
                type: "text",
                content: `null and undefined behave differently when coerced into numbers. This distinction often causes bugs in arithmetic expressions.`
            },
            {
                type: "code",
                content: `null + 1        // 1  (null → 0)
undefined + 1   // NaN (undefined → NaN)`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Important rule:**  
- null → 0  
- undefined → NaN`
            }
        ]
    },
    {
        id: 14,
        question: "Why is NaN not equal to itself?",
        answer: [
            {
                type: "text",
                content: `NaN represents an invalid or unrepresentable number. According to IEEE 754 rules, NaN is never equal to any value, including itself.`
            },
            {
                type: "code",
                content: `NaN === NaN      // false
Number.isNaN(NaN) // true`,
                language: "javascript"
            },
            {
                type: "text",
                content: `Always use Number.isNaN() instead of == or === to check for NaN.`
            }
        ]
    },
    {
        id: 15,
        question: "How does object-to-primitive coercion work?",
        answer: [
            {
                type: "text",
                content: `When objects are involved in operations, JavaScript attempts to convert them into primitive values using valueOf() and toString() methods.`
            },
            {
                type: "code",
                content: `const obj = {
  valueOf() { return 10; }
};

obj + 5 // 15`,
                language: "javascript"
            },
            {
                type: "text",
                content: `If valueOf does not return a primitive, toString() is used as a fallback.`
            }
        ]
    },
    {
        id: 16,
        question: "Why does [] + {} return '[object Object]'?",
        answer: [
            {
                type: "text",
                content: `Both operands are objects. JavaScript converts them to strings using toString() before concatenation.`
            },
            {
                type: "code",
                content: `[] + {} // "[object Object]"`,
                language: "javascript"
            },
            {
                type: "text",
                content: `[] → ""  
{} → "[object Object]"  
"" + "[object Object]" → "[object Object]"`
            }
        ]
    },
    {
        id: 17,
        question: "How does unary plus (+) differ from binary plus?",
        answer: [
            {
                type: "text",
                content: `Unary plus converts its operand to a number, while binary plus may concatenate strings.`
            },
            {
                type: "code",
                content: `+'123'    // 123
+true      // 1
+false     // 0
+'abc'     // NaN`,
                language: "javascript"
            },
            {
                type: "text",
                content: `Unary plus is a concise alternative to Number().`
            }
        ]
    },

    {
        id: 18,
        question: "How does JavaScript coerce objects during arithmetic operations?",
        answer: [
            {
                type: "text",
                content: `When an object is used in an arithmetic expression, JavaScript converts it to a primitive using the ToPrimitive algorithm. The engine first tries valueOf(), and if it doesn’t return a primitive, it falls back to toString().`
            },
            {
                type: "code",
                content: `const obj = {
  valueOf() {
    return 10;
  },
  toString() {
    return '20';
  }
};

obj + 5 // 15`,
                language: "javascript"
            },
            {
                type: "text",
                content: `Because valueOf() returns a primitive (10), JavaScript uses it and ignores toString().`
            }
        ]
    },
    {
        id: 19,
        question: "What happens if valueOf() does not return a primitive?",
        answer: [
            {
                type: "text",
                content: `If valueOf() returns a non-primitive value (like an object), JavaScript ignores it and calls toString() as a fallback.`
            },
            {
                type: "code",
                content: `const obj = {
  valueOf() {
    return {};
  },
  toString() {
    return '30';
  }
};

obj + 5 // "305"`,
                language: "javascript"
            },
            {
                type: "text",
                content: `The result becomes string concatenation because toString() returns a string.`
            }
        ]
    },
    {
        id: 20,
        question: "How does Symbol.toPrimitive affect type coercion?",
        answer: [
            {
                type: "text",
                content: `Symbol.toPrimitive allows developers to explicitly control how an object is converted to a primitive. It takes priority over valueOf() and toString().`
            },
            {
                type: "code",
                content: `const obj = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return 100;
    return 'obj';
  }
};

obj + 1   // "obj1"
obj - 1   // 99`,
                language: "javascript"
            },
            {
                type: "text",
                content: `The hint parameter can be 'number', 'string', or 'default', depending on the operation.`
            }
        ]
    },
    {
        id: 21,
        question: "Why does {} + {} behave differently in browser and Node.js?",
        answer: [
            {
                type: "text",
                content: `In the browser console, {} is sometimes parsed as an empty block, not an object. This causes different evaluation behavior depending on execution context.`
            },
            {
                type: "code",
                content: `{} + {}        // 0  (browser)
({} + {})      // "[object Object][object Object]"`,
                language: "javascript"
            },
            {
                type: "text",
                content: `Wrapping objects in parentheses forces JavaScript to treat them as expressions instead of blocks.`
            }
        ]
    },
    {
        id: 22,
        question: "How does coercion work with relational operators (<, >, <=, >=)?",
        answer: [
            {
                type: "text",
                content: `Relational operators first attempt numeric comparison. If both operands are strings, lexicographical comparison is performed instead.`
            },
            {
                type: "code",
                content: `'10' < '2'   // true (string comparison)
'10' < 2     // false (numeric comparison)
10 < '2'     // false`,
                language: "javascript"
            },
            {
                type: "text",
                content: `String comparison is based on Unicode code points, not numeric value.`
            }
        ]
    },
    {
        id: 23,
        question: "Why does [] == ![] evaluate to true?",
        answer: [
            {
                type: "text",
                content: `This is a classic coercion trap involving logical NOT, boolean conversion, and loose equality comparison.`
            },
            {
                type: "code",
                content: `[] == ![] // true`,
                language: "javascript"
            },
            {
                type: "text",
                content: `Step-by-step:  
1. ![] → false  
2. [] == false  
3. [] → "" → 0  
4. false → 0  
5. 0 == 0 → true`
            }
        ]
    },
    {
        id: 24,
        question: "Why does [] == '' and '' == 0 both evaluate to true?",
        answer: [
            {
                type: "text",
                content: `Loose equality applies transitive numeric coercion when comparing strings, numbers, and objects.`
            },
            {
                type: "code",
                content: `[] == ''   // true
'' == 0     // true
[] == 0     // true`,
                language: "javascript"
            },
            {
                type: "text",
                content: `The empty array becomes an empty string, which then becomes the number 0 during comparison.`
            }
        ]
    },
    {
        id: 25,
        question: "How does coercion behave with Date objects?",
        answer: [
            {
                type: "text",
                content: `Date objects prefer string coercion over numeric coercion, unlike most other objects.`
            },
            {
                type: "code",
                content: `const d = new Date('2024-01-01');

d + 1       // "Mon Jan 01 2024...1"
d - 1       // numeric timestamp - 1`,
                language: "javascript"
            },
            {
                type: "text",
                content: `Dates override Symbol.toPrimitive to favor string conversion by default.`
            }
        ]
    },
    {
        id: 26,
        question: "Why does 1 < 2 < 3 evaluate to true but 3 < 2 < 1 also evaluate to true?",
        answer: [
            {
                type: "text",
                content: `Relational operators are evaluated left-to-right, and the result of each comparison is coerced to a number.`
            },
            {
                type: "code",
                content: `1 < 2 < 3   // true
3 < 2 < 1   // true`,
                language: "javascript"
            },
            {
                type: "text",
                content: `Explanation:  
3 < 2 → false  
false → 0  
0 < 1 → true`
            }
        ]
    },
    {
        id: 27,
        question: "How does coercion work with logical operators (&&, ||)?",
        answer: [
            {
                type: "text",
                content: `Logical operators do not return booleans by default. Instead, they return one of the operands based on truthiness.`
            },
            {
                type: "code",
                content: `0 || 'hello'   // "hello"
1 && 'world' // "world"
null || 42   // 42`,
                language: "javascript"
            },
            {
                type: "text",
                content: `These operators perform short-circuit evaluation and return the last evaluated operand.`
            }
        ]
    }
]
