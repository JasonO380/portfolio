import React from "react";
import Home from "../Homepage/home";
import MobileHome from "../Mobile/mobile-home";
import "./responsive-home.css";

const ResponsiveHome = () => {
    return (
        <React.Fragment>
            <div className="desktop">
                <Home />
            </div>
            <div className="mobile">
                <MobileHome />
            </div>
        </React.Fragment>
    );
};

export default ResponsiveHome;
