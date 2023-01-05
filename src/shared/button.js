import React from "react";
import { buttonStyle_mobile } from "../CSS/button-style";
import { motion } from "framer-motion";
import "./button.css";

let choice;
const Button = (props) => {
    const buttons = props.btn;
    return (
        <div className="button_container_mobile">
            {buttons.map((btn, index)=> {
                return (
                    <motion.button
                    whileTap={{scale:.9, color:"black", backgroundColor: "white"}} 
                    onClick={props.onClick}
                    name={btn.name} 
                    style={buttonStyle_mobile} key={index}>{btn.name}</motion.button>
                )
            })}
        </div>
    )
}

export default Button;