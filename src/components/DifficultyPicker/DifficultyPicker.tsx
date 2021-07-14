import React, {FC} from "react";

const DifficultyPicker: FC = () => {
    return (<div>
        <input type="radio" id="easy" name="drone" value="easy" checked/>
        <label htmlFor="huey">Easy</label>
        <input type="radio" id="medium" name="drone" value="medium"/>
        <label htmlFor="huey">Medium</label>
        <input type="radio" id="hard" name="drone" value="hard"/>
        <label htmlFor="huey">Hard</label>
    </div>)
}

export default DifficultyPicker;
