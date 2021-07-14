import React, {FC} from "react";
import {Difficulty, useGameStore} from "../../state/gameStore";

const DifficultyPicker: FC = () => {
    const {difficulty, setDifficulty} = useGameStore(state => state)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDifficulty(e.target.value as Difficulty)
    }

    return (
        <div onChange={handleChange}>
            <input type="radio" id="easy" name="drone" value="easy" defaultChecked={difficulty === "easy"}/>
            <label htmlFor="huey">Easy</label>
            <input type="radio" id="medium" name="drone" value="medium" defaultChecked={difficulty === "medium"}/>
            <label htmlFor="huey">Medium</label>
            <input type="radio" id="hard" name="drone" value="hard" defaultChecked={difficulty === "hard"}/>
            <label htmlFor="huey">Hard</label>
        </div>)
}

export default DifficultyPicker;
