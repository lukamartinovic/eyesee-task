import React, {FC} from "react";
import {LETTERS} from "utils/letters";
import './Number.scss';

type NumberProps = {
    number: string | Number,
    score: boolean | null,
}

const Number: FC<NumberProps> = ({number, score}) => {
    return <div className="number">{LETTERS[String(number)]} ({number})</div>
}

export default Number;
