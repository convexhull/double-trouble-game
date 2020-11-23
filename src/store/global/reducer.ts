import { Reducer } from 'redux';

import {
    GlobalState,
    GlobalStateActions,
} from "./types";

const initState: GlobalState = {
    timer: {
        timeRemaining: 0,
        running: false,
        baseTime: 0
    },
    current_user: {
        id: '',
        name: '',
        email: ''
    }
};

const reducer: Reducer<GlobalState, GlobalStateActions > = (state = initState, action) => {
    switch (action.type) {
        case "TIMER_TICK":
            return {
                ...state,
                timer: {
                    ...state.timer,
                    timeRemaining: state.timer.timeRemaining - 1,
                },
            };
        case "TIMER_RESET":
            return {
                ...state,
                timer: {
                    ...state.timer,
                    running: false,
                    timeRemaining: 0
                }
            };
        case "TIMER_START":
            /*rev*/
            return {
                ...state,
                timer: {
                    ...state.timer,
                    running: true,
                    timeRemaining: action.payload.baseTime,
                    baseTime: action.payload.baseTime
                }
            };
        case "GET_USER_START":
            return {
                ...state
            }
        case "GET_USER_SUCCESS":
            return {
                ...state,
                current_user: {
                    ...state.current_user,
                    name: action.payload.name,
                    id: action.payload.id,
                    email: action.payload.email
                }
            }
        default:
            return state;
    }
};

export default reducer;
