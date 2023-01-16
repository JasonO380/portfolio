import React from "react";
import cheshire from "../Images/cheshire_cat_outline.jpeg";
import robot from "../Images/robot_img.jpeg";
import ai from "../Images/AI_background.jpeg";
import ai2 from "../Images/ai2.jpeg";
import ai3 from "../Images/ai3.jpeg";
import robot_mouse from "../Images/robot_mouse.jpeg";
import robot_white_background from "../Images/robot_white_bgd.jpeg";
import wonderland from "../Images/alice_silhouette.jpeg";
import wallpaper from "../Images/robot_wallpaper.jpeg";
import { buttonStyle_about_me } from "../CSS/button-style";
import { NavLink } from "react-router-dom";
import "./about-me.css";

const AboutMe = () => {
    const button = [{ name: "HOME", path: "/" }];
    return (
        <React.Fragment>
        <div
            style={{
                height: "100vh",
                width: "100vw",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundImage: `url(${ai3}`,
            }}
            className="about_me_wrapper"
        >
            <div className="about_me_div">
                <h1 className="about_me_heading">ABOUT ME</h1>
                <p className="about_me_text">
                    I am a full stack developer with a diverse background in
                    both technology and client-facing industries. As a business
                    owner in the strength and conditioning field for over 10
                    years I have honed my communication and problem-solving
                    skills. I have a deep understanding of how to translate
                    these skills into the software development field. I am
                    excited to bring my unique blend of technical and
                    client-facing experience to a new industry and am confident
                    that I will be an ideal asset for a company looking for a
                    full stack developer who can effectively communicate and
                    collaborate with both clients and team members. Let's build
                    some projects together
                </p>
            </div>
            <div className="about_me_button_div">
                <NavLink to="/">
                    <button style={buttonStyle_about_me}>HOME</button>
                </NavLink>
            </div>
        </div>
        <div
            style={{
                backgroundImage: `url(${ai}`,
            }}
            className="about_me_wrapper_mobile"
        >
            <div className="about_me_div">
                <h1 className="about_me_heading">ABOUT ME</h1>
                <p className="about_me_text">
                    I am a full stack developer with a diverse background in
                    both technology and client-facing industries. As a business
                    owner in the strength and conditioning field for over 10
                    years I have honed my communication and problem-solving
                    skills. I have a deep understanding of how to translate
                    these skills into the software development field. I am
                    excited to bring my unique blend of technical and
                    client-facing experience to a new industry and am confident
                    that I will be an ideal asset for a company looking for a
                    full stack developer who can effectively communicate and
                    collaborate with both clients and team members. Let's build
                    some projects together
                </p>
            </div>
            <div className="about_me_button_div">
                <NavLink to="/">
                    <button style={buttonStyle_about_me}>HOME</button>
                </NavLink>
            </div>
        </div>
        </React.Fragment>
    );
};

export default AboutMe;
