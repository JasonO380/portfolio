import React from "react";
import Home from "./Homepage/home";
import MobileHome from "./Mobile/mobile-home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainRoutes from "./Routes/main-routes";
import "./App.css";

function App() {
    return (
      <Router>
        <Routes basename="/">
          <Route path="*" element={<MainRoutes />} />
        </Routes>
      </Router>
    );
}

export default App;
