//import modules
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * This is the StartButton component. It has internal timer of 3s for the 3s delay before starting
 * the game. Once 3s elapse, the central game timer(managed by redux) is started and game begins. 
 */

//import styles
import classes from './StartButton.module.css';


//import actions
import * as globalActions from '../../../../store/global/actionCreators';

//import images
import RedLinesSvg from '../../../../assets/images/start-game-btn/red-lines.svg';
import GreenLinesSvg from '../../../../assets/images/start-game-btn/green-lines.svg';

//import types
import { RootState } from '../../../../store/store';


const mapStateToProps = (state: RootState) => {
    return {
        allowedTime: state.gameState.currentGameInfo.time
    }
}

const mapDispatchToProps = {
    onStartGameTimer: (allowedTime: number) => globalActions.asyncGameTimerStart(allowedTime)
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type PropsFromParent = {

}

type AllProps = PropsFromParent & PropsFromRedux;


type State = {
    timerRunning: boolean,
    timeRemaining: number

}

class StartButton extends React.Component<AllProps, State> {
    /**
     * setIntervalReference saves the ref to the setInterval, for cleanup
     */
    setIntervalReference: any;


    state = {
        timeRemaining: 3,
        timerRunning: false
    }

    clickHandler = () => {

        // When start button is clicked, timerRunning is set to true
        this.setState({
            timerRunning: true
        })

        this.setIntervalReference = setInterval(() => {
            //This setInterval callback updates timeRemaining in the local timer. 


            if (this.state.timeRemaining === 1) {
                //work to be done in last second

                //clean up the setInterval(for the local timer) 
                clearInterval(this.setIntervalReference);

                //start the central redux game timer
                this.props.onStartGameTimer(this.props.allowedTime);
            }
            //if not the last second, update state to continue the timer
            this.setState((state) => {
                return {
                    timeRemaining: state.timeRemaining - 1,
                    timerRunning: (state.timeRemaining === 1 ? false : true)
                }
            })
        }, 1000);
    }

    render() {

        //if timer is running display play button else display the countdown timer
        let startButton = (this.state.timerRunning ?
            <div className={classes["countdown-display"]}><span>{this.state.timeRemaining}</span></div>
            :
            <div className={classes["start-btn"]} onClick={this.clickHandler}></div>);

        return (
            <div className={classes["Container"]}>
                <div className={classes["start-btn-container"]}>
                    <img src={RedLinesSvg} alt="outward rays" />
                    {startButton}
                </div>
                <p className={classes["start-game-text"]}>Start the game</p>
                <div className={classes["intro-link"]}>
                    <Link  to="./intro">Instructions</Link>
                </div>
            </div>
        )
    }
}



export default connector(StartButton);