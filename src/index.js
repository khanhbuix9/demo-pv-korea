import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import stores from "redux-store/stores";
import App from "./app";
import "./global-styles";
import "./styles.css";
import "./themes/default.less";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "resources/styles/app.scss";


const Root = () => {
  return (
    <Provider store={stores}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
