import { Reducer } from "redux";

//import types
import { AllActions, LoadingState } from "./types";

const initState: LoadingState = {
    UPDATE_GAME_SCORE: false,
    FETCH_ALL_GAMES: false,
    FETCH_GAME_INFO: false,
};

const loadingReducer: Reducer<LoadingState, AllActions> = (
    state = initState,
    action
) => {
    const { type } = action;
    const matches = /(.*)_(START|SUCCESS|FAILURE)/.exec(type);

    // not a *_START / *_SUCCESS /  *_FAILURE actions, so we ignore them
    if (!matches) {
        return state;
    }

    const [, requestName, requestState] = matches;
    return {
        ...state,
        // Store whether a request is happening at the moment or not
        // e.g. will be true when receiving FETCH_GAME_INFO_START
        //      and false when receiving FETCH_GAME_INFO_SUCCESS / FETCH_GAME_INFO_FAILURE
        [requestName]: requestState === "START",
    };
};

export default loadingReducer;
