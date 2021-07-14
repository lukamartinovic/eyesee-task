import React, {FC} from "react";
import {CurrentNumber, DifficultyPicker, Numbers, Statistics, TopBar} from "components";
import {Button, Typography} from "@material-ui/core";
import {useGameStore} from "state/gameStore";
import './Layout.scss';

const Layout: FC = () => {
    const {gameStart, setGameStart, currentNumber} = useGameStore(state => state);

    const Game =
        <>
            <CurrentNumber/>
            {currentNumber ? <Numbers /> : <Statistics/>}
        </>;

    const StartMenu =
        <>
            <Typography align="center" variant="h6" gutterBottom>
                The goal of the game is to enter the letter corresponding to the number which is displayed. The time you
                have per letter depends on the difficulty you select. Good luck!
            </Typography>
            <DifficultyPicker/>
            <Button variant='contained' color='primary' onClick={() => setGameStart(false)}>Start game</Button>
        </>;

    return (
        <div className='layout'>
            <TopBar/>
            {gameStart ? StartMenu : Game}
        </div>
    );
};

export default Layout;
