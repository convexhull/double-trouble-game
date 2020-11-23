import React from 'react';
import { connect, ConnectedProps } from 'react-redux';


//import styles
import classes from './Score.module.css';



//import types
import { RootState } from '../../../../../store/store';

type PropsFromParent = {

}

const mapStateToProps = (state: RootState) => {
    return {
        currentScore: state.gameState.current_score
    }
}


const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


type AllProps = PropsFromParent & PropsFromRedux;


const Score: React.FC<AllProps> = (props: AllProps) => {
    return (
        <div className={classes["Container"]}>
            <div className={classes["score-card"]}>
                <p className={classes["score-card__title"]}>SCORE</p>
                <p className={classes["score-card__score"]}>{props.currentScore}</p>
            </div>
            <div className={classes["score-canvas"]}>
            </div>
        </div>
    )
}


export default connector(Score);