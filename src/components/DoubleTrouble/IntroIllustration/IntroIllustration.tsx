import React from 'react';

/**
 * 
 * Demo question card for intro/rules description purpose. Imported into Introduction component, when user is playing
 * double trouble game.  
 * 
 */



//import styles
import classes from './IntroIllustration.module.css';

//import images
import CorrectIcon from '../../../assets/images/introductionPage/correct.svg';
import WrongIcon from '../../../assets/images/introductionPage/wrong.svg';



type PropsFromParents = {

}

type AllProps = PropsFromParents;


const IntroIllustration: React.FC<AllProps> = (props) => {

    let questionTextClasses = [classes["text-box"], classes["question"], classes["question--blue"]];
    let option1TextClasses = [classes["text-box"], classes["option"], classes["option--blue"]];
    let option2TextClasses = [classes["text-box"], classes["option"], classes["option--red"]];
    //assign css classes dynamically to option texts(for font color assignment)

    return (
        <div className={classes["Container"]}>
            <div className={classes["question-container"]}>
                <p className={questionTextClasses.join(' ')}>RED</p>
                <div className={classes["question__tip"]}><div className={classes["long-dash"]}></div>WORD IS IN BLUE COLOR</div>
            </div>
            <div className={classes["options"]}>
                <div className={classes["option-container"]}>
                    <p className={option1TextClasses.join(' ')}>
                        RED
                    <img className={classes["wrong-icon"]} src={WrongIcon} alt="cross icon"/>

                    </p>
                    <p className={classes["option-tip"]}>
                        WRONG ANSWER
                    </p>
                </div>
                <div className={classes["option-container"]}>
                    <p className={option2TextClasses.join(' ')}>
                        BLUE
                        <img className={classes["correct-icon"]} src={CorrectIcon} alt="tick icon"/>

                    </p>
                    <p className={classes["option-tip"]}>
                        CORRECT ANSWER
                    </p>
                </div>
            </div>
        </div>
    )
}

export default IntroIllustration;