import { FC } from "react";
import {
    CommonProps,
    IRoute
} from "../../../interfaces"

import defaultStyles from "./SideBarMenu.module.css"
import { SideBarItem } from "../index";

interface ICompProps extends CommonProps {
    menuOptions: IRoute[];
}

export const SideBarMenu: FC<ICompProps> = ({
    menuOptions,
    className = "",
    id = "",
    style = {},
}) => {

    const combinedClassName = `${defaultStyles['side-bar-menu']} ${className}`;

    return (
        <>
            <ul id={id} className={combinedClassName} style={style}>
                {menuOptions.map((route) => (
                    <SideBarItem route={route} key={route.name} />
                ))}
            </ul>
        </>
    );
}
