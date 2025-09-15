export const array_methods_questions = [
    // 1. What is the map() method in JavaScript?
    {
        id: 1,
        question: "What is the map() method in JavaScript?",
        answer: [
            {
                type: "text",
                content: `The **map()** method creates a new array by applying a callback function to each element of the original array.  
It does not mutate the original array and always returns an array of the same length.`
            },
            {
                type: "code",
                content: `const numbers = [1, 2, 3, 4];

// Using map() to double values
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// Original array remains unchanged
console.log(numbers); // [1, 2, 3, 4]`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Use \`map()\` when you need to **transform data**.  
- Always return a value from the callback.  
- Prefer \`map()\` over loops for functional, cleaner code.`
            }
        ]
    },

    // 2. What is the filter() method in JavaScript?
    {
        id: 2,
        question: "What is the filter() method in JavaScript?",
        answer: [
            {
                type: "text",
                content: `The **filter()** method creates a new array containing elements that pass the condition in the callback.  
It does not modify the original array and can return fewer elements.`
            },
            {
                type: "code",
                content: `const numbers = [1, 2, 3, 4, 5, 6];

// Filtering even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Use \`filter()\` when you want to **select items**.  
- Callback should return a boolean (true keeps, false removes).  
- Avoid using \`filter()\` for transformations — use \`map()\` instead.`
            }
        ]
    },

    // 3. What is the reduce() method in JavaScript?
    {
        id: 3,
        question: "What is the reduce() method in JavaScript?",
        answer: [
            {
                type: "text",
                content: `The **reduce()** method applies a reducer function to each element in the array, reducing it to a **single value**.  
It takes two arguments:  
1. Reducer function (\`accumulator, currentValue\`).  
2. Optional initial value.`
            },
            {
                type: "code",
                content: `const numbers = [1, 2, 3, 4, 5];

// Summing numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// Finding maximum
const max = numbers.reduce((acc, curr) => curr > acc ? curr : acc, numbers[0]);
console.log(max); // 5`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Always provide an **initial value** to avoid errors on empty arrays.  
- Use reduce for **aggregation** (sum, min, max, grouping, etc.).  
- Keep reducer functions small and focused.`
            }
        ]
    },

    // 4. What is the difference between map(), filter(), and reduce()?
    {
        id: 4,
        question: "What is the difference between map(), filter(), and reduce()?",
        answer: [
            {
                type: "table",
                content: {
                    headers: ["Method", "Purpose", "Returns", "Example Use Case"],
                    rows: [
                        ["map()", "Transforms each element", "New array (same length)", "Convert prices from $ to ₹"],
                        ["filter()", "Selects elements by condition", "New array (shorter or equal length)", "Filter active users"],
                        ["reduce()", "Aggregates to one value", "Single value (number, object, etc.)", "Sum salaries, find max"]
                    ]
                }
            },
            {
                type: "code",
                content: `const numbers = [1, 2, 3, 4, 5];

// map -> square numbers
const squares = numbers.map(n => n * n); // [1, 4, 9, 16, 25]

// filter -> keep even numbers
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce -> sum numbers
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15`,
                language: "javascript"
            }
        ]
    },

    // 5. Can you implement map(), filter(), and reduce() manually?
    {
        id: 5,
        question: "Can you implement map(), filter(), and reduce() manually?",
        answer: [
            {
                type: "code",
                content: `// Custom map()
Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// Custom filter()
Array.prototype.myFilter = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// Custom reduce()
Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Why interviewers ask this:**  
- To check if you understand the **internal working** of these array methods.  
- To see how well you can write **pure functions** and avoid mutations.`
            }
        ]
    },

    // 6. What are performance considerations when chaining map(), filter(), and reduce()?
    {
        id: 6,
        question: "What are performance considerations when chaining map(), filter(), and reduce()?",
        answer: [
            {
                type: "text",
                content: `Chaining \`map()\`, \`filter()\`, and \`reduce()\` makes code more readable but can create multiple intermediate arrays.  
For large datasets, this may affect performance.`
            },
            {
                type: "code",
                content: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Chaining creates multiple arrays
const result1 = numbers
  .map(n => n * 2)
  .filter(n => n > 10)
  .reduce((acc, n) => acc + n, 0);

// Optimized single pass with reduce
const result2 = numbers.reduce((acc, n) => {
  const doubled = n * 2;
  if (doubled > 10) acc += doubled;
  return acc;
}, 0);

console.log(result1, result2); // 80, 80`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- For small/medium datasets → chaining is fine (clean code).  
- For very large datasets → consider using a single \`reduce()\` or libraries like Lodash.`
            }
        ]
    },

    // 7. Real-life use cases of map(), filter(), and reduce()
    {
        id: 7,
        question: "What are some real-life use cases of map(), filter(), and reduce()?",
        answer: [
            {
                type: "list",
                content: [
                    "**map():** Transform API response (e.g., format dates, extract IDs).",
                    "**filter():** Get only active users from a user list.",
                    "**reduce():** Calculate total order amount in a shopping cart.",
                    "Combination: map + filter + reduce → Data pipelines."
                ]
            },
            {
                type: "code",
                content: `const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true }
];

// Get active user names
const activeNames = users
  .filter(u => u.active)
  .map(u => u.name);

console.log(activeNames); // ["Alice", "Charlie"]

// Total orders
const orders = [
  { id: 1, amount: 50 },
  { id: 2, amount: 150 },
  { id: 3, amount: 200 }
];
const total = orders.reduce((sum, o) => sum + o.amount, 0);
console.log(total); // 400`,
                language: "javascript"
            }
        ]
    },
    // 1. What is the difference between forEach(), map(), and reduce()?
    {
        id: 8,
        question: "What is the difference between forEach(), map(), and reduce()?",
        answer: [
            {
                type: "table",
                content: {
                    headers: ["Method", "Purpose", "Returns", "Use Case"],
                    rows: [
                        ["forEach()", "Iterates over array elements", "Undefined", "Logging or performing side effects"],
                        ["map()", "Transforms elements", "New array (same length)", "Format data from API"],
                        ["reduce()", "Aggregates values", "Single value", "Sum, average, grouping"]
                    ]
                }
            },
            {
                type: "code",
                content: `const numbers = [1, 2, 3, 4];

// forEach: just print
numbers.forEach(n => console.log(n));

// map: create new array of squares
const squares = numbers.map(n => n * n);
console.log(squares); // [1, 4, 9, 16]

// reduce: sum values
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 10`,
                language: "javascript"
            }
        ]
    },

    // 2. When should you use forEach() vs map()?
    {
        id: 9,
        question: "When should you use forEach() vs map()?",
        answer: [
            {
                type: "text",
                content: `- Use **forEach()** when you only want to iterate and perform **side effects** (e.g., logging, updating DOM, API calls).  
- Use **map()** when you want to **transform** data into a new array.`
            },
            {
                type: "code",
                content: `const users = ["Alice", "Bob", "Charlie"];

// forEach: print names (side effect)
users.forEach(u => console.log("Hello " + u));

// map: create greetings (transformation)
const greetings = users.map(u => "Hello " + u);
console.log(greetings); // ["Hello Alice", "Hello Bob", "Hello Charlie"]`,
                language: "javascript"
            }
        ]
    },

    // 3. Why does forEach() not return anything?
    {
        id: 10,
        question: "Why does forEach() not return anything?",
        answer: [
            {
                type: "text",
                content: `The **forEach()** method is designed only for **iteration with side effects**.  
It always returns \`undefined\`, which prevents accidental misuse as a transformation function.`
            },
            {
                type: "code",
                content: `const arr = [1, 2, 3];

// Incorrect assumption
const doubled = arr.forEach(n => n * 2);

console.log(doubled); // undefined

// Correct with map()
const doubledCorrect = arr.map(n => n * 2);
console.log(doubledCorrect); // [2, 4, 6]`,
                language: "javascript"
            }
        ]
    },

    // 4. Can reduce() replace map() and filter()?
    {
        id: 11,
        question: "Can reduce() replace map() and filter()?",
        answer: [
            {
                type: "text",
                content: `Yes, since \`reduce()\` is the most powerful among the three,  
it can be used to implement \`map()\` and \`filter()\`.  
However, using \`map()\` and \`filter()\` is usually more **readable**.`
            },
            {
                type: "code",
                content: `const numbers = [1, 2, 3, 4, 5];

// Using reduce as map (double values)
const doubled = numbers.reduce((acc, n) => {
  acc.push(n * 2);
  return acc;
}, []);
console.log(doubled); // [2, 4, 6, 8, 10]

// Using reduce as filter (keep even)
const evens = numbers.reduce((acc, n) => {
  if (n % 2 === 0) acc.push(n);
  return acc;
}, []);
console.log(evens); // [2, 4]`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Takeaway:**  
- Reduce can do everything → but map/filter are more **semantic and cleaner**.`
            }
        ]
    },

    // 5. What are performance considerations when using forEach(), map(), and reduce()?
    {
        id: 12,
        question: "What are performance considerations when using forEach(), map(), and reduce()?",
        answer: [
            {
                type: "list",
                content: [
                    "forEach() → Fastest for just iteration (no new array creation).",
                    "map() → Creates a new array, slightly more memory overhead.",
                    "reduce() → More flexible but often less readable when misused.",
                    "For very large datasets → prefer reduce (single pass) instead of chaining map + filter."
                ]
            },
            {
                type: "code",
                content: `const numbers = [1, 2, 3, 4, 5, 6];

// Chaining (multiple passes)
const result1 = numbers
  .map(n => n * 2)
  .filter(n => n > 5);

// Optimized single reduce (one pass)
const result2 = numbers.reduce((acc, n) => {
  const doubled = n * 2;
  if (doubled > 5) acc.push(doubled);
  return acc;
}, []);

console.log(result1, result2); // [6, 8, 10, 12], [6, 8, 10, 12]`,
                language: "javascript"
            }
        ]
    },

    // 6. Real-life example: Where would you use forEach(), map(), and reduce()?
    {
        id: 13,
        question: "Real-life example: Where would you use forEach(), map(), and reduce()?",
        answer: [
            {
                type: "list",
                content: [
                    "**forEach():** Send email notifications to each user.",
                    "**map():** Extract usernames from an API response.",
                    "**reduce():** Calculate total sales from orders."
                ]
            },
            {
                type: "code",
                content: `const users = [
  { id: 1, name: "Alice", purchases: 200 },
  { id: 2, name: "Bob", purchases: 150 },
  { id: 3, name: "Charlie", purchases: 300 }
];

// forEach: notify users
users.forEach(u => console.log("Email sent to " + u.name));

// map: extract names
const names = users.map(u => u.name);
console.log(names); // ["Alice", "Bob", "Charlie"]

// reduce: total purchases
const total = users.reduce((sum, u) => sum + u.purchases, 0);
console.log(total); // 650`,
                language: "javascript"
            }
        ]
    },
    // 1. Double all numbers in an array using map
    {
        id: 14,
        question: "How would you double all numbers in an array using map()?",
        answer: [
            {
                type: "code",
                content: `const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practice:** Use map() for transformations instead of forEach + push."
            }
        ]
    },

    // 2. Filter out odd numbers
    {
        id: 15,
        question: "How do you filter only even numbers from an array?",
        answer: [
            {
                type: "code",
                content: `const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6]`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practice:** Use filter() instead of if conditions inside forEach."
            }
        ]
    },

    // 3. Find the maximum number using reduce
    {
        id: 16,
        question: "How would you find the maximum number in an array using reduce()?",
        answer: [
            {
                type: "code",
                content: `const nums = [10, 50, 30, 70, 20];
const max = nums.reduce((acc, n) => Math.max(acc, n), -Infinity);
console.log(max); // 70`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Trick:** Start reduce with -Infinity (or first element) to avoid edge cases."
            }
        ]
    },

    // 4. Count the frequency of each element
    {
        id: 17,
        question: "How do you count the frequency of elements in an array?",
        answer: [
            {
                type: "code",
                content: `const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const frequency = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(frequency);
// { apple: 3, banana: 2, orange: 1 }`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Best Practice:** Reduce is ideal for aggregation problems like counting."
            }
        ]
    },

    // 5. Remove duplicates from an array
    {
        id: 18,
        question: "How do you remove duplicates from an array using reduce()?",
        answer: [
            {
                type: "code",
                content: `const nums = [1, 2, 3, 2, 4, 1, 5];

const unique = nums.reduce((acc, n) => {
  if (!acc.includes(n)) acc.push(n);
  return acc;
}, []);

console.log(unique); // [1, 2, 3, 4, 5]`,
                language: "javascript"
            },
            {
                type: "text",
                content: "Alternatively, use `new Set(nums)` for better performance."
            }
        ]
    },

    // 6. Flatten a nested array
    {
        id: 19,
        question: "How do you flatten a nested array using reduce()?",
        answer: [
            {
                type: "code",
                content: `const nested = [[1, 2], [3, 4], [5]];

const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat); // [1, 2, 3, 4, 5]`,
                language: "javascript"
            },
            {
                type: "text",
                content: "For deep flattening, recursion or `flat(Infinity)` is needed."
            }
        ]
    },

    // 7. Capitalize first letter of each word
    {
        id: 20,
        question: "How do you capitalize the first letter of each word in an array?",
        answer: [
            {
                type: "code",
                content: `const words = ["hello", "world", "javascript"];

const capitalized = words.map(w => w[0].toUpperCase() + w.slice(1));
console.log(capitalized); // ["Hello", "World", "Javascript"]`,
                language: "javascript"
            }
        ]
    },

    // 8. Convert an array of objects into a lookup (id → object)
    {
        id: 21,
        question: "How do you convert an array of objects into a lookup object using reduce()?",
        answer: [
            {
                type: "code",
                content: `const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const userMap = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

console.log(userMap);
// { 1: {id:1,name:"Alice"}, 2: {...}, 3: {...} }`,
                language: "javascript"
            },
            {
                type: "text",
                content: "This is a very common **interview coding task** for fast lookups."
            }
        ]
    },

    // Coding Q: Async in loops
    {
        id: 22,
        question: "Why doesn't async/await work properly with forEach? How can you fix it?",
        answer: [
            {
                type: "text",
                content: `The \`forEach\` method does not wait for async functions to resolve, so \`await\` inside a forEach won't behave as expected.`
            },
            {
                type: "code",
                content: `const nums = [1, 2, 3];

// Problematic code
nums.forEach(async (n) => {
  await new Promise((res) => setTimeout(res, 1000));
  console.log(n);
});
console.log("Done"); // Logs before numbers finish

// Fix: Use for...of
async function printNums() {
  for (const n of nums) {
    await new Promise((res) => setTimeout(res, 1000));
    console.log(n);
  }
}
printNums();`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Use \`for...of\` or \`Promise.all\` instead of async \`forEach\`.  
- \`Promise.all\` is best when you want concurrency, \`for...of\` when order matters.`
            }
        ]
    },

    // Coding Q: Group By
    {
        id: 23,
        question: "How do you group an array of objects by a property?",
        answer: [
            {
                type: "text",
                content: `You can use \`reduce\` to group objects by a specific property (like category, age, or role).`
            },
            {
                type: "code",
                content: `const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" }
];

const grouped = users.reduce((acc, user) => {
  acc[user.role] = acc[user.role] || [];
  acc[user.role].push(user);
  return acc;
}, {});

console.log(grouped);
// {
//   admin: [{ name: "Alice" }, { name: "Charlie" }],
//   user: [{ name: "Bob" }]
// }`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- Initialize accumulator as an empty object.  
- Useful for building lookup maps or categorizing data.`
            }
        ]
    },

    // Coding Q: Deep Clone
    {
        id: 24,
        question: "How do you deep clone an object in JavaScript?",
        answer: [
            {
                type: "text",
                content: `A shallow copy (using spread or Object.assign) only copies one level deep. For deep cloning, we must recursively copy all levels.`
            },
            {
                type: "code",
                content: `const obj = { a: 1, b: { c: 2 } };

// ❌ Shallow copy
const shallow = { ...obj };
shallow.b.c = 42;
console.log(obj.b.c); // 42 (mutated)

// ✅ Deep copy
const deep = JSON.parse(JSON.stringify(obj));
deep.b.c = 99;
console.log(obj.b.c); // 2 (safe)`,
                language: "javascript"
            },
            {
                type: "text",
                content: `**Best Practices:**  
- \`JSON.parse/stringify\` works for plain objects but fails with Dates, functions, or circular refs.  
- Use libraries like **lodash.cloneDeep** for complex structures.`
            }
        ]
    },
];