import React, {FC} from "react";
import {LETTERS} from "../../utils/letters";
import {Number} from 'components';
import './Numbers.scss';

const Numbers: FC = () => {
    const mapLetters = Object.keys(LETTERS).map(
        number => <Number number={number}/>
    )

    return <div className='numbers'>{mapLetters}</div>
}

export default Numbers;
