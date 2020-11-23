import {
    TimerStartPayload,
    TimerStartAction,
    TimerTickAction,
    TimerResetAction,
    UserActions,
    GetUserSuccessPayload
} from './types';

import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../store';
import Axios from '../../axios/axios';

/**
 * This central redux store timer logic is for the game timer. And can be used for any game.
 */

const timerStart = (payload: TimerStartPayload): TimerStartAction => {
    return {
        type: "TIMER_START",
        payload: payload
    }
}


const timerTick = (): TimerTickAction => {
    return {
        type: "TIMER_TICK"
    }
}

export const timerReset = (): TimerResetAction => {
    return {
        type: "TIMER_RESET"
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
            }

            //if not last second, simply send a tick action
            dispatch(timerTick());
        }, 1000);

        dispatch(timerStart({
            baseTime: baseTime
        }));
    })
}


const getUserStart = (): UserActions => {
    return {
        type: "GET_USER_START"
    }
}



const getUserSuccess = (payload: GetUserSuccessPayload): UserActions => {
    return {
        type: "GET_USER_SUCCESS",
        payload: {
            name: payload.name,
            id: payload.id,
            email: payload.email
        }
    }
}

export const asyncGetUserStart = (): ThunkAction<void, RootState, unknown, Action<string> > => {
    return async (dispatch) => {
        dispatch(getUserStart());
        try {
            let apiResponse = await Axios.get('/user');
            let apiResponseData = apiResponse.data;
            dispatch(getUserSuccess(apiResponseData));
        } catch(e) {
            console.log(e);
        }
    }
}

