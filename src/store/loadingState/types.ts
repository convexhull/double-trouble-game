/**
 * Import all actions
 */
import { AllActions as GameActions } from "../game/types";

import { TimerActions } from "../global/types";

export type AllActions = GameActions | TimerActions;

/**
 * type of 'loadingState' slice of the app state
 */
export type LoadingState = {
    //The keys here should be prefix of the respective action that it corresponds to.
    //For example, if the actions to be covered are FETCH_GAME_INFO_START, FETCH_GAME_INFO_SUCCESS and FETCH_GAME_INFO_FAILURE
    //then our loadingState slice will contain FETCH_GAME_INFO field. This pattern is important and is used for regex based
    //matching in the reducer.
    UPDATE_GAME_SCORE: boolean;
    FETCH_ALL_GAMES: boolean;
    FETCH_GAME_INFO: boolean;
};
