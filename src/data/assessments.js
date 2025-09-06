export const assessments = [
    {
        "id": "cmdx9wftu0001rjicycba8qvo",
        "userId": "00952764-0804-44a6-9315-f8613cf9d89a",
        "quizScore": 70,
        "questions": [
            {
                "answer": "`let` declares a mutable variable, while `const` declares an immutable variable.",
                "question": "What is the primary difference between `let` and `const` in JavaScript?",
                "isCorrect": true,
                "userAnswer": "`let` declares a mutable variable, while `const` declares an immutable variable.",
                "explanation": "`let` allows reassignment, while `const` does not. Both are block-scoped."
            },
            {
                "answer": "myFunc = function() { ... };",
                "question": "Which of the following is NOT a valid way to define a function in JavaScript?",
                "isCorrect": true,
                "userAnswer": "myFunc = function() { ... };",
                "explanation": "This attempts to assign a function to an undeclared variable, which can lead to issues with hoisting and scope.  It should be `let myFunc = function() { ... };` or `var myFunc = function() { ... };`"
            },
            {
                "answer": "object",
                "question": "What will the following code output?  `console.log(typeof null);`",
                "isCorrect": true,
                "userAnswer": "object",
                "explanation": "This is a known JavaScript quirk.  `typeof null` returns 'object', although null is not an object."
            },
            {
                "answer": "Combines two arrays into a new array.",
                "question": "What does the spread syntax (...) do in JavaScript?",
                "isCorrect": false,
                "userAnswer": "Copies an array or object by value.",
                "explanation": "The spread syntax can also copy objects shallowly, but its primary use is to spread elements of an iterable into another one.  It also allows for creating new instances of objects by spreading properties."
            },
            {
                "answer": ":",
                "question": "In TypeScript, what keyword is used to define the type of a variable?",
                "isCorrect": true,
                "userAnswer": ":",
                "explanation": "The colon (:) is used to specify the type after the variable name.  e.g., `let myVar: string = 'hello';`"
            },
            {
                "answer": "To specify the shape of an object.",
                "question": "What is the purpose of an interface in TypeScript?",
                "isCorrect": false,
                "userAnswer": "To create a new data type.",
                "explanation": "Interfaces define contracts for the shape and types of objects, without implementing any logic."
            },
            {
                "answer": "Makes a function return a promise.",
                "question": "What does the `async` keyword do in JavaScript?",
                "isCorrect": false,
                "userAnswer": "Makes a function synchronous.",
                "explanation": "Async functions always implicitly return a promise."
            },
            {
                "answer": "`==` performs loose equality, while `===` performs strict equality.",
                "question": "What is the difference between `==` and `===` in JavaScript?",
                "isCorrect": true,
                "userAnswer": "`==` performs loose equality, while `===` performs strict equality.",
                "explanation": "Loose equality (`==`) performs type coercion, while strict equality (`===`) does not."
            },
            {
                "answer": "A type that can represent any type.",
                "question": "In TypeScript, what is a generic type?",
                "isCorrect": true,
                "userAnswer": "A type that can represent any type.",
                "explanation": "Generics allow you to write reusable code that can work with different types without sacrificing type safety."
            },
            {
                "answer": "To refer to the current object",
                "question": "What is the purpose of `this` keyword in JavaScript?",
                "isCorrect": true,
                "userAnswer": "To refer to the current object",
                "explanation": "The value of `this` depends on how the function is called (e.g., method invocation, function invocation, constructor invocation)."
            }
        ],
        "category": "Technical",
        "improvementTip": "Focus on mastering fundamental JavaScript array methods and the core concepts of TypeScript interfaces and asynchronous programming with promises.  Reviewing these topics will significantly improve your understanding.",
        "createdAt": "2025-08-04T15:36:34.336Z",
        "updatedAt": "2025-08-04T15:36:34.336Z"
    },
    {
        "id": "cmdxahu3r0005rjicppocmzoa",
        "userId": "00952764-0804-44a6-9315-f8613cf9d89a",
        "quizScore": 70,
        "questions": [
            {
                "answer": "`var` is function-scoped, `let` and `const` are block-scoped.",
                "question": "What is the primary difference between `var`, `let`, and `const` in JavaScript?",
                "isCorrect": true,
                "userAnswer": "`var` is function-scoped, `let` and `const` are block-scoped.",
                "explanation": "`var` has function scope or global scope, while `let` and `const` are block-scoped, meaning their scope is limited to the nearest enclosing block (e.g., within an `if` statement or loop)."
            },
            {
                "answer": "function = () => { ... }",
                "question": "Which of the following is NOT a valid way to define a function in JavaScript?",
                "isCorrect": true,
                "userAnswer": "function = () => { ... }",
                "explanation": "This attempts to assign a function expression to the `function` keyword itself, which is invalid.  The other options are all valid function declarations or expressions."
            },
            {
                "answer": "Its value depends on how the function is called.",
                "question": "What does the `this` keyword refer to in JavaScript?",
                "isCorrect": true,
                "userAnswer": "Its value depends on how the function is called.",
                "explanation": "The value of `this` depends on the context in which the function is invoked (e.g., method invocation, function call, etc.)."
            },
            {
                "answer": "To define the structure of objects.",
                "question": "What is the purpose of TypeScript interfaces?",
                "isCorrect": true,
                "userAnswer": "To define the structure of objects.",
                "explanation": "TypeScript interfaces define the shape of an object, specifying the types of its properties. This helps with code maintainability and type safety."
            },
            {
                "answer": "`interface GenericType<T> { ... }`",
                "question": "How do you declare a generic type in TypeScript?",
                "isCorrect": false,
                "userAnswer": "`let GenericType: T`",
                "explanation": "Using angle brackets `<T>` within an interface or type definition introduces a generic type parameter `T`."
            },
            {
                "answer": "They are used for simplifying asynchronous code.",
                "question": "What is the purpose of the `async` and `await` keywords in JavaScript?",
                "isCorrect": false,
                "userAnswer": "They are used for synchronous operations.",
                "explanation": "`async` and `await` provide a cleaner syntax for handling asynchronous operations using Promises."
            },
            {
                "answer": "2",
                "question": "What is the output of `Promise.resolve(1).then(x => x + 1).then(console.log);`?",
                "isCorrect": false,
                "userAnswer": "Promise { 2 }",
                "explanation": "The first `.then` adds 1 to the resolved value (1), resulting in 2. The second `.then` logs the result to the console."
            },
            {
                "answer": "Makes a variable immutable.",
                "question": "In TypeScript, what does the `readonly` keyword do?",
                "isCorrect": true,
                "userAnswer": "Makes a variable immutable.",
                "explanation": "`readonly` prevents modification of a property after it's initialized."
            },
            {
                "answer": "`==` performs loose equality, `===` performs strict equality.",
                "question": "What is the primary difference between `==` and `===` in JavaScript?",
                "isCorrect": true,
                "userAnswer": "`==` performs loose equality, `===` performs strict equality.",
                "explanation": "`==` performs type coercion before comparison, while `===` performs a strict comparison without type coercion."
            },
            {
                "answer": "To narrow down the type of a variable.",
                "question": "What is the purpose of a TypeScript type guard?",
                "isCorrect": true,
                "userAnswer": "To narrow down the type of a variable.",
                "explanation": "Type guards allow you to refine the type of a variable based on a condition, improving type safety."
            }
        ],
        "category": "Technical",
        "improvementTip": "Focus on solidifying your understanding of TypeScript generics and JavaScript's asynchronous programming model, including promises and their behavior in chained `.then()` calls.  Practice coding examples to build your confidence and familiarity.",
        "createdAt": "2025-08-04T15:53:12.616Z",
        "updatedAt": "2025-08-04T15:53:12.616Z"
    },
    {
        "id": "cmegz3a2m0001rj2k53yldc20",
        "userId": "00952764-0804-44a6-9315-f8613cf9d89a",
        "quizScore": 80,
        "questions": [
            {
                "answer": "To perform side effects like data fetching or DOM manipulation",
                "question": "What is the primary purpose of the `useEffect` hook in React?",
                "isCorrect": true,
                "userAnswer": "To perform side effects like data fetching or DOM manipulation",
                "explanation": "`useEffect` allows components to interact with the outside world, such as fetching data, setting timers, or manually manipulating the DOM."
            },
            {
                "answer": "Multi-threading support (inherently)",
                "question": "Which of the following is NOT a core feature of Node.js?",
                "isCorrect": true,
                "userAnswer": "Multi-threading support (inherently)",
                "explanation": "Node.js uses a single-threaded, event-driven architecture. While it can utilize multiple cores through worker threads, it's not inherently multi-threaded."
            },
            {
                "answer": "It helps React identify and update elements efficiently",
                "question": "In React, what does the `key` prop do in an array of components?",
                "isCorrect": true,
                "userAnswer": "It helps React identify and update elements efficiently",
                "explanation": "The `key` prop provides React with a stable identifier for each item in an array, enabling it to efficiently update the UI when changes occur."
            },
            {
                "answer": "Faster initial load times via server-side rendering (SSR)",
                "question": "What is the primary benefit of using Next.js over a standard React application?",
                "isCorrect": true,
                "userAnswer": "Faster initial load times via server-side rendering (SSR)",
                "explanation": "Next.js offers SSR, which renders the initial HTML on the server, resulting in faster load times and better SEO."
            },
            {
                "answer": "POST",
                "question": "Which HTTP method is typically used to submit data to a server in a RESTful API?",
                "isCorrect": true,
                "userAnswer": "POST",
                "explanation": "POST is used to create or submit new data to the server."
            },
            {
                "answer": "Asynchronous code execution with cleaner syntax",
                "question": "In JavaScript, what does `async/await` provide?",
                "isCorrect": false,
                "userAnswer": "Synchronous code execution",
                "explanation": "`async/await` makes asynchronous code easier to read and write by making it look and behave a bit more like synchronous code."
            },
            {
                "answer": "Managing global state",
                "question": "What is a common use case for Context API in React?",
                "isCorrect": true,
                "userAnswer": "Managing global state",
                "explanation": "Context API is useful for sharing data that needs to be accessible across different components in a React application without prop drilling."
            },
            {
                "answer": "To install packages specified in package.json",
                "question": "What is the purpose of `npm install` in Node.js?",
                "isCorrect": true,
                "userAnswer": "To install packages specified in package.json",
                "explanation": "This command installs the dependencies listed in the project's `package.json` file."
            },
            {
                "answer": "Fetching data at build time for static generation",
                "question": "In Next.js, what is the purpose of `getStaticProps`?",
                "isCorrect": false,
                "userAnswer": "Managing component state",
                "explanation": "`getStaticProps` allows you to fetch data at build time, generating static HTML for better performance and SEO."
            },
            {
                "answer": "Promises",
                "question": "Which of these is a common way to handle asynchronous operations in JavaScript?",
                "isCorrect": true,
                "userAnswer": "Promises",
                "explanation": "Promises are a standard way to handle asynchronous operations, providing a more structured approach than callbacks."
            }
        ],
        "category": "Technical",
        "improvementTip": "Focus on understanding asynchronous programming concepts in JavaScript and the data fetching mechanisms within Next.js's static site generation capabilities.  Practice coding examples using `async/await` and `getStaticProps` to solidify your understanding.",
        "createdAt": "2025-08-18T10:29:21.214Z",
        "updatedAt": "2025-08-18T10:29:21.214Z"
    },
    {
        "id": "cmeh1mi8o0003rj2kcns0ly96",
        "userId": "00952764-0804-44a6-9315-f8613cf9d89a",
        "quizScore": 90,
        "questions": [
            {
                "answer": "To perform side effects such as data fetching or DOM manipulation",
                "question": "What is the primary purpose of the `useEffect` hook in React?",
                "isCorrect": true,
                "userAnswer": "To perform side effects such as data fetching or DOM manipulation",
                "explanation": "`useEffect` allows components to interact with the outside world, such as fetching data, setting timers, or directly manipulating the DOM."
            },
            {
                "answer": "Built-in support for websockets",
                "question": "Which of the following is NOT a core feature of Node.js?",
                "isCorrect": false,
                "userAnswer": "Automatic garbage collection",
                "explanation": "While Node.js can use websockets, it's not a core, built-in feature.  Libraries like Socket.IO are commonly used."
            },
            {
                "answer": "`useState` manages simple state, while `useReducer` manages complex state with multiple sub-values and logic.",
                "question": "In React, what is the difference between `useState` and `useReducer`?",
                "isCorrect": true,
                "userAnswer": "`useState` manages simple state, while `useReducer` manages complex state with multiple sub-values and logic.",
                "explanation": "`useReducer` is more suitable for complex state updates with multiple interdependent values, utilizing a reducer function for cleaner logic."
            },
            {
                "answer": "Next.js simplifies server-side rendering and static site generation.",
                "question": "What is the primary advantage of using Next.js over a standard React application?",
                "isCorrect": true,
                "userAnswer": "Next.js simplifies server-side rendering and static site generation.",
                "explanation": "Next.js offers features like Server-Side Rendering (SSR) and Static Site Generation (SSG) for improved performance and SEO."
            },
            {
                "answer": "async",
                "question": "Which keyword is used to define asynchronous functions in Javascript?",
                "isCorrect": true,
                "userAnswer": "async",
                "explanation": "The `async` keyword designates a function as asynchronous, allowing the use of `await` within it."
            },
            {
                "answer": "To import external modules",
                "question": "In Node.js, what is the primary purpose of the `require()` function?",
                "isCorrect": true,
                "userAnswer": "To import external modules",
                "explanation": "`require()` is Node.js's primary mechanism for importing external modules and their functionalities."
            },
            {
                "answer": "JavaScript XML",
                "question": "What does JSX stand for in React?",
                "isCorrect": true,
                "userAnswer": "JavaScript XML",
                "explanation": "JSX allows you to write HTML-like syntax within your JavaScript code."
            },
            {
                "answer": "Through a file-system-based routing system",
                "question": "How does Next.js handle routing?",
                "isCorrect": true,
                "userAnswer": "Through a file-system-based routing system",
                "explanation": "Next.js uses the file system to define routes, making routing configuration simple and intuitive."
            },
            {
                "answer": "To refer to the object that the function is a method of (context)",
                "question": "In JavaScript, what is the purpose of the `this` keyword?",
                "isCorrect": true,
                "userAnswer": "To refer to the object that the function is a method of (context)",
                "explanation": "`this` refers to the context in which the function is called.  Its value depends on how the function is invoked."
            },
            {
                "answer": "`let` declares a mutable variable, while `const` declares an immutable variable.",
                "question": "What is the primary difference between `let` and `const` in JavaScript?",
                "isCorrect": true,
                "userAnswer": "`let` declares a mutable variable, while `const` declares an immutable variable.",
                "explanation": "`const` variables cannot be reassigned after initial declaration, while `let` variables can be reassigned."
            }
        ],
        "category": "Technical",
        "improvementTip": "Focus on solidifying your understanding of Node.js's core architecture and built-in modules, and review the various ways it handles networking and real-time communication.  You've got this!",
        "createdAt": "2025-08-18T11:40:17.496Z",
        "updatedAt": "2025-08-18T11:40:17.496Z"
    },
    {
        "id": "cmehysvfm000brj2klg2gcluk",
        "userId": "00952764-0804-44a6-9315-f8613cf9d89a",
        "quizScore": 100,
        "questions": [
            {
                "answer": "To perform side effects like data fetching or DOM manipulation",
                "question": "What is the purpose of `useEffect` hook in React?",
                "isCorrect": true,
                "userAnswer": "To perform side effects like data fetching or DOM manipulation",
                "explanation": "`useEffect` lets you perform side effects in functional components, such as fetching data, setting timers, or directly manipulating the DOM."
            },
            {
                "answer": "Multi-threading",
                "question": "Which of the following is NOT a core feature of Node.js?",
                "isCorrect": true,
                "userAnswer": "Multi-threading",
                "explanation": "Node.js utilizes a single-threaded, non-blocking, event-driven architecture.  It achieves concurrency through asynchronous I/O."
            },
            {
                "answer": "Using the `this.props` object",
                "question": "In React, what is the primary way to pass data from a parent component to a child component?",
                "isCorrect": true,
                "userAnswer": "Using the `this.props` object",
                "explanation": "Props are used to pass data down from parent to child components in React."
            },
            {
                "answer": "Built-in server-side rendering (SSR)",
                "question": "What is the primary benefit of using Next.js over a typical React application?",
                "isCorrect": true,
                "userAnswer": "Built-in server-side rendering (SSR)",
                "explanation": "Next.js is known for its features like SSR, static site generation (SSG), and API routes, making it more powerful than a standard React application for certain use cases."
            },
            {
                "answer": "Installs a package from the npm registry",
                "question": "What does `npm install` do?",
                "isCorrect": true,
                "userAnswer": "Installs a package from the npm registry",
                "explanation": "`npm install` is used to install packages specified in your project's `package.json` file."
            },
            {
                "answer": "async",
                "question": "Which keyword is used to define an asynchronous function in JavaScript?",
                "isCorrect": true,
                "userAnswer": "async",
                "explanation": "The `async` keyword is used to declare an asynchronous function."
            },
            {
                "answer": "To help React identify and update specific list items efficiently",
                "question": "In React, what is the purpose of the `key` prop when rendering lists?",
                "isCorrect": true,
                "userAnswer": "To help React identify and update specific list items efficiently",
                "explanation": "The `key` prop helps React identify which items have changed, added, or removed, improving performance when updating lists."
            },
            {
                "answer": "Using Next.js's built-in Link component and file-system routing",
                "question": "What is a common method for handling routing in Next.js?",
                "isCorrect": true,
                "userAnswer": "Using Next.js's built-in Link component and file-system routing",
                "explanation": "Next.js has a built-in routing system that leverages file paths to define routes."
            },
            {
                "answer": "Using a single thread and an event loop",
                "question": "How does Node.js achieve non-blocking I/O?",
                "isCorrect": true,
                "userAnswer": "Using a single thread and an event loop",
                "explanation": "Node.js uses a single-threaded, event-driven architecture with an event loop to handle multiple asynchronous operations concurrently."
            },
            {
                "answer": "`let` declares a mutable variable, `const` declares an immutable variable",
                "question": "In Javascript, what is the difference between `let` and `const`?",
                "isCorrect": true,
                "userAnswer": "`let` declares a mutable variable, `const` declares an immutable variable",
                "explanation": "`const` declares a variable whose value cannot be reassigned, whereas `let` allows reassignment."
            }
        ],
        "category": "Technical",
        "improvementTip": null,
        "createdAt": "2025-08-19T03:09:01.858Z",
        "updatedAt": "2025-08-19T03:09:01.858Z"
    },
    {
        "id": "cmei36b4t000jrj2ke9yr41rv",
        "userId": "00952764-0804-44a6-9315-f8613cf9d89a",
        "quizScore": 70,
        "questions": [
            {
                "answer": "Two-way data binding",
                "question": "Which of the following is NOT a core feature of React?",
                "isCorrect": true,
                "userAnswer": "Two-way data binding",
                "explanation": "React uses unidirectional data flow, not two-way data binding."
            },
            {
                "answer": "JavaScript XML",
                "question": "What does JSX stand for in React?",
                "isCorrect": true,
                "userAnswer": "JavaScript XML",
                "explanation": "JSX allows you to write HTML-like syntax within your JavaScript code."
            },
            {
                "answer": "To import modules",
                "question": "In Node.js, what is the primary role of the `require()` function?",
                "isCorrect": true,
                "userAnswer": "To import modules",
                "explanation": "`require()` is used to import modules into a Node.js file."
            },
            {
                "answer": "To manage dependencies",
                "question": "What is the primary purpose of the `npm` package manager in Node.js?",
                "isCorrect": true,
                "userAnswer": "To manage dependencies",
                "explanation": "NPM is used for installing, updating, and managing project dependencies."
            },
            {
                "answer": "POST",
                "question": "Which HTTP method is typically used to create a new resource?",
                "isCorrect": true,
                "userAnswer": "POST",
                "explanation": "POST is used to submit data to be processed (to create or update a resource)."
            },
            {
                "answer": "Built-in server-side rendering (SSR)",
                "question": "What is a key advantage of using Next.js over a standard React application?",
                "isCorrect": true,
                "userAnswer": "Built-in server-side rendering (SSR)",
                "explanation": "Next.js provides built-in SSR capabilities, leading to performance improvements."
            },
            {
                "answer": "To refer to the current object",
                "question": "In JavaScript, what is the purpose of the `this` keyword?",
                "isCorrect": false,
                "userAnswer": "To refer to the parent object",
                "explanation": "`this` keyword's context depends on how the function is called."
            },
            {
                "answer": "`let` is mutable, `const` is immutable",
                "question": "What is the difference between `let` and `const` in JavaScript?",
                "isCorrect": true,
                "userAnswer": "`let` is mutable, `const` is immutable",
                "explanation": "`let` allows reassignment, while `const` does not."
            },
            {
                "answer": "Both `async` and `await`",
                "question": "Which keyword is used to handle asynchronous operations in JavaScript?",
                "isCorrect": false,
                "userAnswer": "`async`",
                "explanation": "`async` defines an async function, and `await` pauses execution until a promise resolves."
            },
            {
                "answer": "To update the application state based on actions",
                "question": "What is the role of a reducer in Redux?",
                "isCorrect": false,
                "userAnswer": "To dispatch actions",
                "explanation": "Reducers take the current state and an action, returning the new state."
            }
        ],
        "category": "Technical",
        "improvementTip": "Focus on solidifying your understanding of JavaScript's `this` keyword and its context, and explore the combined functionality of `async` and `await` in handling asynchronous JavaScript.  Practice working with reducers in Redux to master state management.",
        "createdAt": "2025-08-19T05:11:27.196Z",
        "updatedAt": "2025-08-19T05:11:27.196Z"
    }
]