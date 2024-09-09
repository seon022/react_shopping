import React from "react";
import Menu from "./Menu";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="root">
            <Menu />
            <Outlet />
        </div>
    );
};

export default Root;
