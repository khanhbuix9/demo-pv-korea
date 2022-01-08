import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RouterWithPaths from "components/RouterWithPaths";
import Admin from "@admin";
import { connect } from "react-redux";
import "@styles/app.scss";

function Status({ code, children }) {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) staticContext.status = code;
        return children;
      }}
    />
  );
}

function NotFound() {
  return (
    <>
      <Status code={404} />
      <h2>Not found</h2>;
    </>
  );
}
String.prototype.uintTextBox = function () {
  var re = /^\d*$/;
  return re.test(this);
};
function App(props) {
  const routers = [
    // {
    //   path: ["/admin/login"],
    //   // component: Auth,
    // },
    
    {
      path: [
        "/",
        "/:function1",
        "/:function1/:id",
        "/:function1/:function2/:id",
      ],
      component: Admin,
    },
  ];
  useEffect(() => {
    // const state = getState();
    // const { auth: { auth = {} } = {} } = state;
    // clientUtils.auth = auth ? auth.token_type + " " + auth.access_token : "";
    props.checkRole();
  }, []);
  return (
    <>
      <BrowserRouter>
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
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default connect(null, ({ auth: { checkRole } }) => {
  return {
    checkRole,
  };
})(App);
