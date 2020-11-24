import React from 'react';
import { connect, ConnectedProps } from 'react-redux';


/**
 * This component displays user's score in the game and dispatches update action to update score info in the backend
 * and then shows the updated score. 
 */

//import styles
import classes from './GameResult.module.css';

//import action creators
import * as gameActions from '../../../store/game/actionCreators';


//import types 
import { RootState } from '../../../store/store';





type State = {

}

type PropsFromParents = {

}

const mapStateToProps = (state: RootState) => {
    return {
        updatedScore: state.gameState.currentGameStats.updatedScore
    }
}

const mapDispatchToProps = {
    onUpdateScore: () => gameActions.asyncUpdateGameScoreStart()
}


const connector = connect(mapStateToProps, mapDispatchToProps);


type PropsFromRedux = ConnectedProps<typeof connector>;

type AllProps = PropsFromParents & PropsFromRedux;



class GameResult extends React.Component<AllProps, State> {

    componentDidMount() {
        this.props.onUpdateScore();
    }

    render() {
        return (
            <div className={classes["Container"]}>
                <p className={classes["greet"]}>
                    Thank you!
                </p>
                <div className={classes["game-score"]}>
                    <span>
                        Your Score is {this.props.updatedScore}
                    </span>
                </div>
                <p className={classes["final-word"]}>
                    We will reach you as soon as we carefully review your interview.
                </p>
            </div>
        )
    }
}


export default connector(GameResult);