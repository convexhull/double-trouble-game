import React from 'react';

/**
 * 
 * This component displays the control panel consisting of Volume control, countdown timer progress bar and the scorecard
 * It is imported into <GameArena /> (which is common for all games)
 * 
 */

//import styles
import classes from './ControlPanel.module.css';


//import components
import Timer from './Timer/Timer';
import Score from './Score/Score';
import Sound from './Sound/Sound';


type State = {

}

type PropsFromParents = {

}

type AllProps = PropsFromParents;

export class ControlPanel extends React.Component<AllProps, State> {
    render() {
        return (
            <div className={classes["Container"]}>
                <div className={classes["timer"]}>
                    <Timer />
                </div>
                <div className={classes["score"]}>
                    <Score />
                </div>
                <div className={classes["sound"]}>
                    <Sound />
                </div>
            </div>
        )
    }
}

export default ControlPanel;