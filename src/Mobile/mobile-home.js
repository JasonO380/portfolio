import React, { useState } from "react";
import { descriptive_text_mobile } from "../CSS/font-styles";
import { buttonStyle_mobile } from "../CSS/button-style";
import Heading from "../shared/heading";
import ProfilePic from "../shared/profile-pic";
import Projects from "../shared/projects";
import Technologies from "../shared/technologies";
import Contacts from "../shared/contacts";
import Button from "../shared/button";
import "./mobile-home.css";


let choice;
const MobileHome = () => {
    const [ isTechnologies, setIsTechnologies ] = useState(false)
    const [ isProjects, setIsProjects ] = useState(false)
    const handleClick = (event) => {
        choice = event.target.name;
        console.log(event.target.name)
        if(choice === "TECHNOLOGIES"){
            setIsTechnologies(isTechnologies ? false : true)
            console.log(isTechnologies)
        }
        if(choice === "PROJECTS"){
            setIsProjects(isProjects ? false : true)
            console.log(isProjects)
        }
    }
    const buttons = [
        { name: "ABOUT ME" },
        { name: "TECHNOLOGIES" },
        { name: "PROJECTS" },
        { name: "GAMES" },
    ];

    return (
        <React.Fragment>
        <div className="home_mobile_wrapper">
            <Heading />
            <Button
            onClick={handleClick} 
            btn={buttons}
            style={buttonStyle_mobile}
            name={buttons} />
            <div className="profile_contacts_projects_wrapper">
                <div className="contacts_technologies_div">
                <Contacts />
                {isTechnologies && <Technologies />}
                </div>
                <div className="projects_profile_div">
                {isProjects? <Projects style={descriptive_text_mobile} /> : <ProfilePic />}
                </div>
            </div>
        </div>
        </React.Fragment>
    );
};

export default MobileHome;
