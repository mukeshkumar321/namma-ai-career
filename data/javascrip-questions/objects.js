export const objects_questions = [
    {
        id: 1,
        question: "What is an object in JavaScript?",
        answer: [
            {
                type: "text",
                content: `An **object** in JavaScript is a collection of key-value pairs. 
Keys are called **properties** (strings or symbols), and values can be of any type (string, number, function, array, even another object). 
Objects allow us to represent real-world entities and group related data together.`
            },
            {
                type: "code",
                content: `const person = {
  name: "Alice",
  age: 25,
  greet: function () {
    return "Hello, " + this.name;
  }
};`
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Use objects to represent structured data.  
- Keep functions inside objects when they operate on that data (methods).`
            }
        ]
    },
    {
        id: 2,
        question: "How do you create an object in JavaScript?",
        answer: [
            {
                type: "list",
                content: [
                    "**Object literal (most common):** `const obj = { key: value }`",
                    "**Using new Object():** `const obj = new Object()`",
                    "**Using Object.create():** Creates object with a prototype.",
                    "**Using classes or constructor functions.**"
                ]
            },
            {
                type: "code",
                content: `// Object literal
const car = { brand: "Tesla", model: "Model 3" };

// new Object()
const user = new Object();
user.name = "Alice";

// Object.create()
const proto = { greet() { console.log("Hi"); } };
const obj = Object.create(proto);

// Class
class Animal {
  constructor(type) {
    this.type = type;
  }
}
const dog = new Animal("Dog");`
            }
        ]
    },
    {
        id: 3,
        question: "How do you access a property of an object in JavaScript?",
        answer: [
            {
                type: "text",
                content: `You can access properties using **dot notation** or **square bracket notation**.`
            },
            {
                type: "code",
                content: `const person = { name: "Alice", age: 25 };

// Dot notation
console.log(person.name); // Alice

// Square bracket notation
console.log(person["age"]); // 25`
            }
        ]
    },
    {
        id: 4,
        question: "What is the difference between dot notation and square bracket notation in accessing object properties?",
        answer: [
            {
                type: "table",
                content: {
                    headers: ["Aspect", "Dot Notation", "Square Bracket Notation"],
                    rows: [
                        ["Syntax", "obj.key", "obj['key']"],
                        ["Key Type", "Only valid identifiers (no spaces, no special chars)", "Can use strings, variables, dynamic keys"],
                        ["Use Case", "Most common, simple cases", "When key is dynamic or not a valid identifier"]
                    ]
                }
            },
            {
                type: "code",
                content: `const obj = { "first name": "Alice", age: 25 };
console.log(obj.age);        // Dot → 25
console.log(obj["first name"]); // Square bracket → Alice

const key = "age";
console.log(obj[key]); // 25`
            },
            {
                type: "text",
                content: `**Best Practice:**  
- Prefer dot notation for readability.  
- Use square brackets when dealing with dynamic keys or invalid identifiers.`
            }
        ]
    },
    {
        id: 5,
        question: "How do you add a new property to an object in JavaScript?",
        answer: [
            {
                type: "code",
                content: `const person = { name: "Alice" };

// Using dot notation
person.age = 25;

// Using square brackets
person["city"] = "New York";

console.log(person); 
// { name: "Alice", age: 25, city: "New York" }`
            },
            {
                type: "text",
                content: `**Best Practice:**  
- Avoid adding properties dynamically in performance-critical code (causes hidden class changes in engines like V8).`
            }
        ]
    },
    {
        id: 6,
        question: "How do you remove a property from an object in JavaScript?",
        answer: [
            {
                type: "code",
                content: `const person = { name: "Alice", age: 25, city: "New York" };

// Using delete
delete person.city;
console.log(person); // { name: "Alice", age: 25 }

// Using destructuring (immutable way)
const { city, ...rest } = person;
console.log(rest); // { name: "Alice", age: 25 }`
            },
            {
                type: "text",
                content: `**Best Practice:**  
- Prefer immutability in modern apps (e.g., React/Redux).  
- Use destructuring instead of 'delete' when possible.`
            }
        ]
    },
    {
        id: 7,
        question: "How do you check if an object has a property in JavaScript?",
        answer: [
            {
                type: "list",
                content: [
                    "`in` operator → checks in prototype chain too.",
                    "`.hasOwnProperty()` → checks only own properties.",
                    "Property access with `!== undefined` (not always safe)."
                ]
            },
            {
                type: "code",
                content: `const person = { name: "Alice", age: 25 };

console.log("name" in person);          // true
console.log(person.hasOwnProperty("age")); // true
console.log(person.city !== undefined);    // false`
            }
        ]
    },
    {
        id: 8,
        question: "How do you loop through the properties of an object in JavaScript?",
        answer: [
            {
                type: "list",
                content: [
                    "**for...in loop** → Iterates over enumerable properties (including inherited).",
                    "**Object.keys(obj)** → Returns array of keys.",
                    "**Object.values(obj)** → Returns array of values.",
                    "**Object.entries(obj)** → Returns array of [key, value] pairs."
                ]
            },
            {
                type: "code",
                content: `const person = { name: "Alice", age: 25 };

// for...in
for (let key in person) {
  console.log(key, person[key]);
}

// Object.keys
Object.keys(person).forEach(k => console.log(k));

// Object.entries
for (let [k, v] of Object.entries(person)) {
  console.log(k, v);
}`
            },
            {
                type: "text",
                content: `**Best Practice:**  
- Use Object.keys/values/entries for cleaner and safer loops.  
- Avoid for...in unless checking hasOwnProperty.`
            }
        ]
    },
    {
        id: 9,
        question: "What is a constructor function in JavaScript?",
        answer: [
            {
                type: "text",
                content: `A **constructor function** is a regular function used to create objects.  
When called with the 'new' keyword, it creates a new object, sets 'this' to that object, and returns it.`
            },
            {
                type: "code",
                content: `function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    return "Hi, I'm " + this.name;
  };
}

const p1 = new Person("Alice", 25);
console.log(p1.greet()); // Hi, I'm Alice`
            },
            {
                type: "text",
                content: `**Best Practice:**  
- Define methods on the prototype instead of inside the constructor (saves memory).`
            }
        ]
    },
    {
        id: 10,
        question: "How do you create an object using a constructor function in JavaScript?",
        answer: [
            {
                type: "code",
                content: `function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

const car1 = new Car("Tesla", "Model 3");
const car2 = new Car("Toyota", "Corolla");

console.log(car1.brand); // Tesla
console.log(car2.model); // Corolla`
            },
            {
                type: "text",
                content: `**Explanation:**  
1. \`new Car("Tesla", "Model 3")\` creates an empty object.  
2. Sets 'this' to the new object.  
3. Assigns properties.  
4. Returns the new object.`
            },
            {
                type: "text",
                content: `**Best Practice:**  
- Use **ES6 classes** instead of constructor functions for cleaner syntax.`
            }
        ]
    },
    {
        id: 11,
        question: "What is the difference between an object created using object literal notation and an object created using a constructor function?",
        answer: [
            {
                type: "table",
                content: {
                    headers: ["Aspect", "Object Literal", "Constructor Function"],
                    rows: [
                        ["Syntax", "const obj = { key: value }", "function Person() { this.name = 'Alice'; } new Person()"],
                        ["Creation", "Created directly with `{}`", "Created using `new` keyword"],
                        ["Reusability", "Not reusable for multiple objects", "Reusable blueprint for many objects"],
                        ["Prototype", "Prototype is `Object.prototype`", "Prototype is linked to constructor’s prototype"],
                        ["Use Case", "Best for single-use or small objects", "Best when creating multiple similar objects"]
                    ]
                }
            },
            {
                type: "code",
                content: `// Object literal
const user1 = { name: "Alice", age: 25 };

// Constructor function
function User(name, age) {
  this.name = name;
  this.age = age;
}
const user2 = new User("Bob", 30);`
            },
            {
                type: "text",
                content: `**Best Practice:**  
- Use **object literals** for small, one-time objects.  
- Use **constructor functions (or ES6 classes)** when creating multiple instances.`
            }
        ]
    },
    {
        id: 12,
        question: "What is prototypal inheritance in JavaScript?",
        answer: [
            {
                type: "text",
                content: `**Prototypal inheritance** is a feature in JavaScript where objects can inherit properties and methods from other objects through the **prototype chain**.  
Every object in JavaScript has an internal link (accessible via __proto__) to another object called its prototype.`
            },
            {
                type: "code",
                content: `const animal = {
  eat: function () {
    console.log("Eating...");
  }
};

const dog = Object.create(animal);
dog.bark = function () {
  console.log("Woof!");
};

dog.eat(); // Inherited from animal → "Eating..."
dog.bark(); // Own property → "Woof!"`
            },
            {
                type: "text",
                content: `**Best Practice:**  
- Use prototypal inheritance to avoid code duplication.  
- In modern JavaScript, use **ES6 classes** (which are syntactic sugar over prototypes).`
            }
        ]
    },
    {
        id: 13,
        question: "How do you create an object using prototypal inheritance in JavaScript?",
        answer: [
            {
                type: "list",
                content: [
                    "**Using Object.create():** Creates a new object with the specified prototype.",
                    "**Using constructor functions and prototypes.**",
                    "**Using ES6 classes (syntactic sugar for prototypes).**"
                ]
            },
            {
                type: "code",
                content: `// Method 1: Object.create
const vehicle = { move: function () { console.log("Moving"); } };
const car = Object.create(vehicle);
car.drive = function () { console.log("Driving"); };
car.move(); // Moving

// Method 2: Constructor + Prototype
function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  console.log(this.type + " makes a sound");
};
const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound

// Method 3: ES6 Class
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Hello " + this.name);
  }
}
const p1 = new Person("Alice");
p1.greet(); // Hello Alice`
            },
            {
                type: "text",
                content: `**Best Practice:**  
- Prefer **Object.create** for pure prototypal inheritance.  
- Use **classes** in modern apps for readability.`
            }
        ]
    },
    {
        id: 14,
        question: "What is the difference between an instance property and a prototype property in JavaScript?",
        answer: [
            {
                type: "table",
                content: {
                    headers: ["Aspect", "Instance Property", "Prototype Property"],
                    rows: [
                        ["Definition", "Property defined directly on an object instance", "Property shared via the constructor’s prototype"],
                        ["Memory", "Each object has its own copy", "Shared among all instances"],
                        ["Access", "Accessed directly via `this.property`", "Accessed via prototype chain"],
                        ["Use Case", "For unique data per object (e.g., name, age)", "For methods/shared properties (e.g., greet function)"]
                    ]
                }
            },
            {
                type: "code",
                content: `function User(name) {
  this.name = name; // Instance property
}

User.prototype.greet = function () { // Prototype property
  console.log("Hello, " + this.name);
};

const u1 = new User("Alice");
const u2 = new User("Bob");

console.log(u1.name); // Alice (instance property)
u1.greet(); // Hello, Alice (prototype property)
u2.greet(); // Hello, Bob (same prototype method shared)`
            },
            {
                type: "text",
                content: `**Best Practice:**  
- Put **data as instance properties**.  
- Put **methods as prototype properties** to save memory.`
            }
        ]
    },
    {
        id: 26,
        question: "What is the difference between shallow copy and deep copy of an object?",
        answer: [
            {
                type: "text",
                content: `**Explanation:**  
- **Shallow Copy**: Copies only the top-level properties. If the object has nested objects, they are still shared (referenced).  
- **Deep Copy**: Creates a complete independent clone, including all nested objects.  

**Example:**`
            },
            {
                type: "code",
                content: `let obj = { name: "John", address: { city: "NY" } };

// Shallow copy
let shallow = { ...obj };
shallow.address.city = "LA";

console.log(obj.address.city); 
// Output: "LA" (changed in original as well)

// Deep copy
let deep = structuredClone(obj);
deep.address.city = "Chicago";

console.log(obj.address.city); 
// Output: "LA" (not affected)`
            },
            {
                type: "text",
                content: `**Best Practice:** Use \`structuredClone()\` (modern) or libraries like Lodash (\`_.cloneDeep\`) for safe deep cloning.`
            }
        ]
    },
    {
        id: 27,
        question: "How can you merge two or more objects in JavaScript?",
        answer: [
            {
                type: "code",
                content: `let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

// Using spread operator
let merged1 = { ...obj1, ...obj2 };
console.log(merged1); // { a: 1, b: 3, c: 4 }

// Using Object.assign
let merged2 = Object.assign({}, obj1, obj2);
console.log(merged2); // { a: 1, b: 3, c: 4 }`
            },
            {
                type: "text",
                content: `**Explanation:**  
- Spread operator (\`...\`) and \`Object.assign()\` are used for merging.  
- Properties in later objects overwrite earlier ones.  

**Best Practice:** Prefer spread operator for readability.`
            }
        ]
    },
    {
        id: 28,
        question: "What is object destructuring in JavaScript and why is it useful?",
        answer: [
            {
                type: "code",
                content: `let person = { name: "John", age: 30, city: "NY" };

// Destructuring
let { name, age } = person;
console.log(name, age); // John 30

// With default values
let { country = "USA" } = person;
console.log(country); // USA`
            },
            {
                type: "text",
                content: `**Explanation:**  
- Object destructuring allows extracting properties into variables in a concise way.  
- Useful for cleaner code, default values, and working with function parameters.  

**Best Practice:** Use destructuring in function arguments to improve readability.`
            }
        ]
    },
    {
        id: 29,
        question: "What is the difference between Object.freeze() and Object.seal()?",
        answer: [
            {
                type: "code",
                content: `let obj = { name: "John" };

Object.freeze(obj);
obj.name = "Jane"; // ignored
obj.age = 25;      // ignored
console.log(obj);  // { name: "John" }

let obj2 = { city: "NY" };
Object.seal(obj2);
obj2.city = "LA";   // allowed (modification ok)
obj2.country = "US"; // ignored (can't add new props)
delete obj2.city;    // ignored
console.log(obj2);   // { city: "LA" }`
            },
            {
                type: "text",
                content: `**Explanation:**  
- \`Object.freeze()\` → makes an object **immutable** (no add, delete, or modify).  
- \`Object.seal()\` → allows modification of existing properties, but prevents addition or deletion.  

**Use Case:**  
- Use \`freeze\` for constants/configs.  
- Use \`seal\` for controlled objects where keys shouldn’t change.`
            }
        ]
    },
    {
        id: 30,
        question: "What are JavaScript Symbols and why are they used in objects?",
        answer: [
            {
                type: "code",
                content: `let id = Symbol("id");
let person = { name: "John", [id]: 123 };

console.log(person); // { name: 'John', [Symbol(id)]: 123 }
console.log(person.id); // undefined (not accessible directly)`
            },
            {
                type: "text",
                content: `**Explanation:**  
- **Symbols** are unique and immutable primitive values.  
- They are often used as object keys to avoid naming conflicts.  
- Unlike normal keys, symbols are not enumerable in loops like \`for...in\`.  

**Use Case:** Symbols are used in frameworks/libraries for hidden metadata or private-like properties.`
            }
        ]
    },
    {
        id: 31,
        question: "What are different ways to iterate over object properties?",
        answer: [
            {
                type: "code",
                content: `let person = { name: "John", age: 30 };

// for...in
for (let key in person) {
  console.log(key, person[key]);
}

// Object.keys()
Object.keys(person).forEach(key => console.log(key, person[key]));

// Object.entries()
for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}`
            },
            {
                type: "text",
                content: `**Explanation:**  
- \`for...in\` → Iterates over enumerable properties (including inherited).  
- \`Object.keys(obj)\` → Only own keys.  
- \`Object.entries(obj)\` → Returns key-value pairs, useful for destructuring.  

**Best Practice:** Prefer \`Object.keys/values/entries\` for cleaner code and avoiding prototype pollution.`
            }
        ]
    },
    {
        id: 32,
        question: "How do you convert an object to JSON and back?",
        answer: [
            {
                type: "code",
                content: `let person = { name: "John", age: 30 };

// Object to JSON string
let json = JSON.stringify(person);
console.log(json); // {"name":"John","age":30}

// JSON string to object
let obj = JSON.parse(json);
console.log(obj.name); // John`
            },
            {
                type: "text",
                content: `**Explanation:**  
- \`JSON.stringify(obj)\` → converts object to JSON string (for storage, API calls).  
- \`JSON.parse(str)\` → converts JSON string back to object.  

**Limitation:**  
- Functions and Symbols are not preserved.  
- Circular references will throw errors.`
            }
        ]
    },
    {
        id: 33,
        question: "What is object destructuring with renaming?",
        answer: [
            {
                type: "code",
                content: `let person = { name: "John", age: 30 };

// Renaming variables
let { name: fullName, age: years } = person;

console.log(fullName, years); // John 30`
            },
            {
                type: "text",
                content: `**Explanation:**  
- Destructuring allows renaming variables while extracting.  
- Here, \`person.name\` is extracted into \`fullName\`.  

**Use Case:** Useful when avoiding variable name conflicts.`
            }
        ]
    },
    {
        id: 34,
        question: "How do you prevent object modification in JavaScript?",
        answer: [
            {
                type: "code",
                content: `let obj = { name: "John" };

// Freeze (fully immutable)
Object.freeze(obj);

// Prevent extensions (can't add new props)
Object.preventExtensions(obj);

// Seal (can't add/delete, but can modify)
Object.seal(obj);`
            },
            {
                type: "text",
                content: `**Explanation:**  
- \`Object.freeze()\` → no add, delete, or modify.  
- \`Object.preventExtensions()\` → can't add new properties, but delete/modify works.  
- \`Object.seal()\` → can't add/delete, but modify works.  

**Use Case:** Useful for creating immutable or semi-immutable data structures.`
            }
        ]
    },
    {
        id: 35,
        question: "What are accessor properties (getters and setters) in objects?",
        answer: [
            {
                type: "code",
                content: `let person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  }
};

console.log(person.fullName); // John Doe
person.fullName = "Jane Smith";
console.log(person.firstName); // Jane`
            },
            {
                type: "text",
                content: `**Explanation:**  
- **Getter** → method that acts like a property (computed when accessed).  
- **Setter** → method that runs when assigning a value.  
- They allow controlled access to object properties.  

**Use Case:** Data validation, computed values, encapsulation.`
            }
        ]
    },
    {
        id: 15,
        question: "What is the output of the following code?",
        answer: [
            {
                type: "code",
                content: `let person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
  }
};

person.greet(); 
// Output: Hello, my name is John and I am 30 years old.`
            },
            {
                type: "text",
                content: `**Explanation:**  
- Here, \`greet\` is a method inside the \`person\` object.  
- When we call \`person.greet()\`, the value of \`this\` refers to the \`person\` object.  
- So, \`this.name\` → "John" and \`this.age\` → 30.  
- Hence the correct output is: *Hello, my name is John and I am 30 years old.*  

**Best Practice:** Always call methods through the object reference to ensure \`this\` points to the right object.`
            }
        ]
    },
    {
        id: 16,
        question: "What is the output of the following code?",
        answer: [
            {
                type: "code",
                content: `let person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
};

console.log(person.address.city); 
// Output: Anytown`
            },
            {
                type: "text",
                content: `**Explanation:**  
- Objects in JavaScript can be nested (an object inside another).  
- Here, \`address\` is a nested object within \`person\`.  
- Accessing \`person.address.city\` goes step by step → first \`person.address\` returns the object, then \`city\` gives *Anytown*.  

**Best Practice:** Always check if the nested object exists (using optional chaining \`?.\`) to avoid runtime errors. Example: \`person.address?.city\`.`
            }
        ]
    },
    {
        id: 17,
        question: "What happens in the following code?",
        answer: [
            {
                type: "code",
                content: `let person1 = {
  name: 'John',
  age: 30
};

let person2 = person1;
person2.name = 'Jane';

console.log(person1.name); 
// Output: Jane`
            },
            {
                type: "text",
                content: `**Explanation:**  
- In JavaScript, **objects are reference types**, not copied by value.  
- Assigning \`person2 = person1\` makes both variables point to the **same object in memory**.  
- Changing \`person2.name\` also changes \`person1.name\`.  
- Final output → \`Jane\`.  

**Best Practice:** To create a new independent object, use cloning techniques:  
- Shallow copy → \`{...person1}\` or \`Object.assign({}, person1)\`  
- Deep copy → \`structuredClone(person1)\` or libraries like Lodash.`
            }
        ]
    },
    {
        id: 18,
        question: "What is the output of the following code?",
        answer: [
            {
                type: "code",
                content: `let person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
  }
};

let greetFunc = person.greet;
greetFunc(); 

// Output: Hello, my name is undefined and I am undefined years old.`
            },
            {
                type: "text",
                content: `**Explanation:**  
- Here, \`greetFunc\` is assigned to a standalone variable.  
- When called as \`greetFunc()\`, it is **no longer bound to \`person\`**.  
- In this case, \`this\` refers to the **global object** (window in browsers), which has no \`name\` or \`age\`.  
- Therefore, output is *undefined*.  

**Best Practices:**  
- Use **arrow functions** if you want lexical binding of \`this\`.  
- Or explicitly bind using \`greetFunc.bind(person)\`.`
            }
        ]
    },
    {
        id: 19,
        question: "What is the output of the following code?",
        answer: [
            {
                type: "code",
                content: `let person = {
  name: 'John',
  age: 30
};

console.log(Object.keys(person)); 
// Output: ['name', 'age']`
            },
            {
                type: "text",
                content: `**Explanation:**  
- \`Object.keys(obj)\` returns an array of the **own enumerable property names** of the object.  
- Here, it finds "name" and "age".  

**Use Case:** Useful for iterating over keys dynamically.`
            }
        ]
    },
    {
        id: 20,
        question: "What is the output of the following code?",
        answer: [
            {
                type: "code",
                content: `let person = {
  name: 'John',
  age: 30
};

delete person.age;

console.log(person.age); 
// Output: undefined`
            },
            {
                type: "text",
                content: `**Explanation:**  
- The \`delete\` operator removes a property from an object.  
- After deleting, accessing \`person.age\` returns \`undefined\`.  

**Best Practice:** Instead of deleting often, consider setting values to \`null\` for better performance in large objects.`
            }
        ]
    },
    {
        id: 21,
        question: "What is the output of the following code?",
        answer: [
            {
                type: "code",
                content: `let person = {
  name: 'John',
  age: 30
};

console.log(person.hasOwnProperty('name')); 
console.log(person.hasOwnProperty('toString')); 

// Output: 
// true
// false`
            },
            {
                type: "text",
                content: `**Explanation:**  
- \`hasOwnProperty\` checks if the property exists **directly on the object**, not on its prototype.  
- \`name\` exists directly → true.  
- \`toString\` comes from \`Object.prototype\`, not directly on person → false.`
            }
        ]
    },
    {
        id: 22,
        question: "What is the output of the following code?",
        answer: [
            {
                type: "code",
                content: `let person = {
  name: 'John',
  age: 30
};

console.log(person.toString()); 
// Output: [object Object]`
            },
            {
                type: "text",
                content: `**Explanation:**  
- \`toString()\` is inherited from \`Object.prototype\`.  
- Default behavior returns "[object Object]" for plain objects.  

**Best Practice:** Override \`toString()\` for custom debugging/logging if needed.`
            }
        ]
    },
    {
        id: 23,
        question: "What is the output of the following code?",
        answer: [
            {
                type: "code",
                content: `let person = {
  name: 'John',
  age: 30
};

person.email = 'john@example.com';
console.log(person.email); 

// Output: john@example.com`
            },
            {
                type: "text",
                content: `**Explanation:**  
- Properties can be added to objects at any time by assignment.  
- Here, \`email\` is added and holds the value 'john@example.com'.`
            }
        ]
    },
    {
        id: 24,
        question: "What is the output of the following code?",
        answer: [
            {
                type: "code",
                content: `let person = {
  name: 'John',
  age: 30
};

console.log(Object.values(person)); 
// Output: ['John', 30]`
            },
            {
                type: "text",
                content: `**Explanation:**  
- \`Object.values(obj)\` returns an array of the values of enumerable own properties.  
- Here: ["John", 30].`
            }
        ]
    },
    {
        id: 25,
        question: "What is the output of the following code?",
        answer: [
            {
                type: "code",
                content: `let person = {
  name: 'John',
  age: 30
};

console.log(person.hasOwnProperty('toString')); 
console.log(Object.prototype.hasOwnProperty('toString')); 

// Output: 
// false
// true`
            },
            {
                type: "text",
                content: `**Explanation:**  
- The property \`toString\` is not an own property of \`person\`. It’s inherited from \`Object.prototype\`.  
- Therefore, \`person.hasOwnProperty('toString')\` → false.  
- On the prototype itself, it is an own property → true.  

**Concept Clarified:**  
This shows the difference between own properties vs inherited properties.`
            }
        ]
    },
];