
/**
 * Import all actions
 */
import {
    AllActions as GameActions
} from '../game/types';


import {
    TimerActions
} from '../global/types'


export type AllActions = GameActions | TimerActions;


/**
 * type of 'loadingState' slice of the app state
 */
export type LoadingState = {
    UPDATE_USER_SCORE: boolean,
    FETCH_ALL_GAMES: boolean
}