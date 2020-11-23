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
    current_score: number;
    updatedScore: number;
};

/**
 * TYPES FOR GAME INFO RELATED ACTIONS
 */

export const FETCH_GAME_INFO_START: string = "FETCH_GAME_INFO_START";
export const FETCH_GAME_INFO_SUCCESS: string = "FETCH_GAME_INFO_SUCCESS";
export const FETCH_GAME_INFO_FAILURE: string = "FETCH_GAME_INFO_FAILURE";

//describe type field as string literal (and not as 'string'), to make use of discriminated union for type inference in reducers
type FetchGameInfoStartAction = {
    type: "FETCH_GAME_INFO_START";
    payload: {
        loading: boolean;
    };
};

type FetchGameInfoSuccessAction = {
    type: "FETCH_GAME_INFO_SUCCESS";
    payload: GameState;
};

type FetchGameInfoFailureAction = {
    type: "FETCH_GAME_INFO_SUCCESS";
    payload: {
        errorMessage: string;
        errorCode: number;
    };
};

type FetchGameInfoActions =
    | FetchGameInfoStartAction
    | FetchGameInfoSuccessAction
    | FetchGameInfoFailureAction;

/**
 * TYPES FOR GAME SCORE RELATED ACTIONS
 */

export const INCREMENT_GAME_SCORE: string = "INCREMENT_GAME_SCORE";
export const UPDATE_GAME_SCORE_START: string = "UPDATE_GAME_SCORE_START";
export const UPDATE_GAME_SCORE_SUCCESS: string = "UPDATE_GAME_SCORE_SUCCESS";
export const UPDATE_GAME_SCORE_FAILURE: string = "UPDATE_GAME_SCORE_FAILURE";

export type UpdateGameScoreSuccessPayload = {
    id: string;
    user_id: string;
    score: number;
    game_id: string;
};

//describe type field as string literal (and not as 'string'), to make use of discriminated union for type inference in reducers
type IncrementGameScoreAction = {
    type: "INCREMENT_GAME_SCORE";
};

type UpdateGameScoreStartAction = {
    type: "UPDATE_GAME_SCORE_START";
};

type UpdateGameScoreSuccessAction = {
    type: "UPDATE_GAME_SCORE_SUCCESS";
    payload: UpdateGameScoreSuccessPayload;
};

type UpdateGameScoreFailureAction = {
    type: "UPDATE_GAME_SCORE_FAILURE";
};

type GameScoreActions =
    | IncrementGameScoreAction
    | UpdateGameScoreStartAction
    | UpdateGameScoreSuccessAction
    | UpdateGameScoreFailureAction;

export type AllActions = GameScoreActions | FetchGameInfoActions;
