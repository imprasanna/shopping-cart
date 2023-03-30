import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

/*
header
product lists  page (at least 20 products)
product details page
Add to cart , remove item
cart page (list of user products)
map, filter,reduce, context or redux toolkit, react-boostrap,router,pagination
*/
