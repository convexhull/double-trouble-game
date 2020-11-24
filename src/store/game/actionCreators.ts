//import types
import {
    GameState,
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


 const fetchAllGamesStart = () => {
     return {
         type: "FETCH_ALL_GAMES_START",
     }
 }

const fetchAllGamesSuccess = (payload: GameInfo[]) => {
    return {
        type: "FETCH_ALL_GAMES_SUCCESS",
        payload: payload
    }
}

const fetchAllGamesFailure = () => {
    return {
        type: "FETCH_ALL_GAMES_FAILURE"
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
            dispatch(fetchAllGamesFailure());
        }
    }
}




/**
 * Action creators for fetch game info
 */

const fetchGameInfoStart = (): AllActions => {
    return {
        type: "FETCH_GAME_INFO_START",
        payload: {
            loading: true
        }
    }
}

export const asyncFetchGameInfoStart = (): ThunkAction<void, RootState, unknown, Action<string>> => {
    return (async dispatch => {
        dispatch(fetchGameInfoStart());
        try {
            let apiResponse = await Axios.get(`/game/c77f35e3-d41c-446c-af63-80f430a962d0`);
            let apiResponseData: GameState = apiResponse.data;
            dispatch(fetchGameInfoSuccess(apiResponseData));

        } catch(e) {

        }
    })
}



export const fetchGameInfoSuccess = (payload: GameState): AllActions => {
    return {
        type: "FETCH_GAME_INFO_SUCCESS",
        payload: payload
    }
}


/*rev*/
// export const fetchGameInfoFailure = (): FetchGameInfoActions => {
//     return {
//         type: FETCH_GAME_INFO_SUCCESS,
//         payload: {
//             errorMessage: "",
//             errorCode: ""
//         }
//     }
// }





/**
 * Actions creators for game score
 */

export const incrementGameScore = (): AllActions => {
     return {
        type: "INCREMENT_GAME_SCORE"
     }
 }


const updateGameScoreStart = (): AllActions => {
    return {
        type: "UPDATE_GAME_SCORE_START"
    }
}

const updateGameScoreSuccess = (payload: UpdateGameScoreSuccessPayload): AllActions => {
    return {
        type: "UPDATE_GAME_SCORE_SUCCESS",
        payload: payload
    }
}

const updateGameScoreFailure = (): AllActions => {
    return {
        type: "UPDATE_GAME_SCORE_FAILURE"
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
            dispatch(updateGameScoreFailure());
        }
    })
}