import { Route } from "react-router-dom";
import Header from "../../components/header";
import SrollToTop from "../../components/scroll-to-top";

const HomeLayout = (props) => {
  return (
    <>
      <Header />
      <main style={{ marginTop: "50px" }}>{props.children}</main>
    </>
  );
};

const RouteMain = (props) => {
  const { Component, ...routes } = props;
  return (
    <Route {...routes}>
      <HomeLayout>
        <SrollToTop />
        <Component />
      </HomeLayout>
    </Route>
  );
};

export default RouteMain;
