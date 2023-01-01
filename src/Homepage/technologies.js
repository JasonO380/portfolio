import React from "react";
import technology from "./technologies-data";
import technologyIcons from "./technology-icons";

import "./technologies.css";

const Technologies = (props) => {
    return (
        <div>
            {technology.map(tech => {
                return(
                    <div>
                    <p className="name_icon">{tech} {technologyIcons[tech]}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Technologies;