/**
 * Type for 'global' slice of the app state
 */

export type GlobalState = {
    timer: {
        running: boolean;
        baseTime: number;
        timeRemaining: number;
    };
    current_user: {
        id: string;
        name: string;
        email: string;
    };
};

/**
 * Timer action types
 */
export const TIMER_START: string = "TIMER_START";
export const TIMER_RESET: string = "TIMER_RESET";
export const TIMER_TICK: string = "TIMER_TICK";

/**
 * Types for payloads for timer actions
 */
export type TimerStartPayload = {
    baseTime: number;
};

/**
 * Types for Timer actions
 */

export interface TimerStartAction {
    type: "TIMER_START";
    payload: TimerStartPayload;
}

export interface TimerResetAction {
    type: "TIMER_RESET";
}

export interface TimerTickAction {
    type: "TIMER_TICK";
}

export type TimerActions =
    | TimerStartAction
    | TimerResetAction
    | TimerTickAction;




/**
 * 
 * 
 * 
 * USER RELATED ACTIONS
 *
 * 
 * 
 */

export const GET_USER_START: string = "GET_USER_START";
export const GET_USER_SUCCESS: string = "GET_USER_SUCCESS";


/**
 * Types for payloads for user related actions
 */
export type GetUserSuccessPayload = {
    name: string,
    id: string,
    email: string
};

/**
 * Types for User related actions
 * Using discriminated union feature for better type guarding. So that reducer is able to deduce action type in switch-case.
 * Declaring type as string literal
 */

export interface GetUserStartAction {
    type: "GET_USER_START";
}

export interface GetUserSuccessAction {
    type: "GET_USER_SUCCESS";
    payload: GetUserSuccessPayload;
}

export type UserActions =
    | GetUserStartAction
    | GetUserSuccessAction;




export type GlobalStateActions = 
    | TimerActions
    | UserActions;

