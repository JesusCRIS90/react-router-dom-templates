import { PropsWithChildren, CSSProperties, FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";


import styles from "./RootLayout.module.css"

interface RootComponent extends PropsWithChildren {
  rootComponent: ReactNode;
  id?: string;
  className?: string;
  style?: CSSProperties;
}

export const RootLayout: FC<RootComponent> = ({
  rootComponent: Root,
  className = styles['root-layout'],
  id = "",
  style = {},
}) => {

  return (
      <div id={id} className={className} style={style}>
        {Root}
        <Outlet />
      </div>
  );

}

export default RootLayout;