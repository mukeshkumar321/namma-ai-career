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
    question: "What is the difference between == and === in JavaScript?",
    answer: [
      {
        type: "text",
        content:
          "== (loose equality) and === (strict equality) are comparison operators in JavaScript, but they differ in how they compare values and types.",
      },
      {
        type: "text",
        content:
          "🔹 == → Compares only values after performing type conversion (type coercion).",
      },
      {
        type: "text",
        content:
          "🔹 === → Compares both value and type without type conversion. (Strict comparison).",
      },
      {
        type: "code",
        content: `// Example with ==
console.log(5 == "5");   // true (string '5' is converted to number 5)
console.log(true == 1);  // true (boolean true converted to 1)
console.log(null == undefined); // true (special case)`
      },
      {
        type: "code",
        content: `// Example with ===
console.log(5 === "5");   // false (different types: number vs string)
console.log(true === 1);  // false (boolean vs number)
console.log(null === undefined); // false (different types)`
      },
      {
        type: "text",
        content: "📌 Quick Comparison Table:",
      },
      {
        type: "table",
        content: {
          headers: ["Feature", "==", "==="],
          rows: [
            ["Type Conversion", "✅ Yes (performs coercion)", "❌ No"],
            ["Compares Value", "✅ Yes", "✅ Yes"],
            ["Compares Type", "❌ No", "✅ Yes"],
            ["Strictness", "Loose equality", "Strict equality"],
          ],
        },
      },
      {
        type: "text",
        content:
          "👉 Best practice: Always use === (strict equality) unless you intentionally want type conversion with ==.",
      },
    ],
  },
  {
    id: 3,
    question: "What is the difference between Type Coercion and Type Conversion in JavaScript?",
    answer: [
      {
        type: "text",
        content:
          "Both Type Coercion and Type Conversion deal with changing one data type to another, but they differ in how and when the change happens.",
      },
      {
        type: "text",
        content:
          "🔹 Type Conversion → Explicitly changing a value from one type to another using functions/methods (done by developer).",
      },
      {
        type: "text",
        content:
          "🔹 Type Coercion → Implicitly changing a value from one type to another (done automatically by JavaScript engine).",
      },
      {
        type: "code",
        content: `// Example of Type Conversion (Explicit)
let str = "123";
let num = Number(str); 
console.log(num); // 123 (string converted to number)

let bool = Boolean(1);
console.log(bool); // true (number converted to boolean)`
      },
      {
        type: "code",
        content: `// Example of Type Coercion (Implicit)
console.log("5" - 2);  // 3 (string '5' coerced to number)
console.log("5" + 2);  // "52" (number 2 coerced to string)
console.log(1 == "1"); // true (string coerced to number)`
      },
      {
        type: "text",
        content: "📌 Quick Comparison Table:",
      },
      {
        type: "table",
        content: {
          headers: ["Feature", "Type Conversion", "Type Coercion"],
          rows: [
            ["Definition", "Explicit type change by developer", "Implicit type change by JS engine"],
            ["Control", "Full control (intentional)", "No control (automatic)"],
            ["How", "Using functions like Number(), String(), Boolean()", "Happens with operators (==, +, -, etc.)"],
            ["Example", 'Number("123") -> 123', '"5" - 2 -> 3'],
          ],
        },
      },
      {
        type: "text",
        content:
          "👉 Best practice: Prefer *Type Conversion* for clarity and avoid relying on *Type Coercion* unless you understand JavaScript's implicit rules well.",
      },
    ],
  },
  {
    id: 4,
    question: "What are the different data types in JavaScript?",
    answer: [
      {
        type: "text",
        content:
          "In JavaScript, data types are divided into two main categories: *Primitive Types* and *Non-Primitive (Reference) Types*.",
      },
      {
        type: "text",
        content: "🔹 Primitive Data Types (Immutable, stored by value):",
      },
      {
        type: "text",
        content:
          "1. Number → Represents both integers and floating-point numbers. Example: 42, 3.14",
      },
      {
        type: "text",
        content:
          "2. String → Represents textual data. Example: 'Hello', \"World\"",
      },
      {
        type: "text",
        content:
          "3. Boolean → Represents true or false values.",
      },
      {
        type: "text",
        content:
          "4. Undefined → A variable declared but not assigned has the value undefined.",
      },
      {
        type: "text",
        content:
          "5. Null → Represents an intentional absence of any object value.",
      },
      {
        type: "text",
        content:
          "6. Symbol (ES6) → Represents a unique and immutable value, often used as object keys.",
      },
      {
        type: "text",
        content:
          "7. BigInt (ES11) → Represents integers of arbitrary precision. Example: 123456789012345678901234567890n",
      },
      {
        type: "text",
        content: "🔹 Non-Primitive (Reference) Data Types:",
      },
      {
        type: "text",
        content:
          "1. Object → A collection of key-value pairs. Example: { name: 'Gulshan', age: 29 }",
      },
      {
        type: "text",
        content:
          "2. Array → Special type of object used to store ordered lists. Example: [1, 2, 3]",
      },
      {
        type: "text",
        content:
          "3. Function → Functions are objects in JavaScript and can be assigned to variables, passed as arguments, etc.",
      },
      {
        type: "code",
        content: `// Examples of different data types
let num = 100;              // Number
let str = "Hello JS";       // String
let isAlive = true;         // Boolean
let notAssigned;            // Undefined
let emptyValue = null;      // Null
let uniqueId = Symbol();    // Symbol
let big = 12345678901234567890n; // BigInt

let obj = { x: 10, y: 20 }; // Object
let arr = [1, 2, 3];        // Array
function greet() { return "Hi"; } // Function`,
      },
      {
        type: "text",
        content: "📌 Quick Comparison Table:",
      },
      {
        type: "table",
        content: {
          headers: ["Category", "Data Types", "Stored As"],
          rows: [
            ["Primitive", "Number, String, Boolean, Undefined, Null, Symbol, BigInt", "Value"],
            ["Non-Primitive", "Object, Array, Function", "Reference (memory address)"],
          ],
        },
      },
      {
        type: "text",
        content:
          "👉 Best practice: Remember that *primitive types are immutable* and stored by value, while *non-primitives are mutable* and stored by reference.",
      },
    ],
  },
  {
    id: 5,
    question: "What is Scope and what are the types of Scope in JavaScript?",
    answer: [
      {
        type: "text",
        content:
          "In JavaScript, *scope* determines the accessibility or visibility of variables, functions, and objects in different parts of the code.",
      },
      {
        type: "text",
        content:
          "🔹 Scope answers the question: Where can I access a variable?",
      },
      {
        type: "text",
        content: "🔹 Types of Scope in JavaScript:",
      },
      {
        type: "text",
        content:
          "1. *Global Scope* → Variables declared outside any function or block are in the global scope and can be accessed from anywhere in the program.",
      },
      {
        type: "text",
        content:
          "2. *Function Scope* → Variables declared with var inside a function are accessible only within that function.",
      },
      {
        type: "text",
        content:
          "3. *Block Scope* → Variables declared with let and const inside {} (block) are only accessible within that block.",
      },
      {
        type: "text",
        content:
          "4. *Lexical Scope (Static Scope)* → Inner functions can access variables from their outer (parent) functions, but not vice versa.",
      },
      {
        type: "code",
        content: `// Global Scope
let globalVar = "I am Global";
console.log(globalVar); // Accessible everywhere

// Function Scope
function testFunction() {
  var funcVar = "I am Function Scoped";
  console.log(funcVar); // Accessible inside function
}
testFunction();
// console.log(funcVar); ❌ Error (not accessible outside function)

// Block Scope
{
  let blockVar = "I am Block Scoped";
  const constVar = "Also Block Scoped";
  console.log(blockVar, constVar);
}
// console.log(blockVar); ❌ Error (not accessible outside block)

// Lexical Scope
function outer() {
  let outerVar = "I am Outer";
  function inner() {
    console.log(outerVar); // ✅ Inner function can access outer variable
  }
  inner();
}
outer();`,
      },
      {
        type: "text",
        content: "📌 Quick Comparison Table:",
      },
      {
        type: "table",
        content: {
          headers: ["Scope Type", "Declared With", "Accessible Where?"],
          rows: [
            ["Global Scope", "var, let, const (outside all)", "Anywhere in the program"],
            ["Function Scope", "var (inside function)", "Only inside that function"],
            ["Block Scope", "let, const (inside block {})", "Only inside that block"],
            ["Lexical Scope", "function within function", "Inner function can access outer scope"],
          ],
        },
      },
      {
        type: "text",
        content:
          "👉 Best practice: Prefer let and const to avoid accidental scope issues. Understand lexical scope well for closures.",
      },
    ],
  },
  {
    id: 6,
    question: "What is the difference between null and undefined in JavaScript?",
    answer: [
      {
        type: "text",
        content:
          "Both null and undefined represent absence of a value in JavaScript, but they are used in different situations.",
      },
      {
        type: "text",
        content: "🔹 undefined → A variable that has been declared but not assigned any value automatically gets undefined.",
      },
      {
        type: "text",
        content: "🔹 null → An intentional assignment by a developer to represent 'no value' or 'empty'.",
      },
      {
        type: "code",
        content: `// Undefined examples
let a;
console.log(a); // undefined (no value assigned)

function test(x) {
  console.log(x); 
}
test(); // undefined (no argument passed)

let obj = {};
console.log(obj.prop); // undefined (property does not exist)`,
      },
      {
        type: "code",
        content: `// Null examples
let b = null;
console.log(b); // null (explicitly set to empty)

let user = { name: "Gulshan", age: null }; 
console.log(user.age); // null (intentional absence of value)`,
      },
      {
        type: "text",
        content: "📌 Quick Comparison Table:",
      },
      {
        type: "table",
        content: {
          headers: ["Feature", "undefined", "null"],
          rows: [
            ["Type", "undefined", "object (historical bug in JS)"],
            ["Meaning", "Variable declared but not assigned", "Intentional empty value"],
            ["Assigned by", "JavaScript (default)", "Developer (manual)"],
            ["Use case", "Missing variable, missing property, missing argument", "Intentional reset or 'no value'"],
          ],
        },
      },
      {
        type: "text",
        content:
          "👉 Best practice: Use undefined for default unassigned values, and assign null when you want to explicitly clear or reset a variable.",
      },
    ],
  },
  {
    id: 7,
    question: "What is Hoisting in JavaScript?",
    answer: [
      {
        type: "text",
        content:
          "Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their scope before code execution.",
      },
      {
        type: "text",
        content:
          "🔹 Variables declared with var are hoisted but initialized with undefined.",
      },
      {
        type: "text",
        content:
          "🔹 Variables declared with let and const are hoisted too, but they stay in the *Temporal Dead Zone (TDZ)* until initialized (accessing them before initialization throws an error).",
      },
      {
        type: "text",
        content:
          "🔹 Function declarations are hoisted completely, meaning they can be called even before their definition.",
      },
      {
        type: "text",
        content:
          "🔹 Function expressions (with var, let, or const) are hoisted as variables, not functions.",
      },
      {
        type: "code",
        content: `// var hoisting
console.log(a); // undefined
var a = 10;
console.log(a); // 10`,
      },
      {
        type: "code",
        content: `// let and const hoisting
// console.log(b); // ❌ ReferenceError (TDZ)
let b = 20;

const c = 30;
// console.log(c); // ❌ ReferenceError (TDZ)`,
      },
      {
        type: "code",
        content: `// Function declaration hoisting
greet(); // ✅ Works (hoisted)

function greet() {
  console.log("Hello, I am hoisted!");
}`,
      },
      {
        type: "code",
        content: `// Function expression hoisting
// sayHi(); // ❌ TypeError (not a function yet)

var sayHi = function () {
  console.log("Hi there!");
};
sayHi(); // ✅ Works after initialization`,
      },
      {
        type: "text",
        content: "📌 Quick Comparison Table:",
      },
      {
        type: "table",
        content: {
          headers: ["Declaration Type", "Hoisted?", "Initialized?", "Access Before Declaration"],
          rows: [
            ["var", "✅ Yes", "undefined", "✅ Allowed (gives undefined)"],
            ["let", "✅ Yes", "Not initialized (TDZ)", "❌ ReferenceError"],
            ["const", "✅ Yes", "Not initialized (TDZ)", "❌ ReferenceError"],
            ["Function Declaration", "✅ Yes", "Fully hoisted", "✅ Allowed"],
            ["Function Expression", "✅ As variable", "undefined (if var)", "❌ Not callable before init"],
          ],
        },
      },
      {
        type: "text",
        content:
          "👉 Best practice: Always declare variables and functions at the top of their scope to avoid confusion with hoisting.",
      },
    ],
  },
];
