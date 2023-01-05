import React, { useState, useEffect } from "react";
import { wrapper } from "../CSS/global-div-styles";
import profile from "../Images/my_profile_pic.jpeg";
import buttonStyle from "../CSS/button-style";
import Technologies from "./technologies";
import Projects from "./projects";
import { heading_text, descriptive_text_desktop } from "../CSS/font-styles";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

import "./home.css";
let choice;
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isProjects, setIsProjects] = useState(false)
    const animation = {
        offscreen: {opacity: 0},
        onscreen: {
            opacity:1,
            transition: {duration:1.5}
        },
        exit:{ opacity:0 }
    }
    const handleClick = (event) => {
        choice = event.target.name;
        console.log(choice)
        if(choice === "technology"){
            setIsOpen(isOpen ? false : true)
        }
        if(choice === "projects"){
            setIsProjects(isProjects ? false : true)

        }
    }

    return (
        <div style={wrapper}>
            <div className="info_div">
                <div className="main_title">
                    <h1 className="heading_text">Jason Ollada</h1>
                    <h1 className="descriptive_text">Front end web developer</h1>
                </div>
                <div className="button_technology_container">
                <div className="button_div">
                    <motion.button 
                    name="technology"
                    whileTap={{scale:.9, color:"black", backgroundColor: "white"}} 
                    onClick={handleClick} 
                    className="button_style">TECHNOLOGIES</motion.button>
                    <motion.button 
                    name="projects"
                    whileTap={{scale:.9, color:"black", backgroundColor: "white"}} 
                    onClick={handleClick} 
                    className="button_style">PROJECTS</motion.button>
                    <motion.button 
                    name="games"
                    whileTap={{scale:.9, color:"black", backgroundColor: "white"}} 
                    onClick={handleClick} 
                    className="button_style">GAMES</motion.button>
                    <motion.button 
                    name="about_me"
                    whileTap={{scale:.9, color:"black", backgroundColor: "white"}} 
                    onClick={handleClick} 
                    className="button_style">ABOUT ME</motion.button>
                    <div className="contact_container">
                    <motion.h1
                    whileTap={{rotateY:360, color:"red"}} 
                    className='icon'><i className="icon_button"><FaGithub /></i></motion.h1>
                    <motion.h1
                    whileTap={{rotateZ:360, color:"red"}} 
                    className='icon'><FaLinkedin /></motion.h1>
                    <motion.h1
                    whileTap={{rotateZ:360, color:"red"}} 
                    className='icon'><FaEnvelopeOpen /></motion.h1>
                </div>
                </div>
                    <div className="technology_div">
                    {isOpen && <Technologies />}
                    </div>
                </div>
                {/* <div className="contact_container">
                    <motion.h1
                    whileTap={{rotateY:360, color:"red"}} 
                    className='icon'><i className="icon_button"><FaGithub /></i></motion.h1>
                    <motion.h1
                    whileTap={{rotateZ:360, color:"red"}} 
                    className='icon'><FaLinkedin /></motion.h1>
                </div> */}
            </div>
            <AnimatePresence mode="wait">
            <motion.div
            initial={"offscreen"}
            animate={"onscreen"}
            exit={"exit"}
            key={profile}
            className="profile_div">
                {!isProjects ? 
                <motion.img
                variants={animation} 
                className="profile_pic" src={profile} /> : <Projects style={descriptive_text_desktop} /> }
            </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Home;
