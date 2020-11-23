import React from  'react';


//import styles
import classes from './QuestionCard.module.css'


type Question = {
    question : {
        text : string;
        color : string;
    };
    options : {
        text : string;
        color : string;
    }[]
}


type PropsFromParents = {
    question: Question,
    hoverable: boolean
}

type AllProps = PropsFromParents;


const OptionButton: React.FC<AllProps> = (props) => {

    //assign css classes dynamically to question text(for font color assignment)
    let questionTextClasses = [classes["text-box"]];
    if (props.question.question.color === "red") {
        questionTextClasses.push(classes["question--red"]);
    } else {
        questionTextClasses.push(classes["question--blue"]);
    }


    let options = props.question.options.map((option) => {
        let optionTextClasses = [classes["text-box"]];
        if (option.color === "red") {
            optionTextClasses.push(classes["option--red"]);
        } else {
            optionTextClasses.push(classes["option--blue"]);
        }
        return <p onClick={() => {}} className={optionTextClasses.join(' ')}>{option.text.toUpperCase()}</p>;
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