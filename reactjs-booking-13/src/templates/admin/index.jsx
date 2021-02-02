import { Route } from "react-router-dom";
import SrollToTop from "../../components/scroll-to-top";

const AdminLayout = (props) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>side bar</div>
        <div>
          <header>header</header>
          <main>{props.children}</main>
        </div>
      </div>
    </>
  );
};

const RoutesAdmin = (props) => {
  const { Component, ...routes } = props;
  return (
    <Route {...routes}>
      <AdminLayout>
        <SrollToTop />
        <Component />
      </AdminLayout>
    </Route>
  );
};

export default RoutesAdmin;
