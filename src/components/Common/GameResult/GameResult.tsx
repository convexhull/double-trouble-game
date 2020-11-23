import React from 'react';
import { connect, ConnectedProps } from 'react-redux';


/**
 * This component displays user's score in the game and dispatches update action to update score info in the backend.
 */



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
        updatedScore: state.gameState.updatedScore
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
            <div>
                RESULT TIME!!!
                Your Score: {this.props.updatedScore}
            </div>
        )
    }
}


export default connector(GameResult);