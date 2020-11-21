





/**
 * Redux action types for dispatch
 */
export const FETCH_GAME_INFO_START: string = "FETCH_GAME_INFO_START";
export const FETCH_GAME_INFO_SUCCESS: string = "FETCH_GAME_INFO_SUCCESS";
export const FETCH_GAME_INFO_FAILURE: string = "FETCH_GAME_INFO_FAILURE";



/**
 * Types for payloads for different actions
 */

export type GameInfoStartPayload = {
    loading: boolean;
}

export type GameInfoSuccessPayload = {
    id: string;
    name: string;
    intro_text: string;
    farewell_text: string;
    time: number;
}

export type GameInfoFailurePayload = {
    errorMessage: string;
    errorCode: number;
}


/**
 * Types for various actions
 */

type FetchGameInfoStartAction = {
    type: typeof FETCH_GAME_INFO_START;
    payload: GameInfoStartPayload;
}


type FetchGameInfoSuccessAction = {
    type: typeof FETCH_GAME_INFO_SUCCESS;
    payload: GameInfoSuccessPayload;
}


type FetchGameInfoFailureAction = {
    type: typeof FETCH_GAME_INFO_SUCCESS;
    payload: GameInfoFailurePayload;
}


export type FetchGameInfoActions =  FetchGameInfoStartAction | FetchGameInfoSuccessAction | FetchGameInfoFailureAction;
