export const prototypes_questions = [
    {
        id: 16,
        question: "What is `prototype` in JavaScript and how does the prototype chain work?",
        answer: [
            {
                type: "text",
                content: `In JavaScript every function (except arrow functions in the sense of being constructors) has a special property called \`prototype\`.  
When a function is used as a constructor with \`new\`, the newly created object's internal [[Prototype]] (accessible via \`__proto__\` or \`Object.getPrototypeOf\`) is set to that constructor's \`prototype\` object.`
            },
            {
                type: "list",
                content: [
                    "Prototype is an object that holds properties/methods shared by all instances created by a constructor.",
                    "Prototype chain is the linked list of objects used for property lookup: instance → constructor.prototype → Object.prototype → null.",
                    "When you access \`obj.prop\`, JS looks first on \`obj\`; if not found, it follows the prototype chain until found or null."
                ]
            },
            {
                type: "code",
                content: `function Person(name) {
  this.name = name;
}

Person.prototype.say = function() {
  return 'Hi ' + this.name;
};

const p = new Person('Mukesh');
console.log(p.say()); // "Hi Mukesh"
// Lookup: p -> Person.prototype -> Object.prototype -> null`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices / Notes:**\n- Visualize prototype chain to reason about where properties come from.\n- Use `Object.getPrototypeOf(obj)` instead of `__proto__` in production code.\n- Keep prototype methods pure (avoid writing instance-specific mutable state on prototype)."
            }
        ]
    },
    {
        id: 17,
        question: "What is the difference between `prototype`, `__proto__`, and `Object.getPrototypeOf`?",
        answer: [
            {
                type: "text",
                content: "`prototype` is a property of constructor functions (Function.prototype). `__proto__` is an accessor on objects that points to the object's internal prototype. `Object.getPrototypeOf(obj)` is the standard API to get the object's prototype."
            },
            {
                type: "list",
                content: [
                    "`Function.prototype` — used when creating instances via `new`.",
                    "`obj.__proto__` — non-standard historically, but implemented in browsers; returns the internal prototype.",
                    "`Object.getPrototypeOf(obj)` — standard, recommended and reliable across environments.",
                    "The constructor function's `prototype.constructor` typically points back to the constructor (can be overwritten if you replace prototype)."
                ]
            },
            {
                type: "code",
                content: `function F() {}
console.log(F.prototype); // object (used for instances)
const o = new F();
console.log(o.__proto__ === F.prototype); // true
console.log(Object.getPrototypeOf(o) === F.prototype); // true

// If you replace prototype:
F.prototype = {};
console.log(F.prototype.constructor === F); // false (constructor lost unless reset)`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices / Notes:**\n- Prefer `Object.getPrototypeOf` and `Object.setPrototypeOf` (but setPrototypeOf is slow) over `__proto__`.\n- If you replace a constructor's prototype object, remember to restore the `.constructor` property if you rely on it."
            }
        ]
    },
    {
        id: 18,
        question: "How do you implement inheritance using prototypes? Show patterns and pitfalls.",
        answer: [
            {
                type: "text",
                content: "Classic prototypal inheritance pattern uses `Object.create` to set the child prototype to an object that inherits from parent.prototype — this avoids calling the parent constructor during prototype setup."
            },
            {
                type: "list",
                content: [
                    "Preferred pattern: call parent constructor inside child to initialize instance fields, and set child.prototype = Object.create(parent.prototype).",
                    "Always restore child.prototype.constructor after Object.create.",
                    "Avoid `new Parent()` to set prototype because it may run Parent side-effects."
                ]
            },
            {
                type: "code",
                content: `function Animal(name) {
  this.name = name; // instance property
}
Animal.prototype.speak = function() {
  return this.name + ' makes a noise';
};

function Dog(name, breed) {
  Animal.call(this, name); // init instance properties
  this.breed = breed;
}

// Establish prototype inheritance without calling Animal()
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  return this.name + ' barks';
};

const d = new Dog('Rex', 'Labrador');
console.log(d.speak()); // "Rex makes a noise"
console.log(d.bark());  // "Rex barks"`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices / Notes:**\n- Use `Object.create` to avoid running parent constructor at inheritance setup time.\n- With modern JS prefer `class extends` for clarity; it uses prototypes internally.\n- Watch for shared mutable state on prototypes when using inheritance."
            }
        ]
    },
    {
        id: 19,
        question: "When should you define a method on the prototype vs on the instance (constructor)? Why does it matter?",
        answer: [
            {
                type: "text",
                content: "Methods that are identical for every instance should be put on the prototype so they are shared. Instance-specific state should be properties on the instance itself."
            },
            {
                type: "list",
                content: [
                    "Prototype methods are stored once and shared — memory efficient for many instances.",
                    "Instance methods (defined inside constructor) create a new function per instance — uses more memory and prevents method equality checks.",
                    "If a method needs access to per-instance private data (closed-over vars) you may create it per instance intentionally."
                ]
            },
            {
                type: "code",
                content: `function A(val) {
  this.val = val;
  // instance method (new for each instance)
  this.instanceMethod = function() { return this.val; };
}
// prototype method (shared)
A.prototype.sharedMethod = function() { return this.val; };

const x = new A(1);
const y = new A(2);
console.log(x.instanceMethod === y.instanceMethod); // false
console.log(x.sharedMethod === y.sharedMethod);     // true`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices / Notes:**\n- Put methods on prototype unless you need closures over constructor-local variables per instance.\n- If you accidentally put large data on prototype, it will be shared — can be a bug (see shared-mutable example)."
            }
        ]
    },
    {
        id: 20,
        question: "If you modify a constructor's prototype after creating instances, do those instances see the changes? What about replacing the whole prototype object?",
        answer: [
            {
                type: "text",
                content: "Adding properties to the existing prototype object is visible to existing instances because they reference that prototype. But replacing the prototype object (assigning a new object) does NOT update existing instances' [[Prototype]] links — only new instances created after replacement see the new prototype."
            },
            {
                type: "list",
                content: [
                    "Mutating (adding/removing) properties on the existing prototype affects all instances that reference it.",
                    "Reassigning `Ctor.prototype = { ... }` creates a new object; old instances still link to the old prototype.",
                    "Therefore, be careful when swapping prototypes at runtime — it can be a source of bugs."
                ]
            },
            {
                type: "code",
                content: `function Foo() {}
const a = new Foo();

Foo.prototype.say = function() { return 'old'; };
console.log(a.say()); // "old"

// Replace prototype entirely
Foo.prototype = { say: function() { return 'new'; } };

const b = new Foo();
console.log(b.say()); // "new"
console.log(typeof a.say); // "function"
console.log(a.say()); // "old"  // a still points to the original prototype`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices / Notes:**\n- Prefer mutating an existing prototype (adding methods) rather than replacing it at runtime.\n- If you must replace prototype, remember to set `.constructor` correctly and understand existing instances are unaffected."
            }
        ]
    },
    {
        id: 21,
        question: "Explain the shared mutable state pitfall on prototype and how to avoid it.",
        answer: [
            {
                type: "text",
                content: "Placing mutable objects (arrays/objects) on prototype causes them to be shared by all instances — changes by one instance affect others. This is a frequent bug for new JS developers."
            },
            {
                type: "list",
                content: [
                    "Mutable prototype properties are shared across instances — not instance-local.",
                    "Use instance properties for per-instance mutable state (initialize inside constructor).",
                    "If you need defaults, set them in constructor or clone the prototype value per instance."
                ]
            },
            {
                type: "code",
                content: `function User(name) {
  this.name = name;
}
// BAD: shared array on prototype
User.prototype.tags = [];

const u1 = new User('A');
const u2 = new User('B');
u1.tags.push('admin');
console.log(u2.tags); // ['admin']  <-- unexpected

// FIX: initialize per instance
function User2(name) {
  this.name = name;
  this.tags = []; // instance-specific
}`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices / Notes:**\n- Never put per-instance mutable defaults on prototype — always initialize them in the constructor.\n- For performance-critical code where many objects share large read-only defaults, putting immutable defaults on prototype is okay."
            }
        ]
    },
    {
        id: 22,
        question: "How does the `instanceof` operator work? Can you implement a custom `instanceof`?",
        answer: [
            {
                type: "text",
                content: "`instanceof` checks whether a constructor's prototype exists somewhere on the object's prototype chain. It's essentially a pointer-walk of the object's [[Prototype]] until it reaches null or finds the prototype reference."
            },
            {
                type: "list",
                content: [
                    "`obj instanceof Ctor` returns true if `Ctor.prototype` is in the prototype chain of `obj`.",
                    "`instanceof` depends on prototype objects, not constructor identity — different realms (iframes) may break checks.",
                    "You can implement a custom version using `Object.getPrototypeOf`."
                ]
            },
            {
                type: "code",
                content: `function customInstanceOf(obj, constructor) {
  if (obj == null) return false;
  let proto = Object.getPrototypeOf(obj);
  const prototype = constructor.prototype;
  while (proto !== null) {
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

function A() {}
const a = new A();
console.log(customInstanceOf(a, A)); // true`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices / Notes:**\n- Prefer duck-typing or `Array.isArray` for arrays rather than relying on `instanceof` across frames.\n- Understand that `instanceof` can be fooled if prototype is changed manually."
            }
        ]
    },
    {
        id: 23,
        question: "What are the key differences between ES6 `class` syntax and prototype-based constructor functions?",
        answer: [
            {
                type: "text",
                content: "ES6 `class` is syntactic sugar over prototypes but adds clearer semantics and some runtime differences (no hoisting, class body runs in strict mode, methods non-enumerable). Under the hood, class methods live on the prototype."
            },
            {
                type: "list",
                content: [
                    "`class` is not hoisted — you cannot call it before declaration.",
                    "Class constructors must be called with `new`; calling without `new` throws.",
                    "Methods defined in class body are non-enumerable and placed on prototype.",
                    "Prototypes still power inheritance (`extends` sets [[Prototype]] links)."
                ]
            },
            {
                type: "code",
                content: `// class
class Person {
  constructor(name) { this.name = name; }
  say() { return this.name; } // on prototype
}

// roughly equivalent to:
function PersonOld(name) { this.name = name; }
PersonOld.prototype.say = function() { return this.name; };`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices / Notes:**\n- Prefer `class` for clearer, maintainable OO code in apps; understand it still uses prototypes underneath.\n- Use constructor functions + prototypes when you need fine-grained control or when working with legacy code."
            }
        ]
    },
    {
        id: 24,
        question: "Are there performance considerations when changing an object's prototype at runtime? What is recommended?",
        answer: [
            {
                type: "text",
                content: "Changing an object's prototype at runtime (e.g., `Object.setPrototypeOf` or `obj.__proto__ = ...`) is slow and can deoptimize JS engine optimizations because object shapes change."
            },
            {
                type: "list",
                content: [
                    "`Object.setPrototypeOf` and `__proto__` are slow; avoid them in performance-critical code or tight loops.",
                    "Prefer configuring prototype at creation time (e.g., `Object.create(proto)` or via constructor `.prototype`).",
                    "Modifying prototype repeatedly prevents engines from optimizing property access and method calls."
                ]
            },
            {
                type: "code",
                content: `// Recommended: set prototype at creation time
const proto = { greet() { return 'hi'; } };
const o = Object.create(proto); // o.__proto__ === proto

// Avoid: changing prototype later
Object.setPrototypeOf(o, otherProto); // slow, avoid`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices / Notes:**\n- Design objects with proper prototype links upfront. Use `Object.create` for factories.\n- Use composition over dynamic prototype changes when possible."
            }
        ]
    },
    {
        id: 25,
        question: "What is prototype pollution and how can it be mitigated?",
        answer: [
            {
                type: "text",
                content: "Prototype pollution is a security vulnerability where an attacker can inject properties into `Object.prototype` (or other prototypes), affecting all objects and potentially causing arbitrary behavior or privilege escalation in the app."
            },
            {
                type: "list",
                content: [
                    "Occurs when untrusted input is merged into objects without sanitization (e.g., deep merge libraries that copy `__proto__` keys).",
                    "Polluting `Object.prototype` can create global flags or override methods used by the app.",
                    "Mitigation: deny `__proto__`, `constructor.prototype`, and other prototype paths when merging; use `Object.create(null)` for pure maps; use safe libraries."
                ]
            },
            {
                type: "code",
                content: `// Example vulnerable merge (simplified)
const userInput = JSON.parse('{"__proto__": {"isAdmin": true}}');
const target = {};
Object.assign(target, userInput); // may not pollute, but some deep merges do
console.log(({}).isAdmin); // true if prototype was polluted by unsafe merge

// Mitigation: ignore dangerous keys
function safeAssign(target, source) {
  Object.keys(source).forEach(k => {
    if (k === '__proto__' || k === 'constructor') return;
    target[k] = source[k];
  });
}`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practices / Notes:**\n- Validate/sanitize untrusted JSON before merging.\n- Use `Object.create(null)` when you need a plain map with no prototype.\n- Keep dependencies (like deep-merge libs) updated and use libraries known to mitigate prototype pollution."
            }
        ]
    }
];