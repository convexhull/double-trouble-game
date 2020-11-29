import React from 'react';
import { connect, ConnectedProps } from 'react-redux';


/**
 * This component on mount dispatches update action to update score info in the backend
 * and then shows the updated score fetched from the backend
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
        updatedScore: state.gameState.currentGameStats.updatedScore,
        loading: state.loadingState.UPDATE_GAME_SCORE,
        farewellText: state.gameState.currentGameInfo.farewell_text
    }
}

const mapDispatchToProps = {
    onUpdateScore: () => gameActions.asyncUpdateGameScoreStart()
}


const connector = connect(mapStateToProps, mapDispatchToProps);


type PropsFromRedux = ConnectedProps<typeof connector>;

type AllProps = PropsFromParents & PropsFromRedux;



export class GameResult extends React.Component<AllProps, State> {

    componentDidMount() {
        this.props.onUpdateScore();
    }

    render() {
        let jsxToRender = null;
        if (!this.props.loading) {
            jsxToRender = (
                <React.Fragment>
                    <p className={classes["greet"]}>
                        Thank you!
                </p>
                    <div className={classes["game-score"]}>
                        <span>
                            Your Score is {this.props.updatedScore}
                        </span>
                    </div>
                    <p className={classes["final-word"]}>
                        {this.props.farewellText}
                    </p>
                </React.Fragment>
            )
        }
        return (
            <div className={classes["Container"]}>
                {jsxToRender}
            </div>
        )
    }
}


export default connector(GameResult);