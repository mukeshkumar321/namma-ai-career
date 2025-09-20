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
        id: 21,
        question: "Variable vs property – What logs to console?",
        answer: [
            {
                type: "code",
                content: `const object = {
  message: 'Hello, World!',

  getMessage() {
    const message = 'Hello, Earth!';
    return this.message;
  }
};

console.log(object.getMessage());`,
                language: "javascript"
            },
            {
                type: "text",
                content: "Here `this.message` refers to the property `message` on the **object**, not the local variable `message`. Therefore the output is:"
            },
            {
                type: "code",
                content: `Hello, World!`,
                language: "text"
            },
            {
                type: "list",
                content: [
                    "**Key Concept:** `this` inside a method refers to the object that owns the method.",
                    "Local variables declared inside the method (`const message = ...`) do not override object properties accessed with `this`."
                ]
            }
        ]
    },
    {
        id: 22,
        question: "Cat name – What logs to console?",
        answer: [
            {
                type: "code",
                content: `function Pet(name) {
  this.name = name;

  this.getName = () => this.name;
}

const cat = new Pet('Fluffy');

console.log(cat.getName()); // ?
const { getName } = cat;
console.log(getName());     // ?`,
                language: "javascript"
            },
            {
                type: "text",
                content: "The arrow function `this.getName` captures `this` lexically from the constructor function, so it always refers to the instance (`cat`)."
            },
            {
                type: "list",
                content: [
                    "`cat.getName()` → logs **Fluffy**",
                    "`getName()` (destructured) → still logs **Fluffy** because the arrow function preserves lexical `this`."
                ]
            }
        ]
    },
    {
        id: 23,
        question: "Delayed greeting – What logs to console?",
        answer: [
            {
                type: "code",
                content: `const object = {
  message: 'Hello, World!',

  logMessage() {
    console.log(this.message);
  }
};

setTimeout(object.logMessage, 1000);`,
                language: "javascript"
            },
            {
                type: "text",
                content: "Here `setTimeout` executes `object.logMessage` as a plain function, so `this` is lost (defaults to `window` in non-strict mode or `undefined` in strict mode)."
            },
            {
                type: "code",
                content: `undefined`,
                language: "text"
            },
            {
                type: "list",
                content: [
                    "**Fix:** Use `.bind(object)`, an arrow function, or wrap it in another function.",
                    "`setTimeout(object.logMessage.bind(object), 1000)` → logs **Hello, World!**"
                ]
            }
        ]
    },
    {
        id: 24,
        question: "Artificial method – How can you call logMessage so it logs 'Hello, World!'?",
        answer: [
            {
                type: "code",
                content: `const object = {
  message: 'Hello, World!'
};

function logMessage() {
  console.log(this.message);
}

// Possible solutions:
logMessage.call(object);
logMessage.apply(object);
const boundLog = logMessage.bind(object);
boundLog();`,
                language: "javascript"
            },
            {
                type: "list",
                content: [
                    "**.call()** → immediately invokes the function with `this` set to object.",
                    "**.apply()** → same as call, but arguments are passed as an array.",
                    "**.bind()** → returns a new function permanently bound to the object."
                ]
            }
        ]
    },
    {
        id: 25,
        question: "Greeting and farewell – What logs to console?",
        answer: [
            {
                type: "code",
                content: `const object = {
  who: 'World',

  greet() {
    return \`Hello, \${this.who}!\`;
  },

  farewell: () => {
    return \`Goodbye, \${this.who}!\`;
  }
};

console.log(object.greet());
console.log(object.farewell());`,
                language: "javascript"
            },
            {
                type: "list",
                content: [
                    "`object.greet()` → logs **Hello, World!** because `this` refers to the object.",
                    "`object.farewell()` → logs **Goodbye, undefined!** because arrow functions do not bind their own `this`, they inherit from the outer scope (global)."
                ]
            }
        ]
    },
    {
        id: 26,
        question: "Tricky length – What logs to console?",
        answer: [
            {
                type: "code",
                content: `var length = 4;
function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(callback) {
    callback();
  }
};

object.method(callback, 1, 2);`,
                language: "javascript"
            },
            {
                type: "text",
                content: "`callback()` is called as a plain function, not as a method of object, so `this` refers to the global object. In browsers, `this.length` refers to the number of arguments passed to the global context, which is usually **0**."
            },
            {
                type: "code",
                content: `undefined (in strict mode)\n0 (in browser non-strict mode)`,
                language: "text"
            }
        ]
    },
    {
        id: 27,
        question: "Calling arguments – What logs to console?",
        answer: [
            {
                type: "code",
                content: `var length = 4;
function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method() {
    arguments[0]();
  }
};

object.method(callback, 1, 2);`,
                language: "javascript"
            },
            {
                type: "text",
                content: "Here `arguments[0]()` is invoked as a method on the `arguments` object. Therefore, `this` inside callback refers to the `arguments` object itself."
            },
            {
                type: "code",
                content: `3`,
                language: "text"
            },
            {
                type: "list",
                content: [
                    "The `arguments` object has a `length` equal to the number of arguments passed (here 3).",
                    "So `this.length` inside callback logs **3**."
                ]
            }
        ]
    },
];