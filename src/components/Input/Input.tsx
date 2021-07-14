import React, {FC, useRef} from "react";
import {useGameStore} from "../../state/gameStore";

const Input: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const {setScore, score, currentNumber} = useGameStore(state => state);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!inputRef.current) return;

        if(!currentNumber) {
            inputRef.current.disabled = true;
            inputRef.current.value = "";
        }
        else {
            if(!score[currentNumber]){
                setScore(e.target.value);
            }
            inputRef.current.value = "";
            inputRef.current.focus();
        }
    }

    return <input ref={inputRef} placeholder={'Input letter'} onChange={handleChange}/>
}

export default Input;
