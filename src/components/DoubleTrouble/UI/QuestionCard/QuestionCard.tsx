import React from 'react';

/**
 * 
 * This component receives questions from the parent component and displays the formatted question along with formatted options. 
 * # Disable the options and displays cross-sign on wrong answer when a wrong answer is chosen. 
 * 
 */


//import images
import CrossSign from '../../../../assets/images/gamePlay/cross-sign.svg';

//import styles
import classes from './QuestionCard.module.css';


type Option = {
    text: string;
    color: string;
}

type Question = {
    question: {
        text: string;
        color: string;
    };
    options: Option[]
}

type PropsFromParents = {
    question: Question,
    clicked: (question: Question, option: Option) => void,
    //wrong choice === true means that a wrong answer was chosen
    wrongChoice: boolean
}

type AllProps = PropsFromParents;


type State = {
    //chosenChoiceIndex is either 0 or 1. 0 means first option was chosen and 1 means second was chosen. 
    //we use state.chosenChoiceIndex and state.wrongChoice to display cross-sign when user chooses the wrong option
    chosenChoiceIndex: number
}

export class QuestionCard extends React.Component<AllProps, State> {

    state = {
        chosenChoiceIndex: 0
    }

    clickHandler = (question: Question, option: Option, index: number) => {
        this.setState({
            chosenChoiceIndex: index
        })
        this.props.clicked(question, option);
    }

    render() {
        //assign css classes dynamically to question text(for font color assignment)
        let questionTextClasses = [classes["text-box"], classes["question"]];
        if (this.props.question.question.color === "red") {
            questionTextClasses.push(classes["question--red"]);
        } else {
            questionTextClasses.push(classes["question--blue"]);
        }

        //assign css classes dynamically to option texts(for font color assignment)
        let options = this.props.question.options.map((option, index) => {
            let optionTextClasses = [classes["text-box"], classes["option"]];
            if (this.props.wrongChoice) {
                //if a wrong choice is chosen, disable both options until wrongChoice is reset(by <Gameplay /> component after 500ms )
                optionTextClasses.push(classes["click-disabled"]);
            }
            if (this.props.wrongChoice && index === this.state.chosenChoiceIndex) {
                //add css class to give pink background(background of the cross sign) to the wrong choice(if wrong choice is chosen).
                optionTextClasses.push(classes["wrong-choice-selected"]);
            } else {
                if (option.color === "red") {
                    optionTextClasses.push(classes["option--red"]);
                } else {
                    optionTextClasses.push(classes["option--blue"]);
                }
            }
            return (
                <p key={option.text} onClick={() => this.clickHandler(this.props.question, option, index)} className={optionTextClasses.join(' ')}>
                    {option.text.toUpperCase()}
                    {/* if this option has been chosen and its a wrong choice then display the cross sign */}
                    {this.props.wrongChoice && index === this.state.chosenChoiceIndex ? <img className={classes["cross-sign"]} src={CrossSign} alt="cross-sign" /> : null}
                </p>
            );
        })
        return (
            <div className={classes["Container"]}>
                <p className={questionTextClasses.join(' ')}>{this.props.question.question.text.toUpperCase()}</p>
                <div className={classes["options"]}>
                    {options}
                </div>
            </div>
        )
    }
}

export default QuestionCard;