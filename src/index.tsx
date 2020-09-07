import React from "react";
import ReactDOM from "react-dom";
import { initializeIcons } from "@fluentui/react";

import "./index.css";
import App from "./components/App/App";
import { locales, loadLocaleData } from "./locales";
import { LocalizationProvider } from "./components/LocalizationProvider/LocalizationProvider";

initializeIcons();

ReactDOM.render(
  <React.StrictMode>
    <LocalizationProvider
      locale="en-US"
      defaultLocale="en-US"
      locales={locales}
      storage={localStorage}
      localeLoader={loadLocaleData}
    >
      <App />
    </LocalizationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
