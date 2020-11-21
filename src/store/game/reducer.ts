import {
    FETCH_GAME_INFO_START,
    FETCH_GAME_INFO_SUCCESS,
    FETCH_GAME_INFO_FAILURE,
    FetchGameInfoActions
} from './types';

const initState = {

}


const reducer = (state = initState, action: FetchGameInfoActions ) => {
    switch(action.type){
        default:
            return state;
    }
}




export default reducer;