import {Difficulty, Score} from "../state/types";

export const LETTERS: Record<string, string> = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    10: "j",
    11: "k",
    12: "l",
    13: "m",
    14: "n",
    15: "o",
    16: "p",
    17: "q",
    18: "r",
    19: "s",
    20: "t",
    21: "u",
    22: "v",
    23: "w",
    24: "x",
    25: "y",
    26: "z"
}

export const INITIAL_SCORE: Record<string, Score> = {
    1: 'inactive',
    2: 'inactive',
    3: 'inactive',
    4: 'inactive',
    5: 'inactive',
    6: 'inactive',
    7: 'inactive',
    8: 'inactive',
    9: 'inactive',
    10: 'inactive',
    11: 'inactive',
    12: 'inactive',
    13: 'inactive',
    14: 'inactive',
    15: 'inactive',
    16: 'inactive',
    17: 'inactive',
    18: 'inactive',
    19: 'inactive',
    20: 'inactive',
    21: 'inactive',
    22: 'inactive',
    23: 'inactive',
    24: 'inactive',
    25: 'inactive',
    26: 'inactive'
}

export const DIFFICULTY_TIMEOUT: Record<Difficulty, number> = {
    easy: 5000,
    medium: 3500,
    hard: 2000
}

