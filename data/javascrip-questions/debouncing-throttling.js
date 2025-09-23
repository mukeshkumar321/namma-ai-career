export const debouncing_throttling_questions = [
    {
        id: 1,
        question: "What is Debouncing in JavaScript?",
        answer: [
            {
                type: "text",
                content: "Debouncing ensures a function is **executed only after a certain period of inactivity**. Useful to limit the rate of execution for events that fire frequently, like `resize` or `input` events."
            },
            {
                type: "code",
                content: `function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage
window.addEventListener('resize', debounce(() => {
  console.log('Resized!');
}, 300));`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Key Point:** The function is executed **after the user stops triggering** the event for the specified delay."
            }
        ]
    },
    {
        id: 2,
        question: "What is Throttling in JavaScript?",
        answer: [
            {
                type: "text",
                content: "Throttling ensures a function is executed **at most once in a specified time interval**, even if the event fires multiple times."
            },
            {
                type: "code",
                content: `function throttle(func, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Usage
window.addEventListener('scroll', throttle(() => {
  console.log('Scrolling...');
}, 200));`,
                language: "javascript"
            },
            {
                type: "text",
                content: "**Key Point:** The function is executed **periodically**, limiting the rate of execution."
            }
        ]
    },
    {
        id: 3,
        question: "Difference between Debouncing and Throttling",
        answer: [
            {
                type: "list",
                content: [
                    "Debounce: Function executes **after events stop firing** for a specified delay.",
                    "Throttle: Function executes **at regular intervals** no matter how many times the event fires.",
                    "Debounce reduces the number of executions during bursts; throttle limits execution to a fixed rate.",
                    "Debounce is good for search input or resize events; throttle is good for scroll or mousemove events."
                ]
            },
            {
                type: "code",
                content: `// Debounce example: waits until user stops typing
input.addEventListener('input', debounce(() => console.log('Search'), 300));

// Throttle example: fires every 200ms during scroll
window.addEventListener('scroll', throttle(() => console.log('Scroll event'), 200));`,
                language: "javascript"
            }
        ]
    },
    {
        id: 4,
        question: "Why is Debouncing important in web development?",
        answer: [
            {
                type: "text",
                content: "Debouncing improves performance and reduces unnecessary computations or API calls."
            },
            {
                type: "list",
                content: [
                    "Avoid multiple rapid API calls when typing in search fields.",
                    "Limit heavy DOM manipulations during window resize or scroll.",
                    "Improve application performance and reduce memory usage."
                ]
            }
        ]
    },
    {
        id: 5,
        question: "Why is Throttling important in web development?",
        answer: [
            {
                type: "text",
                content: "Throttling ensures consistent performance when handling high-frequency events, preventing the Event Loop from being blocked."
            },
            {
                type: "list",
                content: [
                    "Limit execution of scroll, mousemove, or resize handlers.",
                    "Maintain responsive UI while processing periodic events.",
                    "Prevent overwhelming the browser with too many function calls."
                ]
            }
        ]
    },
    {
        id: 6,
        question: "Can you implement Debounce with immediate execution?",
        answer: [
            {
                type: "text",
                content: "Yes. Immediate execution triggers the function at the start of the event burst, then ignores further events until the delay passes."
            },
            {
                type: "code",
                content: `function debounceImmediate(func, delay) {
  let timeoutId;
  return function(...args) {
    const callNow = !timeoutId;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => timeoutId = null, delay);
    if (callNow) func.apply(this, args);
  };
}

const log = debounceImmediate(() => console.log('Called immediately!'), 300);
window.addEventListener('click', log);`,
                language: "javascript"
            }
        ]
    },
    {
        id: 7,
        question: "Can you implement Throttle with trailing execution?",
        answer: [
            {
                type: "text",
                content: "Yes. Trailing execution ensures the last event in a burst is executed after the limit period."
            },
            {
                type: "code",
                content: `function throttleTrailing(func, limit) {
  let lastCall = 0;
  let timeoutId;
  return function(...args) {
    const now = Date.now();
    const remaining = limit - (now - lastCall);
    if (remaining <= 0) {
      clearTimeout(timeoutId);
      lastCall = now;
      func.apply(this, args);
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        lastCall = Date.now();
        func.apply(this, args);
      }, remaining);
    }
  };
}`,
                language: "javascript"
            }
        ]
    },
    {
        id: 8,
        question: "How do Debounce and Throttle affect the Event Loop?",
        answer: [
            {
                type: "text",
                content: "Both debounce and throttle control **when callbacks are pushed to the call stack**, preventing excessive execution and reducing Event Loop pressure."
            },
            {
                type: "list",
                content: [
                    "Debounce postpones execution until inactivity.",
                    "Throttle spaces execution over intervals.",
                    "Helps prevent blocking other tasks in Event Loop."
                ]
            }
        ]
    },
    {
        id: 9,
        question: "What are common real-world use cases for Debouncing?",
        answer: [
            {
                type: "list",
                content: [
                    "Search input autocomplete API calls",
                    "Window resize event handling",
                    "Form validation on input change",
                    "Prevent multiple rapid clicks on buttons"
                ]
            }
        ]
    },
    {
        id: 10,
        question: "What are common real-world use cases for Throttling?",
        answer: [
            {
                type: "list",
                content: [
                    "Scroll events for lazy-loading or infinite scroll",
                    "Mousemove or pointer tracking",
                    "Window resize updates with periodic adjustments",
                    "Throttle API calls for analytics or telemetry"
                ]
            }
        ]
    }
];