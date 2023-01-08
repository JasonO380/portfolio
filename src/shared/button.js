import React from "react";
import Contacts from "./contacts";
import { motion } from "framer-motion";
import "./button.css";

let choice;
const Button = (props) => {
    const buttons = props.btn;
    return (
        <div className="button_container">
            {buttons.map((btn, index)=> {
                return (
                    <motion.button
                    whileTap={{scale:.9, color:"black", backgroundColor: "white"}} 
                    onClick={props.onClick}
                    name={btn.name} 
                    style={props.style} 
                    key={index}>{btn.name}</motion.button>
                )
            })}
            <div className="desktop_contact">
                <Contacts />
            </div>
        </div>
    )
}

export default Button;