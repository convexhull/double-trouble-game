import React from 'react';

/**
 * 
 * This component receives questions from the parent component and displays the formatted question along with formatted options. 
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
    hoverable: boolean,
    clicked: (question: Question, option: Option) => void,
    wrongChoice: boolean
}

type AllProps = PropsFromParents;


const OptionButton: React.FC<AllProps> = (props) => {

    //assign css classes dynamically to question text(for font color assignment)
    let questionTextClasses = [classes["text-box"], classes["question"]];
    if (props.question.question.color === "red") {
        questionTextClasses.push(classes["question--red"]);
    } else {
        questionTextClasses.push(classes["question--blue"]);
    }

    //assign css classes dynamically to option texts(for font color assignment)
    let options = props.question.options.map((option) => {
        let optionTextClasses = [classes["text-box"], classes["option"]];
        if(props.wrongChoice){
            //give cross sign feedback on wrong answer if wrong choice selected
            optionTextClasses.push(classes["wrong-choice-selected"]);
        } else {
            if (option.color === "red") {
                optionTextClasses.push(classes["option--red"]);
            } else {
                optionTextClasses.push(classes["option--blue"]);
            }
        }
        
        return (
            <p onClick={() => props.clicked(props.question, option)} className={optionTextClasses.join(' ')}>
                {!props.wrongChoice ? option.text.toUpperCase() : null}
                {props.wrongChoice ? <img className={classes["cross-sign"]} src={CrossSign} alt="" /> : null }
            </p>
        );
    })

    return (
        <div className={classes["Container"]}>
            <p className={questionTextClasses.join(' ')}>{props.question.question.text.toUpperCase()}</p>
            <div className={classes["options"]}>
                {options}
            </div>
        </div>
    )
}

export default OptionButton;