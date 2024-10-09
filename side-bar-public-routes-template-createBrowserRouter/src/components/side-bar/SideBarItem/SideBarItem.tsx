import { FC } from "react";
import { NavLink } from "react-router-dom";
import {
    CommonProps,
    IRoute
} from "../../../interfaces"

import defaultStyles from "./SideBarItem.module.css"

interface ICompProps extends CommonProps {
    route: IRoute;
}

export const SideBarItem: FC<ICompProps> = ({
    route,
    className = "",
    id = "",
    style = {},
}) => {

    const combinedClassName = `${defaultStyles['side-bar-item']} ${className}`;

    return (
        <>
            <li id={id} className={combinedClassName} style={style}>
                <NavLink
                    to={route.to}
                    className={({ isActive }) => (isActive ? defaultStyles['side-bar-item-active'] : "")}
                >
                    {route.name}
                </NavLink>
            </li>
        </>
    );
}