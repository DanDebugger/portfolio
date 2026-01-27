export const tutorialData = [
    {
        category: "Design System",
        icon: "bi-palette2",
        items: [
            {
                id: "colors",
                title: "Color Palette",
                desc: "The core color system used across the portfolio. Click any swatch to copy.",
                type: "palette",
                data: [
                    { name: "Primary Blue", variable: "--primary", hex: "#3b82f6" },
                    { name: "Dark Background", variable: "--bg-primary", hex: "#020617" },
                    { name: "Card Surface", variable: "--bg-card", hex: "#0f172a" },
                    { name: "Text Main", variable: "--text-primary", hex: "#f8fafc" },
                    { name: "Text Muted", variable: "--text-muted", hex: "#94a3b8" },
                    { name: "Border Subtle", variable: "--border-subtle", hex: "#1e293b" }
                ]
            },
            {
                id: "icons",
                title: "Iconography",
                desc: "Bootstrap Icons used for UI elements. Click to copy class name.",
                type: "icons",
                data: ['bi-code-slash', 'bi-palette', 'bi-server', 'bi-phone', 'bi-github', 'bi-twitter', 'bi-envelope', 'bi-arrow-right', 'bi-search', 'bi-clipboard', 'bi-check2', 'bi-star-fill']
            }
        ]
    },
    {
        category: "Active Learning",
        icon: "bi-laptop",
        items: [
            {
                id: "interactive-counter",
                title: "Interactive Counter",
                desc: "Try editing the code! Change the increment value or add a decrement button.",
                type: "sandpack",
                files: {
                    "/App.js": `import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Count: {count}</h1>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>
          Increment +
        </button>
        <button onClick={() => setCount(0)} className="reset">
          Reset
        </button>
      </div>
      <p>Try editing this text!</p>
    </div>
  );
}`,
                    "/styles.css": `body {
  font-family: sans-serif;
  background: #0f172a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  text-align: center;
  padding: 2rem;
  background: #1e293b;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid #334155;
}

button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 0.5rem;
  transition: opacity 0.2s;
}

button:hover {
  opacity: 0.9;
}

button.reset {
  background: #ef4444;
}`
                }
            },
            {
                id: "interactive-card",
                title: "Styling Components",
                desc: "Experiment with CSS properties live to see how they affect the card design.",
                type: "sandpack",
                files: {
                    "/App.js": `import "./styles.css";

export default function App() {
  return (
    <div className="card">
      <div className="card-image"></div>
      <div className="card-content">
        <h2>Gradient Card</h2>
        <p>This is a modern card component. Try changing the border-radius or the gradient colors in CSS!</p>
        <button>Read More</button>
      </div>
    </div>
  );
}`,
                    "/styles.css": `body {
  font-family: 'Inter', sans-serif;
  background: #020617;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.card {
  width: 300px;
  background: #1e293b;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.card-image {
  height: 150px;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
}

.card-content {
  padding: 24px;
}

h2 { margin: 0 0 12px 0; font-size: 1.5rem; }
p { color: #94a3b8; line-height: 1.5; margin-bottom: 20px; }

button {
  width: 100%;
  padding: 12px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}`
                }
            }
        ]
    },
    {
        category: "Web Fundamentals",
        icon: "bi-globe",
        items: [
            { id: "html-basics", title: "HTML5 Boilerplate", desc: "Standard starting template.", code: "<!DOCTYPE html>..." },
            { id: "semantic-html", title: "Semantic Tags", desc: "Using <main>, <article>, <section>.", code: "<main>\\n  <article>...</article>\\n</main>" },
            { id: "forms", title: "Form Inputs", desc: "Text, password, email, and validation.", code: "<input type='email' required />" },
            { id: "media", title: "Images & Video", desc: "Embedding media correctly.", code: "<img src='...' alt='...' loading='lazy' />" },
            { id: "links", title: "Hyperlinks", desc: "Anchor tags and targets.", code: "<a href='...' target='_blank'>Link</a>" },
            { id: "meta-tags", title: "SEO Meta Tags", desc: "Description, viewport, and charset.", code: "<meta name='description' content='...' />" },
            { id: "favicon", title: "Favicons", desc: "Adding a browser tab icon.", code: "<link rel='icon' href='/favicon.ico' />" },
            { id: "lists", title: "Lists (UL/OL)", desc: "Ordered and Unordered lists.", code: "<ul><li>Item</li></ul>" },
            { id: "tables", title: "Tables", desc: "Displaying tabular data.", code: "<table><thead>...</thead></table>" },
            { id: "attributes", title: "Global Attributes", desc: "id, class, data-* attributes.", code: "<div id='app' class='container' data-theme='dark'></div>" }
        ]
    },
    {
        category: "CSS Mastery",
        icon: "bi-palette2",
        items: [
            { id: "box-model", title: "The Box Model", desc: "Margin, Border, Padding, Content.", code: "div { box-sizing: border-box; }" },
            { id: "flexbox", title: "Flexbox Basics", desc: "Aligning items easily.", code: "display: flex; justify-content: center;" },
            { id: "grid", title: "CSS Grid", desc: "Two-dimensional layouts.", code: "display: grid; grid-template-columns: 1fr 1fr;" },
            { id: "variables", title: "CSS Variables", desc: "Reusable custom properties.", code: ":root { --primary: #3b82f6; }" },
            { id: "media-queries", title: "Responsive Design", desc: "Breakpoints for mobile.", code: "@media (max-width: 768px) { ... }" },
            { id: "positioning", title: "Positioning", desc: "Relative, Absolute, Fixed, Sticky.", code: "position: absolute; top: 0;" },
            { id: "transitions", title: "Transitions", desc: "Smooth state changes.", code: "transition: all 0.3s ease;" },
            { id: "animations", title: "Keyframe Animations", desc: "Complex motion.", code: "@keyframes slide { ... }" },
            { id: "pseudo-classes", title: "Pseudo-classes", desc: "Hover, focus, active states.", code: "button:hover { opacity: 0.8; }" },
            { id: "shadows", title: "Box Shadows", desc: "Adding depth.", code: "box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);" }
        ]
    },
    {
        category: "JavaScript & ES6+",
        icon: "bi-filetype-js",
        items: [
            { id: "variables-js", title: "Let & Const", desc: "Modern variable declaration.", code: "const API_URL = '...';\\nlet count = 0;" },
            { id: "arrow-funcs", title: "Arrow Functions", desc: "Concise function syntax.", code: "const add = (a, b) => a + b;" },
            { id: "destructuring", title: "Destructuring", desc: "Unpacking objects/arrays.", code: "const { name, age } = user;" },
            { id: "spread", title: "Spread Operator", desc: "Copying and merging.", code: "const combined = [...arr1, ...arr2];" },
            { id: "template-literals", title: "Template Strings", desc: "String interpolation.", code: "const msg = `Hello ${name}!`;" },
            { id: "modules", title: "Modules (Import/Export)", desc: "Code organization.", code: "import { useState } from 'react';" },
            { id: "promises", title: "Promises & Async/Await", desc: "Handling async operations.", code: "const data = await fetch('/api');" },
            { id: "array-methods", title: "Array Methods", desc: "Map, Filter, Reduce.", code: "users.map(u => u.name);" },
            { id: "dom", title: "DOM Manipulation", desc: "Selecting elements.", code: "document.querySelector('.btn');" },
            { id: "events", title: "Event Listeners", desc: "Handling clicks.", code: "btn.addEventListener('click', handleClick);" }
        ]
    },
    {
        category: "React Ecosystem",
        icon: "bi-atom",
        items: [
            { id: "create-vite", title: "Create with Vite", desc: "Fast project setup.", code: "npm create vite@latest my-app -- --template react" },
            { id: "components", title: "Functional Components", desc: "Basic component structure.", code: "export default function Button() { ... }" },
            { id: "props", title: "Props", desc: "Passing data to children.", code: "<Card title='Hello' />" },
            { id: "usestate", title: "useState Hook", desc: "Managing local state.", code: "const [count, setCount] = useState(0);" },
            { id: "useeffect", title: "useEffect Hook", desc: "Side effects.", code: "useEffect(() => { ... }, []);" },
            { id: "custom-hooks", title: "Custom Hooks", desc: "Reusing logic.", code: "const { width } = useWindowSize();" },
            { id: "context", title: "Context API", desc: "Global state (Theming).", code: "const ThemeContext = createContext();" },
            { id: "router", title: "React Router", desc: "Client-side routing.", code: "<Route path='/' element={<Home />} />" },
            { id: "lists-keys", title: "Lists & Keys", desc: "Rendering arrays.", code: "items.map(item => <li key={item.id}>...</li>)" },
            { id: "framer", title: "Framer Motion", desc: "Simple animations.", code: "<motion.div animate={{ x: 100 }} />" }
        ]
    },
    {
        category: "Tools & Workflow",
        icon: "bi-tools",
        items: [
            { id: "git-init", title: "Git Init", desc: "Start a repository.", code: "git init\\ngit add ." },
            { id: "git-commit", title: "Git Commit", desc: "Saving changes.", code: "git commit -m 'Initial commit'" },
            { id: "npm-install", title: "NPM Install", desc: "Adding packages.", code: "npm install bootstrap" },
            { id: "dev-server", title: "Dev Server", desc: "Running locally.", code: "npm run dev" },
            { id: "build", title: "Production Build", desc: "Optimizing for deploy.", code: "npm run build" },
            { id: "vscode", title: "VS Code Extensions", desc: "Recommended setup.", code: "// ES7+ React Snippets\\n// Prettier\\n// ESLint" },
            { id: "chrome-devtools", title: "Chrome DevTools", desc: "Debugging CSS/JS.", code: "// Press F12 or Cmd+Opt+I" },
            { id: "deployment", title: "Vercel Deploy", desc: "Hosting your app.", code: "npm install -g vercel\\nvercel" },
            { id: "prettier", title: "Prettier Config", desc: "Code formatting.", code: "{ \"semi\": false, \"singleQuote\": true }" },
            { id: "eslint", title: "ESLint", desc: "Finding bugs.", code: "npm init @eslint/config" }
        ]
    }
];
