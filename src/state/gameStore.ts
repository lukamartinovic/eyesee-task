import create from 'zustand';
import {INITIAL_SCORE, LETTERS} from "../utils/letters";
import {Difficulty, GameStore} from "./types";

export const useGameStore = create<GameStore>((set, get) => ({
    currentNumber: null,
    attemptedLetter: null,
    score: INITIAL_SCORE,
    remainingNumbers: Object.keys(LETTERS),
    difficulty: 'easy',
    gameStart: true,
    setGameStart: gameStart => set({gameStart}),
    setRandomNumber: (): void => {
        const {remainingNumbers} = get();
        const newRemainingNumbers = [...remainingNumbers].sort(number => 0.5 - Math.random());
        const randomNumber = newRemainingNumbers.pop();
        set({remainingNumbers: newRemainingNumbers, currentNumber: randomNumber ? String(randomNumber) : null})
    },
    setScore: (input: string) => {
        const {currentNumber, score} = get();
        if(currentNumber)
            set({score: {...score, [currentNumber]: LETTERS[currentNumber] === input ? "correct" : 'incorrect'}})
    },
    setDifficulty: (difficulty: Difficulty) => set({difficulty}),
    resetGame: () => {
        set({currentNumber: null, score: INITIAL_SCORE, remainingNumbers: Object.keys(LETTERS), gameStart: true})
    },
}))
