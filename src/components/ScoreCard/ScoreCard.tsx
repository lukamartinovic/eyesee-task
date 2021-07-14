import {Card, Typography} from "@material-ui/core";
import {useGameStore} from "../../state/gameStore";
import {Score} from "../../state/types";
import {FC} from "react";
import './ScoreCard.scss'

const ScoreCard: FC = () => {
    const score = useGameStore(state => state.score);

    const scoreBreakdown = Object.values(score)
        .reduce(
            (breakdown: Record<string, number>, score: Score) => {
                const newBreakdown = {...breakdown};
                switch (score) {
                    case "correct":
                        newBreakdown.hit++;
                        break;
                    case "incorrect":
                        newBreakdown.miss++;
                        break;
                    case "inactive":
                        newBreakdown.left++;
                        break;
                }
                return newBreakdown;
            },
            {hit: 0, miss: 0, left: 0})

    const {hit, miss, left} = scoreBreakdown;

    return (
        <Card className='scoreCard'>
            <Typography variant='h6'>
                Score:
            </Typography>
            <Typography color='primary'>
                Hit: {hit}
            </Typography>
            <Typography color='error'>
                Miss: {miss}
            </Typography>
            <Typography>
                Left: {left}
            </Typography>
        </Card>
    )
}

export default ScoreCard;
