import React from "react";
import Contacts from "./contacts";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./button.css";

const Button = (props) => {
    const buttons = props.btn;
    console.log(buttons.map((btn) => btn.path));
    return (
        <div className="button_container">
            {buttons.map((btn, index) => {
                return (
                    <NavLink to={btn.path}>
                        <motion.button
                            whileTap={{
                                scale: 0.9,
                                color: "black",
                                backgroundColor: "white",
                            }}
                            onClick={props.onClick}
                            name={btn.name}
                            style={props.style}
                            key={index}
                        >
                            {btn.name}
                        </motion.button>
                    </NavLink>
                );
            })}
            <div className="desktop_contact">
                <Contacts />
            </div>
        </div>
    );
};

export default Button;
