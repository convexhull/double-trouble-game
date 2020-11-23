import React from 'react';


import { connect, ConnectedProps } from 'react-redux';

/**
 * 
 * This component displays the control panel consisting of Volume control, countdown timer progress bar and the scorecard
 * 
 */

//import styles
import classes from './ControlPanel.module.css';


//import types
import { RootState } from '../../../../store/store';



//import components
import Timer from './Timer/Timer';
import Score from './Score/Score';
import Volume from './Volume/Volume';



type State = {
    
}




const mapStateToProps = (state: RootState) => {
    return {
        //convert totalTime(s) to ms for smoother animation in countdown progress bar.
        baseTime: state.globalState.timer.baseTime,
        timeRemaining: state.globalState.timer.timeRemaining
    }
}

const connector = connect(mapStateToProps);

type PropsFromParents = {

}

type PropsFromRedux = ConnectedProps<typeof connector>;

type AllProps = PropsFromParents & PropsFromRedux;


class ControlPanel extends React.Component<AllProps, State> {

    render() {
        return (
            <div className={classes["Container"]}>
                <div className={classes["timer"]}>
                    <Timer />
                </div>
                <div className={classes["score"]}>
                    <Score />
                </div>
                <div className={classes["volume"]}>
                    <Volume />
                </div>
            </div>
        )
    }
}

export default connector(ControlPanel);