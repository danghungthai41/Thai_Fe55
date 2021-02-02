import Detail from "../pages/detail";
import Home from "../pages/home";
import SignInSide from "../pages/SignIn";
import DashBoard from "../pages/dashboard";
import User from "../pages/user";
import Booking from "../pages/booking";
export const mainRouter = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/sign-in",
    exact: false,
    Component: SignInSide,
  },
  {
    path: "/detail/:movieCode",
    exact: false,
    Component: Detail,
  },
  {
    path: "/booking/:code",
    exact: false,
    Component: Booking,
  },
  // {
  //   path: "/admin",
  //   exact: false,
  //   Component: DashBoard,
  // },
];
export const adminRouter = [
  {
    path: "/admin",
    exact: true,
    Component: DashBoard,
  },
  {
    path: "/admin/user",
    exact: false,
    Component: User,
  },
];
