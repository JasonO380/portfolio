import React from "react";
import { Routes, Router, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ResponsiveHome from "./responsive-home";
import SimonSays from "../Simon-Says/Simon-Says-Game";
import AboutMe from "../About-Me/about-me";

const MainRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes>
                <Route path="/" element={<ResponsiveHome />} />
                <Route path="/games" element={<SimonSays />} />
                <Route path="/aboutme" element={<AboutMe />} />
            </Routes>
        </AnimatePresence>
    );
};

export default MainRoutes;
