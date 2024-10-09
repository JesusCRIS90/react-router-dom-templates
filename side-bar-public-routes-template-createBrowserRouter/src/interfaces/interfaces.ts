import { PropsWithChildren, CSSProperties, LazyExoticComponent } from "react";
import { JSXComponent } from "../types";


export interface CommonProps extends PropsWithChildren {
  id?: string;
  className?: string;
  style?: CSSProperties;
}

export interface IRoute {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

export interface ISideBarMenu {
  menuOptions: IRoute[];
}


