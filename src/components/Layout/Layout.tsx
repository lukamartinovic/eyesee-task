import React, {FC, useEffect, useState} from "react";
import {CurrentNumber, DifficultyPicker, Input, Numbers} from "components";
import './Layout.scss';
import {useGameStore} from "../../state/gameStore";

const Layout: FC = () => {
    const currentNumber = useGameStore(state => state.currentNumber);

    useEffect(() => {
        if (!currentNumber && gameStarted)
            setGameStarted(false);
    }, [currentNumber])

    const [gameStarted, setGameStarted] = useState(false);
    return (
        <div className="layout">
            {gameStarted ?
                <>
                    <CurrentNumber/>
                    <Input/>
                    <Numbers/>
                </>
                :
                <>
                    <DifficultyPicker/>
                    <button onClick={() => setGameStarted(true)}>Start game</button>
                </>}
        </div>
    )
}

export default Layout;
