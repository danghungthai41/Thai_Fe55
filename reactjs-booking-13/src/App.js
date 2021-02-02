import "./App.css";
import Home from "./pages/home";
import Detail from "./pages/detail";
import SignIn from "./pages/SignIn";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { mainRouter, adminRouter } from "./configs/router";
import RouteMain from "./templates/main";
import RoutesAdmin from "./templates/admin";
import Guard from "./HOC/guard";
function App() {
  function renderMainRouter(listRouter) {
    return listRouter.map((router, index) => {
      // c1
      // const { path, exact, Component } = router;
      // return (
      //   <Route path={path} exact={exact}>
      //     <Component />
      //   </Route>
      // );
      // c2 render props
      // const { Component, ...props } = router;
      return <RouteMain {...router} key={index} />;
    });
  }
  function renderAdminRouter(listRouter) {
    return listRouter.map((router, index) => {
      return (
        <Guard>
          <RoutesAdmin {...router} key={index} />
        </Guard>
      );
    });
  }
  return (
    <>
      <BrowserRouter>
        <Switch>
          {renderMainRouter(mainRouter)}
          {renderAdminRouter(adminRouter)}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
