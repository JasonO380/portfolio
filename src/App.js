import React from "react";
import Home from "./Homepage/home";
import MobileHome from "./Mobile/mobile-home";
import "./App.css";

function App() {
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
}

export default App;
