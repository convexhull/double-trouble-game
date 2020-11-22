import {
    TIMER_START,
    TIMER_TICK,
    TimerStartPayload,
    TimerStartAction,
    TimerTickAction,
    TIMER_RESET,
    TimerResetAction
} from './types';

import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../store';

/**
 * This central redux store timer logic is for the game timer. And can be used for any game.
 */

const timerStart = (payload: TimerStartPayload): TimerStartAction => {
    return {
        type: TIMER_START,
        payload: payload
    }
}


const timerTick = (): TimerTickAction => {
    return {
        type: TIMER_TICK
    }
}


const timerReset = (): TimerResetAction => {
    return {
        type: TIMER_RESET
    }
}

export const asyncGameTimerStart = (baseTime: number): ThunkAction<void, RootState, unknown, Action<string> > => {
    return (async (dispatch, getState) => {
        const setIntervalId = setInterval(()=> {
            //periodically send ticks

            if(getState().globalState.timer.timeRemaining === 1){
                //the last second of the timer

                //cleanup the setInterval in the last second
                clearInterval(setIntervalId);

                //reset the timer
                dispatch(timerReset());
                return ;
            }

            //if not last second, simply send a tick action
            dispatch(timerTick());
        }, 1000);

        dispatch(timerStart({
            baseTime: baseTime
        }));
    })
}

