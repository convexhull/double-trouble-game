import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';




/**
 * This component displays the Game Arena(or game screen). It consists of other components like StartButton, Control Panel and the 
 * GamePlay component itself. 
 * 
 * # Control Panel (consisting of time, score and volume control) is always displayed. 
 * # Startbutton and GamePlay component are displayed conditionally. 
 * # If the game timer(redux) is not running, that means we ain't playing game. So StartButton component will be displayed. 
 * # If the game timer(redux) is running, it means the game is being played, so we will only see the GamePlay component. 
 */


//import css styles
import classes from './GameArena.module.css';

//import components
import ControlPanel from '../../Common/GameArena/ControlPanel/ControlPanel';
import StartButton from '../../Common/GameArena/StartButton/StartButton';
import GamePlay from '../Gameplay/Gameplay';


//import types
import { RootState } from '../../../store/store';


//import action creators
import * as globalActionCreators from '../../../store/global/actionCreators';

type State = {
    playing: boolean
}


type PropsFromParents = {

}

const mapStateToProps = (state: RootState) =>  {
    return {
        timeRemaining: state.globalState.timer.timeRemaining,
        timerRunning: state.globalState.timer.running
    }
}

const mapDispatchToProps =  {
    onResetTimer: () => globalActionCreators.timerReset() 
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type AllProps = PropsFromParents & RouteComponentProps & PropsFromRedux;

class GameArena extends React.Component<AllProps, State> {


    componentDidUpdate() {
        //if the timer is running and the time remaining becomes zero, redirect the user to the result page and reset the timer.
        if(this.props.timeRemaining <= 0 && this.props.timerRunning ){
            this.props.history.push(`./result`);
            this.props.onResetTimer();
        }
    }

    render() {
        return (
            <div className={classes["Container"]}>
                {this.props.timerRunning ? <GamePlay /> : <StartButton />}
                <div className={classes["control-panel"]}>
                    <ControlPanel />
                </div>
            </div>
        )
    }
}


export default connector(GameArena);