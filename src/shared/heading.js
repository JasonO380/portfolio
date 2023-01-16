import React from "react";
import {
    heading_text_mobile,
    sub_heading_text_mobile,
} from "../CSS/font-styles";
import "./heading.css";

const Heading = () => {
    return (
        <div className="heading_wrapper">
            <div className="name">
                <h1 style={heading_text_mobile}>Jason Ollada</h1>
            </div>
            <div className="job_title">
                <h1 style={sub_heading_text_mobile}>Full Stack developer</h1>
            </div>
        </div>
    );
};

export default Heading;
