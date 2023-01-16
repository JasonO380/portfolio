import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";
import "./contacts.css";

const Contacts = () => {
    return (
        <div className="contact_container">
            <motion.h1
                whileTap={{ rotateY: 360, color: "red" }}
                className="icon"
            >
                <a
                className="contact_link" 
                href="https://github.com/JasonO380">
                    <FaGithub />
                </a>
            </motion.h1>
            <motion.h1
                whileTap={{ rotateZ: 360, color: "red" }}
                className="icon"
            >
                <a
                className="contact_link" 
                href="https://www.linkedin.com/in/jason-ollada-4a1a1522/">
                    <FaLinkedin />
                </a>
            </motion.h1>
            <motion.h1
                whileTap={{ rotateX: 360, color: "red" }}
                className="icon"
            >
                <a
                className="contact_link" 
                href="mailto:JMOllada@gmail.com">
                    <FaEnvelopeSquare />
                </a>
            </motion.h1>
        </div>
    );
};

export default Contacts;
