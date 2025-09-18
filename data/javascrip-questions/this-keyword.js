export const this_keyword_questions = [
    {
        id: 1,
        question: "What is the `this` keyword in JavaScript?",
        answer: [
            {
                type: "text",
                content: `**Definition:**  
The \`this\` keyword in JavaScript refers to the object that is currently executing the function. Its value depends on **how a function is called**, not where it is defined.`
            },
            {
                type: "code",
                content: `function show() {
  console.log(this);
}

show(); // In browsers: Window (global object)`
            },
            {
                type: "text",
                content: `**Best Practice:**  
- Always be mindful that \`this\` is **dynamic**.  
- In strict mode, global \`this\` is \`undefined\` instead of \`window\`.`
            }
        ]
    },
    {
        id: 2,
        question: "What does `this` refer to in the global context?",
        answer: [
            {
                type: "code",
                content: `"use strict";
console.log(this); // undefined (in strict mode)

console.log(this); // window (in browsers, non-strict)`
            },
            {
                type: "text",
                content: `**Explanation:**  
- In global scope (non-strict mode), \`this\` refers to the **global object** (window in browsers, global in Node.js).  
- In strict mode, it becomes \`undefined\`.`
            }
        ]
    },
    {
        id: 3,
        question: "What does `this` refer to inside an object method?",
        answer: [
            {
                type: "code",
                content: `let person = {
  name: "John",
  greet: function() {
    console.log("Hello, I am " + this.name);
  }
};

person.greet(); // Hello, I am John`
            },
            {
                type: "text",
                content: `**Explanation:**  
When a function is called as an **object method**, \`this\` refers to the object before the dot (here, \`person\`).`
            }
        ]
    },
    {
        id: 4,
        question: "What is the value of `this` inside a regular function?",
        answer: [
            {
                type: "code",
                content: `"use strict";
function test() {
  console.log(this);
}

test(); // undefined (in strict mode)
// In non-strict: global object (window)`
            },
            {
                type: "text",
                content: `**Explanation:**  
- In a **regular function**, \`this\` defaults to the global object (or \`undefined\` in strict mode).  
- It does not automatically point to the enclosing object.`
            }
        ]
    },
    {
        id: 5,
        question: "How does `this` behave inside an arrow function?",
        answer: [
            {
                type: "code",
                content: `let person = {
  name: "Alice",
  greet: () => {
    console.log(this.name);
  }
};

person.greet(); // undefined (arrow fn doesn't bind \`this\`)`
            },
            {
                type: "text",
                content: `**Explanation:**  
- Arrow functions **do not have their own \`this\`**.  
- Instead, they **inherit \`this\` from the surrounding lexical scope**.  

**Best Practice:** Use arrow functions for callbacks when you want to keep the parent scope's \`this\`.`
            }
        ]
    },
    {
        id: 6,
        question: "How can you change the value of `this` explicitly?",
        answer: [
            {
                type: "code",
                content: `function greet(city) {
  console.log("Hello " + this.name + " from " + city);
}

let person = { name: "John" };

greet.call(person, "NY");   // Hello John from NY
greet.apply(person, ["LA"]); // Hello John from LA

let bound = greet.bind(person, "Chicago");
bound(); // Hello John from Chicago`
            },
            {
                type: "text",
                content: `**Explanation:**  
- \`.call()\` → invokes immediately with custom \`this\` and arguments.  
- \`.apply()\` → similar but takes arguments as an array.  
- \`.bind()\` → returns a new function with permanently bound \`this\`.  

**Use Case:** Useful when borrowing methods or ensuring correct context.`
            }
        ]
    },
    {
        id: 7,
        question: "What is `this` in a constructor function?",
        answer: [
            {
                type: "code",
                content: `function Person(name) {
  this.name = name;
}

let p1 = new Person("John");
console.log(p1.name); // John`
            },
            {
                type: "text",
                content: `**Explanation:**  
- In a constructor function (called with \`new\`), \`this\` refers to the **newly created object**.`
            }
        ]
    },
    {
        id: 8,
        question: "What is `this` inside a class in JavaScript?",
        answer: [
            {
                type: "code",
                content: `class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Hi, I am " + this.name);
  }
}

let p = new Person("Alice");
p.greet(); // Hi, I am Alice`
            },
            {
                type: "text",
                content: `**Explanation:**  
- In a **class**, \`this\` works similarly to constructor functions.  
- It refers to the instance of the class.`
            }
        ]
    },
    {
        id: 9,
        question: "What is `this` in event handlers in the browser?",
        answer: [
            {
                type: "code",
                content: `document.querySelector("#btn").addEventListener("click", function() {
  console.log(this); // button element
});

document.querySelector("#btn").addEventListener("click", () => {
  console.log(this); // window (inherits from outer scope)
});`
            },
            {
                type: "text",
                content: `**Explanation:**  
- In a normal function handler, \`this\` refers to the **DOM element**.  
- In an arrow function handler, \`this\` refers to the **lexical parent** (usually window).  

**Best Practice:** Use \`event.target\` inside arrow handlers to avoid confusion.`
            }
        ]
    },
    {
        id: 10,
        question: "What are common pitfalls with `this` in JavaScript?",
        answer: [
            {
                type: "text",
                content: `**Pitfalls:**  
1. Losing context when passing methods as callbacks.  
2. Arrow functions in objects not binding \`this\` as expected.  
3. Confusion between strict and non-strict mode behavior.  

**Best Practices:**  
- Use arrow functions only when you want lexical \`this\`.  
- Use \`.bind(this)\` or class fields to preserve context.  
- Prefer strict mode to avoid unexpected global \`this\`.`
            }
        ]
    },
    // ==================== Advanced "this" Keyword Questions ====================

    {
        id: 16,
        question: "What happens when `this` is used inside nested objects?",
        answer: [
            {
                type: "code",
                content:
                    `let user = {
  name: "Sam",
  details: {
    age: 25,
    show: function() {
      console.log(this.name, this.age);
    }
  }
};

user.details.show();`
            },
            {
                type: "text",
                content:
                    "In this example, the method `show()` is called on the `details` object, not directly on `user`. " +
                    "Therefore, inside `show()`, the `this` keyword refers to the `details` object. " +
                    "Since `details` has only `age`, but no `name` property, the output will be:\n\n" +
                    "`undefined 25`\n\n" +
                    "👉 Key Concept: `this` depends on the **calling object**, not the object where the function is defined."
            }
        ]
    },

    {
        id: 17,
        question: "What happens when a constructor function returns an object explicitly?",
        answer: [
            {
                type: "code",
                content:
                    `function Foo() {
  this.a = 10;
  return { a: 20 };
}

console.log(new Foo().a);`
            },
            {
                type: "text",
                content:
                    "When using `new`, JavaScript automatically returns `this` (the newly created object) unless the constructor explicitly returns another object. " +
                    "In this case, the constructor explicitly returns `{ a: 20 }`. " +
                    "So instead of the `this.a = 10`, the returned object overrides it.\n\n" +
                    "Output: `20`\n\n" +
                    "👉 Key Concept: If a constructor returns an object, that object is used as the result. If it returns a primitive, it is ignored."
            }
        ]
    },

    {
        id: 18,
        question: "How does `this` behave inside arrow functions in nested contexts?",
        answer: [
            {
                type: "code",
                content:
                    `let person = {
  name: "Alice",
  greet: function() {
    const arrow = () => {
      console.log("Hello, " + this.name);
    };
    arrow();
  }
};

person.greet();`
            },
            {
                type: "text",
                content:
                    "Here, the arrow function `arrow` does not create its own `this`. Instead, it uses **lexical scoping** and inherits `this` from the surrounding function (`greet`). " +
                    "Since `greet` is called on the `person` object, `this` inside `greet` refers to `person`. " +
                    "Hence the arrow function also uses `person` as `this`.\n\n" +
                    "Output: `Hello, Alice`\n\n" +
                    "👉 Key Concept: Arrow functions are useful for preserving `this` in nested callbacks without needing `.bind(this)`."
            }
        ]
    },
    {
        id: 11,
        question: "Coding Challenge: What will be the output of this code?",
        answer: [
            {
                type: "code",
                content: `let person = {
  name: "John",
  greet: function() {
    console.log("Hello " + this.name);
  }
};

setTimeout(person.greet, 1000);`
            },
            {
                type: "text",
                content: `**Explanation:**  
- The method \`person.greet\` is passed as a callback to \`setTimeout\`.  
- When executed, it loses its object binding, so \`this\` becomes \`window\` (or \`undefined\` in strict mode).  
- Therefore, it logs: \`Hello undefined\`.  

**Best Practice:** Always preserve context using \`.bind(person)\` or an arrow function:

\`\`\`js
setTimeout(person.greet.bind(person), 1000);
setTimeout(() => person.greet(), 1000);
\`\`\``
            }
        ]
    },
    {
        id: 12,
        question: "Coding Challenge: Fix the broken `this` inside a loop",
        answer: [
            {
                type: "code",
                content: `function Counter() {
  this.count = 0;
  setInterval(function() {
    this.count++;
    console.log(this.count);
  }, 1000);
}

new Counter();`
            },
            {
                type: "text",
                content: `**Problem:**  
- Inside \`setInterval\`, \`this\` no longer refers to the \`Counter\` instance.  
- It points to \`window\` instead.  

**Fixes:**  
1. Save \`this\` in a variable:
\`\`\`js
function Counter() {
  this.count = 0;
  let self = this;
  setInterval(function() {
    self.count++;
    console.log(self.count);
  }, 1000);
}
\`\`\`

2. Use arrow function (preferred):
\`\`\`js
function Counter() {
  this.count = 0;
  setInterval(() => {
    this.count++;
    console.log(this.count);
  }, 1000);
}
\`\`\``
            }
        ]
    },
    {
        id: 13,
        question: "Coding Challenge: What will this log?",
        answer: [
            {
                type: "code",
                content: `const person = {
  name: "Alice",
  greet: () => {
    console.log("Hi " + this.name);
  }
};

person.greet();`
            },
            {
                type: "text",
                content: `**Explanation:**  
- The \`greet\` method is an **arrow function**.  
- Arrow functions don’t bind their own \`this\`; they inherit it from the enclosing lexical scope (here, global scope).  
- \`this.name\` is therefore \`undefined\`.  

**Best Practice:** Use **regular functions** for object methods if you need \`this\`.`
            }
        ]
    },
    {
        id: 14,
        question: "Coding Challenge: How to fix `this` inside event handlers?",
        answer: [
            {
                type: "code",
                content: `class Button {
  constructor(label) {
    this.label = label;
    document.querySelector("#btn").addEventListener("click", this.handleClick);
  }
  handleClick() {
    console.log("Button clicked:", this.label);
  }
}

new Button("Submit");`
            },
            {
                type: "text",
                content: `**Problem:**  
- Event listener calls \`handleClick\` without context.  
- So \`this\` becomes the button DOM element, not the class instance.  

**Fixes:**  
1. Bind in constructor:
\`\`\`js
this.handleClick = this.handleClick.bind(this);
\`\`\`  

2. Use class fields:
\`\`\`js
handleClick = () => {
  console.log("Button clicked:", this.label);
};
\`\`\`  

**Best Practice:** Prefer class fields syntax for React/modern JS apps.`
            }
        ]
    },
    {
        id: 15,
        question: "Coding Challenge: Explain and fix the issue",
        answer: [
            {
                type: "code",
                content: `let person = {
  name: "Mike",
  greet: function() {
    console.log("Hello " + this.name);
  }
};

let greetFn = person.greet;
greetFn();`
            },
            {
                type: "text",
                content: `**Explanation:**  
- \`greetFn\` is just a reference to the function.  
- When called standalone, it loses the \`person\` binding, so \`this\` is global (or undefined in strict mode).  
- Output: \`Hello undefined\`.  

**Fix:** Use \`.bind()\`:
\`\`\`js
let greetFn = person.greet.bind(person);
greetFn(); // Hello Mike
\`\`\`  

**Best Practice:**  
- Use \`bind\`, arrow functions, or class fields to avoid context loss.`
            }
        ]
    },
];