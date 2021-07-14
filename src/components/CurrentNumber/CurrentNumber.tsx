import React, {FC, useEffect, useRef, useState} from "react";
import {useGameStore, GameStore} from "../../state/gameStore";

const CurrentNumber: FC = () => {
    const {currentNumber, setRandomNumber, score, resetGame} = useGameStore<GameStore>(state => state as GameStore);
    const timer = useRef<any>(null);

    useEffect(() => {
       timer.current = setInterval(() => setRandomNumber(), 1000);
       return () => {
           resetGame();
           timer.current && clearInterval(timer.current);
       }
    }, []);

    useEffect(() => {
        clearInterval(timer.current);
        setRandomNumber();
        timer.current = setInterval(() => setRandomNumber(), 1000);
    }, [score])

    return <div >{currentNumber || "Game over"}</div>
}

export default CurrentNumber;
