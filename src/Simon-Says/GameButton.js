import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";


const GameButton = (props) => {
    const buttons = props.btn;
    const player = props.player;
    const simon = props.simon;
    // console.log(player + " player");
    // console.log(simon + " simon");
    const [gamePattern, setGamePattern] = useState([])

    const playPattern = (simon) => {
        setGamePattern((preVal)=> [...preVal, simon])
        console.log(gamePattern)
    }

    return (
        <div className="button_container_mobile">
            {buttons.map((btn, index)=> {
                const color = btn.name;
                return (
                    <motion.button
                    onPlay={playPattern}
                    whileTap={{scale:.9, color:"black", backgroundColor: "grey"}}
                    onClick={props.onClick}
                    style={{backgroundColor:color}}
                    id={btn.name}
                    play={props.play}
                    name={btn.name}>{btn.name}</motion.button>
                )
            })}
        </div>
    )
}

export default GameButton;