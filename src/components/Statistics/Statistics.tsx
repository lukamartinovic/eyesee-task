import React, {FC} from "react";
import {useGameStore} from "state/gameStore";
import {Button, Typography} from "@material-ui/core";
import './Statistics.scss';

const Statistics: FC = () => {
    const score = useGameStore(state => state.score);
    const resetGame = useGameStore(state => state.resetGame);
    const difficulty = useGameStore(state => state.difficulty);

    const totalNumbers = Object.values(score).length;
    const correctInputs = Object.values(score).filter(score => score === "correct").length;

    const lossMessage = `You got ${correctInputs}/${totalNumbers} numbers right. Better luck next time!`;
    const victoryMessage = 'You got all the numbers right, well done!'
    const hasWon = correctInputs === totalNumbers;
    const mockingMessage = difficulty !== 'easy' ?
        <Typography
            variant='h5'
            align='center'
        >
            Maybe try lowering the difficulty?
        </Typography>
        : null;

    return (
        <div className='statistics'>
            <Typography
                variant='h3'
            >
                {hasWon ? "You won!" : "Game over"}
            </Typography>
            <Typography
                variant='h5'
                align='center'>
                {hasWon ? victoryMessage : lossMessage}
            </Typography>
            {mockingMessage}
            <Button variant='contained' color='primary' onClick={() => resetGame()}>Try again</Button>
        </div>)
}

export default Statistics;
