import { NavLink } from "react-router-dom";

import "./Navigation.css";

import logo from "../../assets/react.svg";

export default function Navigation() {
  return (
    <>
      <nav>
        <img src={logo} alt="React Logo" />
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/index"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Dashboard Index
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
