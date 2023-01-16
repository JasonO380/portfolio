import React, { useState, useEffect } from "react";
import GameButton from "./GameButton";
import instructions from "./instructions";
import { heading_game_text_desktop, descriptive_game_text } from "../CSS/font-styles";
import { NavLink } from "react-router-dom";
import sounds from "./btn-sounds";
import "./Simon-Says-Game.css";

let click;
let gamePattern = [];
let playerPattern = [];
let level = 0;
let i = 0;
const SimonSays = () => {
    const [startGame, setStartGame] = useState(false);
    const [score, setScore] = useState(0);
    const buttons = [
        { id: 0, name: "red" },
        { id: 1, name: "blue" },
        { id: 2, name: "green" },
        { id: 3, name: "yellow" },
    ];
    const playerClick = (event) => {
        click = event.target.name;
        playerPattern.push(click);
        animateSequence(click)
        playSound(sounds[click]);
        if (startGame) {
            checkPattern(playerPattern.length - 1);
        }
    };

    const animateSequence = (color) => {
        console.log(color);
        const button = document.getElementById(color);
        console.log(button);
        if (button) {
            button.classList.add("animated");
            console.log(button);
            setTimeout(() => {
                button.classList.remove("animated");
                console.log(button);
            }, 200);
        }
    };

    const checkPattern = (eachEntry) => {
        if (playerPattern[eachEntry] === gamePattern[eachEntry]) {
            console.log("match");
            setScore(prevScore => prevScore + 1)
            if (playerPattern.length === gamePattern.length) {
                setTimeout(() => {
                    nextSequence();
                }, 1000);
            }
        } else {
            setTimeout(() => {
                playSound(sounds["wrong"]);
                setTimeout(() => {
                    startOver();
                }, 1100);
            }, 600);
        }
    };

    const nextSequence = () => {
        playerPattern = [];
        level++;
        setStartGame(true);
        const randomNum = Math.floor(Math.random() * 4);
        const simonSays = buttons[randomNum].name;
        if (level === 1) {
            playSound(sounds["start"]);
            setTimeout(() => {
                playSound(sounds[simonSays]);
                gamePattern.push(simonSays);
                animateSequence(simonSays);
            }, 600);
        } else {
            playSound(sounds[simonSays]);
            gamePattern.push(simonSays);
            animateSequence(simonSays);
        }
    };

    const playSound = (sound) => {
        const audio = new Audio(sound);
        audio.play();
    };

    const startOver = () => {
        setStartGame(false);
        gamePattern = [];
        level = 0;
        i = 0;
        setScore(0)
    };

    return (
        <div className="game_wrapper">
            <div className="start_home_container">
                {!startGame && (
                    <div className="start_home_div">
                    <button 
                    className="start_home_button"
                    onClick={nextSequence}>START GAME</button>
                    <NavLink to="/">
                    <button 
                    className="start_home_button"
                    >HOME</button>
                    </NavLink>
                    </div>
                )}
                {!startGame ? (
                <div className="instructions">
                    <p>{instructions}</p>
                </div> 
            ) : (
                <div className="score">
                    <p>SCORE: {score}</p>
                </div>
            )}
            </div>
            <GameButton
                animate={animateSequence}
                onClick={playerClick}
                btn={buttons}
            />
        </div>
    );
};

export default SimonSays;
