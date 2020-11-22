import {
    FETCH_GAME_INFO_START,
    FETCH_GAME_INFO_SUCCESS,
    FETCH_GAME_INFO_FAILURE,
    FetchGameInfoActions,
    GameState
} from './types';

const initState: GameState = {
    // here time refers to total time allowed, timeRemaining refers to remaining time(countdown)
    id: '',
    name: '',
    intro_text: '',
    farewell_text: '',
    time: 0,
    timeRemaining: null
}


const reducer = (state = initState, action: FetchGameInfoActions ) => {
    switch(action.type){
        case FETCH_GAME_INFO_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        case FETCH_GAME_INFO_START:
            return {
                ...state
            }
        case FETCH_GAME_INFO_FAILURE:
            return {
                ...state
            }
        default:
            return state;
    }
}




export default reducer;