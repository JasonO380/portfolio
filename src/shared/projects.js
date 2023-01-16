import React from "react";
import logo from '../Images/barbell_factor.jpeg'
import { motion } from "framer-motion";
import "./projects.css";

const Projects = (props) => {
    return(
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 1.5}} 
        exit={{opactity:0, duration:1.5}}  
        className="projects_wrapper">
            <div className='projects_heading_wrapper'>
                <div className='projects_title'>
                    <h1 style={props.style}>Barbell Factor</h1>
                </div>
                <div className='projects_img'>
                    <a href="https://barbellfactor.com">
                        <img className='logo' src={logo} />
                    </a>
                </div>
            </div>
            <div className="projects_body">
                <h3 style={props.style}>Technologies used</h3>
                <ul>
                    <li style={props.style}>HTML</li>
                    <li style={props.style}>CSS</li>
                    <li style={props.style}>React</li>
                    <li style={props.style}>Framer Motion</li>
                </ul>
                <h3 style={props.style}>Purpose</h3>
                <ul>
                    <li style={props.style}>Allow clients to track macro nutrient and workout data</li>
                    <li style={props.style}>Display my ability and knowledge on how to build an API from scratch and connect to that API to create read update and delete data</li>
                    <li style={props.style}>Display my UI/UX capability with smooth page transitions, animations and user intuitive design</li>
                </ul>
            </div>
        </motion.div>
    )
}

export default Projects;