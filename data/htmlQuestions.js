export const questions = {
    beginner: [
        {
            id: 1,
            question: "What is HTML?",
            answer: [
                {
                    type: "text",
                    content: `HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the web...`
                },
                {
                    type: "code",
                    content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is a sample paragraph.</p>
  </body>
</html>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Element", "Purpose"],
                        rows: [
                            ["<h1> - <h6>", "Headings"],
                            ["<p>", "Paragraphs"],
                            ["<a>", "Hyperlinks"],
                            ["<img>", "Images"],
                            ["<ul>, <ol>, <li>", "Lists"],
                            ["<table>, <tr>, <td>", "Tables"],
                            ["<form>", "Forms for user input"]
                        ]
                    }
                }
            ]
        },
        {
            id: 2,
            question: "What are HTML tags?",
            answer: [
                {
                    type: "text",
                    content: `HTML tags are the building blocks of HTML. They are predefined keywords enclosed in angle brackets (< >) that tell the browser how to display content on a web page. Tags usually come in pairs, with an opening and a closing tag, though some are self-closing.`
                },
                {
                    type: "code",
                    content: `<p>This is a paragraph.</p>

<img src="image.jpg" alt="Sample Image" />

<a href="https://example.com" target="_blank">Visit Example</a>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Tag Type", "Description", "Example"],
                        rows: [
                            ["Structural tags", "Define the structure of a page", "<html>, <head>, <body>"],
                            ["Text formatting tags", "Style text", "<b>, <i>, <strong>, <em>"],
                            ["Hyperlink tags", "Create links", "<a>"],
                            ["Image and media tags", "Embed images or videos", "<img>, <video>"],
                            ["List tags", "Create lists", "<ul>, <ol>, <li>"],
                            ["Table tags", "Create tables", "<table>, <tr>, <td>"],
                            ["Form tags", "Take user input", "<form>, <input>, <button>"]
                        ]
                    }
                }
            ]
        },
        {
            id: 3,
            question: "What are HTML Attributes?",
            answer: [
                {
                    type: "text",
                    content: `HTML attributes provide additional information about HTML elements. They are always included in the opening tag and usually come in name="value" pairs. Attributes modify the default behavior of an element or provide extra details.`
                },
                {
                    type: "code",
                    content: `<a href="https://example.com" target="_blank">Visit Example</a>
<img src="image.jpg" alt="Sample Image" width="300" />`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Attribute", "Description", "Example Element"],
                        rows: [
                            ["href", "Specifies the URL for a link", "<a href='https://example.com'>"],
                            ["src", "Specifies the path to an image or media file", "<img src='image.jpg'>"],
                            ["alt", "Provides alternative text for images", "<img alt='Sample Image'>"],
                            ["width", "Specifies the width of an element", "<img width='300'>"],
                            ["height", "Specifies the height of an element", "<img height='200'>"],
                            ["target", "Specifies where to open linked documents", "<a target='_blank'>"]
                        ]
                    }
                }
            ]
        },
        {
            id: 4,
            question: "What is a marquee in HTML?",
            answer: [
                {
                    type: "text",
                    content: `A marquee in HTML is an element used to create scrolling text or images horizontally or vertically across the web page. It was commonly used in older web designs to grab attention, but it is now **deprecated** and not recommended for modern web development.`
                },
                {
                    type: "code",
                    content: `<marquee behavior="scroll" direction="left" scrollamount="5">
  This is a scrolling text.
</marquee>

<marquee behavior="alternate" direction="up" height="50">
  This text moves up and down.
</marquee>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Attribute", "Description", "Example"],
                        rows: [
                            ["behavior", "Specifies the type of scrolling: scroll, slide, or alternate", '<marquee behavior="alternate">'],
                            ["direction", "Specifies the scroll direction: left, right, up, down", '<marquee direction="up">'],
                            ["scrollamount", "Specifies the speed of scrolling (higher value = faster)", '<marquee scrollamount="5">'],
                            ["height", "Specifies the height of the marquee", '<marquee height="50">'],
                            ["width", "Specifies the width of the marquee", '<marquee width="200">']
                        ]
                    }
                }
            ]
        },
        {
            id: 5,
            question: "Define the list types in HTML.",
            answer: [
                {
                    type: "text",
                    content: `HTML provides different types of lists to organize content. Lists can be **ordered**, **unordered**, or **description lists**, each serving different purposes for structuring information.`
                },
                {
                    type: "code",
                    content: `<!-- Unordered List -->
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>

<!-- Description List -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["List Type", "Description", "Example Tag"],
                        rows: [
                            ["Unordered List", "A list of items with bullet points", "<ul>"],
                            ["Ordered List", "A list of items with numbering", "<ol>"],
                            ["Description List", "A list of terms and descriptions", "<dl>"]
                        ]
                    }
                }
            ]
        },
        {
            id: 6,
            question: "How do you align list elements in an HTML file?",
            answer: [
                {
                    type: "text",
                    content: `List elements in HTML can be aligned using **CSS properties**. By default, list items are left-aligned, but you can use text alignment, flexbox, or other CSS techniques to change their positioning.`
                },
                {
                    type: "code",
                    content: `<!-- Left aligned (default) -->
<ul style="text-align: left;">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>

<!-- Center aligned -->
<ul style="text-align: center;">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>

<!-- Right aligned -->
<ul style="text-align: right;">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>

<!-- Using flexbox for horizontal alignment -->
<ul style="display: flex; justify-content: space-around; list-style: none;">
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Method", "Description", "Example CSS"],
                        rows: [
                            ["text-align", "Aligns the text inside list items", "text-align: center;"],
                            ["flexbox", "Aligns items horizontally or vertically with control over spacing", "display: flex; justify-content: space-around;"],
                            ["margin auto", "Centers the entire list block", "margin: 0 auto; width: 50%;"]
                        ]
                    }
                }
            ]
        },
        {
            id: 7,
            question: "What is an element in HTML?",
            answer: [
                {
                    type: "text",
                    content: `An HTML element is a **complete structure** that consists of a **start tag**, **content**, and an optional **end tag**. Elements are the building blocks of a web page and define the content and structure of the document.`
                },
                {
                    type: "code",
                    content: `<!-- Paragraph element -->
<p>This is a paragraph element.</p>

<!-- Image element (self-closing) -->
<img src="image.jpg" alt="Sample Image" />`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Part of an Element", "Description", "Example"],
                        rows: [
                            ["Start Tag", "Marks the beginning of the element", "<p>"],
                            ["Content", "The information inside the element", "This is a paragraph element."],
                            ["End Tag", "Marks the end of the element", "</p>"],
                            ["Attributes", "Extra information modifying the element", "<img src='image.jpg' alt='Sample Image' />"],
                            ["Self-Closing", "Elements that do not require an end tag", "<img />"]
                        ]
                    }
                }
            ]
        },
        {
            id: 8,
            question: "What is the difference between HTML and CSS?",
            answer: [
                {
                    type: "text",
                    content: `HTML and CSS are two fundamental technologies used in web development, but they serve different purposes. HTML provides the **structure** of the webpage, while CSS controls the **appearance and styling**.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Aspect", "HTML", "CSS"],
                        rows: [
                            ["Full Form", "HyperText Markup Language", "Cascading Style Sheets"],
                            ["Purpose", "Defines the structure and content of a webpage", "Defines the look and layout of a webpage"],
                            ["Syntax", "Uses tags like <p>, <div>, <a>", "Uses selectors and properties like color, margin, font-size"],
                            ["Effect", "Displays elements on the page", "Styles elements (colors, fonts, spacing, layout)"],
                            ["Nature", "Markup language", "Style sheet language"],
                            ["Example", "<p>Hello World!</p>", "p { color: blue; font-size: 16px; }"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `<!-- HTML: Structure -->
<p>Hello World!</p>

<!-- CSS: Styling -->
<style>
  p {
    color: blue;
    font-size: 16px;
  }
</style>`,
                    language: "html"
                }
            ]
        },
    ],
    intermediate: [
        {
            id: 9,
            question: "Are the HTML tags and elements the same thing?",
            answer: [
                {
                    type: "text",
                    content: `No, HTML tags and elements are **related but not the same**. A tag is just a part of an element. An element is a **complete structure** that includes the opening tag, content, and closing tag (or self-closing tag).`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Term", "Definition", "Example"],
                        rows: [
                            ["HTML Tag", "A markup keyword enclosed in angle brackets that starts or ends an element", "<p> or </p>"],
                            ["HTML Element", "The complete structure consisting of a start tag, content, and end tag, or a self-closing tag", "<p>This is a paragraph.</p>"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `<!-- Tag examples -->
<p> <!-- opening tag -->
</p> <!-- closing tag -->

<!-- Element example -->
<p>This is a paragraph element.</p>`,
                    language: "html"
                }
            ]
        },
        {
            id: 10,
            question: "What are void elements in HTML?",
            answer: [
                {
                    type: "text",
                    content: `Void elements in HTML are elements that **do not have any content** and **do not require a closing tag**. They are self-contained and often used for embedding content like images, line breaks, or meta information.`
                },
                {
                    type: "code",
                    content: `<!-- Examples of void elements -->
<img src="image.jpg" alt="Sample Image" />
<br />
<hr />
<meta charset="UTF-8" />
<input type="text" placeholder="Enter your name" />`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Void Element", "Purpose / Description", "Example Usage"],
                        rows: [
                            ["<img>", "Displays an image", "<img src='image.jpg' alt='Sample Image' />"],
                            ["<br>", "Inserts a line break", "<br />"],
                            ["<hr>", "Creates a horizontal rule", "<hr />"],
                            ["<meta>", "Provides metadata about the document", "<meta charset='UTF-8' />"],
                            ["<input>", "Accepts user input in forms", "<input type='text' placeholder='Enter your name' />"],
                            ["<link>", "Links external resources like CSS", "<link rel='stylesheet' href='style.css' />"]
                        ]
                    }
                }
            ]
        },
        {
            id: 11,
            question: "What is the advantage of collapsing white space in HTML?",
            answer: [
                {
                    type: "text",
                    content: `Collapsing white space in HTML means that **multiple consecutive spaces, tabs, and line breaks** in the HTML source are treated as a **single space** by the browser. This helps maintain clean and consistent rendering of text without unnecessary gaps.`
                },
                {
                    type: "text",
                    content: `**Advantages:**`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Advantage", "Explanation"],
                        rows: [
                            ["Cleaner Layout", "Prevents extra spaces from breaking the visual layout of text."],
                            ["Consistent Rendering", "Ensures text looks the same across different browsers regardless of spacing in the HTML source."],
                            ["Reduced File Size", "Avoids unnecessary characters that don't affect display, keeping HTML cleaner."],
                            ["Easier Maintenance", "Developers can format HTML with indentation and spacing for readability without affecting the output."]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `<!-- HTML source with extra spaces and line breaks -->
<p>
  This      is
  a     sample     text.
</p>

<!-- Browser renders it as -->
<p>This is a sample text.</p>`,
                    language: "html"
                }
            ]
        },
        // 12. What are HTML Entities?
        {
            id: 12,
            question: "What are HTML Entities?",
            answer: [
                {
                    type: "text",
                    content: `HTML entities are special codes used to display **reserved characters or symbols** in HTML that would otherwise be interpreted as HTML code. They start with an ampersand (&) and end with a semicolon (;).`
                },
                {
                    type: "code",
                    content: `&lt;  <!-- Less than symbol: < -->
&gt;  <!-- Greater than symbol: > -->
&amp; <!-- Ampersand symbol: & -->
&quot; <!-- Double quote: " -->
&apos; <!-- Single quote: ' -->`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Entity", "Represents", "Example Usage"],
                        rows: [
                            ["&lt;", "<", "<p>5 &lt; 10</p>"],
                            ["&gt;", ">", "<p>10 &gt; 5</p>"],
                            ["&amp;", "&", "<p>Tom &amp; Jerry</p>"],
                            ["&quot;", "\"", "<p>He said &quot;Hello&quot;</p>"],
                            ["&copy;", "©", "<p>&copy; 2025 My Company</p>"]
                        ]
                    }
                }
            ]
        },

        // 13. How do you display a table in an HTML webpage?
        {
            id: 13,
            question: "How do you display a table in an HTML webpage?",
            answer: [
                {
                    type: "text",
                    content: `You can display a table in HTML using the <table> element, along with <tr> for rows, <th> for headers, and <td> for data cells.`
                },
                {
                    type: "code",
                    content: `<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
    <td>New York</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>30</td>
    <td>London</td>
  </tr>
</table>`,
                    language: "html"
                }
            ]
        },

        // 14. How do we insert a comment in HTML?
        {
            id: 14,
            question: "How do we insert a comment in HTML?",
            answer: [
                {
                    type: "text",
                    content: `Comments in HTML are **not displayed by the browser** and are used to leave notes or explanations in the code. Comments start with <!-- and end with -->.`
                },
                {
                    type: "code",
                    content: `<!-- This is a single-line comment -->
<p>This text is visible.</p>
<!--
  This is a multi-line comment
  spanning multiple lines
-->`,
                    language: "html"
                }
            ]
        },

        // 15. How do you insert a copyright symbol in HTML?
        {
            id: 15,
            question: "How do you insert a copyright symbol in HTML?",
            answer: [
                {
                    type: "text",
                    content: `The copyright symbol can be inserted using an **HTML entity** &copy; or &#169;.`
                },
                {
                    type: "code",
                    content: `<p>&copy; 2025 My Company</p>
<p>&#169; 2025 My Company</p>`,
                    language: "html"
                }
            ]
        },

        // 16. What is white space in HTML?
        {
            id: 16,
            question: "What is white space in HTML?",
            answer: [
                {
                    type: "text",
                    content: `White space in HTML refers to spaces, tabs, and line breaks in the HTML code. Browsers collapse multiple consecutive white spaces into a single space when rendering the page.`
                },
                {
                    type: "code",
                    content: `<p>This      is
  a    sample text.</p>

<!-- Browser renders it as: -->
<p>This is a sample text.</p>`,
                    language: "html"
                }
            ]
        },

        // 17. How do you create links to different sections within the same HTML web page?
        {
            id: 17,
            question: "How do you create links to different sections within the same HTML web page?",
            answer: [
                {
                    type: "text",
                    content: `You can create links to different sections of the same page using **anchor tags** with the href attribute pointing to the id of the target element.`
                },
                {
                    type: "code",
                    content: `<!-- Target section -->
<h2 id="section1">Section 1</h2>
<p>This is the first section.</p>

<!-- Link to the section -->
<a href="#section1">Go to Section 1</a>`,
                    language: "html"
                }
            ]
        },
        // 18. How do you create a hyperlink in HTML?
        {
            id: 18,
            question: "How do you create a hyperlink in HTML?",
            answer: [
                {
                    type: "text",
                    content: `A hyperlink is created using the <a> (anchor) tag. The href attribute specifies the URL of the page the link goes to. You can also open links in a new tab using target="_blank".`
                },
                {
                    type: "code",
                    content: `<a href="https://www.example.com">Visit Example</a>
<a href="https://www.example.com" target="_blank">Open Example in New Tab</a>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Attribute", "Description", "Example"],
                        rows: [
                            ["href", "URL of the linked page", "<a href='https://example.com'>"],
                            ["target", "Where to open the link", "<a target='_blank'>"],
                            ["title", "Tooltip text when hovering over the link", "<a title='Click here'>"]
                        ]
                    }
                }
            ]
        },

        // 19. Define an image map.
        {
            id: 19,
            question: "Define an image map.",
            answer: [
                {
                    type: "text",
                    content: `An image map allows you to define clickable areas on an image that link to different destinations. This is done using the <map> and <area> tags.`
                },
                {
                    type: "code",
                    content: `<img src="example.jpg" usemap="#map1" alt="Example Image" />
<map name="map1">
  <area shape="rect" coords="0,0,100,100" href="https://example.com" alt="Rectangle Area">
  <area shape="circle" coords="150,50,40" href="https://example.org" alt="Circle Area">
</map>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Tag", "Purpose", "Example"],
                        rows: [
                            ["<map>", "Defines the image map", "<map name='map1'>"],
                            ["<area>", "Defines clickable areas within the image", "<area shape='rect' coords='0,0,100,100' href='https://example.com'>"]
                        ]
                    }
                }
            ]
        },

        // 20. Why do we use a style sheet in HTML?
        {
            id: 20,
            question: "Why do we use a style sheet in HTML?",
            answer: [
                {
                    type: "text",
                    content: `A style sheet (CSS) is used to **control the presentation and layout** of HTML elements. It separates content (HTML) from design, making web pages easier to maintain and more consistent.`
                },
                {
                    type: "code",
                    content: `<!-- Inline CSS -->
<p style="color: red; font-size: 16px;">This is styled text.</p>

<!-- Internal CSS -->
<style>
  p { color: blue; font-size: 18px; }
</style>

<!-- External CSS -->
<link rel="stylesheet" href="styles.css">`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Type of CSS", "Description", "Example"],
                        rows: [
                            ["Inline", "CSS applied directly to the element using style attribute", "<p style='color:red;'>"],
                            ["Internal", "CSS inside <style> tag within HTML", "<style>p{color:blue;}</style>"],
                            ["External", "CSS in a separate file linked with <link>", "<link rel='stylesheet' href='style.css'>"]
                        ]
                    }
                }
            ]
        },

        // 21. What is semantic HTML?
        {
            id: 21,
            question: "What is semantic HTML?",
            answer: [
                {
                    type: "text",
                    content: `Semantic HTML uses elements that **have meaningful names**, describing the purpose of the content. It improves accessibility, SEO, and readability of code.`
                },
                {
                    type: "code",
                    content: `<!-- Non-semantic -->
<div id="header">Welcome</div>

<!-- Semantic -->
<header>Welcome</header>

<!-- Examples of semantic tags -->
<nav>Navigation Links</nav>
<main>Main Content</main>
<article>Article Content</article>
<footer>Footer Information</footer>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Tag", "Purpose", "Example"],
                        rows: [
                            ["<header>", "Defines introductory content or site header", "<header>Welcome</header>"],
                            ["<nav>", "Defines navigation links", "<nav>Menu</nav>"],
                            ["<main>", "Defines main content", "<main>Content</main>"],
                            ["<article>", "Defines self-contained content", "<article>Blog Post</article>"],
                            ["<footer>", "Defines footer content", "<footer>Contact Info</footer>"]
                        ]
                    }
                }
            ]
        },

        // 22. What is SVG in HTML?
        {
            id: 22,
            question: "What is SVG in HTML?",
            answer: [
                {
                    type: "text",
                    content: `SVG (Scalable Vector Graphics) is an XML-based markup language used to create **vector graphics** in HTML. Unlike raster images, SVGs can be scaled to any size without losing quality.`
                },
                {
                    type: "code",
                    content: `<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>

<!-- Inline SVG in HTML -->
<svg viewBox="0 0 200 200">
  <rect x="10" y="10" width="180" height="180" fill="blue" />
</svg>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["SVG Element", "Purpose", "Example"],
                        rows: [
                            ["<svg>", "Container for SVG graphics", "<svg width='100' height='100'></svg>"],
                            ["<circle>", "Draws a circle", "<circle cx='50' cy='50' r='40' />"],
                            ["<rect>", "Draws a rectangle", "<rect x='10' y='10' width='180' height='180' />"],
                            ["<line>", "Draws a straight line", "<line x1='0' y1='0' x2='100' y2='100' />"],
                            ["<path>", "Draws complex shapes", "<path d='M10 10 H 90 V 90 H 10 Z' />"]
                        ]
                    }
                }
            ]
        },
        // 23. What would happen without text between the HTML tags?
        {
            id: 23,
            question: "What would happen without text between the HTML tags?",
            answer: [
                {
                    type: "text",
                    content: `If there is no text between the opening and closing HTML tags, the element may still render but **it will appear empty**. Some elements like <p> or <h1> will display no content, whereas others like <img> or <br> are self-contained and don't require text.`
                },
                {
                    type: "code",
                    content: `<p></p> <!-- Empty paragraph, nothing displayed -->

<h1></h1> <!-- Empty heading, nothing displayed -->

<img src="image.jpg" alt="Sample Image" /> <!-- Displays image without inner text -->`,
                    language: "html"
                }
            ]
        },

        // 24. How do you create nested web pages in HTML?
        {
            id: 24,
            question: "How do you create nested web pages in HTML?",
            answer: [
                {
                    type: "text",
                    content: `Nested web pages are created by linking pages together using **hyperlinks**. You can organize pages in folders and use relative or absolute paths to link them.`
                },
                {
                    type: "code",
                    content: `<!-- Folder structure:
/website
   index.html
   /about
      team.html
-->

<!-- Link from index.html to team.html -->
<a href="about/team.html">Meet the Team</a>`,
                    language: "html"
                }
            ]
        },

        // 25. How do you add buttons in HTML?
        {
            id: 25,
            question: "How do you add buttons in HTML?",
            answer: [
                {
                    type: "text",
                    content: `Buttons can be added using the <button> or <input> tag. They can be used for forms or interactive actions.`
                },
                {
                    type: "code",
                    content: `<button type="button">Click Me</button>
<input type="submit" value="Submit">`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Button Type", "Description", "Example"],
                        rows: [
                            ["<button>", "Creates a clickable button with custom content", "<button>Click Me</button>"],
                            ["<input type='submit'>", "Creates a submit button in forms", "<input type='submit' value='Submit'>"],
                            ["<input type='button'>", "Creates a generic button", "<input type='button' value='Click Me'>"]
                        ]
                    }
                }
            ]
        },

        // 26. What are the different types of headings in HTML?
        {
            id: 26,
            question: "What are the different types of headings in HTML?",
            answer: [
                {
                    type: "text",
                    content: `HTML provides six levels of headings from <h1> to <h6>. <h1> is the largest and most important, while <h6> is the smallest.`
                },
                {
                    type: "code",
                    content: `<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Section Heading</h3>
<h4>Subsection Heading</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Heading Tag", "Description", "Example"],
                        rows: [
                            ["<h1>", "Largest heading", "<h1>Main Heading</h1>"],
                            ["<h2>", "Second level heading", "<h2>Subheading</h2>"],
                            ["<h3>", "Third level heading", "<h3>Section Heading</h3>"],
                            ["<h4>", "Fourth level heading", "<h4>Subsection Heading</h4>"],
                            ["<h5>", "Fifth level heading", "<h5>Minor Heading</h5>"],
                            ["<h6>", "Smallest heading", "<h6>Smallest Heading</h6>"]
                        ]
                    }
                }
            ]
        },

        // 27. How do you insert an image in the HTML webpage?
        {
            id: 27,
            question: "How do you insert an image in the HTML webpage?",
            answer: [
                {
                    type: "text",
                    content: `Images are inserted using the <img> tag. You must specify the src attribute for the image path and the alt attribute for accessibility.`
                },
                {
                    type: "code",
                    content: `<img src="image.jpg" alt="Sample Image" width="300" height="200">`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Attribute", "Purpose", "Example"],
                        rows: [
                            ["src", "Specifies the path to the image", "<img src='image.jpg'>"],
                            ["alt", "Provides alternative text for the image", "<img alt='Sample Image'>"],
                            ["width", "Sets image width", "<img width='300'>"],
                            ["height", "Sets image height", "<img height='200'>"]
                        ]
                    }
                }
            ]
        },

        // 28. What is the alt attribute in HTML?
        {
            id: 28,
            question: "What is the alt attribute in HTML?",
            answer: [
                {
                    type: "text",
                    content: `The alt attribute provides **alternative text** for images. It improves accessibility and displays text if the image fails to load.`
                },
                {
                    type: "code",
                    content: `<img src="logo.png" alt="Company Logo">`,
                    language: "html"
                }
            ]
        },

        // 29. How are hyperlinks inserted in the HTML webpage?
        {
            id: 29,
            question: "How are hyperlinks inserted in the HTML webpage?",
            answer: [
                {
                    type: "text",
                    content: `Hyperlinks are inserted using the <a> (anchor) tag. The href attribute defines the target URL.`
                },
                {
                    type: "code",
                    content: `<a href="https://www.example.com">Visit Example</a>
<a href="page2.html">Go to Page 2</a>`,
                    language: "html"
                }
            ]
        },

        // 30. How do you add color to the text in HTML?
        {
            id: 30,
            question: "How do you add color to the text in HTML?",
            answer: [
                {
                    type: "text",
                    content: `Text color can be added using the style attribute with CSS or using internal/external style sheets.`
                },
                {
                    type: "code",
                    content: `<!-- Inline CSS -->
<p style="color: red;">This text is red.</p>

<!-- Internal CSS -->
<style>
  p { color: blue; }
</style>
<p>This text is blue.</p>`,
                    language: "html"
                }
            ]
        },

        // 31. How do you add CSS styling in HTML?
        {
            id: 31,
            question: "How do you add CSS styling in HTML?",
            answer: [
                {
                    type: "text",
                    content: `CSS styling can be added in three ways: inline, internal, or external.`
                },
                {
                    type: "code",
                    content: `<!-- Inline CSS -->
<p style="color: red;">Red Text</p>

<!-- Internal CSS -->
<style>
  p { font-size: 18px; color: blue; }
</style>
<p>Blue Text</p>

<!-- External CSS -->
<link rel="stylesheet" href="styles.css">`,
                    language: "html"
                }
            ]
        },

        // 32. What hierarchy do the style sheets follow?
        {
            id: 32,
            question: "What hierarchy do the style sheets follow?",
            answer: [
                {
                    type: "text",
                    content: `When multiple CSS styles are applied, browsers follow this hierarchy: Inline > Internal > External. Inline styles override internal and external styles, and internal styles override external styles.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Style Type", "Priority/Hierarchy", "Example"],
                        rows: [
                            ["Inline CSS", "Highest priority", "<p style='color:red;'>Text</p>"],
                            ["Internal CSS", "Medium priority", "<style>p{color:blue;}</style>"],
                            ["External CSS", "Lowest priority", "<link rel='stylesheet' href='style.css'>"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `<!-- Example -->
<style>
  p { color: blue; } /* Internal CSS */
</style>
<p style="color: red;">This text will be red due to inline CSS.</p>`,
                    language: "html"
                }
            ]
        },

    ],
    advanced: [
        // 33. What are the different types of lists in HTML?
        {
            id: 33,
            question: "What are the different types of lists in HTML?",
            answer: [
                {
                    type: "text",
                    content: `HTML provides three main types of lists: unordered lists (<ul>), ordered lists (<ol>), and description lists (<dl>). Each serves a different purpose for organizing content.`
                },
                {
                    type: "code",
                    content: `<!-- Unordered List -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>First</li>
  <li>Second</li>
</ol>

<!-- Description List -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["List Type", "Purpose", "Tag"],
                        rows: [
                            ["Unordered List", "Displays items with bullets", "<ul>"],
                            ["Ordered List", "Displays items with numbers", "<ol>"],
                            ["Description List", "Displays terms with descriptions", "<dl>"]
                        ]
                    }
                }
            ]
        },

        // 34. What is the ‘class' attribute in HTML?
        {
            id: 34,
            question: "What is the ‘class' attribute in HTML?",
            answer: [
                {
                    type: "text",
                    content: `The 'class' attribute assigns a **class name** to an HTML element. Multiple elements can share the same class, and CSS or JavaScript can target them collectively.`
                },
                {
                    type: "code",
                    content: `<p class="highlight">This paragraph is highlighted.</p>
<div class="highlight">This div is also highlighted.</div>`,
                    language: "html"
                }
            ]
        },

        // 35. What is the difference between the ‘id' and ‘class' attributes of HTML elements?
        {
            id: 35,
            question: "What is the difference between the ‘id' and ‘class' attributes of HTML elements?",
            answer: [
                {
                    type: "text",
                    content: `The 'id' attribute is unique for a single element on a page, while the 'class' attribute can be shared among multiple elements. 'id' is often used for unique styling or DOM access, while 'class' is used for grouping similar elements.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Attribute", "Uniqueness", "Usage", "Example"],
                        rows: [
                            ["id", "Unique per page", "Target a single element", "<div id='header'></div>"],
                            ["class", "Can be shared", "Group multiple elements", "<p class='highlight'></p>"]
                        ]
                    }
                }
            ]
        },

        // 36. What is the difference between HTML and XHTML?
        {
            id: 36,
            question: "What is the difference between HTML and XHTML?",
            answer: [
                {
                    type: "text",
                    content: `XHTML is a stricter, XML-based version of HTML. Key differences include syntax rules: XHTML requires all tags to be closed, lowercase, and properly nested, whereas HTML is more lenient.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Aspect", "HTML", "XHTML"],
                        rows: [
                            ["Syntax", "Flexible, not strictly enforced", "Strict, follows XML rules"],
                            ["Case Sensitivity", "Tags not case-sensitive", "Tags must be lowercase"],
                            ["Tag Closure", "Optional for some tags", "All tags must be closed"],
                            ["Document Type", "HTML doctype declaration", "XHTML doctype declaration required"]
                        ]
                    }
                }
            ]
        },

        // 37. What is the difference between HTML and HTML5?
        {
            id: 37,
            question: "What is the difference between HTML and HTML5?",
            answer: [
                {
                    type: "text",
                    content: `HTML5 is the latest version of HTML. It introduces **new semantic tags, multimedia support, APIs, and improved form elements** compared to previous HTML versions.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Feature", "HTML", "HTML5"],
                        rows: [
                            ["Doctype", "Complex declaration", "<!DOCTYPE HTML PUBLIC ...>", "<!DOCTYPE html>"],
                            ["New Elements", "Limited semantic elements", "header, footer, nav, section, article, video, audio, canvas"],
                            ["Multimedia Support", "Needs plugins for audio/video", "Native audio and video tags"],
                            ["APIs", "Limited", "Drag & Drop, Web Storage, Geolocation, etc."]
                        ]
                    }
                }
            ]
        },

        // 38. What is the role of the <head> tag in HTML?
        {
            id: 38,
            question: "What is the role of the <head> tag in HTML?",
            answer: [
                {
                    type: "text",
                    content: `The <head> tag contains **metadata and links** about the HTML document, such as the title, CSS, JavaScript, and meta information. Content inside <head> is not displayed directly on the page.`
                },
                {
                    type: "code",
                    content: `<head>
  <title>My Webpage</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
  <script src="script.js"></script>
</head>`,
                    language: "html"
                }
            ]
        },

        // 39. What is the role of the <meta> tag in HTML?
        {
            id: 39,
            question: "What is the role of the <meta> tag in HTML?",
            answer: [
                {
                    type: "text",
                    content: `The <meta> tag provides **metadata** about the HTML document, such as character encoding, viewport settings, author, description, and keywords.`
                },
                {
                    type: "code",
                    content: `<meta charset="UTF-8">
<meta name="description" content="This is a sample website">
<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
                    language: "html"
                }
            ]
        },

        // 40. What is the difference between an absolute and relative URL?
        {
            id: 40,
            question: "What is the difference between an absolute and relative URL?",
            answer: [
                {
                    type: "text",
                    content: `An absolute URL provides the full path including protocol and domain, while a relative URL specifies the path relative to the current page.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["URL Type", "Definition", "Example"],
                        rows: [
                            ["Absolute URL", "Full path including domain", "https://www.example.com/images/logo.png"],
                            ["Relative URL", "Path relative to current file", "images/logo.png"]
                        ]
                    }
                }
            ]
        },

        // 41. What is the role of the alt attribute in HTML?
        {
            id: 41,
            question: "What is the role of the alt attribute in HTML?",
            answer: [
                {
                    type: "text",
                    content: `The alt attribute provides **alternative text** for images, improving accessibility and SEO. It is displayed if the image cannot be loaded.`
                },
                {
                    type: "code",
                    content: `<img src="logo.png" alt="Company Logo">`,
                    language: "html"
                }
            ]
        },

        // 42. What is the role of the title attribute in HTML?
        {
            id: 42,
            question: "What is the role of the title attribute in HTML?",
            answer: [
                {
                    type: "text",
                    content: `The title attribute provides additional information about an element. When the user hovers over the element, the title text is displayed as a tooltip.`
                },
                {
                    type: "code",
                    content: `<a href="https://www.example.com" title="Visit Example Website">Example</a>
<p title="This is a tooltip">Hover over me</p>`,
                    language: "html"
                }
            ]
        },

        // 43. What is a form in HTML?
        {
            id: 43,
            question: "What is a form in HTML?",
            answer: [
                {
                    type: "text",
                    content: `A form in HTML (<form> tag) is used to **collect user input**. It can contain input fields, checkboxes, radio buttons, text areas, and submit buttons. Forms often send data to a server for processing.`
                },
                {
                    type: "code",
                    content: `<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  <br>
  <input type="submit" value="Submit">
</form>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Form Attribute", "Purpose", "Example"],
                        rows: [
                            ["action", "URL to send form data", "<form action='/submit'>"],
                            ["method", "HTTP method to send data", "<form method='post'>"],
                            ["name", "Name of form or input field", "<input name='email'>"],
                            ["id", "Unique identifier for the element", "<input id='email'>"]
                        ]
                    }
                }
            ]
        },
        // 44. What are the different types of form input fields in HTML?
        {
            id: 44,
            question: "What are the different types of form input fields in HTML?",
            answer: [
                {
                    type: "text",
                    content: `HTML provides multiple input types to collect various kinds of user data. Using the 'type' attribute, you can define the input field's purpose.`
                },
                {
                    type: "code",
                    content: `<form>
  <input type="text" name="username" placeholder="Enter your name">
  <input type="password" name="password" placeholder="Enter password">
  <input type="email" name="email" placeholder="Enter your email">
  <input type="number" name="age" placeholder="Enter your age">
  <input type="checkbox" name="subscribe"> Subscribe
  <input type="radio" name="gender" value="male"> Male
  <input type="radio" name="gender" value="female"> Female
  <input type="file" name="resume">
  <input type="submit" value="Submit">
</form>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Input Type", "Purpose", "Example"],
                        rows: [
                            ["text", "Single-line text input", "<input type='text'>"],
                            ["password", "Password field (hidden characters)", "<input type='password'>"],
                            ["email", "Email input with validation", "<input type='email'>"],
                            ["number", "Numeric input", "<input type='number'>"],
                            ["checkbox", "Multiple selection", "<input type='checkbox'>"],
                            ["radio", "Single selection from options", "<input type='radio'>"],
                            ["file", "Upload a file", "<input type='file'>"],
                            ["submit", "Submit form", "<input type='submit'>"]
                        ]
                    }
                }
            ]
        },

        // 45. What is the role of the action attribute in HTML forms?
        {
            id: 45,
            question: "What is the role of the action attribute in HTML forms?",
            answer: [
                {
                    type: "text",
                    content: `The action attribute specifies the **URL to which the form data will be sent** when the form is submitted.`
                },
                {
                    type: "code",
                    content: `<form action="/submit-form" method="post">
  <input type="text" name="username">
  <input type="submit" value="Submit">
</form>`,
                    language: "html"
                }
            ]
        },

        // 46. What is the role of the method attribute in HTML forms?
        {
            id: 46,
            question: "What is the role of the method attribute in HTML forms?",
            answer: [
                {
                    type: "text",
                    content: `The method attribute defines the **HTTP method** used to send form data. Common values are "GET" and "POST". GET appends data to the URL, while POST sends data in the request body.`
                },
                {
                    type: "code",
                    content: `<form action="/submit-form" method="get">
  <input type="text" name="username">
  <input type="submit" value="Submit">
</form>

<form action="/submit-form" method="post">
  <input type="text" name="username">
  <input type="submit" value="Submit">
</form>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Method", "Description", "Usage"],
                        rows: [
                            ["GET", "Appends form data to URL, suitable for non-sensitive info", "<form method='get'>"],
                            ["POST", "Sends form data in request body, suitable for sensitive info", "<form method='post'>"]
                        ]
                    }
                }
            ]
        },

        // 47. In how many ways can you display HTML elements?
        {
            id: 47,
            question: "In how many ways can you display HTML elements?",
            answer: [
                {
                    type: "text",
                    content: `HTML elements can be displayed in three main ways using the CSS display property: block, inline, and inline-block. Each affects layout and spacing differently.`
                },
                {
                    type: "code",
                    content: `<!-- Block element: occupies full width -->
<div style="display:block; background-color:lightblue;">Block Element</div>

<!-- Inline element: occupies only required width -->
<span style="display:inline; background-color:lightgreen;">Inline Element</span>

<!-- Inline-block: behaves like inline but allows width/height -->
<span style="display:inline-block; width:150px; background-color:lightcoral;">Inline-Block Element</span>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Display Type", "Description", "Example"],
                        rows: [
                            ["block", "Starts on a new line and takes full width", "<div>, <p>, <h1>"],
                            ["inline", "Does not start on a new line, width/height ignored", "<span>, <a>, <b>"],
                            ["inline-block", "Acts like inline but width/height can be set", "<img>, <button>"]
                        ]
                    }
                }
            ]
        },
        // 48. What is the difference between “display: none” and “visibility: hidden” when used as attributes to the HTML element?
        {
            id: 48,
            question: "What is the difference between 'display: none' and 'visibility: hidden' when used as attributes to the HTML element?",
            answer: [
                {
                    type: "text",
                    content: `'display: none' completely removes the element from the layout, so it does not occupy any space. 'visibility: hidden' hides the element but it still occupies space in the layout.`
                },
                {
                    type: "code",
                    content: `<!-- display: none -->
<p style="display:none;">This paragraph is hidden and takes no space.</p>

<!-- visibility: hidden -->
<p style="visibility:hidden;">This paragraph is hidden but still occupies space.</p>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Property", "Effect", "Space in Layout", "Example"],
                        rows: [
                            ["display: none", "Element is removed from page flow", "No space occupied", "<p style='display:none;'>Hidden</p>"],
                            ["visibility: hidden", "Element is invisible but still occupies space", "Space is maintained", "<p style='visibility:hidden;'>Hidden</p>"]
                        ]
                    }
                }
            ]
        },

        // 49. How to specify the link in HTML and explain the target attribute?
        {
            id: 49,
            question: "How to specify the link in HTML and explain the target attribute?",
            answer: [
                {
                    type: "text",
                    content: `Links are created using the <a> (anchor) tag. The href attribute specifies the URL, while the target attribute defines **where the linked page will open**.`
                },
                {
                    type: "code",
                    content: `<!-- Open link in the same tab (default) -->
<a href="https://www.example.com">Open in Same Tab</a>

<!-- Open link in a new tab -->
<a href="https://www.example.com" target="_blank">Open in New Tab</a>

<!-- Open link in parent frame -->
<a href="https://www.example.com" target="_parent">Open in Parent Frame</a>

<!-- Open link in top frame -->
<a href="https://www.example.com" target="_top">Open in Top Frame</a>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Target Value", "Description"],
                        rows: [
                            ["_self", "Default. Opens link in the same tab"],
                            ["_blank", "Opens link in a new tab or window"],
                            ["_parent", "Opens link in the parent frame"],
                            ["_top", "Opens link in the full body of the window"]
                        ]
                    }
                }
            ]
        },

        // 50. In how many ways can we specify the CSS styles for the HTML element?
        {
            id: 50,
            question: "In how many ways can we specify the CSS styles for the HTML element?",
            answer: [
                {
                    type: "text",
                    content: `CSS can be applied to HTML elements in three ways: inline, internal, and external. Each method has its use cases and priority.`
                },
                {
                    type: "code",
                    content: `<!-- Inline CSS -->
<p style="color:red; font-size:16px;">Inline styled text</p>

<!-- Internal CSS -->
<style>
  p { color: blue; font-size: 18px; }
</style>
<p>Internal styled text</p>

<!-- External CSS -->
<link rel="stylesheet" href="style.css">
<p>External styled text</p>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["CSS Type", "Definition", "Example"],
                        rows: [
                            ["Inline", "Applied directly using the style attribute", "<p style='color:red;'>Text</p>"],
                            ["Internal", "Defined in <style> tag within HTML file", "<style>p{color:blue;}</style>"],
                            ["External", "Defined in separate CSS file and linked using <link>", "<link rel='stylesheet' href='style.css'>"]
                        ]
                    }
                }
            ]
        },

        // 51. What is the difference between link tag <link> and anchor tag <a>?
        {
            id: 51,
            question: "What is the difference between link tag <link> and anchor tag <a>?",
            answer: [
                {
                    type: "text",
                    content: `The <link> tag is used to **link external resources** like CSS, icons, or prefetch files and does not create clickable content. The <a> tag creates a **hyperlink** that users can click to navigate to another page or resource.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Tag", "Purpose", "Clickable", "Example"],
                        rows: [
                            ["<link>", "Links external resources (CSS, icons)", "No", "<link rel='stylesheet' href='style.css'>"],
                            ["<a>", "Creates a hyperlink for navigation", "Yes", "<a href='https://example.com'>Visit Example</a>"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `<!-- Using <link> to include CSS -->
<link rel="stylesheet" href="style.css">

<!-- Using <a> to create a clickable link -->
<a href="https://www.example.com">Go to Example</a>`,
                    language: "html"
                }
            ]
        },
        // 52. When to use scripts in the head and when to use scripts in the body?
        {
            id: 52,
            question: "When to use scripts in the head and when to use scripts in the body?",
            answer: [
                {
                    type: "text",
                    content: `Scripts in the <head> are loaded before the page content. Use them for essential scripts that must run before rendering (like libraries or polyfills). Scripts at the end of the <body> load after the page content, improving page load speed and user experience.`
                },
                {
                    type: "code",
                    content: `<!-- Script in head (loads before content) -->
<head>
  <script src="library.js"></script>
</head>

<!-- Script at the end of body (recommended for page performance) -->
<body>
  <p>Page content</p>
  <script src="script.js"></script>
</body>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Placement", "When to Use", "Effect"],
                        rows: [
                            ["<head>", "Essential libraries, polyfills, critical scripts", "Blocks rendering until script loads"],
                            ["End of <body>", "General scripts, page interactions, performance improvement", "Page loads first, then script executes"]
                        ]
                    }
                }
            ]
        },

        // 53. What are forms, and how to create forms in HTML?
        {
            id: 53,
            question: "What are forms, and how to create forms in HTML?",
            answer: [
                {
                    type: "text",
                    content: `Forms are used to **collect user input** such as text, selections, files, and buttons. Forms are created using the <form> tag, and inputs are added using <input>, <textarea>, <select>, and <button> elements.`
                },
                {
                    type: "code",
                    content: `<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  <br>
  <textarea name="message" placeholder="Your message"></textarea>
  <br>
  <select name="country">
    <option value="india">India</option>
    <option value="usa">USA</option>
  </select>
  <br>
  <input type="submit" value="Submit">
</form>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Form Element", "Purpose", "Example"],
                        rows: [
                            ["<input>", "Text, password, email, number, radio, checkbox, etc.", "<input type='text'>"],
                            ["<textarea>", "Multi-line text input", "<textarea></textarea>"],
                            ["<select>", "Dropdown selection", "<select><option>Option</option></select>"],
                            ["<button>", "Clickable button", "<button>Submit</button>"]
                        ]
                    }
                }
            ]
        },

        // 54. How to handle events in HTML?
        {
            id: 54,
            question: "How to handle events in HTML?",
            answer: [
                {
                    type: "text",
                    content: `Events in HTML allow you to respond to user actions like clicks, mouse movements, key presses, and form submissions. They can be handled using **inline event attributes**, JavaScript functions, or event listeners.`
                },
                {
                    type: "code",
                    content: `<!-- Inline event -->
<button onclick="alert('Button clicked!')">Click Me</button>

<!-- JavaScript function -->
<script>
function showMessage() {
  alert('Hello!');
}
</script>
<button onclick="showMessage()">Click Me</button>

<!-- Event listener -->
<script>
const btn = document.getElementById('myBtn');
btn.addEventListener('click', () => {
  alert('Event listener triggered!');
});
</script>
<button id="myBtn">Click Me</button>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Event Type", "Description", "Example"],
                        rows: [
                            ["onclick", "Triggered when element is clicked", "<button onclick='alert()'>Click</button>"],
                            ["onmouseover", "Triggered when mouse hovers over element", "<div onmouseover='highlight()'>Hover</div>"],
                            ["onchange", "Triggered when input value changes", "<input type='text' onchange='update()'>"],
                            ["onsubmit", "Triggered when form is submitted", "<form onsubmit='validate()'>"]
                        ]
                    }
                }
            ]
        },

        // 55. What are some advantages of HTML5 over its previous versions?
        {
            id: 55,
            question: "What are some advantages of HTML5 over its previous versions?",
            answer: [
                {
                    type: "text",
                    content: `HTML5 introduces several advantages: better semantics, multimedia support, improved form controls, APIs for offline storage, canvas for graphics, and mobile-friendly features. It also reduces dependency on plugins like Flash.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Feature", "HTML5 Advantage", "Example/Use"],
                        rows: [
                            ["Semantic Elements", "Improves code readability and SEO", "<header>, <footer>, <nav>, <article>"],
                            ["Multimedia", "Native audio/video support", "<audio>, <video>"],
                            ["Form Controls", "New input types with validation", "<input type='email', type='date'>"],
                            ["Canvas & SVG", "Draw graphics directly in browser", "<canvas>, <svg>"],
                            ["APIs", "Supports offline storage, drag & drop, geolocation", "localStorage, navigator.geolocation"],
                            ["Mobile-Friendly", "Responsive design and better mobile support", "viewport meta tag, media queries"]
                        ]
                    }
                }
            ]
        },
    ],
    html5: [
        // 1. What is new about the relationship between the <header> and <h1> tags in HTML5?
        {
            id: 1,
            question: "What is new about the relationship between the <header> and <h1> tags in HTML5?",
            answer: [
                {
                    type: "text",
                    content: `In HTML5, the <header> element is a **semantic container** for introductory content or navigational links. The <h1> tag represents the main heading within its parent section. The new relationship is that an <h1> inside a <header> applies **contextually to that section**, not necessarily the entire page. This allows multiple <h1> tags on a page when using multiple sections, improving semantic structure and accessibility.`
                },
                {
                    type: "code",
                    content: `<!-- Example: Multiple sections each with own header -->
<section>
  <header>
    <h1>About Us</h1>
    <p>Introduction to our company.</p>
  </header>
  <p>Details about the company...</p>
</section>

<section>
  <header>
    <h1>Services</h1>
    <p>What we offer</p>
  </header>
  <p>Details about services...</p>
</section>`,
                    language: "html"
                },
                {
                    type: "table",
                    content: {
                        headers: ["Tag", "Purpose", "HTML5 Improvement"],
                        rows: [
                            ["<header>", "Container for introductory or navigational content", "Can contain <h1> specific to that section"],
                            ["<h1>", "Main heading", "Contextual to the parent section instead of entire page"]
                        ]
                    }
                }
            ]
        },
        // 2. What are inline and block elements in HTML5?
        {
            id: 2,
            question: "What are inline and block elements in HTML5?",
            answer: [
                {
                    type: "text",
                    content: `In HTML5, elements are categorized into **block-level** and **inline-level** elements based on how they behave in the layout:`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Type", "Description", "Examples"],
                        rows: [
                            ["Block Elements", "Start on a new line and take up full width by default.", "<div>, <section>, <article>, <p>, <header>, <footer>, <h1>-<h6>"],
                            ["Inline Elements", "Do not start on a new line and take up only the necessary width.", "<span>, <a>, <strong>, <em>, <img>, <label>"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `<!-- Block element -->
<p>This is a block element. It starts on a new line.</p>

<!-- Inline element -->
<span>This is inline</span>
<strong>and so is this.</strong>`,
                    language: "html"
                }
            ]
        },

        // 3. What is the difference between <figure> tag and <img> tag?
        {
            id: 3,
            question: "What is the difference between <figure> tag and <img> tag?",
            answer: [
                {
                    type: "text",
                    content: `The <img> tag is used to embed an image, while the <figure> tag is a **semantic container** for self-contained content like images, diagrams, or code snippets. The <figure> element can include an <img> along with a <figcaption> to provide a caption.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Tag", "Purpose", "Example"],
                        rows: [
                            ["<img>", "Embeds an image into the document", "<img src='image.jpg' alt='Sample'>"],
                            ["<figure>", "Groups media content with optional caption", "<figure><img src='img.jpg'><figcaption>Caption</figcaption></figure>"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `<!-- Using <img> alone -->
<img src="car.jpg" alt="Car">

<!-- Using <figure> with <figcaption> -->
<figure>
  <img src="car.jpg" alt="Car">
  <figcaption>A red sports car parked outside.</figcaption>
</figure>`,
                    language: "html"
                }
            ]
        },

        // 4. How to specify the metadata in HTML5?
        {
            id: 4,
            question: "How to specify the metadata in HTML5?",
            answer: [
                {
                    type: "text",
                    content: `Metadata in HTML5 is specified using the <meta> tag inside the <head> section. Metadata provides information about the document such as character encoding, author, description, keywords, and viewport settings.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Attribute", "Purpose", "Example"],
                        rows: [
                            ["charset", "Specifies character encoding", "<meta charset='UTF-8'>"],
                            ["name='description'", "Provides a description for SEO", "<meta name='description' content='HTML5 tutorial'>"],
                            ["name='keywords'", "Specifies keywords for SEO", "<meta name='keywords' content='HTML, HTML5, tutorial'>"],
                            ["name='author'", "Specifies the author of the page", "<meta name='author' content='John Doe'>"],
                            ["name='viewport'", "Controls scaling on mobile devices", "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `<head>
  <meta charset="UTF-8">
  <meta name="description" content="Learn HTML5 interview questions">
  <meta name="keywords" content="HTML, HTML5, Interview">
  <meta name="author" content="Jane Doe">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`,
                    language: "html"
                }
            ]
        },
        // 5. Are the <datalist> tag and <select> tag the same?
        {
            id: 5,
            question: "Are the <datalist> tag and <select> tag the same?",
            answer: [
                {
                    type: "text",
                    content: `No, the <datalist> and <select> tags are not the same. Both provide options for the user to choose from, but they behave differently:`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Tag", "Purpose", "Key Difference", "Example"],
                        rows: [
                            ["<select>", "Creates a dropdown list with fixed options", "User must choose only from predefined options", "<select><option>A</option></select>"],
                            ["<datalist>", "Provides an autocomplete list of suggestions", "User can choose from suggestions OR type their own value", "<input list='options'><datalist id='options'><option>A</option></datalist>"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `<!-- Using <select> -->
<label for="cars">Choose a car:</label>
<select id="cars" name="cars">
  <option value="audi">Audi</option>
  <option value="bmw">BMW</option>
</select>

<!-- Using <datalist> -->
<label for="browser">Choose a browser:</label>
<input list="browsers" id="browser" name="browser">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
</datalist>`,
                    language: "html"
                }
            ]
        },

        // 6. Define Image Map.
        {
            id: 6,
            question: "Define Image Map.",
            answer: [
                {
                    type: "text",
                    content: `An Image Map in HTML allows you to make different parts of a single image clickable, linking to different destinations. It is created using the <map> tag with multiple <area> tags defining clickable regions.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Tag", "Purpose", "Attribute Used"],
                        rows: [
                            ["<map>", "Defines an image map", "name"],
                            ["<area>", "Defines clickable regions within the image", "shape, coords, href, alt"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `<!-- Image with clickable areas -->
<img src="world-map.jpg" usemap="#worldmap" alt="World Map">

<map name="worldmap">
  <area shape="rect" coords="34,44,270,350" href="continent1.html" alt="Continent 1">
  <area shape="circle" coords="477,300,44" href="continent2.html" alt="Continent 2">
</map>`,
                    language: "html"
                }
            ]
        },

        // 7. What are Semantic Elements?
        {
            id: 7,
            question: "What are Semantic Elements?",
            answer: [
                {
                    type: "text",
                    content: `Semantic elements are HTML5 elements that clearly describe their meaning in a human- and machine-readable way. They improve code readability, SEO, and accessibility.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Semantic Element", "Purpose"],
                        rows: [
                            ["<header>", "Defines introductory content or navigation links"],
                            ["<nav>", "Defines a navigation section"],
                            ["<article>", "Represents self-contained content such as an article or blog post"],
                            ["<section>", "Defines a section in the document"],
                            ["<footer>", "Defines footer content for a section or page"],
                            ["<aside>", "Defines content indirectly related to the main content (e.g., sidebar)"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `<!-- Example of semantic HTML5 elements -->
<header>
  <h1>My Blog</h1>
  <nav>
    <a href="/home">Home</a> | <a href="/about">About</a>
  </nav>
</header>

<section>
  <article>
    <h2>First Post</h2>
    <p>This is an article inside a section.</p>
  </article>
</section>

<aside>
  <p>Related links go here.</p>
</aside>

<footer>
  <p>&copy; 2025 My Blog</p>
</footer>`,
                    language: "html"
                }
            ]
        },
        // 8. What is the difference between the <meter> tag and <progress> tag?
        {
            id: 8,
            question: "What is the difference between the <meter> tag and <progress> tag?",
            answer: [
                {
                    type: "text",
                    content: `Both <meter> and <progress> represent values, but they serve different purposes:`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Tag", "Purpose", "Use Case", "Attributes"],
                        rows: [
                            ["<meter>", "Represents a scalar measurement within a known range", "Showing scores, ratings, disk usage", "min, max, value, low, high, optimum"],
                            ["<progress>", "Represents the completion progress of a task", "Showing file upload/download progress", "max, value"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `<!-- Meter Example -->
<label for="disk">Disk Usage:</label>
<meter id="disk" value="6" min="0" max="10">6 out of 10</meter>

<!-- Progress Example -->
<label for="upload">File Upload:</label>
<progress id="upload" value="40" max="100">40%</progress>`,
                    language: "html"
                }
            ]
        },

        // 9. Is drag and drop possible using HTML5, and how?
        {
            id: 9,
            question: "Is drag and drop possible using HTML5, and how?",
            answer: [
                {
                    type: "text",
                    content: `Yes ✅ HTML5 provides built-in drag-and-drop functionality using the Drag and Drop API. You can make elements draggable and define drop zones using specific attributes and event listeners.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Attribute/Event", "Purpose"],
                        rows: [
                            ["draggable='true'", "Makes an element draggable"],
                            ["ondragstart", "Fires when the drag starts"],
                            ["ondragover", "Specifies where a draggable element can be dropped (must preventDefault)"],
                            ["ondrop", "Handles the drop action"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `<!-- Drag and Drop Example -->
<div id="drag1" draggable="true" ondragstart="drag(event)" style="width:100px;height:100px;background:red;"></div>

<div id="dropZone" ondrop="drop(event)" ondragover="allowDrop(event)" 
     style="width:200px;height:200px;border:1px solid black;margin-top:20px;">
  Drop here
</div>

<script>
function allowDrop(ev) {
  ev.preventDefault(); // Necessary to allow drop
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
</script>`,
                    language: "html"
                }
            ]
        },

        // 10. What is the difference between SVG and Canvas HTML5 elements?
        {
            id: 10,
            question: "What is the difference between SVG and Canvas HTML5 elements?",
            answer: [
                {
                    type: "text",
                    content: `Both SVG and Canvas are used to draw graphics in HTML5, but they work differently:`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Feature", "SVG", "Canvas"],
                        rows: [
                            ["Definition", "Scalable Vector Graphics (XML-based)", "Bitmap-based drawing surface"],
                            ["Scalability", "Resolution-independent (scales without loss)", "Resolution-dependent (pixel-based, loses quality when scaled)"],
                            ["DOM Support", "Each shape is part of the DOM and can be styled/animated", "Drawings are not DOM elements; must redraw for updates"],
                            ["Best For", "Static images, diagrams, charts", "Dynamic graphics, real-time rendering (games, animations)"],
                            ["Performance", "Slower for complex, dynamic graphics", "Faster for pixel-heavy rendering"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `<!-- SVG Example -->
<svg width="200" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="red"></circle>
</svg>

<!-- Canvas Example -->
<canvas id="myCanvas" width="200" height="100" style="border:1px solid black;"></canvas>
<script>
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(20, 20, 150, 60);
</script>`,
                    language: "html"
                }
            ]
        },
        // 11. What type of audio files can be played using HTML5?
        {
            id: 11,
            question: "What type of audio files can be played using HTML5?",
            answer: [
                {
                    type: "text",
                    content: `HTML5 introduced the <audio> tag that allows embedding sound content without plugins. However, supported audio formats depend on the browser.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Format", "MIME Type", "Browser Support"],
                        rows: [
                            ["MP3", "audio/mpeg", "Widely supported in all modern browsers"],
                            ["Ogg Vorbis", "audio/ogg", "Supported in Firefox, Opera, Chrome"],
                            ["WAV", "audio/wav", "Supported in most browsers but larger file size"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `<!-- Example: HTML5 Audio -->
<audio controls>
  <source src="music.mp3" type="audio/mpeg">
  <source src="music.ogg" type="audio/ogg">
  <source src="music.wav" type="audio/wav">
  Your browser does not support the audio element.
</audio>`,
                    language: "html"
                }
            ]
        },

        // 12. What are the significant goals of the HTML5 specification?
        {
            id: 12,
            question: "What are the significant goals of the HTML5 specification?",
            answer: [
                {
                    type: "text",
                    content: `The HTML5 specification was designed with several key goals to improve web development:`
                },
                {
                    type: "list",
                    content: [
                        "**Better Multimedia Support** – Native support for audio, video, and graphics (Canvas, SVG).",
                        "**Cross-Platform Compatibility** – Works seamlessly on desktops, mobiles, tablets, and smart devices.",
                        "**Cleaner Markup & Semantics** – Introduction of semantic elements like <header>, <footer>, <article>, <section> for more meaningful structure.",
                        "**Improved User Experience** – Offline storage, geolocation, drag-and-drop, and interactive APIs.",
                        "**Performance Improvements** – Reduced need for external plugins (like Flash), faster rendering, lightweight structure.",
                        "**Accessibility** – Better support for screen readers and SEO through semantic elements."
                    ]
                }
            ]
        },

        // 13. Explain the concept of web storage in HTML5.
        {
            id: 13,
            question: "Explain the concept of web storage in HTML5.",
            answer: [
                {
                    type: "text",
                    content: `Web storage in HTML5 provides a way to store key-value pairs in the browser, allowing data to persist beyond a single page refresh without using cookies.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Type", "Description", "Lifetime"],
                        rows: [
                            ["localStorage", "Stores data with no expiration date", "Persists even after browser is closed and reopened"],
                            ["sessionStorage", "Stores data for one session", "Cleared once the browser tab is closed"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `<!-- Example: localStorage -->
<script>
  // Save data
  localStorage.setItem("username", "Mukesh");

  // Retrieve data
  const user = localStorage.getItem("username");
  console.log(user); // Mukesh

  // Remove data
  localStorage.removeItem("username");
</script>

<!-- Example: sessionStorage -->
<script>
  sessionStorage.setItem("theme", "dark");
  console.log(sessionStorage.getItem("theme")); // dark
</script>`,
                    language: "html"
                },
                {
                    type: "text",
                    content: `✅ Advantage: More secure and larger storage capacity than cookies (5–10 MB vs. 4 KB).`
                }
            ]
        },
        // 14. What is Microdata in HTML5?
        {
            id: 14,
            question: "What is Microdata in HTML5?",
            answer: [
                {
                    type: "text",
                    content: `Microdata is a feature in HTML5 that allows you to **embed machine-readable metadata** within HTML content. It helps search engines and web crawlers understand the content better, improving SEO and rich snippets in search results.`
                },
                {
                    type: "list",
                    content: [
                        "**itemscope** – Defines that the element contains microdata.",
                        "**itemtype** – Specifies the type of item (usually a vocabulary URL like Schema.org).",
                        "**itemprop** – Defines a property of the item (like name, author, price)."
                    ]
                },
                {
                    type: "code",
                    content: `<!-- Example of Microdata -->
<div itemscope itemtype="https://schema.org/Person">
  <span itemprop="name">Mukesh Saroj</span>
  <span itemprop="jobTitle">Full Stack Developer</span>
  <span itemprop="email">mukesh@example.com</span>
</div>`,
                    language: "html"
                }
            ]
        },

        // 15. Which tag is used to represent the result of a calculation? Explain its attributes.
        {
            id: 15,
            question: "Which tag is used to represent the result of a calculation? Explain its attributes.",
            answer: [
                {
                    type: "text",
                    content: `The <output> tag in HTML5 is used to represent the **result of a calculation** or user interaction. It is often used inside forms.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Attribute", "Description", "Example"],
                        rows: [
                            ["for", "Associates the <output> element with input controls", "<output for='a b'>"],
                            ["form", "Specifies the form the <output> belongs to", "<output form='calcForm'>"],
                            ["name", "Specifies the name for referencing the result in JavaScript", "<output name='result'>"]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `<!-- Example of <output> -->
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="number" id="a" value="5"> +
  <input type="number" id="b" value="10"> =
  <output name="result" for="a b"></output>
</form>`,
                    language: "html"
                }
            ]
        },

        // 16. How can we include audio or video in a webpage?
        {
            id: 16,
            question: "How can we include audio or video in a webpage?",
            answer: [
                {
                    type: "text",
                    content: `HTML5 provides the <audio> and <video> tags to embed multimedia content without requiring third-party plugins like Flash.`
                },
                {
                    type: "list",
                    content: [
                        "**<audio> tag** – Used to add sound files like MP3, OGG, WAV.",
                        "**<video> tag** – Used to embed video files like MP4, WebM, Ogg.",
                        "Both support attributes like **controls**, **autoplay**, **loop**, **muted**, and **preload**."
                    ]
                },
                {
                    type: "code",
                    content: `<!-- Example: Audio -->
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

<!-- Example: Video -->
<video width="400" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser does not support the video tag.
</video>`,
                    language: "html"
                }
            ]
        },
        // 17. Explain HTML5 Graphics.
        {
            id: 17,
            question: "Explain HTML5 Graphics.",
            answer: [
                {
                    type: "text",
                    content: `HTML5 provides powerful support for graphics and visual content through the <canvas> and <svg> elements. These enable dynamic rendering of shapes, images, and animations directly in the browser without relying on plugins.`
                },
                {
                    type: "list",
                    content: [
                        "**<canvas>** – A bitmap-based drawing surface that allows drawing graphics using JavaScript APIs. Good for dynamic, real-time graphics (e.g., games, charts).",
                        "**<svg>** – Scalable Vector Graphics format used for vector-based graphics. Ideal for resolution-independent diagrams, charts, and illustrations."
                    ]
                },
                {
                    type: "code",
                    content: `<!-- Example: Canvas -->
<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(20, 20, 150, 50);
</script>

<!-- Example: SVG -->
<svg width="200" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>`,
                    language: "html"
                }
            ]
        },

        // 18. Explain new input types provided by HTML5 for forms.
        {
            id: 18,
            question: "Explain new input types provided by HTML5 for forms.",
            answer: [
                {
                    type: "text",
                    content: `HTML5 introduced several new input types that enhance form usability, validation, and user experience without relying heavily on JavaScript.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Input Type", "Purpose", "Example"],
                        rows: [
                            ["email", "Validates email format", "<input type='email'>"],
                            ["url", "Validates URL format", "<input type='url'>"],
                            ["number", "Allows numeric input with step/min/max", "<input type='number' min='1' max='10'>"],
                            ["range", "Creates a slider control", "<input type='range' min='0' max='100'>"],
                            ["date", "Selects a date", "<input type='date'>"],
                            ["time", "Selects a time", "<input type='time'>"],
                            ["datetime-local", "Selects local date and time", "<input type='datetime-local'>"],
                            ["month", "Selects a month", "<input type='month'>"],
                            ["week", "Selects a week", "<input type='week'>"],
                            ["color", "Opens a color picker", "<input type='color'>"],
                            ["tel", "For telephone numbers", "<input type='tel'>"],
                            ["search", "Search box with clear option", "<input type='search'>"]
                        ]
                    }
                }
            ]
        },

        // 19. What are the New tags in Media Elements in HTML5?
        {
            id: 19,
            question: "What are the New tags in Media Elements in HTML5?",
            answer: [
                {
                    type: "text",
                    content: `HTML5 introduced several new tags to handle multimedia (audio and video) natively in the browser, without requiring plugins like Flash.`
                },
                {
                    type: "list",
                    content: [
                        "**<audio>** – Used to embed audio files.",
                        "**<video>** – Used to embed video files.",
                        "**<source>** – Defines multiple media sources for <audio> or <video>, ensuring cross-browser support.",
                        "**<track>** – Provides text tracks for media, such as subtitles, captions, or descriptions."
                    ]
                },
                {
                    type: "code",
                    content: `<!-- Example: Video with track -->
<video width="400" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">
  Your browser does not support the video tag.
</video>`,
                    language: "html"
                }
            ]
        },
        // 20. Why do you think adding drag-and-drop functionality in HTML5 is important? How will you make an image draggable in HTML5?
        {
            id: 20,
            question: "Why do you think adding drag-and-drop functionality in HTML5 is important? How will you make an image draggable in HTML5?",
            answer: [
                {
                    type: "text",
                    content: `Drag-and-drop functionality in HTML5 is important because it enhances **user interactivity** and allows dynamic manipulation of content directly in the browser. This is widely used in file uploads, dashboards, games, and task managers.`
                },
                {
                    type: "list",
                    content: [
                        "**Benefits**:",
                        "- Provides a native way to implement drag-and-drop without external libraries.",
                        "- Improves user experience for interactive UI elements.",
                        "- Useful for file handling, sorting lists, or moving UI widgets."
                    ]
                },
                {
                    type: "code",
                    content: `<!-- Example: Draggable Image -->
<img src="car.png" draggable="true" ondragstart="drag(event)" id="dragImg">

<div id="dropZone" ondrop="drop(event)" ondragover="allowDrop(event)"
     style="width:200px;height:200px;border:1px solid black;"></div>

<script>
  function allowDrop(ev) {
    ev.preventDefault();
  }
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
</script>`,
                    language: "html"
                }
            ]
        },

        // 21. Why do we need the MathML element in HTML5?
        {
            id: 21,
            question: "Why do we need the MathML element in HTML5?",
            answer: [
                {
                    type: "text",
                    content: `MathML (Mathematical Markup Language) is used in HTML5 to display mathematical notations and formulas directly in web pages. It is important for **education, research, and scientific publications**.`
                },
                {
                    type: "list",
                    content: [
                        "**Reasons for MathML**:",
                        "- Provides accessibility for screen readers (improving usability for visually impaired users).",
                        "- Standardizes math expressions across browsers.",
                        "- Eliminates the need to use images for mathematical symbols."
                    ]
                },
                {
                    type: "code",
                    content: `<!-- Example: MathML -->
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <msup>
    <mi>a</mi>
    <mn>2</mn>
  </msup>
  <mo>+</mo>
  <msup>
    <mi>b</mi>
    <mn>2</mn>
  </msup>
  <mo>=</mo>
  <msup>
    <mi>c</mi>
    <mn>2</mn>
  </msup>
</math>`,
                    language: "html"
                }
            ]
        },

        // 22. What are the server-sent events in HTML5?
        {
            id: 22,
            question: "What are the server-sent events in HTML5?",
            answer: [
                {
                    type: "text",
                    content: `Server-Sent Events (SSE) in HTML5 enable a web page to receive **automatic updates from a server** via an HTTP connection. Unlike WebSockets (full-duplex), SSE is **unidirectional (server → client)** and uses the EventSource API.`
                },
                {
                    type: "list",
                    content: [
                        "**Use cases**:",
                        "- Live news feeds or stock price updates",
                        "- Real-time notifications",
                        "- Monitoring dashboards"
                    ]
                },
                {
                    type: "code",
                    content: `<!-- Client-side: HTML5 SSE -->
<script>
  if (typeof(EventSource) !== "undefined") {
    const source = new EventSource("/events");
    source.onmessage = function(event) {
      document.getElementById("output").innerHTML += event.data + "<br>";
    };
  } else {
    alert("SSE not supported in this browser.");
  }
</script>
<div id="output"></div>

<!-- Server-side (example in Node.js/Express) -->
res.setHeader("Content-Type", "text/event-stream");
res.setHeader("Cache-Control", "no-cache");
res.setHeader("Connection", "keep-alive");
res.write("data: Hello client, this is a server-sent event!\\n\\n");`,
                    language: "html"
                }
            ]
        },
        // 23. What are Web Workers?
        {
            id: 23,
            question: "What are Web Workers?",
            answer: [
                {
                    type: "text",
                    content: `Web Workers in HTML5 are JavaScript scripts that run in the **background thread**, separate from the main execution thread of a web page. This allows heavy computations to be performed without blocking the user interface.`
                },
                {
                    type: "list",
                    content: [
                        "**Advantages**:",
                        "- Prevents UI freezing during intensive tasks.",
                        "- Enables parallel execution for better performance.",
                        "- Useful for tasks like image processing, data parsing, or large calculations."
                    ]
                },
                {
                    type: "code",
                    content: `<!-- main.js -->
<script>
  const worker = new Worker("worker.js");
  worker.postMessage("start");
  worker.onmessage = function(event) {
    console.log("Result from worker:", event.data);
  };
</script>

<!-- worker.js -->
self.onmessage = function(event) {
  if (event.data === "start") {
    let sum = 0;
    for (let i = 0; i < 1e8; i++) sum += i;
    postMessage(sum);
  }
};`,
                    language: "javascript"
                }
            ]
        },

        // 24. What is the usage of a novalidate attribute for the form tag that is introduced in HTML5?
        {
            id: 24,
            question: "What is the usage of a novalidate attribute for the form tag that is introduced in HTML5?",
            answer: [
                {
                    type: "text",
                    content: `The **novalidate** attribute is a Boolean attribute introduced in HTML5. When applied to a <form> element, it tells the browser **not to validate form fields** before submitting.`
                },
                {
                    type: "list",
                    content: [
                        "**Use cases**:",
                        "- When you want to handle validation entirely using JavaScript.",
                        "- When submitting test or partial data without triggering HTML5 validation rules."
                    ]
                },
                {
                    type: "code",
                    content: `<!-- Example: Form with novalidate -->
<form action="/submit" method="post" novalidate>
  <input type="email" name="userEmail" required>
  <button type="submit">Submit</button>
</form>`,
                    language: "html"
                }
            ]
        },

        // 25. What are raster images and vector images?
        {
            id: 25,
            question: "What are raster images and vector images?",
            answer: [
                {
                    type: "text",
                    content: `In web design and HTML5, images can broadly be categorized into **raster images** and **vector images**.`
                },
                {
                    type: "table",
                    content: {
                        headers: ["Type", "Definition", "Formats", "Use Cases"],
                        rows: [
                            [
                                "Raster Images",
                                "Made up of a fixed set of pixels; resolution-dependent.",
                                "JPEG, PNG, GIF, BMP",
                                "Photographs, detailed images"
                            ],
                            [
                                "Vector Images",
                                "Defined using mathematical formulas (lines, curves, shapes); resolution-independent.",
                                "SVG, EPS, PDF",
                                "Icons, logos, charts, illustrations"
                            ]
                        ]
                    }
                },
                {
                    type: "code",
                    content: `<!-- Example of using raster vs vector -->
<!-- Raster (pixel-based) -->
<img src="photo.jpg" alt="Nature Photo">

<!-- Vector (scalable) -->
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="green" />
</svg>`,
                    language: "html"
                }
            ]
        },
        // 26. How do you support SVG in old browsers?
        {
            id: 26,
            question: "How do you support SVG in old browsers?",
            answer: [
                {
                    type: "text",
                    content: `Older browsers that don’t support SVG require fallback methods. Developers can use:`
                },
                {
                    type: "list",
                    content: [
                        "1. **Fallback PNG/GIF images**: Provide a <img> tag fallback.",
                        "2. **VML (Vector Markup Language)**: Used in legacy IE versions.",
                        "3. **JavaScript libraries**: Like Raphaël.js or Modernizr to detect and polyfill SVG support."
                    ]
                },
                {
                    type: "code",
                    content: `<!-- Example of SVG with fallback -->
<object data="image.svg" type="image/svg+xml">
  <img src="fallback.png" alt="Fallback image">
</object>`,
                    language: "html"
                }
            ]
        },

        // 27. What are the different approaches to making an image responsive?
        {
            id: 27,
            question: "What are the different approaches to making an image responsive?",
            answer: [
                {
                    type: "list",
                    content: [
                        "**1. CSS scaling** – Using max-width: 100% and height: auto.",
                        "**2. <picture> element** – Define multiple sources for different screen sizes.",
                        "**3. srcset attribute** – Provide multiple image resolutions for high-DPI devices.",
                        "**4. Background images** – Use CSS background-size: cover or contain."
                    ]
                },
                {
                    type: "code",
                    content: `<!-- Example using srcset -->
<img src="image-small.jpg" 
     srcset="image-small.jpg 480w, image-medium.jpg 768w, image-large.jpg 1200w" 
     sizes="(max-width: 600px) 480px, (max-width: 900px) 768px, 1200px" 
     alt="Responsive image">`,
                    language: "html"
                }
            ]
        },

        // 28. What is a manifest file in HTML5?
        {
            id: 28,
            question: "What is a manifest file in HTML5?",
            answer: [
                {
                    type: "text",
                    content: `The **manifest file** in HTML5 (deprecated in latest specs, replaced by Service Workers) was used for offline web applications. It allowed specifying resources that should be cached by the browser.`
                },
                {
                    type: "list",
                    content: [
                        "**Sections of a manifest file**:",
                        "- CACHE: Files to cache.",
                        "- NETWORK: Files that must come from the network.",
                        "- FALLBACK: Fallback files if a resource is unavailable."
                    ]
                },
                {
                    type: "code",
                    content: `<!-- Linking manifest file -->
<html manifest="app.manifest">

# app.manifest
CACHE MANIFEST
# Version 1.0
CACHE:
  index.html
  style.css
  app.js

NETWORK:
  *`,
                    language: "html"
                }
            ]
        },

        // 29. What is the Geolocation API in HTML5?
        {
            id: 29,
            question: "What is the Geolocation API in HTML5?",
            answer: [
                {
                    type: "text",
                    content: `The **Geolocation API** allows web applications to access the geographical location of the user (with their consent).`
                },
                {
                    type: "list",
                    content: [
                        "Useful for maps, weather updates, nearby services.",
                        "Requires user permission for privacy.",
                        "Supports different location sources: GPS, Wi-Fi, IP address."
                    ]
                },
                {
                    type: "code",
                    content: `<!-- Example -->
<script>
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude:", position.coords.latitude);
    console.log("Longitude:", position.coords.longitude);
  });
}
</script>`,
                    language: "javascript"
                }
            ]
        },

        // 30. Explain Web Components and their usage.
        {
            id: 30,
            question: "Explain Web Components and their usage.",
            answer: [
                {
                    type: "text",
                    content: `Web Components are a set of web platform APIs that allow you to create **custom, reusable, encapsulated HTML elements**.`
                },
                {
                    type: "list",
                    content: [
                        "**Key technologies**:",
                        "- **Custom Elements**: Define your own HTML tags.",
                        "- **Shadow DOM**: Encapsulation of styles and DOM structure.",
                        "- **HTML Templates**: Reusable, inert HTML blocks."
                    ]
                },
                {
                    type: "code",
                    content: `<!-- Example -->
<template id="my-template">
  <style> p { color: blue; } </style>
  <p>Hello Web Component!</p>
</template>

<script>
class MyComponent extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById('my-template').content;
    this.attachShadow({ mode: 'open' }).appendChild(template.cloneNode(true));
  }
}
customElements.define('my-component', MyComponent);
</script>

<my-component></my-component>`,
                    language: "html"
                }
            ]
        },

        // 31. What are some advantages of HTML5 over its previous versions?
        {
            id: 31,
            question: "What are some advantages of HTML5 over its previous versions?",
            answer: [
                {
                    type: "list",
                    content: [
                        "1. **Semantic elements** (<header>, <footer>, <article>, etc.) improve accessibility and SEO.",
                        "2. **Built-in multimedia support** with <audio> and <video> tags (no plugins needed).",
                        "3. **Canvas and SVG** for rich graphics and animations.",
                        "4. **APIs support**: Geolocation, Web Storage, Web Workers, Drag & Drop, WebSockets.",
                        "5. **Offline capabilities** via cache manifest and Service Workers.",
                        "6. **Improved forms** with new input types (email, date, number, etc.).",
                        "7. **Cross-platform** and mobile-friendly design support."
                    ]
                }
            ]
        },
    ],
};

