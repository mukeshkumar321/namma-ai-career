export const call_bind_apply_questions = [
    {
        id: 1,
        question: "What is the `call()` method in JavaScript?",
        answer: [
            {
                type: "text",
                content: `The **call()** method is used to invoke a function with a specified 'this' value and arguments provided **individually**. 
It allows method borrowing (using methods of one object on another).`
            },
            {
                type: "code",
                content: `function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

const person = { name: "Alice" };

greet.call(person, "Hello", "!"); 
// Output: Hello Alice!`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**
- Use call() when arguments are known and passed individually.
- Good for borrowing methods from other objects.`
            }
        ]
    },
    {
        id: 2,
        question: "What is the `apply()` method in JavaScript?",
        answer: [
            {
                type: "text",
                content: `The **apply()** method is similar to call(), but it takes arguments as an **array or array-like object**. 
Useful when arguments are dynamic or already in an array.`
            },
            {
                type: "code",
                content: `function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

const person = { name: "Bob" };

greet.apply(person, ["Hi", "!!"]); 
// Output: Hi Bob!!`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**
- Use apply() when arguments are already in an array.
- Handy for functions like Math.max or Math.min.`
            }
        ]
    },
    {
        id: 3,
        question: "What is the `bind()` method in JavaScript?",
        answer: [
            {
                type: "text",
                content: `The **bind()** method creates a **new function** with a permanently bound 'this' value and optional preset arguments. 
Unlike call() and apply(), it does not invoke the function immediately.`
            },
            {
                type: "code",
                content: `function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

const person = { name: "Charlie" };

const boundGreet = greet.bind(person, "Hey");
boundGreet("!!!"); 
// Output: Hey Charlie!!!`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**
- Use bind() when you want to reuse a function later with a fixed 'this'.
- Common in event handlers in React/DOM to maintain context.`
            }
        ]
    },
    {
        id: 4,
        question: "What is the difference between call(), apply(), and bind()?",
        answer: [
            {
                type: "table",
                content: [
                    ["Method", "Arguments", "Execution"],
                    ["call()", "Passed individually", "Executes immediately"],
                    ["apply()", "Passed as array", "Executes immediately"],
                    ["bind()", "Passed individually/partially", "Returns new function, does NOT execute immediately"]
                ]
            },
            {
                type: "code",
                content: `const person = { name: "Dave" };

function intro(city, country) {
  console.log(\`I am \${this.name} from \${city}, \${country}\`);
}

// call()
intro.call(person, "Delhi", "India");

// apply()
intro.apply(person, ["New York", "USA"]);

// bind()
const boundIntro = intro.bind(person, "Paris", "France");
boundIntro();`,
                language: "javascript"
            }
        ]
    },
    {
        id: 5,
        question: "When should you use call(), apply(), or bind() in real scenarios?",
        answer: [
            {
                type: "list",
                content: [
                    "**call()** → when arguments are known and passed individually.",
                    "**apply()** → when arguments are in an array (e.g., `Math.max.apply(null, numbers)`).",
                    "**bind()** → when function needs to be reused later with a fixed context, such as event handlers in DOM/React."
                ]
            },
            {
                type: "code",
                content: `// Example: Math.max with apply()
const numbers = [10, 5, 8];
console.log(Math.max.apply(null, numbers)); // 10

// Example: bind in event handling
const button = document.querySelector("button");

const user = {
  name: "Emma",
  sayHi: function() {
    console.log("Hi " + this.name);
  }
};

button.addEventListener("click", user.sayHi.bind(user)); 
// Ensures 'this' refers to user, not button`,
                language: "javascript"
            }
        ]
    },
    {
        id: 6,
        question: "How do you implement a polyfill for `bind()`?",
        answer: [
            {
                type: "text",
                content: `A polyfill is a custom implementation of a method to mimic its behavior.  
The polyfill for **bind()** ensures a function is returned with a permanently set 'this' context and optional arguments.`
            },
            {
                type: "code",
                content: `Function.prototype.myBind = function(context, ...args1) {
  const fn = this; // reference to the function
  return function(...args2) {
    return fn.apply(context, [...args1, ...args2]);
  };
};

// Usage
function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

const person = { name: "Alex" };
const boundGreet = greet.myBind(person, "Hello");
boundGreet("!"); // Output: Hello Alex!`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Key points:**  
- \`myBind\` stores the original function.  
- It returns a new function with 'this' bound.  
- Arguments can be partially applied (just like curry functions).`
            }
        ]
    },
    {
        id: 7,
        question: "How can you use apply() to find the maximum value in an array?",
        answer: [
            {
                type: "text",
                content: `Since **Math.max()** accepts arguments, not arrays, apply() can be used to spread an array into arguments.`
            },
            {
                type: "code",
                content: `const numbers = [3, 5, 7, 2, 8];

const max = Math.max.apply(null, numbers);
console.log(max); // Output: 8`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practice (Modern JS):** Use the spread operator instead:  
\`Math.max(...numbers)\`.`
            }
        ]
    },
    {
        id: 8,
        question: "What is the output of this tricky bind() example?",
        answer: [
            {
                type: "code",
                content: `const person = {
  name: "Sam",
  greet: function() {
    console.log("Hi " + this.name);
  }
};

const greetFn = person.greet;
greetFn(); 
// Output: Hi undefined (this lost)

const boundGreet = person.greet.bind(person);
boundGreet(); 
// Output: Hi Sam`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Explanation:**  
- When \`greetFn\` is assigned, \`this\` refers to global (undefined in strict mode).  
- With bind, the function is permanently tied to person.`
            }
        ]
    },
    {
        id: 9,
        question: "What is the output when call() or apply() overrides this?",
        answer: [
            {
                type: "code",
                content: `function sayAge() {
  console.log(this.age);
}

const person1 = { age: 25 };
const person2 = { age: 40 };

sayAge.call(person1); // 25
sayAge.apply(person2); // 40`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Concept:**  
- call/apply let you explicitly control which object becomes 'this'.`
            }
        ]
    },
    {
        id: 10,
        question: "Can bind() be used for partial application?",
        answer: [
            {
                type: "text",
                content: `Yes! bind() allows you to preset some arguments, creating a **partially applied function**.`
            },
            {
                type: "code",
                content: `function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2); 
console.log(double(5)); // 10

const triple = multiply.bind(null, 3);
console.log(triple(4)); // 12`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practice:** Partial application can improve readability, especially in functional programming.`
            }
        ]
    },
    {
        id: 11,
        question: "What happens if you bind() a function multiple times?",
        answer: [
            {
                type: "code",
                content: `function greet() {
  console.log("Hello " + this.name);
}

const person1 = { name: "Anna" };
const person2 = { name: "Mike" };

const boundOnce = greet.bind(person1);
const boundTwice = boundOnce.bind(person2);

boundOnce();  // Hello Anna
boundTwice(); // Hello Anna`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Explanation:**  
Once a function is bound, further binding has no effect. The 'this' context stays with the first bind.`
            }
        ]
    },
];