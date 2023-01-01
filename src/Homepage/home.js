import React, { useState, useEffect } from "react";
import { wrapper } from "../CSS/global-div-styles";
import profile from "../Images/my_profile_pic.jpeg";
import buttonStyle from "../CSS/button-style";
import Technologies from "./technologies";
import Projects from "./projects";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./home.css";
let choice;
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isProjects, setIsProjects] = useState(false)
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
            <div className="stats_div">
                <div className="main_title">
                    <h1 className="heading">Jason Ollada</h1>
                    <h1>Front end web design</h1>
                </div>
                <div className="button_container">
                    <button name="technology" onClick={handleClick} style={buttonStyle}>TECHNOLOGIES</button>
                    {isOpen && <Technologies />}
                    <button name="projects" onClick={handleClick} style={buttonStyle}>PROJECTS</button>
                    <button name="games" onClick={handleClick} style={buttonStyle}>GAMES</button>
                    <button name="passion" onClick={handleClick} style={buttonStyle}>PASSION</button>
                </div>
                <div className="contact_container">
                    <h1 className='icon'><FaGithub /></h1>
                    <h1 className='icon'><FaLinkedin /></h1>
                </div>
            </div>
            <div className="profile_div">
                {isProjects ? <Projects /> : <img className="profile_pic" src={profile} />}
                {/* <img className="profile_pic" src={profile} /> */}
            </div>
        </div>
    );
};

export default Home;
