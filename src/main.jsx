import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Home from "./pages/Home";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Home />
  </Provider>
);
