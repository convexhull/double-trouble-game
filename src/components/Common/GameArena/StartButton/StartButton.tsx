import React from 'react';


//import styles
import classes from './StartButton.module.css';


//import files
import StartButtonSvg from '../../../../assets/images/start-game-btn/default.svg';
// import {ReactElement as ReactLogo} from '../../../../assets/images/start-game-btn/default.svg'
type Props = {

}

type State = {

}



class StartButton extends React.Component<Props, State> {


    render() {
        return (
            <div className={classes["Container"]}>
                <div className={classes["start-btn"]}>
                    {/* <img src={StartButtonSvg} alt="start button" /> */}
                    {/* <ReactLogo /> */}
                </div>
            </div>
        )
    }
}


export default StartButton;