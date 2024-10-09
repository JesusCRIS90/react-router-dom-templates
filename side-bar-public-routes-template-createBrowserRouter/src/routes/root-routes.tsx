import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layout/RootLayout";

import { HomePage, Index, ErrorPage, LoginPage, TestPage1 } from "../pages"

// import SideBarNav from "../components/Navigation/Navigation"
import { SideBar } from "../components/side-bar"

import { routes } from "./routes"


export const router = createBrowserRouter([
  // Root without Layout
  {
    path: "/*",
    element: <Navigate to="/" replace />,
    // loader: undefined,
    // action: undefined,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <HomePage />,
    // loader: undefined,
    // action: undefined,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    // loader: undefined,
    // action: undefined,
    errorElement: <ErrorPage />,
  },
  // Root with Layout
  {
    path: "/dashboard",
    // element: <RootLayout className="side-bar-1" rootComponent={SideBarNav} />, // Render RootLayout with SideBar
    element: <RootLayout rootComponent={  <SideBar className="side-bar-default"/> }/>, // Render RootLayout with SideBar
    // loader: undefined,
    // action: undefined,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // This makes the /dashboard path show DashBoardPage by default
        element: <TestPage1 />, // Render DashBoardPage as the default child
      },
      {
        path: "index", // Nested route /dashboard/index
        element: <Index />, // Render Index component
        errorElement: <ErrorPage />,
      },
      ...routes.map((route) => ({
          path: route.path,
          element: <route.Component />,
          errorElement: <ErrorPage />,
      })),
      /* Additional routes can go here */
    ],
  },
]);
