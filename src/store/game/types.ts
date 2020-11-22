/**
 * Type for GameState slice of the app state
 */
export type GameState = {
    id: string;
    name: string;
    intro_text: string;
    farewell_text: string;
    time: number;
    timeRemaining: number | null;
}



/**
 * Redux action types for dispatch
 */
export const FETCH_GAME_INFO_START: string = "FETCH_GAME_INFO_START";
export const FETCH_GAME_INFO_SUCCESS: string = "FETCH_GAME_INFO_SUCCESS";
export const FETCH_GAME_INFO_FAILURE: string = "FETCH_GAME_INFO_FAILURE";



/**
 * Types for various actions
 */
type FetchGameInfoStartAction = {
    type: typeof FETCH_GAME_INFO_START;
    payload:{
        loading: boolean;
    }
}

type FetchGameInfoSuccessAction = {
    type: typeof FETCH_GAME_INFO_SUCCESS;
    payload: GameState;
}

type FetchGameInfoFailureAction = {
    type: typeof FETCH_GAME_INFO_SUCCESS;
    payload: {
        errorMessage: string;
        errorCode: number;
    }
}

export type FetchGameInfoActions =  FetchGameInfoStartAction | FetchGameInfoSuccessAction | FetchGameInfoFailureAction;
