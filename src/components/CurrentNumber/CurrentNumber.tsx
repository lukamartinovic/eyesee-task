import React, {FC} from "react";
import {useGameStore} from "state/gameStore";
import {Typography} from "@material-ui/core";
import {useGameInput, useNumberTimer} from "hooks";

const CurrentNumber: FC = () => {
    const currentNumber = useGameStore(state => state.currentNumber);
    useNumberTimer();
    useGameInput();

    return <Typography variant="h1">{currentNumber}</Typography>
}

export default CurrentNumber;
