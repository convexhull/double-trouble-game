import {
    TimerStartPayload,
    TimerStartAction,
    TimerTickAction,
    TimerResetAction,
    UserActions,
    GetUserSuccessPayload,
} from "./types";

import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "../store";
import Axios from "../../axios/axios";

/**
 * This central redux store timer logic is for the game timer. And can be used for any game.
 */

export const timerStart = (payload: TimerStartPayload): TimerStartAction => {
    return {
        type: "TIMER_START",
        payload: payload,
    };
};

export const timerTick = (): TimerTickAction => {
    return {
        type: "TIMER_TICK",
    };
};

export const timerReset = (): TimerResetAction => {
    return {
        type: "TIMER_RESET",
    };
};

export const asyncGameTimerStart = (
    baseTime: number
): ThunkAction<void, RootState, unknown, Action<string>> => {
    return async (dispatch, getState) => {
        const setIntervalId = setInterval(() => {
            //periodically send ticks

            if (getState().globalState.timer.timeRemaining === 1) {
                //the last second of the timer

                //cleanup the setInterval in the last second
                clearInterval(setIntervalId);
            }

            //if not last second, simply send a tick action
            dispatch(timerTick());
        }, 1000);

        dispatch(
            timerStart({
                baseTime: baseTime,
            })
        );
    };
};

/**
 * Action creators for GET_USER
 */

export const getUserStart = (): UserActions => {
    return {
        type: "GET_USER_START",
    };
};

export const getUserSuccess = (payload: GetUserSuccessPayload): UserActions => {
    return {
        type: "GET_USER_SUCCESS",
        payload: {
            name: payload.name,
            id: payload.id,
            email: payload.email,
        },
    };
};

export const getUserFailure = (payload: { message: string }): UserActions => {
    return {
        type: "GET_USER_FAILURE",
        payload: payload,
    };
};

export const asyncGetUserStart = (): ThunkAction<
    void,
    RootState,
    unknown,
    Action<string>
> => {
    return async (dispatch) => {
        dispatch(getUserStart());
        try {
            // let apiResponse = await Axios.get("/user");
            // let apiResponseData = apiResponse.data;
            let apiResponseData = {
                "id": "lk3j289efujoiiijjkljf89w",
                "name": "John Doe",
                "email": "john@doe.com"
            }
            dispatch(getUserSuccess(apiResponseData));
        } catch (e) {
            dispatch(getUserFailure({ message: e.message }));
        }
    };
};
