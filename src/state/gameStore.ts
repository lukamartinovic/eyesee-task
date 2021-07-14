import create from 'zustand';
import {INITIAL_SCORE, LETTERS} from "../utils/letters";

export type Difficulty = 'easy' | 'medium' | 'hard';

export type GameStore = {
    currentNumber: string | null,
    score: Record<string, boolean | null>,
    remainingNumbers: string[]
    setRandomNumber: () => void,
    difficulty: Difficulty,
    setScore: (input: string) => void,
    setDifficulty: (difficulty: Difficulty) => void,
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
    setDifficulty: (difficulty: Difficulty) => set({difficulty}),
    difficulty: 'easy',
    resetGame: () => {
        set({currentNumber: null, score: INITIAL_SCORE, remainingNumbers: Object.keys(LETTERS)})
    },
}))
