import React, {FC} from "react";
import {LETTERS} from "utils/letters";
import './Number.scss';

type NumberProps = {
    number: string | Number,
    attempt?: boolean
}

const Number: FC<NumberProps> = ({number, attempt}) => {
    return <div className="number">{LETTERS[String(number)]} ({number})</div>
}

export default Number;
