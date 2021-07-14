import React, {FC} from "react";
import {LETTERS} from "utils/letters";
import {Score} from "state/types";
import './Number.scss';

type NumberProps = {
    number: string | Number,
    score: Score,
}

const Number: FC<NumberProps> = ({number, score}) => {
    return <div className={`number number-${score}`}>{LETTERS[String(number)]} ({number})</div>
}

export default Number;
