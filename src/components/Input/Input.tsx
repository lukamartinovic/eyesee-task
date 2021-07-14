import React, {FC, useEffect, useRef} from "react";
import {useGameStore} from "../../state/gameStore";
import {Simulate} from "react-dom/test-utils";

const Input: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const {setScore, score, currentNumber} = useGameStore(state => state);

    useEffect(() => {
        if(inputRef.current)
            inputRef.current.focus()
    }, [])

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

    return <input ref={inputRef} placeholder='Input letter' onChange={handleChange}/>
}

export default Input;
