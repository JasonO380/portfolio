import React from "react";
import technology from "./technologies-data";
import technologyIcons from "./technology-icons";
import { motion, AnimatePresence } from "framer-motion";

import "./technologies.css";

const Technologies = () => {
    return (
        <div className="technology_div">
            {technology.map((tech, index) => {
                return (
                    <AnimatePresence mode="wait">
                        <motion.div
                        className="tech"
                        initial={{ y: -70, opacity:0 }}
                                key={index}
                                animate={{
                                    y:0,
                                    opacity: 1,
                                    transition: {
                                        type: "spring",
                                        bounce: 0.45,
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    },
                                }}
                                exit={{y:-200, opacity: 0}}>
                            <motion.p
                                className="name_icon"
                            >
                                {tech} {technologyIcons[tech]}
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>
                );
            })}
        </div>
    );
};

export default Technologies;
