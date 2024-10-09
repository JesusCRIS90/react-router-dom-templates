import { 
  // lazy, 
  LazyExoticComponent
} from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { TestPage1, TestPage2, TestPage3 } from "../pages";

type JSXComponent = () => JSX.Element;

export interface IRoute {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

// const Lazy1 = lazy(
//   () =>
//     import(/*webpackChunkName: 'LazyPage1*/ "../01-lazyload/pages/LazyPage1")
// );
// const Lazy2 = lazy(
//   () =>
//     import(/*webpackChunkName: 'LazyPage2*/ "../01-lazyload/pages/LazyPage2")
// );
// const Lazy3 = lazy(
//   () =>
//     import(/*webpackChunkName: 'LazyPage3*/ "../01-lazyload/pages/LazyPage3")
// );

export const routes: IRoute[] = [
  {
    to: "home",
    path: "home",
    Component: TestPage1,
    name: "Home",
  },
  {
    to: "users",
    path: "users",
    Component: TestPage2,
    name: "Users",
  },
  {
    to: "about",
    path: "about",
    Component: TestPage3,
    name: "About",
  },
];
