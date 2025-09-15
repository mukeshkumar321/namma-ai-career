export const questions = {
    core_concepts: [
        // 1. What is React?
        {
            id: 1,
            question: "What is React?",
            answer: [
                {
                    type: "text",
                    content: `React is a **JavaScript library** for building **user interfaces**, developed by Facebook.  
It allows developers to build **reusable components** and efficiently update the UI using a **Virtual DOM**.`
                },
                {
                    type: "list",
                    content: [
                        "Component-based architecture: UI is broken into small, reusable components.",
                        "Declarative approach: You describe what the UI should look like based on state.",
                        "Virtual DOM: Updates only the parts of the DOM that need to change for better performance.",
                        "Unidirectional data flow: Data flows from parent to child components."
                    ]
                },
                {
                    type: "code",
                    content: `import React from 'react';

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Break UI into small, reusable components.\n- Use props for passing data from parent to child.\n- Keep components focused on a single responsibility."
                }
            ]
        },

        // 2. What is JSX?
        {
            id: 2,
            question: "What is JSX?",
            answer: [
                {
                    type: "text",
                    content: `JSX stands for **JavaScript XML**. It allows writing **HTML-like syntax in JavaScript**, which React converts into ` + "`React.createElement`" + ` calls. JSX makes code more readable and expressive.`
                },
                {
                    type: "code",
                    content: `// JSX Example
const element = <h1>Hello, world!</h1>;`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Wrap multiple JSX elements in a single parent element or React.Fragment.\n- Keep JSX clean; avoid complex logic inside the JSX.\n- Use curly braces `{}` to embed JavaScript expressions inside JSX."
                }
            ]
        },

        // 3. What are Components in React?
        {
            id: 3,
            question: "What are Components in React?",
            answer: [
                {
                    type: "text",
                    content: `Components are the **building blocks of React applications**. They can be **functional or class-based**, and each component manages its own UI and state (if needed).`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Type", "Syntax", "Lifecycle Methods", "Hooks Support"],
                        rows: [
                            ["Class Component", "class MyComponent extends React.Component {}", "componentDidMount, componentDidUpdate, componentWillUnmount", "No"],
                            ["Functional Component", "function MyComponent() {}", "N/A", "Yes (useState, useEffect, etc.)"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `// Functional Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Class Component
class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Prefer functional components with hooks.\n- Keep components small and focused.\n- Pass data via props, keep state local when possible."
                }
            ]
        },

        // 4. What is State in React?
        {
            id: 4,
            question: "What is State in React?",
            answer: [
                {
                    type: "text",
                    content: `State is a **JavaScript object** that holds data that may change over time and affects what is rendered by the component.`
                },
                {
                    type: "code",
                    content: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use state only for dynamic data.\n- Lift state up to parent components when needed by multiple children.\n- Avoid unnecessary state to prevent extra re-renders."
                }
            ]
        },

        // 5. What are Props in React?
        {
            id: 5,
            question: "What are Props in React?",
            answer: [
                {
                    type: "text",
                    content: `Props (short for properties) are **read-only data** passed from a parent component to a child component. They allow components to be **reusable and configurable**.`
                },
                {
                    type: "code",
                    content: `function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return <Greeting name="Alice" />;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Props are immutable; do not modify them in child components.\n- Use destructuring for cleaner code.\n- Use PropTypes or TypeScript for type-checking."
                }
            ]
        },

        // 6. Difference between State and Props
        {
            id: 6,
            question: "What is the difference between State and Props?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Aspect", "State", "Props"],
                        rows: [
                            ["Mutability", "Mutable (can change over time)", "Immutable (read-only)"],
                            ["Component Type", "Managed inside component", "Passed from parent"],
                            ["Purpose", "Stores dynamic data", "Configures components"],
                            ["Usage", "useState or this.state", "Passed as attributes in JSX"]
                        ]
                    }
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use state for internal component data.\n- Use props to pass data and callbacks from parent to child."
                }
            ]
        },

        // 7. Functional vs Class Components
        {
            id: 7,
            question: "Functional vs Class Components in React",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Aspect", "Functional Component", "Class Component"],
                        rows: [
                            ["Syntax", "function MyComponent() {}", "class MyComponent extends React.Component {}"],
                            ["State", "useState hook", "this.state"],
                            ["Lifecycle Methods", "useEffect hook", "componentDidMount, componentDidUpdate, componentWillUnmount"],
                            ["Hooks Support", "Yes", "No"],
                            ["Performance", "Slightly faster & simpler", "Slightly heavier"]
                        ]
                    }
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Prefer functional components with hooks.\n- Use class components only if you maintain legacy code."
                }
            ]
        },

        // 8. Component Composition
        {
            id: 8,
            question: "What is Component Composition in React?",
            answer: [
                {
                    type: "text",
                    content: `Component composition is a technique where **components are combined together** to create more complex UIs.  
It promotes **reusability and separation of concerns**.`
                },
                {
                    type: "code",
                    content: `function Button({ children }) {
  return <button>{children}</button>;
}

function App() {
  return (
    <div>
      <Button>Click Me</Button>
      <Button>Submit</Button>
    </div>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Compose components instead of duplicating code.\n- Pass children or props to customize behavior."
                }
            ]
        },

        // 9. Keys in Lists
        {
            id: 9,
            question: "Why are Keys important in React lists?",
            answer: [
                {
                    type: "text",
                    content: `Keys are **unique identifiers** used by React to optimize rendering when creating lists of elements. They help React identify **which items changed, added, or removed**.`
                },
                {
                    type: "code",
                    content: `const items = ['Apple', 'Banana', 'Cherry'];

function List() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use stable unique IDs, not array index, for keys when possible.\n- Keys must be unique among siblings.\n- Helps React efficiently update the UI."
                }
            ]
        },

        // 10. Conditional Rendering
        {
            id: 10,
            question: "How do you implement Conditional Rendering in React?",
            answer: [
                {
                    type: "text",
                    content: `Conditional rendering in React allows components to **render different elements based on a condition**.`
                },
                {
                    type: "code",
                    content: `function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "list",
                    content: [
                        "Use ternary operators inside JSX.",
                        "Use && operator for simple conditional rendering.",
                        "Extract components for complex conditional UI."
                    ]
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Keep conditional logic simple.\n- Avoid deep nested conditions inside JSX.\n- Extract separate components for readability."
                }
            ]
        }
    ],
    hooks_lifecycle: [
        // 11. What are React Lifecycle Methods?
        {
            id: 11,
            question: "What are React Lifecycle Methods?",
            answer: [
                {
                    type: "text",
                    content: `Lifecycle methods are **special methods in class components** that allow you to run code at specific points in a component's life: when it mounts, updates, or unmounts.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Phase", "Methods", "Purpose"],
                        rows: [
                            ["Mounting", "constructor, componentDidMount, render", "Called when component is added to the DOM"],
                            ["Updating", "shouldComponentUpdate, componentDidUpdate, render", "Called when component updates due to props or state changes"],
                            ["Unmounting", "componentWillUnmount", "Called before component is removed from DOM"],
                            ["Error Handling", "componentDidCatch", "Called when an error occurs in a child component"]
                        ]
                    }
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use componentDidMount for data fetching.\n- Use componentWillUnmount for cleanup (timers, subscriptions).\n- Prefer functional components with hooks for new projects."
                }
            ]
        },

        // 12. What is useState Hook?
        {
            id: 12,
            question: "What is useState Hook?",
            answer: [
                {
                    type: "text",
                    content: `useState is a **React Hook** that allows **functional components to have state**. It returns a state variable and a function to update it.`
                },
                {
                    type: "code",
                    content: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Initialize state with meaningful default values.\n- Use multiple useState hooks for independent state variables.\n- Avoid deeply nested state objects when possible."
                }
            ]
        },

        // 13. What is useEffect Hook?
        {
            id: 13,
            question: "What is useEffect Hook?",
            answer: [
                {
                    type: "text",
                    content: `useEffect allows you to **perform side effects** in functional components, such as data fetching, subscriptions, or manually changing the DOM.`
                },
                {
                    type: "code",
                    content: `import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array -> runs once after mount

  return <p>Seconds: {seconds}</p>;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Always clean up subscriptions or timers.\n- Include dependencies in the dependency array.\n- Avoid infinite loops by careful dependency management."
                }
            ]
        },

        // 14. What is useRef Hook?
        {
            id: 14,
            question: "What is useRef Hook?",
            answer: [
                {
                    type: "text",
                    content: `useRef returns a **mutable ref object** which persists for the component lifetime. It can be used to access DOM elements or store mutable values without triggering re-renders.`
                },
                {
                    type: "code",
                    content: `import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use refs for DOM access, not for state management.\n- Avoid overusing refs; prefer state when rendering depends on values."
                }
            ]
        },

        // 15. What is useMemo Hook?
        {
            id: 15,
            question: "What is useMemo Hook?",
            answer: [
                {
                    type: "text",
                    content: `useMemo is a hook that **memoizes the result of a function**, preventing expensive recalculations on every render.`
                },
                {
                    type: "code",
                    content: `import React, { useMemo, useState } from 'react';

function ExpensiveComponent({ number }) {
  const factorial = useMemo(() => {
    console.log("Calculating factorial");
    const calcFactorial = n => n <= 1 ? 1 : n * calcFactorial(n - 1);
    return calcFactorial(number);
  }, [number]);

  return <p>Factorial: {factorial}</p>;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use useMemo for expensive calculations.\n- Do not overuse; only memoize when necessary.\n- Always include all dependencies in the dependency array."
                }
            ]
        },

        // 16. What is useCallback Hook?
        {
            id: 16,
            question: "What is useCallback Hook?",
            answer: [
                {
                    type: "text",
                    content: `useCallback returns a **memoized function**, useful for passing stable callbacks to child components and avoiding unnecessary re-renders.`
                },
                {
                    type: "code",
                    content: `import React, { useState, useCallback } from 'react';

function Button({ handleClick }) {
  console.log("Button rendered");
  return <button onClick={handleClick}>Click</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount(c => c + 1), []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button handleClick={increment} />
    </div>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use useCallback when passing functions to memoized children.\n- Avoid using it unnecessarily; it adds complexity."
                }
            ]
        },

        // 17. Rules of Hooks
        {
            id: 17,
            question: "What are the Rules of Hooks?",
            answer: [
                {
                    type: "list",
                    content: [
                        "Only call hooks at the top level of your component or custom hook; do not call inside loops, conditions, or nested functions.",
                        "Only call hooks from React functional components or custom hooks.",
                        "Hooks should not be called from regular JavaScript functions.",
                        "Always include all dependencies in dependency arrays for useEffect, useMemo, and useCallback."
                    ]
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Follow rules strictly to prevent unpredictable behavior.\n- Use ESLint plugin 'react-hooks' to enforce rules."
                }
            ]
        },

        // 18. What are Custom Hooks?
        {
            id: 18,
            question: "What are Custom Hooks?",
            answer: [
                {
                    type: "text",
                    content: `Custom Hooks are **functions that start with 'use'** and allow you to **reuse stateful logic across components**. They leverage built-in hooks internally.`
                },
                {
                    type: "code",
                    content: `import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

function App() {
  const width = useWindowWidth();
  return <p>Window width: {width}</p>;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Extract reusable logic only.\n- Keep hooks small and focused.\n- Name hooks starting with 'use' to follow convention."
                }
            ]
        },

        // 19. Difference between useEffect and componentDidMount
        {
            id: 19,
            question: "What is the difference between useEffect and componentDidMount?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Aspect", "componentDidMount (Class)", "useEffect (Functional)"],
                        rows: [
                            ["When called", "After initial render", "After initial render or when dependencies change"],
                            ["Syntax", "componentDidMount() {}", "useEffect(() => {}, [])"],
                            ["Cleanup", "componentWillUnmount()", "Return a cleanup function inside useEffect"],
                            ["Multiple effects", "Single method per component", "Multiple useEffect hooks allowed"]
                        ]
                    }
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- useEffect with empty dependencies replicates componentDidMount behavior.\n- Use multiple useEffect hooks to separate concerns."
                }
            ]
        },

        // 20. Cleaning up effects in useEffect
        {
            id: 20,
            question: "How do you clean up effects in useEffect?",
            answer: [
                {
                    type: "text",
                    content: `To prevent memory leaks or unwanted side effects, **return a cleanup function** from useEffect which is called before unmounting or before the next effect runs.`
                },
                {
                    type: "code",
                    content: `useEffect(() => {
  const interval = setInterval(() => console.log("Tick"), 1000);

  // Cleanup function
  return () => clearInterval(interval);
}, []);`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Always clean subscriptions, timers, and event listeners.\n- Helps prevent memory leaks and unexpected behavior."
                }
            ]
        }
    ],
    event_forms: [
        // 21. How do you handle events in React?
        {
            id: 21,
            question: "How do you handle events in React?",
            answer: [
                {
                    type: "text",
                    content: `In React, **events are handled using camelCase syntax** and by passing a function reference instead of a string.`
                },
                {
                    type: "code",
                    content: `function Button() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use arrow functions for event handlers to preserve 'this' context.\n- Avoid inline functions in JSX if performance matters in large lists.\n- Keep event handlers focused on a single responsibility."
                }
            ]
        },

        // 22. How do you pass arguments to event handlers?
        {
            id: 22,
            question: "How do you pass arguments to event handlers in React?",
            answer: [
                {
                    type: "text",
                    content: `You can pass arguments by using **arrow functions** or by binding the function.`
                },
                {
                    type: "code",
                    content: `function Item({ name }) {
  const handleClick = (itemName) => {
    alert('Clicked: ' + itemName);
  };

  return <button onClick={() => handleClick(name)}>Click {name}</button>;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Prefer arrow functions in JSX for readability.\n- Avoid unnecessary binding in render for performance."
                }
            ]
        },

        // 23. What is controlled vs uncontrolled components in forms?
        {
            id: 23,
            question: "What is the difference between controlled and uncontrolled components in React?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Aspect", "Controlled Component", "Uncontrolled Component"],
                        rows: [
                            ["Value source", "State (React)", "DOM"],
                            ["Updates", "onChange handler updates state", "Ref used to access value"],
                            ["Validation", "Easier with state", "Requires manual DOM access"],
                            ["Use case", "Most form inputs", "Quick, simple inputs or legacy code"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `// Controlled
function ControlledInput() {
  const [value, setValue] = React.useState('');
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}

// Uncontrolled
function UncontrolledInput() {
  const inputRef = React.useRef();
  return <input ref={inputRef} defaultValue="Hello" />;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Prefer controlled components for predictable behavior and validation.\n- Use uncontrolled for quick/simple forms or performance optimization."
                }
            ]
        },

        // 24. How do you handle multiple inputs in a form?
        {
            id: 24,
            question: "How do you handle multiple inputs in a form in React?",
            answer: [
                {
                    type: "text",
                    content: `For multiple inputs, use a **single state object** and update values dynamically using the 'name' attribute.`
                },
                {
                    type: "code",
                    content: `function MultiInputForm() {
  const [formData, setFormData] = React.useState({ username: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <input name="username" value={formData.username} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
    </form>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use controlled inputs.\n- Use dynamic keys for scalable form handling.\n- Keep form state minimal and normalized."
                }
            ]
        },

        // 25. How do you prevent default behavior in React events?
        {
            id: 25,
            question: "How do you prevent default behavior in React events?",
            answer: [
                {
                    type: "text",
                    content: `React provides the **event object**, and you can call \`event.preventDefault()\` to prevent default browser behavior.`
                },
                {
                    type: "code",
                    content: `function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted without reloading!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Always prevent default if form submission should not reload the page.\n- Use only when necessary to avoid interfering with native browser behavior."
                }
            ]
        },

        // 26. How do you handle checkboxes and radio buttons in React?
        {
            id: 26,
            question: "How do you handle checkboxes and radio buttons in React?",
            answer: [
                {
                    type: "text",
                    content: `Checkboxes and radio buttons can be handled as **controlled inputs** by managing their checked state.`
                },
                {
                    type: "code",
                    content: `function CheckboxExample() {
  const [checked, setChecked] = React.useState(false);
  return <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />;
}

function RadioExample() {
  const [selected, setSelected] = React.useState('option1');
  return (
    <>
      <input type="radio" value="option1" checked={selected === 'option1'} onChange={e => setSelected(e.target.value)} /> Option 1
      <input type="radio" value="option2" checked={selected === 'option2'} onChange={e => setSelected(e.target.value)} /> Option 2
    </>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use state to track checked or selected values.\n- Keep the value consistent with the state.\n- Avoid uncontrolled checkboxes for critical forms."
                }
            ]
        },

        // 27. How do you reset form fields in React?
        {
            id: 27,
            question: "How do you reset form fields in React?",
            answer: [
                {
                    type: "text",
                    content: `To reset controlled form fields, **reset the state values** to their initial defaults.`
                },
                {
                    type: "code",
                    content: `function FormReset() {
  const [name, setName] = React.useState('');

  const handleReset = () => setName('');

  return (
    <form>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Keep initial values in constants or state for easy reset.\n- Avoid direct DOM manipulation to reset values."
                }
            ]
        },

        // 28. How do you handle form validation in React?
        {
            id: 28,
            question: "How do you handle form validation in React?",
            answer: [
                {
                    type: "text",
                    content: `Form validation can be handled by **checking state values** and conditionally showing error messages. Libraries like Formik or React Hook Form simplify validation.`
                },
                {
                    type: "code",
                    content: `function FormValidation() {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = () => {
    if (!email.includes('@')) setError('Invalid email');
    else setError('');
  };

  return (
    <div>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Prefer controlled components for validation.\n- Use reusable validation functions.\n- Consider libraries for complex forms."
                }
            ]
        }
    ],
    conditional_rendering: [
        // 29. What is conditional rendering in React?
        {
            id: 29,
            question: "What is conditional rendering in React?",
            answer: [
                {
                    type: "text",
                    content: `Conditional rendering allows you to **render different UI elements based on certain conditions** in React. It works similarly to JavaScript conditions.`
                },
                {
                    type: "code",
                    content: `function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
    </div>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Keep conditions simple and readable.\n- Use helper functions for complex conditional logic.\n- Avoid nested ternaries for maintainability."
                }
            ]
        },

        // 30. How do you use if-else in JSX?
        {
            id: 30,
            question: "How do you use if-else in JSX?",
            answer: [
                {
                    type: "text",
                    content: `You cannot directly use statements like 'if' inside JSX. Instead, use **ternary operators, logical &&, or extract logic to a function**.`
                },
                {
                    type: "code",
                    content: `// Using ternary
function Status({ isOnline }) {
  return <p>{isOnline ? "Online" : "Offline"}</p>;
}

// Using logical &&
function Status2({ isOnline }) {
  return <p>{isOnline && "Online"}</p>;
}

// Using function
function Status3({ isOnline }) {
  const getStatus = () => (isOnline ? "Online" : "Offline");
  return <p>{getStatus()}</p>;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Prefer ternary or logical && for inline JSX.\n- Extract logic into a function if it’s complex."
                }
            ]
        },

        // 31. How do you render lists in React?
        {
            id: 31,
            question: "How do you render lists in React?",
            answer: [
                {
                    type: "text",
                    content: `In React, **arrays of data can be rendered using the map() function**. Each element requires a unique 'key' prop for efficient reconciliation.`
                },
                {
                    type: "code",
                    content: `const fruits = ["Apple", "Banana", "Cherry"];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use a stable unique key (like id) instead of index if possible.\n- Avoid using array index as key for dynamic lists that can change order.\n- Keep map functions simple."
                }
            ]
        },

        // 32. How do you render multiple components conditionally?
        {
            id: 32,
            question: "How do you render multiple components conditionally?",
            answer: [
                {
                    type: "text",
                    content: `You can render multiple components conditionally using **ternary operators, switch-case, or helper functions**.`
                },
                {
                    type: "code",
                    content: `function Page({ page }) {
  switch(page) {
    case "home":
      return <Home />;
    case "about":
      return <About />;
    case "contact":
      return <Contact />;
    default:
      return <NotFound />;
  }
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use switch-case or helper functions for multiple conditions.\n- Keep JSX clean by separating component logic from rendering."
                }
            ]
        },

        // 33. What is the difference between keys and indexes in lists?
        {
            id: 33,
            question: "What is the difference between keys and indexes in React lists?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Aspect", "Key", "Index"],
                        rows: [
                            ["Purpose", "Uniquely identify elements for reconciliation", "Position of element in array"],
                            ["Stability", "Should be stable across renders", "May change if array order changes"],
                            ["Best Use", "Use unique IDs from data", "Use only if list never changes order"]
                        ]
                    }
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Always prefer unique keys over indexes for dynamic lists.\n- Use index only for static, unchanging lists."
                }
            ]
        },

        // 34. How do you render components conditionally using && operator?
        {
            id: 34,
            question: "How do you render components conditionally using && operator?",
            answer: [
                {
                    type: "text",
                    content: `The **logical AND (&&) operator** allows rendering a component only if a condition is true.`
                },
                {
                    type: "code",
                    content: `function Notification({ message }) {
  return (
    <div>
      {message && <p>{message}</p>}
    </div>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use && for simple conditional rendering.\n- Avoid using for conditions that return falsy values like 0, '', false unexpectedly."
                }
            ]
        },

        // 35. How do you render a list of components from API data?
        {
            id: 35,
            question: "How do you render a list of components from API data?",
            answer: [
                {
                    type: "text",
                    content: `Fetch data using useEffect and render it using map(). Always handle loading and error states.`
                },
                {
                    type: "code",
                    content: `function UsersList() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Always provide a unique key.\n- Handle loading and error states gracefully.\n- Keep the render function clean by using helper components."
                }
            ]
        },

        // 36. How do you conditionally apply CSS classes in React?
        {
            id: 36,
            question: "How do you conditionally apply CSS classes in React?",
            answer: [
                {
                    type: "text",
                    content: `CSS classes can be applied conditionally using **ternary operators, template literals, or libraries like classnames**.`
                },
                {
                    type: "code",
                    content: `function Button({ isPrimary }) {
  return (
    <button className={isPrimary ? 'btn btn-primary' : 'btn btn-secondary'}>
      Click Me
    </button>
  );
}

// Using template literals
<button className={\`btn \${isPrimary ? 'btn-primary' : 'btn-secondary'}\`}>Click Me</button>

// Using classnames library
import classNames from 'classnames';
<button className={classNames('btn', { 'btn-primary': isPrimary, 'btn-secondary': !isPrimary })}>Click Me</button>`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Keep conditional classes readable.\n- Use classnames library for complex class combinations.\n- Avoid multiple nested ternaries in JSX."
                }
            ]
        },

        // 37. How do you render fragments in React?
        {
            id: 37,
            question: "How do you render fragments in React?",
            answer: [
                {
                    type: "text",
                    content: `Fragments allow you to **group multiple elements without adding extra nodes to the DOM**.`
                },
                {
                    type: "code",
                    content: `function Table() {
  return (
    <>
      <tr><td>Row 1</td></tr>
      <tr><td>Row 2</td></tr>
    </>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use <>...</> shorthand for simple fragments.\n- Use <React.Fragment key={...}> when mapping lists of fragments."
                }
            ]
        }
    ],
    prop_state: [
        // 38. What are props in React?
        {
            id: 38,
            question: "What are props in React?",
            answer: [
                {
                    type: "text",
                    content: `**Props (properties)** are read-only inputs to a React component, passed from parent to child to configure behavior or display data.`
                },
                {
                    type: "code",
                    content: `function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Usage
<Greeting name="Alice" />`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Keep props immutable inside components.\n- Use propTypes or TypeScript to validate props.\n- Pass only necessary props to avoid unnecessary re-renders."
                }
            ]
        },

        // 39. How do you set default props in React?
        {
            id: 39,
            question: "How do you set default props in React?",
            answer: [
                {
                    type: "text",
                    content: `You can set **default values for props** using defaultProps (class components) or default parameters (functional components).`
                },
                {
                    type: "code",
                    content: `// Functional component
function Button({ text = "Click Me" }) {
  return <button>{text}</button>;
}

// Class component
class ButtonClass extends React.Component {
  render() {
    return <button>{this.props.text}</button>;
  }
}
ButtonClass.defaultProps = {
  text: "Click Me"
};`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Prefer default parameters for functional components.\n- Keep defaults meaningful to avoid undefined behavior."
                }
            ]
        },

        // 40. What is state in React?
        {
            id: 40,
            question: "What is state in React?",
            answer: [
                {
                    type: "text",
                    content: `**State** is an object that stores dynamic data for a component and determines how it renders. Unlike props, state is **mutable** within the component.`
                },
                {
                    type: "code",
                    content: `function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Keep state minimal and specific.\n- Avoid storing derived values; compute them on the fly.\n- Use useState or useReducer for complex state logic."
                }
            ]
        },

        // 41. How do you update state in React?
        {
            id: 41,
            question: "How do you update state in React?",
            answer: [
                {
                    type: "text",
                    content: `Use the **state updater function** returned by useState or setState in class components. Never mutate state directly.`
                },
                {
                    type: "code",
                    content: `// Functional component
const [count, setCount] = React.useState(0);
setCount(count + 1);

// Class component
this.setState({ count: this.state.count + 1 });`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Always use the updater function.\n- For dependent updates, use functional form: setCount(prev => prev + 1).\n- Avoid direct mutation: state.count++ is wrong."
                }
            ]
        },

        // 42. How do props and state differ?
        {
            id: 42,
            question: "How do props and state differ in React?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Aspect", "Props", "State"],
                        rows: [
                            ["Mutability", "Immutable", "Mutable"],
                            ["Purpose", "Pass data from parent to child", "Manage dynamic data inside component"],
                            ["Change", "Cannot be changed inside component", "Can be changed using setState or useState"],
                            ["Usage", "Configuration", "UI behavior and interactivity"]
                        ]
                    }
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use props for external configuration.\n- Use state for internal component data.\n- Avoid storing props in state unnecessarily."
                }
            ]
        },

        // 43. How do you lift state up in React?
        {
            id: 43,
            question: "How do you lift state up in React?",
            answer: [
                {
                    type: "text",
                    content: `**Lifting state up** means moving state to the nearest common ancestor of components that need to share it, and passing it down via props.`
                },
                {
                    type: "code",
                    content: `function Parent() {
  const [value, setValue] = React.useState('');

  return (
    <>
      <Input value={value} onChange={setValue} />
      <Display value={value} />
    </>
  );
}

function Input({ value, onChange }) {
  return <input value={value} onChange={e => onChange(e.target.value)} />;
}

function Display({ value }) {
  return <p>{value}</p>;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Lift state only when necessary.\n- Avoid excessive lifting; consider Context API for deeply nested components."
                }
            ]
        },

        // 44. How do you manage complex state with useReducer?
        {
            id: 44,
            question: "How do you manage complex state with useReducer?",
            answer: [
                {
                    type: "text",
                    content: `For complex state logic or multiple sub-values, **useReducer** provides a Redux-like reducer pattern inside a component.`
                },
                {
                    type: "code",
                    content: `const initialState = { count: 0 };

function reducer(state, action) {
  switch(action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use for related state variables.\n- Keep reducer pure and predictable.\n- Avoid mixing side effects inside reducer."
                }
            ]
        },

        // 45. How do you pass functions as props in React?
        {
            id: 45,
            question: "How do you pass functions as props in React?",
            answer: [
                {
                    type: "text",
                    content: `Functions can be passed as props to **allow child components to update parent state or trigger actions**.`
                },
                {
                    type: "code",
                    content: `function Parent() {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(count + 1);

  return <Child onIncrement={increment} />;
}

function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment</button>;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Avoid inline functions in props for large lists to prevent unnecessary re-renders.\n- Use useCallback when passing functions to optimize performance."
                }
            ]
        },

        // 46. What is prop drilling and how can you avoid it?
        {
            id: 46,
            question: "What is prop drilling and how can you avoid it?",
            answer: [
                {
                    type: "text",
                    content: `**Prop drilling** occurs when you pass props through multiple levels of components unnecessarily. It can be avoided using **Context API** or state management libraries like Redux.`
                },
                {
                    type: "code",
                    content: `// Using Context API
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <DeepComponent />
    </ThemeContext.Provider>
  );
}

function DeepComponent() {
  const theme = React.useContext(ThemeContext);
  return <p>Theme is {theme}</p>;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use Context for global data like themes, user info.\n- Avoid excessive use of Context for frequently changing state."
                }
            ]
        }
    ],
    performance: [
        // 47. What is React memo and when should you use it?
        {
            id: 47,
            question: "What is React.memo and when should you use it?",
            answer: [
                {
                    type: "text",
                    content: `**React.memo** is a higher-order component that **prevents unnecessary re-renders** by memoizing a component’s output unless its props change.`
                },
                {
                    type: "code",
                    content: `const MyComponent = React.memo(function MyComponent({ name }) {
  console.log('Rendering', name);
  return <p>{name}</p>;
});

// Usage
<MyComponent name="Alice" />`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use React.memo for functional components with expensive renders.\n- Avoid overusing; shallow prop comparison might not help for large complex objects.\n- Combine with useCallback for function props."
                }
            ]
        },

        // 48. How does useCallback improve performance in React?
        {
            id: 48,
            question: "How does useCallback improve performance in React?",
            answer: [
                {
                    type: "text",
                    content: `**useCallback** memoizes a function so that its reference **does not change on every render**, preventing unnecessary re-renders of child components that depend on it.`
                },
                {
                    type: "code",
                    content: `const Parent = () => {
  const [count, setCount] = React.useState(0);

  const increment = React.useCallback(() => setCount(c => c + 1), []);

  return <Child onIncrement={increment} />;
};

const Child = React.memo(({ onIncrement }) => {
  console.log("Child rendered");
  return <button onClick={onIncrement}>Increment</button>;
});`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use useCallback when passing functions to memoized components.\n- Avoid using it unnecessarily, as memoization itself has a small cost.\n- Combine with React.memo for maximum performance benefit."
                }
            ]
        },

        // 49. What is useMemo and when should you use it?
        {
            id: 49,
            question: "What is useMemo and when should you use it?",
            answer: [
                {
                    type: "text",
                    content: `**useMemo** memoizes the result of a function, preventing expensive calculations from running on every render unless dependencies change.`
                },
                {
                    type: "code",
                    content: `const numbers = [1, 2, 3, 4, 5];

const sum = React.useMemo(() => {
  console.log("Calculating sum");
  return numbers.reduce((a, b) => a + b, 0);
}, [numbers]);

console.log(sum);`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use for expensive calculations.\n- Avoid using for trivial computations.\n- Keep dependencies accurate to prevent stale results."
                }
            ]
        },

        // 50. How do you prevent unnecessary re-renders in React?
        {
            id: 50,
            question: "How do you prevent unnecessary re-renders in React?",
            answer: [
                {
                    type: "list",
                    content: [
                        "Use React.memo for functional components.",
                        "Use useCallback and useMemo for props and computed values.",
                        "Avoid inline objects or functions as props unless memoized.",
                        "Split components to isolate dynamic and static parts.",
                        "Use key props correctly in lists."
                    ]
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Profile with React DevTools to identify re-renders.\n- Optimize only bottlenecks, not everything.\n- Avoid premature optimization."
                }
            ]
        },

        // 51. What is code-splitting in React?
        {
            id: 51,
            question: "What is code-splitting in React?",
            answer: [
                {
                    type: "text",
                    content: `**Code-splitting** is breaking your app into smaller bundles that are loaded on demand, improving initial load time.`
                },
                {
                    type: "code",
                    content: `import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use lazy loading for large components or routes.\n- Always provide a fallback UI.\n- Combine with React Router for route-based code-splitting."
                }
            ]
        },

        // 52. What are React Fragments and why are they used?
        {
            id: 52,
            question: "What are React Fragments and why are they used?",
            answer: [
                {
                    type: "text",
                    content: `**React Fragments** let you group multiple elements without adding extra nodes to the DOM, reducing unnecessary wrappers.`
                },
                {
                    type: "code",
                    content: `function Table() {
  return (
    <>
      <tr><td>Row 1</td></tr>
      <tr><td>Row 2</td></tr>
    </>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use <>...</> shorthand for simple fragments.\n- Use <React.Fragment key={...}> when mapping lists of fragments.\n- Helps reduce DOM clutter."
                }
            ]
        },

        // 53. How do you optimize large lists in React?
        {
            id: 53,
            question: "How do you optimize large lists in React?",
            answer: [
                {
                    type: "text",
                    content: `Rendering large lists can affect performance. Use techniques like **virtualization** to render only visible items.`
                },
                {
                    type: "code",
                    content: `import { FixedSizeList as List } from 'react-window';

function Row({ index, style }) {
  return <div style={style}>Row {index}</div>;
}

function App() {
  return (
    <List height={150} itemCount={1000} itemSize={35} width={300}>
      {Row}
    </List>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use libraries like react-window or react-virtualized.\n- Avoid rendering all DOM elements at once.\n- Combine with memoization for further optimization."
                }
            ]
        },

        // 54. What are controlled and uncontrolled components?
        {
            id: 54,
            question: "What are controlled and uncontrolled components?",
            answer: [
                {
                    type: "text",
                    content: `**Controlled components**: Form inputs whose value is managed by React state.  
**Uncontrolled components**: Form inputs that manage their own state using refs.`
                },
                {
                    type: "code",
                    content: `// Controlled
function ControlledInput() {
  const [value, setValue] = React.useState('');
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}

// Uncontrolled
function UncontrolledInput() {
  const inputRef = React.useRef();
  const handleSubmit = () => alert(inputRef.current.value);
  return <input ref={inputRef} />;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Prefer controlled components for form validation and state sync.\n- Use uncontrolled components for simple, uncontrolled inputs.\n- Avoid mixing both approaches in a single form."
                }
            ]
        },

        // 55. What are best practices for performance optimization in React?
        {
            id: 55,
            question: "What are best practices for performance optimization in React?",
            answer: [
                {
                    type: "list",
                    content: [
                        "Use React.memo for functional components.",
                        "Use useCallback and useMemo wisely.",
                        "Avoid unnecessary re-renders by splitting components.",
                        "Use lazy loading and code-splitting.",
                        "Optimize large lists with virtualization.",
                        "Keep component hierarchy shallow where possible.",
                        "Avoid inline object/array props unless memoized."
                    ]
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Profile your app with React DevTools.\n- Optimize only performance bottlenecks.\n- Always measure impact before adding optimization."
                }
            ]
        },

        // 83. What is React.memo and when should it be used?
        {
            id: 83,
            question: "What is React.memo and when should it be used?",
            answer: [
                {
                    type: "text",
                    content: `**React.memo** is a higher-order component that memoizes a functional component. It prevents unnecessary re-renders when props have not changed, improving performance.`
                },
                {
                    type: "code",
                    content: `import React from 'react';

const Child = React.memo(({ count }) => {
  console.log("Child rendered");
  return <p>{count}</p>;
});

function Parent() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("");

  return (
    <>
      <Child count={count} />
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use React.memo for pure functional components that receive props.\n- Avoid overusing; memoization has some overhead.\n- Combine with useCallback for functions passed as props."
                }
            ]
        },

        // 84. What is the use of useCallback and when should it be used?
        {
            id: 84,
            question: "What is the use of useCallback and when should it be used?",
            answer: [
                {
                    type: "text",
                    content: `**useCallback** memoizes a function, returning the same reference unless dependencies change. It helps prevent unnecessary re-renders of child components.`
                },
                {
                    type: "code",
                    content: `import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <Child onClick={handleClick} />;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use for functions passed to memoized components.\n- Avoid unnecessary use; it adds complexity.\n- Always include dependencies correctly to avoid stale closures."
                }
            ]
        },

        // 85. What is the use of useMemo and when should it be used?
        {
            id: 85,
            question: "What is the use of useMemo and when should it be used?",
            answer: [
                {
                    type: "text",
                    content: `**useMemo** memoizes the result of a computation. It prevents expensive calculations from running on every render unless dependencies change.`
                },
                {
                    type: "code",
                    content: `import React, { useState, useMemo } from "react";

function ExpensiveComponent({ num }) {
  const compute = useMemo(() => {
    console.log("Computing...");
    return num * 2;
  }, [num]);

  return <p>Result: {compute}</p>;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use for expensive calculations.\n- Avoid unnecessary use for cheap computations.\n- Keep dependencies accurate to prevent stale values."
                }
            ]
        },

        // 86. How to prevent unnecessary re-renders in React?
        {
            id: 86,
            question: "How to prevent unnecessary re-renders in React?",
            answer: [
                {
                    type: "list",
                    content: [
                        "Use React.memo for functional components.",
                        "Use useCallback for functions passed as props.",
                        "Use useMemo for expensive computations.",
                        "Split components to reduce prop changes affecting large trees.",
                        "Avoid creating new objects/arrays in render unless necessary."
                    ]
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Profile components using React DevTools.\n- Keep component trees shallow.\n- Avoid anonymous functions in JSX for repeated renders."
                }
            ]
        },

        // 87. What is lazy loading in React and why is it important?
        {
            id: 87,
            question: "What is lazy loading in React and why is it important?",
            answer: [
                {
                    type: "text",
                    content: `**Lazy loading** allows components to load only when needed, reducing initial bundle size and improving performance. React provides React.lazy and Suspense for lazy loading components.`
                },
                {
                    type: "code",
                    content: `import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use lazy loading for routes or heavy components.\n- Always provide a fallback UI with Suspense.\n- Combine with code splitting tools like Webpack for optimal performance."
                }
            ]
        },

        // 88. What is code splitting in React?
        {
            id: 88,
            question: "What is code splitting in React?",
            answer: [
                {
                    type: "text",
                    content: `**Code splitting** splits the app into smaller bundles that can be loaded on demand. It reduces initial load time and improves performance.`
                },
                {
                    type: "code",
                    content: `// Dynamic import example
import("./HeavyComponent").then(module => {
  const HeavyComponent = module.default;
  // render component
});`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Combine with React.lazy and Suspense.\n- Split by route or feature.\n- Avoid over-splitting; balance network requests and bundle size."
                }
            ]
        },

        // 89. What are some common React performance bottlenecks?
        {
            id: 89,
            question: "What are some common React performance bottlenecks?",
            answer: [
                {
                    type: "list",
                    content: [
                        "Unnecessary re-renders due to changing props or state.",
                        "Heavy computations inside render.",
                        "Large component trees causing frequent updates.",
                        "Rendering large lists without virtualization.",
                        "Inline functions or objects created in render repeatedly."
                    ]
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use memoization techniques.\n- Virtualize large lists with react-window or react-virtualized.\n- Avoid inline object/array creation in render."
                }
            ]
        },

        // 90. How to optimize React applications for production?
        {
            id: 90,
            question: "How to optimize React applications for production?",
            answer: [
                {
                    type: "list",
                    content: [
                        "Use production build (`npm run build`).",
                        "Enable code splitting and lazy loading.",
                        "Use memoization (React.memo, useCallback, useMemo).",
                        "Optimize images and assets.",
                        "Remove console.log and debug statements.",
                        "Use virtualization for large lists.",
                        "Minimize unnecessary re-renders."
                    ]
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Profile app using React DevTools.\n- Analyze bundle size with tools like Webpack Bundle Analyzer.\n- Implement caching strategies for network requests."
                }
            ]
        },

        // 91. What are controlled and uncontrolled components in React?
        {
            id: 91,
            question: "What are controlled and uncontrolled components in React?",
            answer: [
                {
                    type: "text",
                    content: `**Controlled components** have form data controlled by React state.  
**Uncontrolled components** rely on the DOM to manage form data, accessed via refs.`
                },
                {
                    type: "code",
                    content: `// Controlled
function ControlledInput() {
  const [value, setValue] = React.useState("");
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}

// Uncontrolled
function UncontrolledInput() {
  const inputRef = React.useRef();
  const handleSubmit = () => console.log(inputRef.current.value);
  return <input ref={inputRef} />;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use controlled components for predictable behavior and validation.\n- Use uncontrolled components for simple forms or third-party integrations."
                }
            ]
        },
    ],
    advanced: [
        // 56. What is the purpose of useEffect in React?
        {
            id: 56,
            question: "What is the purpose of useEffect in React?",
            answer: [
                {
                    type: "text",
                    content: `**useEffect** allows you to perform side effects in functional components, such as fetching data, subscribing to events, or updating the DOM. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.`
                },
                {
                    type: "code",
                    content: `import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCount(c => c + 1), 1000);
    return () => clearInterval(interval); // cleanup
  }, []); // empty dependency array: runs once on mount

  return <p>Count: {count}</p>;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Always clean up subscriptions or timers inside the return function.\n- Use dependency arrays carefully to avoid unnecessary re-renders or infinite loops.\n- Avoid putting non-serializable objects (like functions) directly in dependencies."
                }
            ]
        },

        // 57. What is useRef and how is it used?
        {
            id: 57,
            question: "What is useRef and how is it used?",
            answer: [
                {
                    type: "text",
                    content: `**useRef** is a React hook that provides a mutable object which persists across renders. It is commonly used for accessing DOM elements or storing mutable values without triggering re-renders.`
                },
                {
                    type: "code",
                    content: `import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef();

  const focus = () => inputRef.current.focus();

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focus}>Focus Input</button>
    </>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use useRef for DOM manipulation or storing mutable values.\n- Avoid using useRef as a replacement for state.\n- Do not modify refs in a way that bypasses React rendering unless necessary."
                }
            ]
        },

        // 58. What is useReducer and when should you use it?
        {
            id: 58,
            question: "What is useReducer and when should you use it?",
            answer: [
                {
                    type: "text",
                    content: `**useReducer** is a hook that manages state using a reducer function, similar to Redux. It is suitable for complex state logic or when multiple state variables are related.`
                },
                {
                    type: "code",
                    content: `const initialState = { count: 0 };

function reducer(state, action) {
  switch(action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Keep reducers pure and predictable.\n- Avoid side effects inside reducers; handle them in useEffect.\n- Use useReducer for complex state instead of multiple useState calls."
                }
            ]
        },

        // 59. What is useContext and how is it used?
        {
            id: 59,
            question: "What is useContext and how is it used?",
            answer: [
                {
                    type: "text",
                    content: `**useContext** is a hook that lets you access the value of a React context directly in a functional component, avoiding prop drilling.`
                },
                {
                    type: "code",
                    content: `const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  const theme = React.useContext(ThemeContext);
  return <p>Theme: {theme}</p>;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use context for global data (themes, auth, language).\n- Avoid using context for frequently changing state (can cause re-renders).\n- Combine with memoization to optimize performance."
                }
            ]
        },

        // 60. What are custom hooks and why use them?
        {
            id: 60,
            question: "What are custom hooks and why use them?",
            answer: [
                {
                    type: "text",
                    content: `**Custom hooks** are functions starting with 'use' that allow you to reuse stateful logic across multiple components, keeping code DRY and modular.`
                },
                {
                    type: "code",
                    content: `function useCounter(initialValue = 0) {
  const [count, setCount] = React.useState(initialValue);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  return { count, increment, decrement };
}

// Usage
function Counter() {
  const { count, increment, decrement } = useCounter(10);
  return (
    <>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Prefix custom hooks with 'use'.\n- Keep them focused on a single concern.\n- Use existing hooks (useState, useEffect, etc.) inside custom hooks."
                }
            ]
        },

        // 61. What is useLayoutEffect and how does it differ from useEffect?
        {
            id: 61,
            question: "What is useLayoutEffect and how does it differ from useEffect?",
            answer: [
                {
                    type: "text",
                    content: `**useLayoutEffect** runs synchronously after all DOM mutations but before the browser paints, unlike useEffect which runs after paint. It's useful for reading layout or triggering reflows.`
                },
                {
                    type: "code",
                    content: `import React, { useRef, useLayoutEffect } from "react";

function LayoutExample() {
  const divRef = useRef();

  useLayoutEffect(() => {
    console.log(divRef.current.getBoundingClientRect());
  }, []);

  return <div ref={divRef}>Hello</div>;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use useLayoutEffect only when you need to measure or mutate DOM before paint.\n- Prefer useEffect for most side effects to avoid blocking rendering."
                }
            ]
        },

        // 62. What is the difference between controlled and uncontrolled hooks usage?
        {
            id: 62,
            question: "What is the difference between controlled and uncontrolled hooks usage?",
            answer: [
                {
                    type: "text",
                    content: `**Controlled hooks**: Component state fully controls input value (useState).  
**Uncontrolled hooks**: Input value is handled by DOM and accessed via useRef.`
                },
                {
                    type: "code",
                    content: `// Controlled
function Controlled() {
  const [value, setValue] = React.useState('');
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}

// Uncontrolled
function Uncontrolled() {
  const inputRef = React.useRef();
  const handleClick = () => console.log(inputRef.current.value);
  return <input ref={inputRef} />;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use controlled components/hooks for form validation and predictable behavior.\n- Use uncontrolled when you need quick uncontrolled access without state management."
                }
            ]
        },

        // 63. What are the rules of hooks in React?
        {
            id: 63,
            question: "What are the rules of hooks in React?",
            answer: [
                {
                    type: "list",
                    content: [
                        "Only call hooks at the top level of a component or custom hook.",
                        "Do not call hooks inside loops, conditions, or nested functions.",
                        "Only call hooks from React functional components or custom hooks."
                    ]
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Follow rules strictly; violations can break state management.\n- Use ESLint plugin 'react-hooks' to enforce rules automatically."
                }
            ]
        },

        // 64. How do you handle side effects in React with hooks?
        {
            id: 64,
            question: "How do you handle side effects in React with hooks?",
            answer: [
                {
                    type: "text",
                    content: `Side effects like API calls, subscriptions, or DOM manipulation should be handled using **useEffect** or **useLayoutEffect**.`
                },
                {
                    type: "code",
                    content: `function DataFetcher() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Clean up subscriptions and timers.\n- Keep useEffect dependencies accurate.\n- Avoid placing async directly in useEffect callback; define inside and call."
                }
            ]
        }
    ],
    router_navigation: [
        // 65. What is React Router and why is it used?
        {
            id: 65,
            question: "What is React Router and why is it used?",
            answer: [
                {
                    type: "text",
                    content: `**React Router** is a library for handling routing in React applications. It enables navigation between different components without reloading the page, creating a single-page application (SPA) experience.`
                },
                {
                    type: "code",
                    content: `import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use BrowserRouter for web apps.\n- Keep routes declarative and maintainable.\n- Use Link or NavLink instead of anchor tags for internal navigation."
                }
            ]
        },

        // 66. What are the different types of routing in React Router?
        {
            id: 66,
            question: "What are the different types of routing in React Router?",
            answer: [
                {
                    type: "list",
                    content: [
                        "**BrowserRouter**: Uses HTML5 history API, clean URLs, no hash.",
                        "**HashRouter**: Uses hash in URL (`#`) for routing, useful for static sites.",
                        "**MemoryRouter**: Keeps routes in memory, useful for testing or non-browser environments.",
                        "**StaticRouter**: Server-side rendering router for React SSR apps."
                    ]
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use BrowserRouter for standard web apps.\n- Use HashRouter for environments without server configuration.\n- Combine MemoryRouter with testing frameworks."
                }
            ]
        },

        // 67. How do you pass parameters in React Router?
        {
            id: 67,
            question: "How do you pass parameters in React Router?",
            answer: [
                {
                    type: "text",
                    content: `Parameters can be passed via the URL path and accessed using the useParams hook in React Router v6.`
                },
                {
                    type: "code",
                    content: `import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  return <p>User ID: {id}</p>;
}

// Route
<Route path="/user/:id" element={<User />} />`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Always validate route parameters.\n- Use descriptive names in paths.\n- Avoid overusing dynamic parameters when not necessary."
                }
            ]
        },

        // 68. What is the difference between Link and NavLink?
        {
            id: 68,
            question: "What is the difference between Link and NavLink?",
            answer: [
                {
                    type: "text",
                    content: `**Link**: Simple navigation between routes.  
**NavLink**: Special Link that adds styling attributes (like active class) when the route matches the current URL.`
                },
                {
                    type: "code",
                    content: `import { NavLink } from 'react-router-dom';

<NavLink 
  to="/about" 
  style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
>
  About
</NavLink>`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use NavLink for navigation menus.\n- Use style or className callbacks to indicate active route.\n- Use Link for simple navigation where active styling is not needed."
                }
            ]
        },

        // 69. How do you implement nested routes in React Router?
        {
            id: 69,
            question: "How do you implement nested routes in React Router?",
            answer: [
                {
                    type: "text",
                    content: `Nested routes allow rendering child components within a parent route using the Outlet component.`
                },
                {
                    type: "code",
                    content: `import { Routes, Route, Outlet, Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="stats">Stats</Link>
        <Link to="reports">Reports</Link>
      </nav>
      <Outlet />
    </div>
  );
}

<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="stats" element={<Stats />} />
    <Route path="reports" element={<Reports />} />
  </Route>
</Routes>`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use Outlet for rendering child routes.\n- Keep nested routes shallow when possible.\n- Structure route files for readability and maintainability."
                }
            ]
        },

        // 70. How do you handle 404 pages in React Router?
        {
            id: 70,
            question: "How do you handle 404 pages in React Router?",
            answer: [
                {
                    type: "text",
                    content: `React Router allows defining a wildcard route using path="*" to catch unmatched routes and render a 404 component.`
                },
                {
                    type: "code",
                    content: `<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Place the wildcard route last.\n- Create a user-friendly 404 component.\n- Optionally provide navigation back to home."
                }
            ]
        },

        // 71. How do you programmatically navigate in React Router?
        {
            id: 71,
            question: "How do you programmatically navigate in React Router?",
            answer: [
                {
                    type: "text",
                    content: `Use the useNavigate hook to navigate programmatically in response to an event, like a button click.`
                },
                {
                    type: "code",
                    content: `import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const goToAbout = () => navigate('/about');

  return <button onClick={goToAbout}>Go to About</button>;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use useNavigate for navigation inside components.\n- Avoid window.location for internal navigation.\n- Use replace option to avoid pushing to history stack if needed."
                }
            ]
        },

        // 72. How do you implement route guards in React Router?
        {
            id: 72,
            question: "How do you implement route guards in React Router?",
            answer: [
                {
                    type: "text",
                    content: `Route guards protect routes based on conditions like authentication or roles. Wrap routes in a guard component that checks conditions and redirects if necessary.`
                },
                {
                    type: "code",
                    content: `import { Navigate } from 'react-router-dom';

function PrivateRoute({ isAuth, children }) {
  return isAuth ? children : <Navigate to="/login" replace />;
}

// Usage
<Route path="/dashboard" element={<PrivateRoute isAuth={loggedIn}><Dashboard /></PrivateRoute>} />`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use PrivateRoute or wrapper components.\n- Keep guard logic centralized.\n- Avoid putting guard checks inside child components."
                }
            ]
        },

        // 73. How do you preserve state during navigation in React Router?
        {
            id: 73,
            question: "How do you preserve state during navigation in React Router?",
            answer: [
                {
                    type: "text",
                    content: `You can pass state with the navigate function or Link component, and access it via the useLocation hook in the target component.`
                },
                {
                    type: "code",
                    content: `import { useNavigate, useLocation } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const goToAbout = () => navigate('/about', { state: { fromHome: true } });
  return <button onClick={goToAbout}>Go</button>;
}

function About() {
  const location = useLocation();
  console.log(location.state.fromHome); // true
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use state for temporary navigation data.\n- Do not overuse for large datasets; use global state if needed.\n- Always validate state in the target component."
                }
            ]
        }
    ],
    redux: [
        // 74. What is state in React and why is it important?
        {
            id: 74,
            question: "What is state in React and why is it important?",
            answer: [
                {
                    type: "text",
                    content: `**State** in React is an object that holds dynamic data for a component. It determines how the component renders and behaves. State changes trigger re-renders, allowing the UI to update automatically.`
                },
                {
                    type: "code",
                    content: `import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Keep state minimal and focused.\n- Avoid duplicating derived data in state.\n- Use functional updates when new state depends on previous state."
                }
            ]
        },

        // 75. What is the difference between local state and global state in React?
        {
            id: 75,
            question: "What is the difference between local state and global state in React?",
            answer: [
                {
                    type: "text",
                    content: `**Local state** is managed within a single component (useState, useReducer).  
**Global state** is shared across multiple components (Context, Redux, Zustand).`
                },
                {
                    type: "code",
                    content: `// Local state example
const [count, setCount] = useState(0);

// Global state example (using context)
const ThemeContext = React.createContext('light');`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use local state for component-specific data.\n- Use global state for shared data (user info, theme, auth).\n- Avoid overusing global state to prevent unnecessary complexity."
                }
            ]
        },

        // 76. What is Redux and why is it used?
        {
            id: 76,
            question: "What is Redux and why is it used?",
            answer: [
                {
                    type: "text",
                    content: `**Redux** is a predictable state container for JavaScript apps. It centralizes application state in a single store, making it easier to manage, debug, and test state changes.`
                },
                {
                    type: "code",
                    content: `import { createStore } from 'redux';

// Reducer
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + 1 };
    default: return state;
  }
}

const store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));
store.dispatch({ type: 'INCREMENT' });`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Keep reducers pure.\n- Use action creators for consistency.\n- Keep state normalized for complex apps."
                }
            ]
        },

        // 77. What are the key principles of Redux?
        {
            id: 77,
            question: "What are the key principles of Redux?",
            answer: [
                {
                    type: "list",
                    content: [
                        "Single source of truth: All state is stored in one store.",
                        "State is read-only: Changes happen via actions.",
                        "Changes are made with pure functions called reducers."
                    ]
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Follow these principles to ensure predictable state management.\n- Avoid mutating state directly; always return new objects."
                }
            ]
        },

        // 78. What is React Context and when should you use it?
        {
            id: 78,
            question: "What is React Context and when should you use it?",
            answer: [
                {
                    type: "text",
                    content: `**React Context** allows passing data through the component tree without prop drilling. It’s useful for global data like themes, authentication, and language preferences.`
                },
                {
                    type: "code",
                    content: `const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  const theme = React.useContext(ThemeContext);
  return <p>Theme: {theme}</p>;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use context for static or rarely changing data.\n- Avoid placing frequently changing state in context (can trigger many re-renders).\n- Combine context with memoization for performance optimization."
                }
            ]
        },

        // 79. What is the difference between Redux and Context API?
        {
            id: 79,
            question: "What is the difference between Redux and Context API?",
            answer: [
                {
                    type: "text",
                    content: `**Redux** is a full-fledged state management library with middleware, devtools, and strict architecture.  
**Context API** is built-in React feature for passing data without prop drilling.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Feature", "Redux", "Context API"],
                        rows: [
                            ["State centralization", "Yes, single store", "Optional, can be multiple contexts"],
                            ["Middleware support", "Yes (e.g., thunk, saga)", "No built-in middleware"],
                            ["DevTools", "Yes, advanced", "Limited"],
                            ["Boilerplate", "More", "Minimal"],
                            ["Best for", "Large-scale apps", "Small to medium apps"]
                        ]
                    }
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use Redux for complex apps with global state and side effects.\n- Use Context API for light global state without complex logic."
                }
            ]
        },

        // 80. What are middleware in Redux and why are they used?
        {
            id: 80,
            question: "What are middleware in Redux and why are they used?",
            answer: [
                {
                    type: "text",
                    content: `**Middleware** in Redux intercepts actions before they reach the reducer. They are used for logging, handling async operations, analytics, and more.`
                },
                {
                    type: "code",
                    content: `import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use middleware for side effects.\n- Keep reducers pure; don’t perform async logic there.\n- Common middleware: redux-thunk, redux-saga, logger."
                }
            ]
        },

        // 81. What are selectors in Redux?
        {
            id: 81,
            question: "What are selectors in Redux?",
            answer: [
                {
                    type: "text",
                    content: `**Selectors** are functions that extract or compute derived data from the Redux store. They improve code readability and maintainability.`
                },
                {
                    type: "code",
                    content: `// Simple selector
const selectCount = state => state.count;

// Usage
const count = useSelector(selectCount);`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use memoized selectors (reselect) for expensive computations.\n- Keep selectors focused and reusable.\n- Avoid querying store directly in multiple components."
                }
            ]
        },

        // 82. What is Zustand and how does it differ from Redux?
        {
            id: 82,
            question: "What is Zustand and how does it differ from Redux?",
            answer: [
                {
                    type: "text",
                    content: `**Zustand** is a lightweight state management library for React. Unlike Redux, it doesn’t require actions, reducers, or boilerplate.`
                },
                {
                    type: "code",
                    content: `import create from 'zustand';

const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 }))
}));

function Counter() {
  const { count, increment } = useStore();
  return <button onClick={increment}>{count}</button>;
}`,
                    language: "javascript"
                },
                {
                    type: "text",
                    content: "**Best Practices:**\n- Use Zustand for simple global state needs.\n- Avoid overcomplicating Zustand stores with excessive logic.\n- Combine with React DevTools for easier debugging."
                }
            ]
        }
    ],
};