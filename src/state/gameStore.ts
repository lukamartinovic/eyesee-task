import create from 'zustand';
import {INITIAL_SCORE, LETTERS} from "../utils/letters";

export type GameStore = {
    currentNumber: string | null,
    score: Record<string, boolean | null>,
    remainingNumbers: string[]
    setRandomNumber: () => void,
    difficulty: 'easy' | 'medium' | 'hard',
    setScore: (input: string) => void,
    resetGame: () => void
}

export const useGameStore = create<GameStore>((set, get) => ({
    currentNumber: null,
    attemptedLetter: null,
    score: INITIAL_SCORE,
    remainingNumbers: Object.keys(LETTERS),
    setRandomNumber: (): void => {
        const {remainingNumbers} = get();
        const newRemainingNumbers = [...remainingNumbers].sort(number => 0.5 - Math.random());
        const randomNumber = newRemainingNumbers.pop();
        set({remainingNumbers: newRemainingNumbers, currentNumber: randomNumber ? String(randomNumber) : null})
        console.log(get());
    },
    setScore: (input: string) => {
        const {currentNumber, score} = get();
        if(currentNumber)
            set({score: {...score, [currentNumber]: LETTERS[currentNumber] === input}})
    },
    difficulty: 'easy',
    resetGame: () => {
        set({currentNumber: null, score: INITIAL_SCORE, remainingNumbers: Object.keys(LETTERS)})
    },
}))
