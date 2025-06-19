import React from "react";
import { createRoot } from "react-dom/client";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

import "normalize.css";
import "./index.scss";

// App Component
import App from "./app";

document.addEventListener("DOMContentLoaded", (): void => {
  const container = document.getElementById("root");
  // container is never null because we hardcode a div with ID root
  if (container === null) return;

  const root = createRoot(container);
  root.render(
    <FluentProvider theme={webLightTheme}>
      <App />
    </FluentProvider>,
  );
});
