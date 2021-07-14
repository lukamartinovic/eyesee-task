import React, {FC, useEffect, useRef} from "react";
import {useGameStore} from "../../state/gameStore";
import {DIFFICULTY_TIMEOUT} from "../../utils/letters";
import {Typography} from "@material-ui/core";
import {GameStore} from "../../state/types";
import useGameInput from "./useGameInput";

const CurrentNumber: FC = () => {
    const {
        currentNumber,
        setRandomNumber,
        score,
        difficulty,
        setScore,
    } = useGameStore<GameStore>(state => state as GameStore);
    const timer = useRef<any>(null);

    useGameInput();

    useEffect(() => {
        clearInterval(timer.current);
        setRandomNumber();
        timer.current = setInterval(() => {
            setScore('timeout');
        }, DIFFICULTY_TIMEOUT[difficulty]);

        return () => clearInterval(timer.current);
    }, [score, difficulty, setRandomNumber, setScore])

    return <Typography variant="h1">{currentNumber}</Typography>
}

export default CurrentNumber;
