import React from 'react';
import { connect, ConnectedProps} from 'react-redux';


/**
 * This component displays the Introduction illustration (game demo)
 * 
 * # This component is imported into the Introduction Page
*/




//import styles
import classes from './Gameplay.module.css';

//import utils and helpers
import * as GameUtils from '../../../shared/utils/doubleTrouble';


//import types
import { Question, Answer } from '../../../shared/types/doubleTrouble';


//import actions
import * as gameActions from '../../../store/game/actionCreators';
import { RootState } from '../../../store/store';




type State = {
    questionCounter: number
}


type PropsFromParents = {

}

const mapStateToProps = (state: RootState) => {
    return {
        currentScore: state.gameState.current_score
    }
}

const mapDispatchToProps = {
    onIncrementScore: () => gameActions.incrementGameScore()
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type AllProps = PropsFromParents & PropsFromRedux;

class Gameplay extends React.Component<AllProps, State> {


    render() {

       
        return (
           null
        )
    }

}



export default connector(Gameplay);