import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ResponsiveHome from "./responsive-home";
import SimonSays from "../Simon-Says/Simon-Says-Game";

const MainRoutes = () => {
    return (
        <AnimatePresence mode="wait">
            <Routes>
                <Route path="/" element={<ResponsiveHome />} />
                <Route path="simon" element={<SimonSays />} />
            </Routes>
        </AnimatePresence>
    );
};

export default MainRoutes;
