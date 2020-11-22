import {
    FETCH_GAME_INFO_START,
    FETCH_GAME_INFO_SUCCESS,
    FETCH_GAME_INFO_FAILURE,
    FetchGameInfoActions,
    GameState
} from './types';

const initState: GameState = {
    id: '',
    name: '',
    intro_text: '',
    farewell_text: '',
    time: 0
}


const reducer = (state = initState, action: FetchGameInfoActions ) => {
    switch(action.type){
        case FETCH_GAME_INFO_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}




export default reducer;