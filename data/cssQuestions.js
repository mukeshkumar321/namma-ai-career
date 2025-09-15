export const questions = {
    beginner: [

        {
            id: 1,
            question: "What is the difference between relative, absolute, fixed, and sticky positioning in CSS?",
            answer: [
                {
                    type: "text",
                    content: "CSS positioning defines how an element is placed relative to its normal flow, parent, or viewport."
                },
                {
                    type: "table",
                    content: {
                        headers: ["Type", "Definition", "Use Case"],
                        rows: [
                            ["relative", "Positioned relative to its normal position", "Minor adjustments without affecting siblings"],
                            ["absolute", "Positioned relative to nearest positioned ancestor", "Tooltips, popups"],
                            ["fixed", "Positioned relative to viewport, does not scroll", "Sticky headers, floating buttons"],
                            ["sticky", "Switches between relative and fixed based on scroll", "Sticky navbars"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `.relative { position: relative; top: 10px; }
.absolute { position: absolute; top: 0; right: 0; }
.fixed { position: fixed; bottom: 10px; right: 10px; }
.sticky { position: sticky; top: 0; }`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Always define a containing block for absolute elements.",
                        "**Best Practice:** Use sticky carefully, ensuring parent has defined height."
                    ]
                }
            ]
        },

        {
            id: 2,
            question: "What is the difference between inline, inline-block, block, and display: none?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Display Type", "Behavior", "Example"],
                        rows: [

                            ["inline", "Does not start on a new line, only occupies content width", "<span>"],
                            ["block", "Starts on a new line, occupies full width", "<div>"],
                            ["inline-block", "Behaves like inline but allows width/height", "Navigation items"],
                            ["none", "Removes element from layout", "Hide element completely"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `span { display: inline; }
div { display: block; }
li { display: inline-block; }
.hidden { display: none; }`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Use inline-block for layouts before flexbox/grid.",
                        "**Best Practice:** Prefer visibility:hidden if you want to hide but preserve layout."
                    ]
                }
            ]
        },

        {
            id: 3,
            question: "Explain the difference between relative units (em, rem, %) and absolute units (px).",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Unit", "Definition", "Scaling Behavior"],
                        rows: [

                            ["px", "Absolute pixel", "Does not scale with parent"],
                            ["em", "Relative to parent’s font size", "Nested scaling possible"],
                            ["rem", "Relative to root (html) font size", "Consistent scaling across app"],
                            ["%", "Relative to parent element’s size", "Responsive layouts"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `html { font-size: 16px; }
.parent { font-size: 20px; }
.child { font-size: 2em; } /* 40px */
.other { font-size: 2rem; } /* 32px (16*2) */`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Use rem for global consistency.",
                        "**Best Practice:** Use em when scaling relative to parent is intended."
                    ]
                }
            ]
        },

        {
            id: 4,
            question: "What are CSS pseudo-classes and pseudo-elements? Give examples.",
            answer: [
                {
                    type: "text",
                    content: "Pseudo-classes define element states, while pseudo-elements style specific parts of elements."
                },
                {
                    type: "table",
                    content: {
                        headers: ["Type", "Example", "Use Case"],
                        rows: [
                            ["Type", "Example", "Use Case"],
                            ["Pseudo-class", ":hover, :focus, :nth-child()", "Style element state or condition"],
                            ["Pseudo-element", "::before, ::after, ::first-line", "Style specific parts of content"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `a:hover { color: red; }
p::first-line { font-weight: bold; }
button:disabled { opacity: 0.5; }`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Use pseudo-elements for icons, separators, or decorative content.",
                        "**Best Practice:** Chain pseudo-classes for advanced selectors (:nth-child(2):hover)."
                    ]
                }
            ]
        },

        {
            id: 5,
            question: "What is the difference between Flexbox and CSS Grid?",
            answer: [
                {
                    type: "table",
                    content: {
                        headers: ["Feature", "Flexbox", "Grid"],
                        rows: [

                            ["Layout Type", "1D (row OR column)", "2D (rows AND columns)"],
                            ["Alignment", "Good for distributing items along a single axis", "Better for full-page or section layouts"],
                            ["Use Case", "Navbars, buttons, small layouts", "Complex page grids, dashboards"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `/* Flexbox */
.container { display: flex; justify-content: space-between; }

/* Grid */
.container { display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 10px; }`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Use Flexbox for components, Grid for overall layout.",
                        "**Best Practice:** Combine both when necessary."
                    ]
                }
            ]
        },

        {
            id: 6,
            question: "What are CSS transitions and animations?",
            answer: [
                {
                    type: "text",
                    content: "CSS transitions define smooth changes between states. Animations allow more complex keyframe-based effects."
                },
                {
                    type: "code",
                    content: `/* Transition */
button { transition: background 0.3s ease; }
button:hover { background: red; }

/* Animation */
@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}
.ball { animation: bounce 1s infinite; }`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Use transitions for simple hover/focus states.",
                        "**Best Practice:** Use animations sparingly to avoid performance issues."
                    ]
                }
            ]
        },

        {
            id: 7,
            question: "What are media queries in CSS? How do they help in responsive design?",
            answer: [
                {
                    type: "text",
                    content: "Media queries apply CSS rules conditionally based on device characteristics like width, height, or orientation."
                },
                {
                    type: "code",
                    content: `@media (max-width: 600px) {
  body { font-size: 14px; }
}
@media (min-width: 1200px) {
  body { font-size: 18px; }
}`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Use mobile-first approach (min-width queries).",
                        "**Best Practice:** Combine with fluid units (%, rem) for better scaling."
                    ]
                }
            ]
        },

        {
            id: 8,
            question: "What are CSS variables (custom properties)?",
            answer: [
                {
                    type: "text",
                    content: "CSS variables are reusable values defined with `--name`, scoped to elements and inheritable."
                },
                {
                    type: "code",
                    content: `:root {
  --primary-color: #3498db;
  --padding: 10px;
}
button {
  background: var(--primary-color);
  padding: var(--padding);
}`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Define global theme variables in :root.",
                        "**Best Practice:** Use variables for consistent spacing, colors, and typography."
                    ]
                }
            ]
        },

        {
            id: 9,
            question: "Explain specificity in CSS. How is it calculated?",
            answer: [
                {
                    type: "text",
                    content: "Specificity determines which CSS rule takes precedence. It is calculated based on selectors."
                },
                {
                    type: "table",
                    content: {
                        "headers": ["Selector Type", "Weight"],
                        "rows": [

                            ["Inline style", "1000"],
                            ["ID selector (#id)", "100"],
                            ["Class, pseudo-class, attribute", "10"],
                            ["Element, pseudo-element", "1"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `/* Example */
div { color: blue; }        /* 1 */
.container div { color: red; } /* 11 */
#main div { color: green; }    /* 101 */`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Avoid overusing !important, instead structure CSS cleanly.",
                        "**Best Practice:** Prefer BEM or utility-first CSS to reduce specificity wars."
                    ]
                }
            ]
        },

        {
            id: 10,
            question: "What are pseudo-class selectors like :nth-child() and :nth-of-type()?",
            answer: [
                {
                    type: "text",
                    content: ":nth-child() selects elements based on position regardless of type, while :nth-of-type() selects based on position of a specific type."
                },
                {
                    type: "code",
                    content: `ul li:nth-child(2) { color: red; } /* 2nd li */
ul li:nth-of-type(2) { color: green; } /* 2nd li of type li */`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Use nth-of-type for precision when multiple element types exist in a parent.",
                        "**Best Practice:** Combine with even/odd for striped tables."
                    ]
                }
            ]
        },
    ],
    intermediate: [
        {
            id: 11,
            question: "What is the difference between relative, absolute, and fixed units for length in CSS?",
            answer: [
                {
                    type: "table",
                    content: {
                        "headers": ["Unit Type", "Examples", "Behavior"],
                        "rows": [
                            ["Unit Type", "Examples", "Behavior"],
                            ["Absolute", "px, pt, cm", "Fixed regardless of parent or viewport"],
                            ["Relative", "em, rem, %", "Relative to parent or root element"],
                            ["Viewport-based", "vw, vh, vmin, vmax", "Relative to viewport size"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `.box-px { width: 200px; }
.box-percent { width: 50%; }
.box-vw { width: 50vw; }`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Use px sparingly; prefer relative units for responsive design.",
                        "**Best Practice:** vw/vh are great for fullscreen sections."
                    ]
                }
            ]
        },

        {
            id: 12,
            question: "What is the difference between relative path and absolute path in CSS (for URLs like background images)?",
            answer: [
                {
                    type: "text",
                    content: "Relative paths are resolved based on the CSS file’s location, while absolute paths are resolved from the site root or full URL."
                },
                {
                    type: "code",
                    content: `/* Relative */
body { background: url('../images/bg.png'); }

/* Absolute */
body { background: url('/assets/images/bg.png'); }`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Use relative paths in projects for portability.",
                        "**Best Practice:** Use absolute paths in CDN-based assets."
                    ]
                }
            ]
        },

        {
            id: 13,
            question: "What is the difference between visibility: hidden and display: none?",
            answer: [
                {
                    type: "table",
                    content: {
                        "headers": ["Property", "Effect on Layout", "Effect on DOM"],
                        "rows": [

                            ["display: none", "Element removed from layout", "Still exists in DOM"],
                            ["visibility: hidden", "Takes up space but not visible", "Still exists in DOM"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `.none { display: none; }
.hidden { visibility: hidden; }`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Use display:none for conditional rendering.",
                        "**Best Practice:** Use visibility:hidden when preserving layout flow is needed."
                    ]
                }
            ]
        },

        {
            id: 14,
            question: "What is the z-index property and what is stacking context?",
            answer: [
                {
                    type: "text",
                    content: "z-index defines the stacking order of elements. Stacking context is a hierarchy that determines how elements overlap regardless of z-index."
                },
                {
                    type: "code",
                    content: `.box1 { position: relative; z-index: 1; }
.box2 { position: relative; z-index: 2; }`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Avoid large arbitrary z-index values.",
                        "**Best Practice:** Understand that positioned elements (relative, absolute, fixed) create stacking contexts."
                    ]
                }
            ]
        },

        {
            id: 15,
            question: "Explain the difference between inline CSS, internal CSS, and external CSS.",
            answer: [
                {
                    type: "table",
                    content: {
                        "headers": ["Type", "Definition", "Use Case"],
                        "rows": [

                            ["Inline", "Applied directly in element via style attribute", "Quick testing, email templates"],
                            ["Internal", "Inside <style> tag in HTML", "Single-page projects"],
                            ["External", "Separate .css file linked via <link>", "Best for scalability and maintainability"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `<!-- Inline -->
<p style="color:red;">Hello</p>

<!-- Internal -->
<style> p { color: red; } </style>

<!-- External -->
<link rel="stylesheet" href="style.css">`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Always prefer external CSS for real-world projects.",
                        "**Best Practice:** Avoid inline CSS for maintainability."
                    ]
                }
            ]
        },

        {
            id: 16,
            question: "What is the difference between relative imports (@import) and link in CSS?",
            answer: [
                {
                    type: "text",
                    content: "`<link>` is HTML-based, loads CSS in parallel. `@import` is CSS-based, loads sequentially and causes performance issues."
                },
                {
                    type: "code",
                    content: `/* Using link */
<link rel="stylesheet" href="styles.css">

/* Using @import */
<style>
  @import url("styles.css");
</style>`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Use <link> instead of @import for performance.",
                        "**Best Practice:** Use @import only in modular setups like SCSS with build tools."
                    ]
                }
            ]
        },

        {
            id: 17,
            question: "What is the difference between relative selectors and combinators in CSS?",
            answer: [
                {
                    type: "table",
                    content: {
                        "headers": ["Selector", "Meaning"],
                        "rows": [

                            ["Descendant (A B)", "Selects B inside A"],
                            ["Child (A > B)", "Selects direct children"],
                            ["Adjacent sibling (A + B)", "Selects B immediately after A"],
                            ["General sibling (A ~ B)", "Selects all siblings of A that are B"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `div p { color: red; }    /* Descendant */
div > p { color: blue; }  /* Child */
h1 + p { font-size: 18px; } /* Adjacent */
h1 ~ p { color: gray; }   /* General sibling */`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Use child (>) for performance instead of descendant selectors.",
                        "**Best Practice:** Avoid deep nesting for readability."
                    ]
                }
            ]
        },

        {
            id: 18,
            question: "What is the difference between min-width, max-width, min-height, and max-height?",
            answer: [
                {
                    type: "text",
                    content: "These properties define constraints for element dimensions."
                },
                {
                    type: "code",
                    content: `.box {
  min-width: 200px;
  max-width: 600px;
  min-height: 100px;
  max-height: 400px;
}`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Use min-width and max-width for responsive containers.",
                        "**Best Practice:** Avoid fixed heights for better scalability."
                    ]
                }
            ]
        },

        {
            id: 19,
            question: "Explain difference between static, relative, absolute, fixed, and sticky positioning.",
            answer: [
                {
                    type: "text",
                    content: "Static is the default (no positioning). Relative moves relative to itself. Absolute relative to parent. Fixed relative to viewport. Sticky is hybrid of relative and fixed."
                },
                {
                    type: "code",
                    content: `.static { position: static; }
.relative { position: relative; top: 10px; }
.absolute { position: absolute; top: 10px; left: 10px; }
.fixed { position: fixed; top: 0; }
.sticky { position: sticky; top: 0; }`
                }
            ]
        },

        {
            id: 20,
            question: "What is the difference between relative and absolute imports in CSS (like url())?",
            answer: [
                {
                    type: "text",
                    content: "Relative imports depend on the CSS file’s path. Absolute imports start from root or full URL."
                },
                {
                    type: "code",
                    content: `background: url("../img/bg.png"); /* relative */
background: url("/assets/img/bg.png"); /* absolute */`
                }
            ]
        },
    ],
    advanced: [

        {
            id: 21,
            question: "What is CSS BEM methodology?",
            answer: [
                {
                    type: "text",
                    content: "BEM stands for Block, Element, Modifier. It is a naming convention for writing scalable and maintainable CSS."
                },
                {
                    type: "code",
                    content: `.button { }
.button__icon { }
.button--primary { }`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Use BEM for large codebases.",
                        "**Best Practice:** Keeps CSS modular and reusable."
                    ]
                }
            ]
        },

        {
            id: 22,
            question: "What is the difference between relative color units (currentColor, rgba, hsl) in CSS?",
            answer: [
                {
                    type: "table",
                    content: {
                        "headers": ["Color Type", "Example", "Use Case"],
                        "rows": [

                            ["Named", "red, blue", "Quick styling"],
                            ["Hex", "#ff0000", "Common web color"],
                            ["RGB/RGBA", "rgba(255,0,0,0.5)", "Transparency control"],
                            ["HSL/HSLA", "hsl(0, 100%, 50%)", "Easier manipulation"],
                            ["currentColor", "border: 1px solid currentColor", "Inherit parent color"]
                        ]
                    }
                }
            ]
        },

        {
            id: 23,
            question: "What is the difference between relative layout models (Flexbox, Grid, Float, Table)?",
            answer: [
                {
                    type: "table",
                    content: {
                        "headers": ["Model", "Strength", "Weakness"],
                        "rows": [

                            ["Float", "Legacy, simple image wrap", "Not for complex layouts"],
                            ["Table", "Grid-like layouts before CSS Grid", "Rigid, not responsive"],
                            ["Flexbox", "1D layouts, flexible", "Not 2D"],
                            ["Grid", "2D layouts, explicit control", "Newer, more verbose"]
                        ]
                    }
                }
            ]
        },

        {
            id: 24,
            question: "Explain CSS performance optimization techniques.",
            answer: [
                {
                    type: "list",
                    content: [
                        "Minify and compress CSS.",
                        "Use shorthand properties.",
                        "Avoid deep selectors (performance-heavy).",
                        "Use external stylesheets for caching.",
                        "Use CSS variables instead of repeated values.",
                        "Remove unused CSS (via PurgeCSS, Tailwind JIT)."
                    ]
                }
            ]
        },

        {
            id: 25,
            question: "What is the difference between absolute positioning and transform translate for centering?",
            answer: [
                {
                    type: "code",
                    content: `/* Absolute + transform */
.parent { position: relative; }
.child {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}`      },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Use flexbox (align-items, justify-content) instead of manual centering.",
                        "**Best Practice:** transform translate is smoother and responsive."
                    ]
                }
            ]
        },

        {
            id: 26,
            question: "What is CSS object-fit and object-position?",
            answer: [
                {
                    type: "text",
                    content: "object-fit defines how media fits inside a container, object-position sets alignment."
                },
                {
                    type: "code",
                    content: `img { object-fit: cover; object-position: center; }`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Use cover for profile images and banners.",
                        "**Best Practice:** Use contain for logos."
                    ]
                }
            ]
        },

        {
            id: 27,
            question: "What is the difference between inline SVG and background SVG in CSS?",
            answer: [
                {
                    type: "table",
                    content: {
                        "headers": ["Method", "Pros", "Cons"],
                        "rows": [

                            ["Inline SVG", "CSS/JS controllable, accessible", "Increases HTML size"],
                            ["Background SVG", "Reusable via CSS, no DOM pollution", "Not accessible, styling limited"]
                        ]
                    }
                }
            ]
        },

        {
            id: 28,
            question: "What is the difference between relative and absolute line-height values?",
            answer: [
                {
                    type: "text",
                    content: "Line-height can be unitless (relative to font size) or fixed in px/em."
                },
                {
                    type: "code",
                    content: `p { line-height: 1.5; }  /* relative */
p { line-height: 24px; }  /* absolute */`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Use unitless line-height for better scalability."
                    ]
                }
            ]
        },

        {
            id: 29,
            question: "Explain dark mode implementation in CSS.",
            answer: [
                {
                    type: "code",
                    content: `@media (prefers-color-scheme: dark) {
  body { background: #111; color: #eee; }
}`
                },
                {
                    type: "list",
                    content: [
                        "**Best Practice:** Use CSS variables for theme switching.",
                        "**Best Practice:** Provide sufficient contrast for accessibility."
                    ]
                }
            ]
        },

        {
            id: 30,
            question: "Explain CSS accessibility best practices.",
            answer: [
                {
                    type: "list",
                    content: [
                        "Use relative units for font sizing (rem/em).",
                        "Ensure sufficient color contrast.",
                        "Use focus states (:focus-visible).",
                        "Avoid content hidden with display:none if needed for screen readers.",
                        "Use prefers-reduced-motion for animations."
                    ]
                }
            ]
        }
    ]
};