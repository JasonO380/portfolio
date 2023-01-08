import React, { useState } from "react";
import GameButton from "./GameButton";
import { motion } from "framer-motion";
import "./Simon-Says-Game.css";

let click;
let gamePattern = [];
let playerPattern = [];
let level = 0;
let currentIndex;
const SimonSays = () => {
    const [startGame, setStartGame] = useState(false);
    const [player, setPlayer] = useState([]);
    const [simon, setSimon] = useState([]);
    const buttons = [
        { id: 0, name: "red" },
        { id: 1, name: "blue" },
        { id: 2, name: "green" },
        { id: 3, name: "yellow" },
    ];
    const playerClick = (event) => {
        currentIndex = 0;
        click = event.target.name;
        playerPattern.push(click);
        console.log(playerPattern + " player choice");
        checkPattern();
    };

    const animateSequence = (gamePattern) => {
        let i = 0;
        const animateButton = () => {
            setTimeout(() => {
                // Animate the current button in the sequence
                const buttons = document.getElementsByClassName(gamePattern[i]);
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].classList.add("animated");
                    setTimeout(() => {
                        buttons[i].classList.remove("animated");
                    }, 500);
                }
                // Move on to the next button in the sequence
                i++;
                if (i < gamePattern.length) {
                    animateButton();
                }
            }, 1000);
        };

        animateButton();
    };

    const checkPattern = () => {
        console.log(currentIndex + " current index");
        console.log(gamePattern[currentIndex]);
        console.log(playerPattern[currentIndex]);
        if (playerPattern.length !== gamePattern.length) {
            if (playerPattern[currentIndex] === gamePattern[currentIndex]) {
                console.log('match')
                currentIndex ++
            } else {
                startOver();
                console.log("no match reset game here");
            } 
        } else {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    };

    const nextSequence = () => {
        playerPattern = [];
        level++;
        console.log(level + " current level");
        setStartGame(true);
        const randomNum = Math.floor(Math.random() * 3);
        const simonSays = buttons[randomNum].name;
        console.log(simonSays + " simonSays value");
        gamePattern.push(simonSays);
        // animateSequence(gamePattern);
        console.log(gamePattern + " game choice with i");
    };

    const startOver = () => {
        setStartGame(false);
        gamePattern = [];
        level = 0;
    };

    return (
        <div className="game_wrapper">
            <GameButton
                player={player}
                simon={simon}
                onClick={playerClick}
                btn={buttons}
            />
            <div>
                {!startGame && (
                    <button onClick={nextSequence}>START GAME</button>
                )}
            </div>
        </div>
    );
};

export default SimonSays;
