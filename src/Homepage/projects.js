import React from "react";
import "./projects.css"

const Projects = () => {
    return(
        <div className="projects_wrapper">
            <h1>Barbell Factor</h1>
            <h3>Technoligies used</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Framer Motion</li>
            </ul>
            <h3>Purpose</h3>
            <ul>
                <li>Allow clients to track macro nutrient and workout data</li>
                <li>Display my ability and knowledge on how to create update read and delete data</li>
                <li>Display my UI/UX capability</li>
            </ul>
            <a href="www.barbellfactor.com">Barbell Factor</a>
        </div>
    )
}

export default Projects;