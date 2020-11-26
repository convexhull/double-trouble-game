//import types
import {
    AllActions,
    UpdateGameScoreSuccessPayload,
    GameInfo
} from './types';

import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../store';



//import the axios instance with baseURL set to backend
import Axios from '../../axios/axios';




/**
 * Action creators for fetching all games
 */


export const fetchAllGamesStart = () => {
     return {
         type: "FETCH_ALL_GAMES_START",
     }
 }

export const fetchAllGamesSuccess = (payload: GameInfo[]) => {
    return {
        type: "FETCH_ALL_GAMES_SUCCESS",
        payload: payload
    }
}

export const fetchAllGamesFailure = (payload: { message: string}) => {
    return {
        type: "FETCH_ALL_GAMES_FAILURE",
        payload: payload
    }
}


export const asyncFetchAllGamesStart = (): ThunkAction<void, RootState, unknown, Action<string>> => {
    return async (dispatch) => {
        dispatch(fetchAllGamesStart());
        try {
            let apiResponse = await Axios.get(`/game`);
            let apiResponseData: GameInfo[] = apiResponse.data;
            dispatch(fetchAllGamesSuccess(apiResponseData));
        } catch(e) {
            dispatch(fetchAllGamesFailure({message: e.message}));
        }
    }
}




/**
 * Action creators for fetch game info
 */

export const fetchGameInfoStart = (): AllActions => {
    return {
        type: "FETCH_GAME_INFO_START"
    }
}

export const asyncFetchGameInfoStart = (): ThunkAction<void, RootState, unknown, Action<string>> => {
    return (async dispatch => {
        dispatch(fetchGameInfoStart());
        try {
            let apiResponse = await Axios.get(`/game/c77f35e3-d41c-446c-af63-80f430a962d0`);
            let apiResponseData: GameInfo = apiResponse.data;

            dispatch(fetchGameInfoSuccess(apiResponseData));

        } catch(e) {
            dispatch(fetchGameInfoFailure({message: e.message}))
        }
    })
}

export const fetchGameInfoSuccess = (payload: GameInfo): AllActions => {

    return {
        type: "FETCH_GAME_INFO_SUCCESS",
        payload: payload
    }
}


export const fetchGameInfoFailure = (payload: { message: string}): AllActions => {
    return {
        type: "FETCH_GAME_INFO_FAILURE",
        payload: payload
    }
}





/**
 * Actions creators for game score
 */

export const incrementGameScore = (): AllActions => {
     return {
        type: "INCREMENT_GAME_SCORE"
     }
 }


export const updateGameScoreStart = (): AllActions => {
    return {
        type: "UPDATE_GAME_SCORE_START"
    }
}

export const updateGameScoreSuccess = (payload: UpdateGameScoreSuccessPayload): AllActions => {
    return {
        type: "UPDATE_GAME_SCORE_SUCCESS",
        payload: payload
    }
}

export const updateGameScoreFailure = (payload: { message: string}): AllActions => {
    return {
        type: "UPDATE_GAME_SCORE_FAILURE",
        payload: payload
    }
}


export const asyncUpdateGameScoreStart = (): ThunkAction<void, RootState, unknown, Action<string> >  => {
    return (async (dispatch, getState) => {
        dispatch(updateGameScoreStart());
        let current_state = getState();
        let data = {
            score: current_state.gameState.currentGameStats.current_score,
            user_id: current_state.globalState.current_user.id,
            game_id: current_state.gameState.currentGameInfo.id
        }
        try {
            let apiResponse = await Axios.put('/score', data);
            let apiResponseData = apiResponse.data;
            dispatch(updateGameScoreSuccess(apiResponseData));
        } catch(e){
            dispatch(updateGameScoreFailure({message: e.message || "Some error occurred"}));
        }
    })
}