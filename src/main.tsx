import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./styles/global.css";
import GlobalConfigProvider from "./stores/GlobalConfigProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalConfigProvider>
      <App />
    </GlobalConfigProvider>
  </React.StrictMode>
);
