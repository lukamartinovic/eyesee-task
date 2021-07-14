import {useEffect, useRef} from "react";
import {DIFFICULTY_TIMEOUT} from "../utils/letters";
import {useGameStore} from "../state/gameStore";
import {GameStore} from "../state/types";

const useNumberTimer = () => {
    const {
        setRandomNumber,
        score,
        difficulty,
        setScore,
    } = useGameStore<GameStore>(state => state as GameStore);

    const timer = useRef<any>(null);

    useEffect(() => {
        clearInterval(timer.current);
        setRandomNumber();
        timer.current = setInterval(() => {
            setScore('timeout');
        }, DIFFICULTY_TIMEOUT[difficulty]);

        return () => clearInterval(timer.current);
    }, [score, difficulty, setRandomNumber, setScore])
}

export default useNumberTimer;
