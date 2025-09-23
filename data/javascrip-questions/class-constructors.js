export const class_constructors_questions = [
    {
        id: 1,
        question: "What is a constructor function in JavaScript?",
        answer: [
            {
                type: "text",
                content: `A constructor function is a regular function used to **create multiple similar objects**.  
It is invoked using the **'new' keyword**, which automatically does three things:  
1. Creates a new empty object.  
2. Sets the prototype of the new object to the constructor's prototype.  
3. Returns the new object.`
            },
            {
                type: "code",
                content: `function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user = new Person("Mukesh", 25);
console.log(user.name); // Mukesh`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Always capitalize constructor function names.\n- Define shared methods on the prototype for memory efficiency.\n- Avoid returning custom objects from constructors unless necessary."
            }
        ]
    },
    {
        id: 2,
        question: "What are classes in JavaScript?",
        answer: [
            {
                type: "text",
                content: `Classes in JavaScript are **syntactic sugar** over constructor functions and prototype-based inheritance.  
They provide a cleaner, more readable syntax to define object blueprints and manage inheritance.`
            },
            {
                type: "list",
                content: [
                    "Introduced in ES6 (2015).",
                    "Support constructor methods for initialization.",
                    "Support instance methods and static methods.",
                    "Support class inheritance using `extends`."
                ]
            },
            {
                type: "code",
                content: `class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(\`Hello, my name is \${this.name}\`);
  }
}

const user = new Person("Ankit", 28);
user.greet(); // Hello, my name is Ankit`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Prefer classes over plain constructor functions for readability.\n- Use static methods for utility operations.\n- Keep class methods focused on behavior."
            }
        ]
    },
    {
        id: 3,
        question: "How does inheritance work in JavaScript classes?",
        answer: [
            {
                type: "text",
                content: `JavaScript supports **class inheritance** using the \`extends\` keyword.  
It allows a child class to inherit properties and methods from a parent class.  
The \`super\` keyword is used to call the parent constructor and methods.`
            },
            {
                type: "code",
                content: `class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(\`\${this.name} makes a sound\`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls parent constructor
    this.breed = breed;
  }
  speak() {
    console.log(\`\${this.name} barks\`);
  }
}

const dog = new Dog("Bruno", "Labrador");
dog.speak(); // Bruno barks`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Always call `super()` in the child constructor before using `this`.\n- Override methods carefully, but you can still access parent methods using `super.methodName()`.\n- Use inheritance when classes share common behavior."
            }
        ]
    },
    {
        id: 4,
        question: "What are static methods in JavaScript classes?",
        answer: [
            {
                type: "text",
                content: `Static methods are methods defined on the **class itself**, not on its instances.  
They are used for **utility or helper functions** that don't depend on instance data.`
            },
            {
                type: "code",
                content: `class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(5, 10)); // 15`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Use static methods for logic that doesn’t depend on instance data.\n- Commonly used for factory methods or utility libraries."
            }
        ]
    },
    {
        id: 5,
        question: "What is the difference between a class and a constructor function?",
        answer: [
            {
                type: "list",
                content: [
                    "Classes are syntactic sugar over constructor functions.",
                    "Class methods are non-enumerable by default, while constructor function prototype methods are enumerable.",
                    "Classes must be called with `new`, while constructor functions can throw errors if not used with `new`.",
                    "Class syntax is clearer and supports `extends` and `super` directly."
                ]
            },
            {
                type: "code",
                content: `function Car(model) {
  this.model = model;
}
Car.prototype.drive = function() {
  console.log(\`\${this.model} is driving\`);
};

class Bike {
  constructor(model) {
    this.model = model;
  }
  drive() {
    console.log(\`\${this.model} is driving\`);
  }
}`,
                language: "javascript"
            }
        ]
    },
    {
        id: 6,
        question: "What happens if you don’t define a constructor in a class?",
        answer: [
            {
                type: "text",
                content: `If you don't define a constructor, JavaScript automatically provides a **default constructor**.  
- For base classes: an empty constructor is used.  
- For derived classes: a constructor with only \`super(...args)\` is provided.`
            },
            {
                type: "code",
                content: `class Base {}
class Derived extends Base {}

const d = new Derived(); // works fine, auto calls super()`,
                language: "javascript"
            }
        ]
    },
    {
        id: 7,
        question: "Can classes in JavaScript be hoisted?",
        answer: [
            {
                type: "text",
                content: `Unlike function declarations, **class declarations are not hoisted**.  
You cannot use a class before it is declared.  
This is because class declarations are in **temporal dead zone (TDZ)** until initialized.`
            },
            {
                type: "code",
                content: `const obj = new MyClass(); // ❌ ReferenceError
class MyClass {}`,
                language: "javascript"
            }
        ]
    },
    {
        id: 8,
        question: "What is the role of `super` keyword in JavaScript classes?",
        answer: [
            {
                type: "text",
                content: `The \`super\` keyword is used to:  
1. Call the parent class constructor inside a child class.  
2. Access methods of the parent class that have been overridden.`
            },
            {
                type: "code",
                content: `class Parent {
  greet() {
    console.log("Hello from Parent");
  }
}

class Child extends Parent {
  greet() {
    super.greet(); // calls parent method
    console.log("Hello from Child");
  }
}

new Child().greet();
// Output:
// Hello from Parent
// Hello from Child`,
                language: "javascript"
            }
        ]
    },
    {
        id: 9,
        question: "What are private fields in JavaScript classes?",
        answer: [
            {
                type: "text",
                content: `Private fields (introduced in ES2022) allow you to define truly private properties in a class using \`#\`.  
These cannot be accessed outside the class.`
            },
            {
                type: "code",
                content: `class BankAccount {
  #balance = 0; // private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100
console.log(acc.#balance); // ❌ SyntaxError`,
                language: "javascript"
            }
        ]
    },
    {
        id: 10,
        question: "Can you explain method overriding vs method overloading in JavaScript classes?",
        answer: [
            {
                type: "text",
                content: `JavaScript supports **method overriding** but not true method overloading (like Java/C#).  
- Overriding: redefining a parent method in a child class.  
- Overloading: not directly supported, but can be mimicked using default parameters or argument checks.`
            },
            {
                type: "code",
                content: `class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() { // overriding
    return Math.PI * this.radius * this.radius;
  }
}

function sum(a, b, c) { // mimic overloading
  if (c !== undefined) return a + b + c;
  return a + b;
}

console.log(new Circle(5).area()); // 78.5
console.log(sum(1,2)); // 3
console.log(sum(1,2,3)); // 6`,
                language: "javascript"
            }
        ]
    },
    {
        id: 11,
        question: "How are classes linked to prototypes internally?",
        answer: [
            {
                type: "text",
                content: `Even though classes look like a new feature, under the hood they are still **constructor functions with prototypes**.  
Every class has a \`prototype\` object that stores instance methods, and the class itself is a function.`
            },
            {
                type: "code",
                content: `class User {
  greet() {
    console.log("Hello");
  }
}

console.log(typeof User); // function
console.log(User.prototype.greet); // function (shared by all instances)`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Key Insight:**\n- Class syntax is just cleaner syntax for prototype-based inheritance.\n- Understanding this helps in debugging prototype chain issues."
            }
        ]
    },
    {
        id: 12,
        question: "What are Mixins in JavaScript classes?",
        answer: [
            {
                type: "text",
                content: `JavaScript does not support multiple inheritance, but you can achieve similar functionality with **Mixins**.  
A mixin is a function that copies properties and methods from one object into a class prototype.`
            },
            {
                type: "code",
                content: `let Logger = {
  log(message) {
    console.log("[LOG]", message);
  }
};

class User {
  constructor(name) {
    this.name = name;
  }
}

// Apply mixin
Object.assign(User.prototype, Logger);

const u = new User("Mukesh");
u.log("User created"); // [LOG] User created`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Use mixins to share reusable behavior across classes.\n- Avoid deep mixin chains as they make debugging harder."
            }
        ]
    },
    {
        id: 13,
        question: "Can you implement an abstract class in JavaScript?",
        answer: [
            {
                type: "text",
                content: `JavaScript does not have true abstract classes like Java or C#.  
However, you can **simulate abstract classes** by throwing errors in base methods that must be overridden.`
            },
            {
                type: "code",
                content: `class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate abstract class Shape directly");
    }
  }

  area() {
    throw new Error("Method 'area()' must be implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const c = new Circle(5);
console.log(c.area()); // 78.5

// const s = new Shape(); // ❌ Error`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Use abstract class patterns to enforce design contracts.\n- Consider TypeScript for stricter enforcement."
            }
        ]
    },
    {
        id: 14,
        question: "How does multiple inheritance work in JavaScript?",
        answer: [
            {
                type: "text",
                content: `JavaScript does not support multiple inheritance directly.  
Instead, developers use **mixins or composition** to achieve similar behavior.`
            },
            {
                type: "code",
                content: `const CanFly = Base => class extends Base {
  fly() { console.log("Flying..."); }
};

const CanSwim = Base => class extends Base {
  swim() { console.log("Swimming..."); }
};

class Animal {}
class Duck extends CanSwim(CanFly(Animal)) {}

const d = new Duck();
d.fly(); // Flying...
d.swim(); // Swimming...`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices:**\n- Prefer composition over inheritance for flexibility.\n- Use functional mixins for combining behaviors."
            }
        ]
    },
    {
        id: 15,
        question: "What is the difference between class expressions and class declarations?",
        answer: [
            {
                type: "text",
                content: `JavaScript supports two ways of defining classes:  
1. **Class Declaration** – Named class defined with \`class\` keyword.  
2. **Class Expression** – Class defined inside an expression, can be named or anonymous.`
            },
            {
                type: "code",
                content: `// Class Declaration
class Person {
  constructor(name) { this.name = name; }
}

// Class Expression
const Student = class {
  constructor(id) { this.id = id; }
};

const p = new Person("Mukesh");
const s = new Student(101);

console.log(p.name); // Mukesh
console.log(s.id);   // 101`,
                language: "javascript"
            },
            {
                type: "list",
                content: [
                    "Class declarations are hoisted but not initialized (TDZ applies).",
                    "Class expressions are more flexible (can be anonymous, used in IIFEs).",
                    "Choose based on readability and scoping needs."
                ]
            }
        ]
    },
];