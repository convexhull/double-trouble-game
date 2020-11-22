import React from 'react';


//import files
import data from './data.json';

//import styles
import classes from './Gameplay.module.css';

//import utils and helpers
import * as GameUtils from '../../../../shared/utils/doubleTrouble';


//import types
import { Question, Answer } from '../../../../shared/types/doubleTrouble';

/**
 * This Gameplay component consists of the actual game. This component is imported into the game arena.
 * 
 * # This component fetches question from data.json file and present them to the user. 
 * # User's current score is maintained in the internal state.
 * # Only when the game is over, it updates the final score in the redux store. 
*/





type PropsFromParents = {

}



type PropsFromDispatch = {

}


type State = {
    questionCounter: number,
    currentScore: number
}

type AllProps = PropsFromParents & PropsFromDispatch;

class Gameplay extends React.Component<AllProps, State> {

    constructor(props: AllProps){
        super(props);
        this.state = {
            questionCounter: 0,
            currentScore: 0
        }
    }

    optionClickHandler = (question: Question, answer: Answer) => {
        //in this handler we update score and increment questionCounter 

        //score is 1 if answer is correct, false otherwise
        let score = GameUtils.checkAnswer(question, answer) ? 1 : 0;
        
        this.setState((state) => {
            return {
                questionCounter: state.questionCounter + 1,
                currentScore: state.currentScore + score
            }
        });

    }

    render() {
        //Logic to pick current question. The modulo operator ensures that our questions get repeated once we are beyond
        //the question bank limit.
        let question = data[this.state.questionCounter % data.length];
        
        //assign css classes dynamically to question text(for font color assignment)
        let questionTextClasses = [classes["question"]];
        if(question.question.color === "red"){
            questionTextClasses.push(classes["question--red"]);
        } else {
            questionTextClasses.push(classes["question--blue"]);
        }


        //assign css classes dynamically to option texts(for font color assignment)
        let options = question.options.map( (option) => {
            let optionTextClasses = [classes["option"]];
            if(option.color === "red"){
                optionTextClasses.push(classes["option--red"]);
            } else {
                optionTextClasses.push(classes["option--blue"]);
            }
            return <p onClick={() => this.optionClickHandler(question, option)} className={optionTextClasses.join(' ')}>{option.text}</p>;
        })
       
        return (
            <div className={classes["Container"]}>
                <p className={questionTextClasses.join(' ')}>{question.question.text}</p>
                <div className={classes["options"]}>
                    {options}
                </div>
                {this.state.currentScore}
            </div>
        )
    }

}



export default Gameplay;