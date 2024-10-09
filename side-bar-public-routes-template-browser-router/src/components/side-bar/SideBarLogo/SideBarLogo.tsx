import { FC } from "react";
import { NavLink } from "react-router-dom";
import {
    CommonProps,
} from "../../../interfaces"

import defaultStyles from "./SideBarLogo.module.css"

interface ICompProps extends CommonProps {
    to: string;
    logo: string;
}

export const SideBarLogo: FC<ICompProps> = ({
    logo,
    to,
    className = "",
    id = "",
    style = {},
}) => {

    const combinedClassName = `${defaultStyles['side-bar-nav-logo']} ${className}`;

    return (
        <>
            <NavLink to={to}>
                <div id={id} className={combinedClassName} style={style}>
                    <img src={logo} alt="React Logo" />
                </div>
            </NavLink>
        </>
    );
}