import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';


//import css styles
import classes from './GameArena.module.css';

//import components
import Timer from '../../Common/GameArena/Timer/Timer';
import StartButton from '../../Common/GameArena/StartButton/StartButton';
import GamePlay from './Gameplay/Gameplay';


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
            this.props.history.push('/result');
            this.props.onResetTimer();
        }
    }

    render() {
        return (
            <div className={classes["Container"]}>
                GAMEE!!!!
                <StartButton />
                <GamePlay />
                <div className={classes["timer"]}>
                    <Timer />
                </div>
            </div>
        )
    }
}




export default connector(GameArena);