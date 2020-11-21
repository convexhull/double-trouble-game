import {
    FETCH_GAME_INFO_START,
    FETCH_GAME_INFO_FAILURE,
    FETCH_GAME_INFO_SUCCESS,
    FetchGameInfoActions
} from './types';

import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../store';



const fetchGameInfoStart = () => {
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
    })
}



export const fetchGameInfoSuccess = () => {
    return {
        type: FETCH_GAME_INFO_SUCCESS,
        payload: {

        }
    }
}



export const fetchGameInfoFailure = () => {
    return {
        type: FETCH_GAME_INFO_SUCCESS,
        payload: {
            errorMessage: "",
            errorCode: ""
        }
    }
}