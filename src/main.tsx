import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Use hydration only when there's pre-rendered content (SSG)
const hasPrerenderedContent = root.innerHTML.trim() !== '' && !root.innerHTML.includes('<!--app-html-->');

if (hasPrerenderedContent) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
