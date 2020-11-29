/**
 * Type for GameState slice of the app state
 */

export type GameInfo = {
    id: string;
    name: string;
    intro_text: string;
    farewell_text: string;
    time: number;
};

export type GameStats = {
    timeRemaining: number | null;
    current_score: number;
    updatedScore: number;
};

export type GameState = {
    currentGameInfo: GameInfo;
    currentGameStats: GameStats;
    availableGames: GameInfo[];
};

/**
 * TYPES FOR FETCHING ALL GAMES
 */

export type FetchAllGamesStartAction = {
    type: "FETCH_ALL_GAMES_START";
};

export type FetchAllGamesSuccessAction = {
    type: "FETCH_ALL_GAMES_SUCCESS";
    payload: GameInfo[];
};

export type FetchAllGamesFailureAction = {
    type: "FETCH_ALL_GAMES_FAILURE";
    payload: {
        message: string;
    };
};

export type FetchAllGamesActions =
    | FetchAllGamesStartAction
    | FetchAllGamesSuccessAction
    | FetchAllGamesFailureAction;

/**
 * TYPES FOR GAME INFO RELATED ACTIONS
 */

//describe type field as string literal (and not as 'string'), to make use of discriminated union for type inference in reducers
export type FetchGameInfoStartAction = {
    type: "FETCH_GAME_INFO_START";
};

export type FetchGameInfoSuccessAction = {
    type: "FETCH_GAME_INFO_SUCCESS";
    payload: GameInfo;
};

export type FetchGameInfoFailureAction = {
    type: "FETCH_GAME_INFO_FAILURE";
    payload: {
        message: string;
    };
};

export type FetchGameInfoActions =
    | FetchGameInfoStartAction
    | FetchGameInfoSuccessAction
    | FetchGameInfoFailureAction;

/**
 * TYPES FOR GAME SCORE RELATED ACTIONS
 */

export type UpdateGameScoreSuccessPayload = {
    id: string;
    user_id: string;
    score: number;
    game_id: string;
};

//describe type field as string literal (and not as 'string'), to make use of discriminated union for type inference in reducers
export type IncrementGameScoreAction = {
    type: "INCREMENT_GAME_SCORE";
};

export type UpdateGameScoreStartAction = {
    type: "UPDATE_GAME_SCORE_START";
};

export type UpdateGameScoreSuccessAction = {
    type: "UPDATE_GAME_SCORE_SUCCESS";
    payload: UpdateGameScoreSuccessPayload;
};

export type UpdateGameScoreFailureAction = {
    type: "UPDATE_GAME_SCORE_FAILURE";
    payload: {
        message: string;
    };
};

export type GameScoreActions =
    | IncrementGameScoreAction
    | UpdateGameScoreStartAction
    | UpdateGameScoreSuccessAction
    | UpdateGameScoreFailureAction;

export type AllActions =
    | GameScoreActions
    | FetchGameInfoActions
    | FetchAllGamesActions;
