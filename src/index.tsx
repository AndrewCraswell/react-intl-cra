import React from "react";
import { createRoot } from "react-dom/client";
import { initializeIcons } from "@fluentui/react";

import "./index.css";
import App from "./components/App/App";
import { locales, loadLocaleStrings } from "./locales";
import { LocalizationProvider } from "./components/LocalizationProvider";

initializeIcons();

const rootNode = document.getElementById("root");
const root = createRoot(rootNode!);
root.render(
  <React.StrictMode>
    <LocalizationProvider
      locale="en-US"
      defaultLocale="en-US"
      locales={locales}
      storage={localStorage}
      localeLoader={loadLocaleStrings}
    >
      <App />
    </LocalizationProvider>
  </React.StrictMode>
);
