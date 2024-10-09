import { FC } from "react";
import { CommonProps } from "../../../interfaces"
import { 
    SideBarLogo,
    SideBarMenu,
} from "../index";

import defaultStyles from "./SideBar.module.css"

import logo from "../../../assets/react.svg"

import { routes } from "../../../routes/routes"


export const SideBar: FC<CommonProps> = ({
    className = "",
    id = "",
    style = {},
}) => {

    const combinedClassName = `${defaultStyles['side-bar']} ${className}`;

    return (
        <>
        <nav id={id} className={combinedClassName} style={style}>
          <SideBarLogo to="/" logo={logo} />
          <SideBarMenu menuOptions={routes} />
        </nav>
      </>
    );
}