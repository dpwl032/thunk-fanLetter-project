import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/reset.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "components/GlobalStyle";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);

reportWebVitals();
