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
    progressBarFullHeight: number
}




const mapStateToProps = (state: RootState) => {
    return {
        baseTime: state.globalState.timer.baseTime,
        timeRemaining: state.globalState.timer.timeRemaining,
        allowedTime: state.gameState.currentGameInfo.time
    }
}

const connector = connect(mapStateToProps);

type PropsFromParents = {

}

type PropsFromRedux = ConnectedProps<typeof connector>;

type AllProps = PropsFromParents & PropsFromRedux;


export class Timer extends React.Component<AllProps, State> {
    progressBarRef: React.RefObject<HTMLInputElement>;
    constructor(props: AllProps) {
        super(props);
        this.progressBarRef = React.createRef();
        this.state = {
            progressBarFullHeight: 0
        }
    }

    componentDidMount() {
        //For getting the maximum height of countdown timer progress bar. Max ht. is used for calculating remaining height. 
        if (this.progressBarRef.current) {
            let height = this.progressBarRef.current.clientHeight;
            if (height !== this.state.progressBarFullHeight) {
                this.setState({
                    progressBarFullHeight: height
                })
            }
        }
    }

    render() {
        //logic for calculating progress bar height. If base time is not yet set, means redux timer hasn't started. So display full ht. 
        let remaining_height = this.state.progressBarFullHeight;
        if (this.props.baseTime !== 0) {
            remaining_height = (this.state.progressBarFullHeight / this.props.baseTime) * (this.props.timeRemaining);
        }
        return (
            <div className={classes["Container"]}>
                <div ref={this.progressBarRef} className={classes["timer-progressbar-container"]}>
                    <div className={classes["timer-progressbar"]} style={{ height: remaining_height }}>
                    </div>
                </div>
                <div className={classes["timer-digital"]}>
                    <p className={classes["timer-digital__title"]}>TIME</p>
                    {/* Here if timeRemaining is 0, it means redux timer hasn't yet started i.e game hasn't begun, so display max allowed time */}
                    <p className={classes["timer-digital__value"]}>{this.props.timeRemaining || this.props.allowedTime}</p>
                </div>
                <div className={classes["timer-canvas"]}>
                </div>
            </div>
        )
    }
}

export default connector(Timer);