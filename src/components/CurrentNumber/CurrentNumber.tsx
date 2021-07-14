import React, {FC, useEffect, useRef, useState} from "react";
import {useGameStore, GameStore} from "../../state/gameStore";
import {DIFFICULTY_TIMEOUT} from "../../utils/letters";

const CurrentNumber: FC = () => {
    const {currentNumber, setRandomNumber, score, resetGame, difficulty} = useGameStore<GameStore>(state => state as GameStore);
    const timer = useRef<any>(null);

    useEffect(() => {
       timer.current = setInterval(() => setRandomNumber(), DIFFICULTY_TIMEOUT[difficulty]);
       return () => {
           resetGame();
           timer.current && clearInterval(timer.current);
       }
    }, []);

    useEffect(() => {
        clearInterval(timer.current);
        setRandomNumber();
        timer.current = setInterval(() => setRandomNumber(), DIFFICULTY_TIMEOUT[difficulty]);
    }, [score])

    return <div >{currentNumber || "Game over"}</div>
}

export default CurrentNumber;
