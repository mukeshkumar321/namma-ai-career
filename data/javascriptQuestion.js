// data/questions.ts
export const questions = [
  {
    id: 1,
    question: "What is the difference between var, let and const?",
    answer: [
      {
        type: "text",
        content:
          "`var`, `let`, and `const` are used to declare variables in JavaScript, but they differ in scope, re-declaration, re-assignment, and hoisting.",
      },
      {
        type: "text",
        content:
          "🔹 var → Function-scoped, can be re-declared and re-assigned, hoisted with `undefined`.",
      },
      {
        type: "text",
        content:
          "🔹 let → Block-scoped, cannot be re-declared in the same scope, can be re-assigned, hoisted but in a temporal dead zone (TDZ).",
      },
      {
        type: "text",
        content:
          "🔹 const → Block-scoped, cannot be re-declared or re-assigned, hoisted but in TDZ. However, objects and arrays declared with const can still be mutated.",
      },
      {
        type: "code",
        content: `// Example with var
function testVar() {
  console.log(a); // undefined (hoisted)
  var a = 10;
  if (true) {
    var a = 20; // same variable (function-scoped)
    console.log(a); // 20
  }
  console.log(a); // 20
}
testVar();`,
      },
      {
        type: "code",
        content: `// Example with let
function testLet() {
  // console.log(b); // ❌ ReferenceError (TDZ)
  let b = 10;
  if (true) {
    let b = 20; // block-scoped (new variable)
    console.log(b); // 20
  }
  console.log(b); // 10
}
testLet();`,
      },
      {
        type: "code",
        content: `// Example with const
function testConst() {
  const c = 10;
  // c = 20; // ❌ TypeError (cannot re-assign)

  if (true) {
    const c = 30; // block-scoped (new variable)
    console.log(c); // 30
  }
  console.log(c); // 10
}
testConst();`,
      },
      {
        type: "code",
        content: `// const with objects/arrays
const arr = [1, 2, 3];
arr.push(4); // ✅ allowed (mutation)
console.log(arr); // [1, 2, 3, 4]

// arr = [5, 6]; ❌ Not allowed (cannot re-assign)`,
      },
      {
        type: "text",
        content: "📌 Quick Comparison Table:",
      },
      {
        type: "table",
        content: {
          headers: ["Feature", "var", "let", "const"],
          rows: [
            ["Scope", "Function-scoped", "Block-scoped", "Block-scoped"],
            [
              "Re-declaration",
              "✅ Allowed",
              "❌ Not allowed",
              "❌ Not allowed",
            ],
            ["Re-assignment", "✅ Allowed", "✅ Allowed", "❌ Not allowed"],
            [
              "Hoisting",
              "✅ Hoisted (undefined)",
              "✅ Hoisted (TDZ)",
              "✅ Hoisted (TDZ)",
            ],
          ],
        },
      },
      {
        type: "text",
        content:
          "👉 Best practice: Use `const` by default, `let` when you need reassignment, and avoid `var` in modern JavaScript.",
      },
    ],
  },
  {
    id: 2,
    question: "What is a closure in JavaScript?",
    answer: [
      {
        type: "text",
        content:
          "A closure is a combination of a function and its lexical environment (the scope in which it was declared). It allows a function to access variables from its outer function even after the outer function has finished executing."
      },
      {
        type: "text",
        content:
          "Closures are commonly used for data privacy, maintaining state, and creating function factories."
      },
      {
        type: "code",
        content: `function outer() {
  let counter = 0; // variable in outer scope
  return function inner() {
    counter++; // inner function accesses outer variable
    return counter;
  };
}

const increment = outer();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3`
      },
      {
        type: "text",
        content:
          "In this example, `inner` is a closure because it remembers and can access the variable `counter` from `outer` even after `outer` has executed."
      },
      {
        type: "text",
        content:
          "👉 Best practice: Use closures to maintain private state, encapsulate data, or create reusable function factories."
      }
    ]
  }

];
