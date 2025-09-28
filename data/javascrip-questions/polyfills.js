export const polyfills_questions = [
  {
    id: 1,
    question: "Polyfill for Array.prototype.map",
    answer: [
      {
        type: "code",
        content: `Array.prototype.myMap = function(callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result.push(callback.call(thisArg, this[i], i, this));
    }
  }
  return result;
};`,
        language: "javascript"
      },
      {
        type: "list",
        content: [
          "✅ Preserves holes in sparse arrays.",
          "✅ Supports `thisArg` for context.",
          "✅ Interviewers check if you know how `map` internally iterates."
        ]
      }
    ]
  },
  {
    id: 2,
    question: "Polyfill for Array.prototype.filter",
    answer: [
      {
        type: "code",
        content: `Array.prototype.myFilter = function(callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};`,
        language: "javascript"
      },
      {
        type: "list",
        content: [
          "✅ Returns only elements where callback returns true.",
          "✅ Must check `i in this` for sparse arrays."
        ]
      }
    ]
  },
  {
    id: 3,
    question: "Polyfill for Array.prototype.reduce",
    answer: [
      {
        type: "code",
        content: `Array.prototype.myReduce = function(callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    if (this.length === 0) throw new TypeError("Reduce of empty array with no initial value");
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};`,
        language: "javascript"
      },
      {
        type: "list",
        content: [
          "✅ Handles missing `initialValue` correctly.",
          "✅ Interviewers check if you know error cases."
        ]
      }
    ]
  },
  {
    id: 4,
    question: "Polyfill for Array.prototype.forEach",
    answer: [
      {
        type: "code",
        content: `Array.prototype.myForEach = function(callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      callback.call(thisArg, this[i], i, this);
    }
  }
};`,
        language: "javascript"
      },
      {
        type: "list",
        content: [
          "✅ Executes callback for each element.",
          "✅ Always returns `undefined` like the real `forEach`."
        ]
      }
    ]
  },
  {
    id: 10,
    question: "Polyfill for Array.prototype.includes",
    answer: [
      {
        type: "code",
        content: `Array.prototype.myIncludes = function(value, fromIndex = 0) {
  if (this == null) throw new TypeError("Array.prototype.includes called on null or undefined");
  const len = this.length >>> 0;
  if (len === 0) return false;

  let i = Math.max(fromIndex >= 0 ? fromIndex : len + fromIndex, 0);
  while (i < len) {
    if (this[i] === value || (Number.isNaN(this[i]) && Number.isNaN(value))) {
      return true;
    }
    i++;
  }
  return false;
};`,
        language: "javascript"
      },
      {
        type: "list",
        content: [
          "✅ Handles NaN correctly (unlike indexOf).",
          "✅ Supports negative indices."
        ]
      }
    ]
  },
  {
    id: 13,
    question: "Polyfill for Array.prototype.find",
    answer: [
      {
        type: "code",
        content: `Array.prototype.myFind = function(callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback.call(thisArg, this[i], i, this)) {
        return this[i];
      }
    }
  }
  return undefined;
};`,
        language: "javascript"
      },
      {
        type: "list",
        content: [
          "✅ Returns the **first element** that satisfies the callback.",
          "✅ Returns `undefined` if no element matches.",
          "✅ Must check `i in this` to skip holes in sparse arrays."
        ]
      }
    ]
  },
  {
    id: 14,
    question: "Polyfill for Array.prototype.some",
    answer: [
      {
        type: "code",
        content: `Array.prototype.mySome = function(callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) {
      return true;
    }
  }
  return false;
};`,
        language: "javascript"
      },
      {
        type: "list",
        content: [
          "✅ Returns `true` if **at least one** element passes the test.",
          "✅ Short-circuits once a match is found.",
          "✅ Skips holes in sparse arrays."
        ]
      }
    ]
  },
  {
    id: 15,
    question: "Polyfill for Array.prototype.every",
    answer: [
      {
        type: "code",
        content: `Array.prototype.myEvery = function(callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (i in this && !callback.call(thisArg, this[i], i, this)) {
      return false;
    }
  }
  return true;
};`,
        language: "javascript"
      },
      {
        type: "list",
        content: [
          "✅ Returns `true` if **all elements** pass the test.",
          "✅ Short-circuits when a failure is found.",
          "✅ Empty arrays always return `true` (important edge case)."
        ]
      }
    ]
  },
  {
    id: 16,
    question: "Polyfill for Array.prototype.findIndex",
    answer: [
      {
        type: "code",
        content: `Array.prototype.myFindIndex = function(callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) {
      return i;
    }
  }
  return -1;
};`,
        language: "javascript"
      },
      {
        type: "list",
        content: [
          "✅ Returns the **index of the first element** that satisfies the callback.",
          "✅ Returns `-1` if no element matches.",
          "✅ Skips holes in sparse arrays (same as `find`)."
        ]
      }
    ]
  },
  {
    id: 5,
    question: "Polyfill for Function.prototype.call",
    answer: [
      {
        type: "code",
        content: `Function.prototype.myCall = function(context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(this + " is not callable");
  }
  context = context || globalThis;
  const fnSymbol = Symbol("fn");
  context[fnSymbol] = this;
  const result = context[fnSymbol](...args);
  delete context[fnSymbol];
  return result;
};`,
        language: "javascript"
      },
      {
        type: "list",
        content: [
          "✅ Attaches function to context temporarily.",
          "✅ Supports spreading arguments."
        ]
      }
    ]
  },
  {
    id: 6,
    question: "Polyfill for Function.prototype.apply",
    answer: [
      {
        type: "code",
        content: `Function.prototype.myApply = function(context, args) {
  if (typeof this !== "function") {
    throw new TypeError(this + " is not callable");
  }
  context = context || globalThis;
  const fnSymbol = Symbol("fn");
  context[fnSymbol] = this;
  const result = Array.isArray(args) ? context[fnSymbol](...args) : context[fnSymbol]();
  delete context[fnSymbol];
  return result;
};`,
        language: "javascript"
      },
      {
        type: "list",
        content: [
          "✅ Similar to `call`, but takes arguments as an array.",
          "✅ Must handle `args` being `undefined`."
        ]
      }
    ]
  },
  {
    id: 7,
    question: "Polyfill for Function.prototype.bind",
    answer: [
      {
        type: "code",
        content: `Function.prototype.myBind = function(context, ...args1) {
  if (typeof this !== "function") {
    throw new TypeError(this + " is not callable");
  }
  const fn = this;
  return function(...args2) {
    return fn.apply(context, [...args1, ...args2]);
  };
};`,
        language: "javascript"
      },
      {
        type: "list",
        content: [
          "✅ Returns a new function with bound context.",
          "✅ Supports partial application (preset arguments).",
          "❌ This simple version doesn’t handle `new` operator properly."
        ]
      }
    ]
  },
  {
    id: 8,
    question: "Polyfill for Promise (basic implementation)",
    answer: [
      {
        type: "code",
        content: `function MyPromise(executor) {
  let onResolve, onReject;
  let fulfilled = false, rejected = false, value;

  function resolve(val) {
    fulfilled = true;
    value = val;
    if (typeof onResolve === "function") onResolve(value);
  }

  function reject(err) {
    rejected = true;
    value = err;
    if (typeof onReject === "function") onReject(value);
  }

  this.then = function(callback) {
    onResolve = callback;
    if (fulfilled) onResolve(value);
    return this;
  };

  this.catch = function(callback) {
    onReject = callback;
    if (rejected) onReject(value);
    return this;
  };

  executor(resolve, reject);
}`,
        language: "javascript"
      },
      {
        type: "list",
        content: [
          "✅ Very simplified Promise polyfill.",
          "✅ Supports `.then()` and `.catch()`.",
          "❌ Doesn’t support chaining or async jobs."
        ]
      }
    ]
  },
  {
    id: 9,
    question: "Polyfill for Object.assign",
    answer: [
      {
        type: "code",
        content: `Object.myAssign = function(target, ...sources) {
  if (target == null) throw new TypeError("Cannot convert undefined or null to object");
  const to = Object(target);
  for (const src of sources) {
    if (src != null) {
      for (const key in src) {
        if (Object.prototype.hasOwnProperty.call(src, key)) {
          to[key] = src[key];
        }
      }
    }
  }
  return to;
};`,
        language: "javascript"
      },
      {
        type: "list",
        content: [
          "✅ Shallow copies own enumerable properties.",
          "✅ Throws error if target is null/undefined."
        ]
      }
    ]
  },
  {
    id: 11,
    question: "Best Practices for Writing and Using Polyfills in JavaScript",
    answer: [
      {
        type: "list",
        content: [
          "**Feature Detection First:** Always check if a method or feature exists before writing a polyfill. This avoids overwriting native implementations.\nExample:\n```js\nif (!Array.prototype.myMap) {\n  Array.prototype.myMap = function(callback) { /* ... */ };\n}\n```",
          "**Avoid Overwriting Built-ins in Production:** Never override native implementations in production unless absolutely necessary, as it may break browser behavior.",
          "**Use Polyfills Only When Needed:** Only include polyfills for features not supported in the target browsers/environments to reduce bundle size.",
          "**Shallow vs Deep Copy Awareness:** When writing polyfills for objects or arrays, know whether a shallow copy (e.g., Object.assign) or deep copy is required.",
          "**Preserve Original Behavior:** Polyfills must follow the exact behavior of the native method, including argument handling, `this` binding, and edge cases.",
          "**Test for Edge Cases:** Make sure polyfills handle empty arrays, sparse arrays, `null`/`undefined` values, and special cases like `NaN` for Array.includes.",
          "**Performance Awareness:** Polyfills are usually slower than native implementations; avoid heavy computations in polyfills if possible.",
          "**Use Trusted Polyfill Libraries:** If possible, use well-tested polyfill libraries (like core-js) instead of writing from scratch for complex features."
        ]
      }
    ]
  },
  {
    id: 12,
    question: "Advanced Promise Polyfill supporting chaining, all, race, allSettled, and any",
    answer: [
      {
        type: "text",
        content: `This polyfill demonstrates how to implement a Promise from scratch with basic chaining and popular static methods: \`.all\`, \`.race\`, \`.allSettled\`, and \`.any\`.  
It’s suitable for interview purposes to show understanding of asynchronous handling.`
      },
      {
        type: "code",
        content: `function MyPromise(executor) {
  let onResolve = [];
  let onReject = [];
  let state = 'pending';
  let value;

  function resolve(val) {
    if (state !== 'pending') return;
    state = 'fulfilled';
    value = val;
    onResolve.forEach(fn => fn(value));
  }

  function reject(err) {
    if (state !== 'pending') return;
    state = 'rejected';
    value = err;
    onReject.forEach(fn => fn(value));
  }

  this.then = function(cb) {
    return new MyPromise((resolveNext, rejectNext) => {
      const handle = val => {
        try {
          const result = cb(val);
          if (result instanceof MyPromise) {
            result.then(resolveNext).catch(rejectNext);
          } else {
            resolveNext(result);
          }
        } catch (e) {
          rejectNext(e);
        }
      };
      if (state === 'fulfilled') handle(value);
      else onResolve.push(handle);
    });
  };

  this.catch = function(cb) {
    return new MyPromise((resolveNext, rejectNext) => {
      const handle = val => {
        try {
          const result = cb(val);
          resolveNext(result);
        } catch (e) {
          rejectNext(e);
        }
      };
      if (state === 'rejected') handle(value);
      else onReject.push(handle);
    });
  };

  executor(resolve, reject);
}

// Static methods
MyPromise.all = function(promises) {
  return new MyPromise((resolve, reject) => {
    let results = [];
    let completed = 0;
    promises.forEach((p, i) => {
      p.then(val => {
        results[i] = val;
        completed++;
        if (completed === promises.length) resolve(results);
      }).catch(reject);
    });
  });
};

MyPromise.race = function(promises) {
  return new MyPromise((resolve, reject) => {
    promises.forEach(p => p.then(resolve).catch(reject));
  });
};

MyPromise.allSettled = function(promises) {
  return new MyPromise((resolve) => {
    let results = [];
    let completed = 0;
    promises.forEach((p, i) => {
      p.then(val => {
        results[i] = { status: 'fulfilled', value: val };
      }).catch(err => {
        results[i] = { status: 'rejected', reason: err };
      }).finally(() => {
        completed++;
        if (completed === promises.length) resolve(results);
      });
    });
  });
};

MyPromise.any = function(promises) {
  return new MyPromise((resolve, reject) => {
    let errors = [];
    let rejectedCount = 0;
    promises.forEach((p, i) => {
      p.then(resolve).catch(err => {
        errors[i] = err;
        rejectedCount++;
        if (rejectedCount === promises.length) reject(errors);
      });
    });
  });
};

// Example usage
const p1 = new MyPromise((res) => setTimeout(() => res(10), 100));
const p2 = new MyPromise((res) => setTimeout(() => res(20), 200));

MyPromise.all([p1, p2]).then(console.log); // [10, 20]
MyPromise.race([p1, p2]).then(console.log); // 10
MyPromise.allSettled([p1, p2]).then(console.log); 
MyPromise.any([p1, p2]).then(console.log); // 10`,
        language: "javascript"
      },
      {
        type: "text",
        content: `**Best Practices:**  
- Only polyfill advanced methods if targeting environments that lack native Promises.  
- Use the native \`Promise\` in modern browsers for performance.  
- Always handle errors using \`.catch()\` to avoid unhandled rejections.  
- Understand that this polyfill is simplified and doesn’t handle every edge case of ES6 Promises (e.g., nested asynchronous calls in \`.then\`).`
      }
    ]
  },
]
