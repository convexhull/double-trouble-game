/**
 * Type for 'global' slice of the app state
 */

export type GlobalState = {
    timer: {
         running: boolean;
         baseTime: number;
         timeRemaining: number;
    }
 }

/**
 * Redux action types
 */
export const TIMER_START: string = "TIMER_START";
export const TIMER_RESET: string = "TIMER_RESET";
export const TIMER_TICK: string = "TIMER_TICK";


/**
 * Types for payloads for different actions
 */
export type TimerStartPayload = {
    baseTime: number;
}

/**
 * Types for various actions
 */

export interface TimerStartAction {
    type: string;
    payload: TimerStartPayload
}

export interface TimerResetAction {
    type: string;
}

export interface TimerTickAction {
    type: string;
}


export type TimerActions =  TimerStartAction | TimerResetAction | TimerTickAction ;

