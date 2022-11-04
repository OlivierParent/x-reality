import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "App";

const container: HTMLElement = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
