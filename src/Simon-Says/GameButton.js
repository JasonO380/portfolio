import React from "react";
import "./Simon-Says-Game.css";
import "./GameButton.css";


const GameButton = (props) => {
    const buttons = props.btn;
    return (
        <div className="game_button_container">
            {buttons.map((btn, index)=> {
                const color = btn.name;
                return (
                    <div className={`btn_div_${btn.name}`}>
                    <button
                    onClick={props.onClick}
                    style={{backgroundColor:color}}
                    id={btn.name}
                    animate={props.animate}
                    play={props.play}
                    className={btn.name}
                    name={btn.name} />
                    </div>
                )
            })}
        </div>
    )
}

export default GameButton;