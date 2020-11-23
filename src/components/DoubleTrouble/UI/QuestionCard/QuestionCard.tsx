import React from 'react';

/**
 * 
 * This component receives questions from the parent component and displays the formatted question along with formatted options. 
 * 
 */



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
    clicked: (question: Question, option: Option) => void
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
        if (option.color === "red") {
            optionTextClasses.push(classes["option--red"]);
        } else {
            optionTextClasses.push(classes["option--blue"]);
        }
        return (
            <p onClick={() => props.clicked(props.question, option)} className={optionTextClasses.join(' ')}>
                {option.text.toUpperCase()}
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