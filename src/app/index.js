import React from "react";

import { ThemeProvider } from "styled-components";
import { pink } from "themes";
import User from "../pages";
import { ConfigProvider } from "antd";
import koKR from "antd/es/locale/ko_KR";
import RouterWithPaths from "components/RouterWithPaths";
import { Switch } from "react-router-dom";
import "./styles.scss";

Array.prototype.insert = function (index, item) {
  this.splice(index, 0, item);
};

const App = () => {

  String.prototype.uintTextBox = function () {
    var re = /^\d*$/;
    return re.test(this);
  };
  const routers = [
    // {
    //   path: ["/logout"],
    //   component: logout,
    // },
    {
      path: [
        "/",
        "/:function1",
        "/:function1/:id",
        "/:function1/:function2/:id",
      ],
      component: User,
    },
  ];
  return (
    <ThemeProvider theme={pink}>
      <ConfigProvider locale={koKR}>
        <Switch>
          {routers.map((route, key) => {
            if (route.component)
              return (
                <RouterWithPaths
                  key={key}
                  path={route.path}
                  render={(props) => {
                    return <route.component {...props} />;
                  }}
                />
              );
            return null;
          })}
        </Switch>
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default App;
