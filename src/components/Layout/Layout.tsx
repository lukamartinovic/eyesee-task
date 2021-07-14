import React, {FC, useEffect, useState} from "react";
import {CurrentNumber, DifficultyPicker, Input, Numbers} from "components";
import './Layout.scss';
import {useGameStore} from "../../state/gameStore";

const Layout: FC = () => {
    const currentNumber = useGameStore(state => state.currentNumber);

    useEffect(() => {
        if(!currentNumber && gameStarted)
            setGameStarted(false);
    }, [currentNumber])

    const [gameStarted, setGameStarted] = useState(false);

    const handleStart = () => {
        setGameStarted(true);
    }

    return (
        <div className="layout">
            <DifficultyPicker/>
            {gameStarted ?
                    <>
                        <CurrentNumber/>
                        <Input/>
                    </>
                    :
                    <button onClick={handleStart}>Start game</button>
            }
            <Numbers/>
        </div>
    )
}

export default Layout;
