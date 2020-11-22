import React from 'react';
import { connect } from 'react-redux';



//import styles
import classes from './Timer.module.css';


//import types
import { RootState } from '../../../../store/store';



//import files


/**
 * 
 * This component renders the Timer section in the game arena. It features a countdown progress bar and a 
 * digital timer showing seconds left in the game. 
 * 
 */


type PropsFromParents = {

}

type PropsFromDispatch = {
    totalTime: number
}

type State = {
    timeLeft: number
}

type AllProps = PropsFromParents & PropsFromDispatch;



class Timer extends React.Component<AllProps, State> {

    constructor(props: AllProps) {
        super(props);
        this.state = {
            timeLeft: props.totalTime
        }
    }


    decreaseTime = () => {
        this.setState((state) => {
            return {
                timeLeft: state.timeLeft - 100
            }
        })
    }

    componentDidMount() {
        //reduce the height of progress bar every 100th millisecond. Decreasing the time interval will lead to 
        //smoother height decrease animation as it will happen more frequently.
        setInterval(() => {
            this.decreaseTime();
            /*test*/
        }, 100);
    }




    render() {
        let max_height = 300;
        let remaining_height = (max_height / this.props.totalTime) * this.state.timeLeft;
        return (
            <div className={classes["Container"]}>
                <div className={classes["timer-progressbar-container"]}>
                    <div className={classes["timer-progressbar"]} style={{ height: remaining_height }}>

                    </div>
                </div>

                <div className={classes["timer-digital"]}>
                    {this.state.timeLeft}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        //convert totalTime(s) to ms for smoother animation in countdown progress bar.
        totalTime: state.gameState.time * 1000
    }
}


export default connect(mapStateToProps)(Timer);