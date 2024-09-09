import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="gnb">
            <Link to="/" className="mainLogo mr20">
                SY.COM
            </Link>
            <Link className="mainMenu mr20" to="/product">
                Shop
            </Link>
            <Link className="mainMenu mr20" to="/product">
                Page
            </Link>
        </div>
    );
};

export default Menu;
