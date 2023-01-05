import React from "react";
import profile from "../Images/my_profile_pic.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import "./profile-pic-mobile.css";

const ProfilePic = () => {
    const animation = {
        offscreen: { opacity: 0 },
        onscreen: {
            opacity: 1,
            transition: { duration: 1.5 },
        },
        exit: { opacity: 0 },
    };
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={"offscreen"}
                animate={"onscreen"}
                exit={"exit"}
                key={profile}
                className="profile_div_mobile"
            >
                <motion.img
                    variants={animation}
                    className="profile_pic_mobile"
                    src={profile}
                />
            </motion.div>
        </AnimatePresence>
    );
};

export default ProfilePic;
