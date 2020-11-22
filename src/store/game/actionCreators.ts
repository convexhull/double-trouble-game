import {
    FETCH_GAME_INFO_START,
    FETCH_GAME_INFO_FAILURE,
    FETCH_GAME_INFO_SUCCESS,
    FetchGameInfoActions,
    GameState as GameInfo
} from './types';

import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../store';



//import the axios instance with baseURL set to backend
import Axios from '../../axios/axios';



const fetchGameInfoStart = (): FetchGameInfoActions => {
    return {
        type: FETCH_GAME_INFO_START,
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
            let apiResponseData: GameInfo = apiResponse.data;
            dispatch(fetchGameInfoSuccess(apiResponseData));

        } catch(e) {

        }
    })
}



export const fetchGameInfoSuccess = (payload: GameInfo): FetchGameInfoActions => {
    return {
        type: FETCH_GAME_INFO_SUCCESS,
        payload: payload
    }
}



// export const fetchGameInfoFailure = (): FetchGameInfoActions => {
//     return {
//         type: FETCH_GAME_INFO_SUCCESS,
//         payload: {
//             errorMessage: "",
//             errorCode: ""
//         }
//     }
// }