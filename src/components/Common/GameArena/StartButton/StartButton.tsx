//import modules
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

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
import StartBtnSvg from '../../../../assets/images/start-game-btn/default.svg';

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

type AllProps = PropsFromParent & PropsFromRedux & RouteComponentProps;


type State = {
    timerRunning: boolean,
    timeRemaining: number,

}

export class StartButton extends React.Component<AllProps, State> {
    /**
     * setIntervalReference saves the ref to the setInterval, for cleanup
     */
    setIntervalReference: any;


    state = {
        timeRemaining: 8,
        timerRunning: false,
    }

    componentDidMount() {
        //Handle the case of user refreshing or reaching directly to the game arena, without introduction page. 
        //Redirect the user to introduction page. 
        if(this.props.allowedTime === 0){
            this.props.history.push('./intro');
        }
    }

    clickHandler = () => {

        // When start button is clicked, timerRunning is set to true
        this.setState({
            timerRunning: true
        })

        this.setIntervalReference = setInterval(() => {
            //This setInterval callback updates timeRemaining in the local timer. 
            //We need only 4 second timer, but timeRemaining is 8 initially. So we call setTimout every half a second( 500ms). 

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
        }, 500);
    }

    componentWillUnmount() {
        clearInterval(this.setIntervalReference);
    }

    render() {
        /**
         * Simulate animation using CSS transition. Better modify this to use a react animation lib like react-spring etc. 
         * 
         * # We are simply using JS to inject css classes. 
         * # timeRemaining decrease from 8 to 0 -> 8, 7, 6, 5.... 
         * # But we need only 4 sec timer. So we decrement time remaining every half second. 
         * # So every alternate half second we add/remove visible class for red-lines. So as to make use of  CSS transition property. 
         * # Check CSS for red-lines to get better idea
         * # Finally when time remaining is < 2, i.e we are in last second, then we make green lines visible by adding green-lines--visible class. 
         */
        let greenLinesClasses = [classes["green-lines"]];
        let redLinesClasses = [classes["red-lines"]];
        if(this.state.timeRemaining < 2) {
            greenLinesClasses.push(classes["green-lines--visible"]);
            redLinesClasses.filter( (el) => el !== "red-lines--visible");
        } 
        else {
            if(this.state.timeRemaining % 2){
                redLinesClasses.push(classes["red-lines--visible"]);
            } else {
                redLinesClasses.filter( (el) => el !== "red-lines--visible");
            }
        }

        

        let countdownDisplayBtn = null;
        if (this.state.timerRunning) {
            countdownDisplayBtn = (
                <React.Fragment>
                    <div className={classes["countdown-container"]}>
                        <div className={classes["countdown-display"]}><span>{this.state.timeRemaining >= 3 ? Math.floor((this.state.timeRemaining-1)/2) : "Go!"}</span></div>
                        <img src={GreenLinesSvg} className={greenLinesClasses.join(' ')} alt="green lines" />
                        <img src={RedLinesSvg} className={redLinesClasses.join(' ')} alt="red lines" />
                    </div>
                </React.Fragment>
            );
        }
        let startBtn = null;
        if (!this.state.timerRunning) {
            startBtn = (
                <div className={classes["start-btn"]} onClick={this.clickHandler}>
                    <img src={StartBtnSvg} alt="start-button" />
                </div>
            )
        }

        let instructions = null;
        if (!this.state.timerRunning) {
            instructions = (
                <React.Fragment>
                    <p className={classes["start-game-text"]}>Start the game</p>
                    <div className={classes["intro-link"]}>
                        <Link to="./intro">Instructions</Link>
                    </div>
                </React.Fragment>
            )
        }
        //if timer is running display play button else display the countdown timer
        return (
            <div className={classes["Container"]}>
                <div className={classes["start-btn-container"]}>
                    {countdownDisplayBtn}
                    {startBtn}
                </div>
                {instructions}
            </div>
        )
    }
}



export default connector(withRouter(StartButton));