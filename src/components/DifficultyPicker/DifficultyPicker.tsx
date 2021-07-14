import React, {FC} from "react";
import {useGameStore} from "../../state/gameStore";
import {FormControlLabel, Radio, RadioGroup, Typography} from "@material-ui/core";
import {Difficulty} from "../../state/types";
import './DifficultyPicker.scss';

const DifficultyPicker: FC = () => {
    const {difficulty, setDifficulty} = useGameStore(state => state)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDifficulty(e.target.value as Difficulty)
    }

    return (
        <div className='difficultyPicker'>
            <Typography>
                Select a difficulty:
            </Typography>
            <RadioGroup value={difficulty} onChange={handleChange}>
                <FormControlLabel value="easy" control={<Radio />} label="Easy" />
                <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                <FormControlLabel value="hard" control={<Radio />} label="Hard" />
            </RadioGroup>
        </div>
        )
}

export default DifficultyPicker;
