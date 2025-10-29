import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { images } from "./assets/Images/Images.tsx";
import { commonWord } from "./Custom/CommonWord.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

const titleEl = document.getElementById("title") as HTMLElement | null;
if (titleEl) {
  titleEl.textContent = commonWord.title;
}

const link = document.getElementById("favicon") as HTMLLinkElement | null;
if (link) {
  link.href = images.favicon;
}
