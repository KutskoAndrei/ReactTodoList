import classes from './ScoreLabel.module.scss';
import { FC } from 'react';

interface IScoreLabelProps {
    score: number;
}

const ScoreLabel: FC<IScoreLabelProps> = ({score}) => {
  return (
    <div className={classes.scoreLabel}>
        <h1>{score}</h1>
    </div>
  )
}

export default ScoreLabel