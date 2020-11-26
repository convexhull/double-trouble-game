/**
 * Significance of this reducer: 
 * 
 * # This errorState reducer will take care of all the API requests failure throughout the app. 
 * # If any async action fails and dispatches a _FAILURE type action, then this reducer makes the error state 
 * for corresponding action to store the error message. Else if no error, then this message is cleared. 
 */


export type ErrorState = {
  //The keys here should be prefix of the respective action that it corresponds to.
  //For example, if the actions to be covered are FETCH_GAME_INFO_START, FETCH_GAME_INFO_SUCCESS and FETCH_GAME_INFO_FAILURE
  //then our ErrorState slice will contain FETCH_GAME_INFO field. This pattern is important and is used for regex based
  //matching in the reducer.
  UPDATE_GAME_SCORE: string,
  FETCH_ALL_GAMES: string,
  FETCH_GAME_INFO: string,
  GET_USER: string
}

type ErrorAction = {
  type: string,
  payload: {
    message: string
  }
}


const initState: ErrorState = {
  UPDATE_GAME_SCORE: '',
  FETCH_ALL_GAMES: '',
  FETCH_GAME_INFO: '',
  GET_USER: ''
};


const errorStateReducer = (state = initState, action: ErrorAction) => {
    const { type, payload } = action;
    const matches = /(.*)_(START|FAILURE)/.exec(type);

    // not a *_START / *_FAILURE actions, so we ignore them
    if (!matches) return state;

    const [, requestName, requestState] = matches;
    return {
        ...state,
        // Store errorMessage
        // e.g. stores errorMessage when receiving GET_TODOS_FAILURE
        //      else clear errorMessage when receiving GET_TODOS_START
        [requestName]: requestState === "FAILURE" ? payload.message : "",
    };
};


export default errorStateReducer;