import React from "react";
import Loadable from "react-loadable";
import { Switch } from "react-router-dom";
import { RouterWithPaths, Loading } from "components";
import "antd/dist/antd.css";

const index = (props) => {
  const routers = [
    {
      path: ["/"],
      component: Loadable({
        loader: () => import("pages/Home"),
        loading: Loading,
      }),
    },
  ];

  return (
    <div>
      <Switch>
        {routers.map((route, key) => {
          if (route.component)
            return (
              <RouterWithPaths
                exact
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
    </div>
  );
};

export default index;
