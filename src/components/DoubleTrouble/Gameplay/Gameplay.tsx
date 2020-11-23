import React from 'react';
import { connect, ConnectedProps } from 'react-redux';


//import files
import data from './questions.json';


//import components
import QuestionCard from '../UI/QuestionCard/QuestionCard';

//import styles
import classes from './Gameplay.module.css';

//import utils and helpers
import * as GameUtils from '../../../shared/utils/doubleTrouble';


//import types
import { Question, Answer } from '../../../shared/types/doubleTrouble';


//import actions
import * as gameActions from '../../../store/game/actionCreators';
import { RootState } from '../../../store/store';

/**
 * This Gameplay component consists of the actual game. This component is imported into the game arena.
 * 
 * # This component fetches question from data.json file and present them to the user. 
 * # User's current score is maintained in the internal state.
 * # Only when the game is over, it updates the final score in the redux store. 
*/




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

    constructor(props: AllProps) {
        super(props);
        this.state = {
            questionCounter: 0
        }
    }

    optionClickHandler = (question: Question, answer: Answer) => {
        //in this handler we update score and increment questionCounter 

        //score is 1 if answer is correct, false otherwise
        let score = GameUtils.checkAnswer(question, answer) ? 1 : 0;
        if (score === 1) {
            this.props.onIncrementScore();
        }

        this.setState((state) => {
            return {
                questionCounter: state.questionCounter + 1
            }
        })
    }

    render() {
        //Logic to pick current question. The modulo operator ensures that our questions get repeated once we are beyond
        //the question bank limit.
        let question = data[this.state.questionCounter % data.length];
        return (
            <div className={classes["Container"]}>
                <div>
                <QuestionCard question={question} hoverable clicked={this.optionClickHandler} />

                </div>
            </div>
        )
    }

}



export default connector(Gameplay);