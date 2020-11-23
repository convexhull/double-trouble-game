import { Reducer } from 'redux';


import {
    GameState,
    AllActions
} from './types';

const initState: GameState = {
    // here time refers to total time allowed, timeRemaining refers to remaining time(countdown)
    id: '',
    name: '',
    intro_text: '',
    farewell_text: '',
    time: 0,
    timeRemaining: null,
    current_score: 0,
    updatedScore: 0
}


const reducer: Reducer<GameState, AllActions> = (state = initState, action) => {
    switch(action.type){
        case "FETCH_GAME_INFO_SUCCESS":
            return {
                ...state,
                ...action.payload,
            }
        case "FETCH_GAME_INFO_START":
            return {
                ...state
            }
        case "INCREMENT_GAME_SCORE":
            return {
                ...state,
                current_score: state.current_score + 1
            }
        case "UPDATE_GAME_SCORE_SUCCESS":
            return {
                ...state,
                updatedScore: action.payload.score
            }
        default:
            return state;
    }
}




export default reducer;