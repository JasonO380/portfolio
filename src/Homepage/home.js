import React, { useState, useEffect } from "react";
import { wrapper } from "../CSS/global-div-styles";
import profile from "../Images/my_profile_pic.jpeg";
import { buttonStyle_desktop } from "../CSS/button-style";
import Technologies from "../shared/technologies";
import Projects from "../shared/projects";
import Button from "../shared/button";
import { heading_text, descriptive_text_desktop } from "../CSS/font-styles";
import { AnimatePresence, motion } from "framer-motion";

import "./home.css";
let choice;
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProjects, setIsProjects] = useState(false);
    const buttons = [
        { name: "ABOUT ME", path:"/aboutme" },
        { name: "TECHNOLOGIES" },
        { name: "PROJECTS" },
        { name: "GAMES", path:"/games" },
    ];
    const animation = {
        offscreen: { opacity: 0 },
        onscreen: {
            opacity: 1,
            transition: { duration: 1.5 },
        },
        exit: { opacity: 0 },
    };
    const handleClick = (event) => {
        choice = event.target.name;
        console.log(choice);
        if (choice === "TECHNOLOGIES") {
            setIsOpen(isOpen ? false : true);
        }
        if (choice === "PROJECTS") {
            setIsProjects(isProjects ? false : true);
        }
    };

    return (
        <React.Fragment>
            <div style={wrapper}>
                <div className="info_div">
                    <div className="main_title">
                        <h1 className="heading_text">Jason Ollada</h1>
                        <h1 className="descriptive_text">
                            Front end web developer
                        </h1>
                    </div>
                    <div className="button_technology_container">
                        <Button
                        onClick={handleClick}
                        btn={buttons}
                        style={buttonStyle_desktop} />
                        <div className="technology_div">
                            {isOpen && <Technologies />}
                        </div>
                    </div>
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={"offscreen"}
                        animate={"onscreen"}
                        exit={"exit"}
                        key={profile}
                        className="profile_div"
                    >
                        {!isProjects ? (
                            <motion.img
                                variants={animation}
                                className="profile_pic"
                                src={profile}
                            />
                        ) : (
                            <Projects style={descriptive_text_desktop} />
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </React.Fragment>
    );
};

export default Home;
