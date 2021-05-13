//import types
import { AllActions, UpdateGameScoreSuccessPayload, GameInfo } from "./types";

import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { RootState } from "../store";

//import the axios instance with baseURL set to backend
import Axios from "../../axios/axios";

/**
 * Action creators for fetching all games
 */

export const fetchAllGamesStart = () => {
    return {
        type: "FETCH_ALL_GAMES_START",
    };
};

export const fetchAllGamesSuccess = (payload: GameInfo[]) => {
    return {
        type: "FETCH_ALL_GAMES_SUCCESS",
        payload: payload,
    };
};

export const fetchAllGamesFailure = (payload: { message: string }) => {
    return {
        type: "FETCH_ALL_GAMES_FAILURE",
        payload: payload,
    };
};

export const asyncFetchAllGamesStart = (): ThunkAction<
    void,
    RootState,
    unknown,
    Action<string>
> => {
    return async (dispatch) => {
        dispatch(fetchAllGamesStart());
        try {
            let apiResponse = await Axios.get(`/game`);
            let apiResponseData: GameInfo[] = apiResponse.data;
            dispatch(fetchAllGamesSuccess(apiResponseData));
        } catch (e) {
            dispatch(fetchAllGamesFailure({ message: e.message }));
        }
    };
};

/**
 * Action creators for fetch game info
 */

export const fetchGameInfoStart = (): AllActions => {
    return {
        type: "FETCH_GAME_INFO_START",
    };
};

export const asyncFetchGameInfoStart = (): ThunkAction<
    void,
    RootState,
    unknown,
    Action<string>
> => {
    return async (dispatch) => {
        dispatch(fetchGameInfoStart());
        try {
            // let apiResponse = await Axios.get(
            //     `/game/c77f35e3-d41c-446c-af63-80f430a962d0`
            // );
            // let apiResponseData: GameInfo = apiResponse.data;

            /**
             * Mocking backend by hard-coding
             */
            
            let apiResponseData = {
                id: "c77f35e3",
                name: "Double Trouble",
                intro_text: "See what color the top word is. Select that color from the two options below. DON’T pay attention to what the top word says or the color of the two options below. It’s important to match the color of the top word with the meaning of the word below.",
                farewell_text: "The text to display at the end of the game.",
                time: 60
            }
            dispatch(fetchGameInfoSuccess(apiResponseData));
        } catch (e) {
            dispatch(fetchGameInfoFailure({ message: e.message }));
        }
    };
};

export const fetchGameInfoSuccess = (payload: GameInfo): AllActions => {
    return {
        type: "FETCH_GAME_INFO_SUCCESS",
        payload: payload,
    };
};

export const fetchGameInfoFailure = (payload: {
    message: string;
}): AllActions => {
    return {
        type: "FETCH_GAME_INFO_FAILURE",
        payload: payload,
    };
};

/**
 * Actions creators for game score
 */

export const incrementGameScore = (): AllActions => {
    return {
        type: "INCREMENT_GAME_SCORE",
    };
};

export const updateGameScoreStart = (): AllActions => {
    return {
        type: "UPDATE_GAME_SCORE_START",
    };
};

export const updateGameScoreSuccess = (
    payload: UpdateGameScoreSuccessPayload
): AllActions => {
    return {
        type: "UPDATE_GAME_SCORE_SUCCESS",
        payload: payload,
    };
};

export const updateGameScoreFailure = (payload: {
    message: string;
}): AllActions => {
    return {
        type: "UPDATE_GAME_SCORE_FAILURE",
        payload: payload,
    };
};

export const asyncUpdateGameScoreStart = (): ThunkAction<
    void,
    RootState,
    unknown,
    Action<string>
> => {
    return async (dispatch, getState) => {
        dispatch(updateGameScoreStart());
        let current_state = getState();
        let data = {
            score: current_state.gameState.currentGameStats.current_score,
            user_id: current_state.globalState.current_user.id,
            game_id: current_state.gameState.currentGameInfo.id,
        };
        try {
            // let apiResponse = await Axios.put("/score", data);
            // let apiResponseData = apiResponse.data;
            let apiResponseData = {
                score: 48,
                id: "slkdjfslk89wjwoejkl3wj893uf",
                user_id: 'skljff89fwuoiwjf',
                game_id: 'klsdjfkfsjl'
            }
            dispatch(updateGameScoreSuccess(apiResponseData));
        } catch (e) {
            dispatch(
                updateGameScoreFailure({
                    message: e.message || "Some error occurred",
                })
            );
        }
    };
};
