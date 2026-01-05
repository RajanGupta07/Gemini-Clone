// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextProvider from "./context/context.jsx";

// const PUBLISHABLE_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing API Key");
// }

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
