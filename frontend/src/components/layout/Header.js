import React from "react";
import '../../styles/components/layout/Header.css';
import { NavLink } from "react-router-dom";
const Header = (props) => {
    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5" style={{ backgroundColor: '#4a8ab8' }}>
                        <NavLink to="/">
                            <img src="img/logo.jpg" alt="logo" width="280" height="280" />
                        </NavLink>
                        <h1><span translate="no">BIBLIOTECA</span></h1>
                    </div>
                    <div className="col-7" style={{ backgroundColor: '#4a8ab8' }}>
                        <img src="img/fichero.jpg" alt="logo" width="auto" height="auto" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;