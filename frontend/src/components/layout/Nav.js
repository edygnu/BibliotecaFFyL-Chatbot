import React from "react";
import '../../styles/components/layout/Nav.css';


import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (

        <nav>
            <div className="container-fluid">
                <ul className="navbar">
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined}>Institucional</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Servicios" className={({ isActive }) => isActive ? "active" : undefined}>Servicios</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/hemeroteca" className={({ isActive }) => isActive ? "active" : undefined}>Hemeroteca</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink to="/novedades" className={({ isActive }) => isActive ? "active" : undefined}>Novedades</NavLink>
                    </li> */}
                    <li className="nav-item">
                        <NavLink to="/contacto" className={({ isActive }) => isActive ? "active" : undefined}>Contacto</NavLink>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Nav;