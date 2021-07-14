import React, {FC} from "react";
import {LETTERS} from "../../utils/letters";
import {Number} from 'components';
import {useGameStore} from "../../state/gameStore";
import './Numbers.scss';

const Numbers: FC = () => {
    const score = useGameStore(state => state.score);

    const mapLetters = Object.keys(LETTERS).map(
        number => {
            const attempt = score[number]
            return <Number number={number} score={attempt}/>;
        }
    )

    return <div className='numbers'>{mapLetters}</div>
}

export default Numbers;
