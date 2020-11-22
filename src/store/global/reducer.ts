import { Reducer } from 'redux';

import {
    GlobalState,
    TimerActions,
    TIMER_START,
    TIMER_RESET,
    TIMER_TICK
} from "./types";

const initState: GlobalState = {
    timer: {
        timeRemaining: 0,
        running: false,
        baseTime: 0
    }
};

const reducer: Reducer<GlobalState, TimerActions> = (state = initState, action) => {

    switch (action.type) {
        case TIMER_TICK:
            return {
                ...state,
                timer: {
                    ...state.timer,
                    timeRemaining: state.timer.timeRemaining - 1,
                },
            };
        case TIMER_RESET:
            return {
                ...state,
                timer: {
                    ...state.timer,
                    running: false,
                    baseTime: 0,
                    timeRemaining: 0
                }
            };
        case TIMER_START:
            return {
                ...state,
                timer: {
                    ...state.timer,
                    running: true,
                    timeRemaining: ("payload" in action ? action.payload.baseTime : 0),
                    baseTime: ("payload" in action ? action.payload.baseTime : 0)
                }
            };
        default:
            return state;
    }
};

export default reducer;
