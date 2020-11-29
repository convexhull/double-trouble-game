import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

/**
 * This Gameplay component consists of the actual game. This component is imported into the <GameArena />
 * 
 * # This component fetches question from data.json file and present them to the user. 
 * # User's current score is maintained in the internal state.
 * # Only when the game is over, it updates the final score in the redux store. 
*/


//import question data
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


type State = {
    questionCounter: number,
    wrongChoice: boolean,
}


type PropsFromParents = {

}


const mapDispatchToProps = {
    onIncrementScore: () => gameActions.incrementGameScore()
}

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type AllProps = PropsFromParents & PropsFromRedux;

export class Gameplay extends React.Component<AllProps, State> {

    constructor(props: AllProps) {
        super(props);
        this.state = {
            questionCounter: 0,

            //for displaying cross sign feedback on choosing wrong answer, passed to <QuestionCard /> child component
            wrongChoice: false,
        }
    }

    optionClickHandler = (question: Question, answer: Answer) => {
        //in this handler we update score and increment questionCounter 

        //score is 1 if answer is correct, false otherwise
        let score = GameUtils.checkAnswer(question, answer) ? 1 : 0;
        if (score === 1) {
            this.props.onIncrementScore();
            this.setState(state => {
                return {
                    questionCounter: state.questionCounter + 1
                }
            })
        }


        else {
            this.setState({
                //display cross sign for 1/2 second and disable the options (used as prop in child component <QuestionCard />)
                wrongChoice: true,
            })
            setTimeout(() => {
                //After 500ms or 1/2 second, set wrongChoice to false. This will enable click and remove cross-sign from options in <QuestionCard />. 
                this.setState(state => {
                    return {
                        wrongChoice: false,
                        questionCounter: state.questionCounter + 1
                    }
                })
            }, 500);
        }
    }

    render() {
        //Logic to pick current question -> The modulo operator ensures that our questions get repeated once we are beyond
        //the question bank limit.
        let question = data[this.state.questionCounter % data.length];
        return (
            <div className={classes["Container"]}>
                <QuestionCard question={question} clicked={this.optionClickHandler} wrongChoice={this.state.wrongChoice} />
            </div>
        )
    }
}



export default connector(Gameplay);