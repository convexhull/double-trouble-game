import { Reducer } from "redux";

import { GameState, AllActions } from "./types";

const initState: GameState = {
    // here time refers to total time allowed, timeRemaining refers to remaining time(countdown)
    currentGameInfo: {
        id: "",
        name: "",
        intro_text: "",
        farewell_text: "",
        time: 0,
    },
    currentGameStats: {
        timeRemaining: null,
        current_score: 0,
        updatedScore: 0,
    },
    availableGames: [],
};

const reducer: Reducer<GameState, AllActions> = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAME_INFO_SUCCESS":
            return {
                ...state,
                currentGameInfo: {
                    ...state.currentGameInfo,
                    ...action.payload,
                },
            };
        case "INCREMENT_GAME_SCORE":
            return {
                ...state,
                currentGameStats: {
                    ...state.currentGameStats,
                    current_score: state.currentGameStats.current_score + 1,
                },
            };
        case "UPDATE_GAME_SCORE_SUCCESS":
            return {
                ...state,
                currentGameStats: {
                    ...state.currentGameStats,
                },
            };
        case "FETCH_ALL_GAMES_SUCCESS":
            return {
                ...state,
                availableGames: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
