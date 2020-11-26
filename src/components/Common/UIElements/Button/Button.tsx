import React from 'react'


/**
 * This is a customisable button component. It can be customized by using props. 
 */

//import styles
import classes from './Button.module.css';


type PropsFromParents = {
    type: string,
    children: React.ReactNode,
    clicked: () => void
}

type AllProps = PropsFromParents;

export const Button: React.FC<AllProps> = (props) =>  {
    let btnClasses = [classes["btn"]];

    switch(props.type){
        case "cta":
            btnClasses.push(classes["cta"]);
            break;
        default:
            break;
    }
    return (
        <div className={classes["Container"]}>
            <button onClick={props.clicked} className={btnClasses.join(' ')}>{props.children}</button>
        </div>
    )
}


export default Button;