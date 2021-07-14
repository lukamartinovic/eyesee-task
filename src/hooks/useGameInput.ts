import {useCallback, useEffect} from "react";
import {useGameStore} from "../state/gameStore";

const useGameInput = () => {
    const {setScore} = useGameStore(state => state);

    const handleChange = useCallback(({key}: KeyboardEvent) => setScore(key), [setScore])

    useEffect(() => {
        document.addEventListener('keydown', handleChange)
        return () => document.removeEventListener('keydown', handleChange);
    }, [handleChange])
}

export default useGameInput;
