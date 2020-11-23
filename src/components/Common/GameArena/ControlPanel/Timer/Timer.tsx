import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

/**
 * 
 * This component renders the Timer section in the game arena. It features a countdown progress bar and a 
 * digital timer showing seconds left in the game. 
 * 
 */

//import styles
import classes from './Timer.module.css';


//import types
import { RootState } from '../../../../../store/store';



//import files




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


class Timer extends React.Component<AllProps, State> {

    render() {
        let max_height = 300;
        let remaining_height = (max_height / this.props.baseTime) * this.props.timeRemaining;
        return (
            <div className={classes["Container"]}>
                <div className={classes["timer-progressbar-container"]}>
                    <div className={classes["timer-progressbar"]} style={{ height: remaining_height }}>
                    </div>
                </div>
                <div className={classes["timer-digital"]}>
                    <p className={classes["timer-digital__title"]}>TIME</p>
                    <p className={classes["timer-digital__value"]}>{this.props.timeRemaining}</p>
                </div>
            </div>
        )
    }
}

export default connector(Timer);