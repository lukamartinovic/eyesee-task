export type Score = 'correct' | 'incorrect' | 'inactive';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type GameStore = {
    gameStart: boolean,
    setGameStart: (gameStart: boolean) => void,
    currentNumber: string | null,
    score: Record<string, Score>,
    remainingNumbers: string[]
    setRandomNumber: () => void,
    difficulty: Difficulty,
    setScore: (input: string) => void,
    setDifficulty: (difficulty: Difficulty) => void,
    resetGame: () => void
}
