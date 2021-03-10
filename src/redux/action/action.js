// PAYLOAD

export const START_TIMER = 'START_TIMER';

export function startTimer(time) {
    return { 
        type: START_TIMER, 
        payload: 'time' };
}

export const STOP_TIMER = 'STOP_TIMER';

export function stopTimer(time) {
    return { 
        type: STOP_TIMER, 
        payload: 'time' };
}

export const PROCEED_TIMER = 'PROCEED_TIMER';

export function proceedTimer(time) {
    return { 
        type: PROCEED_TIMER, 
        payload: 'time' };
}

export const PAUSE_TIMER = 'PAUSE_TIMER';

export function pauseTimer(time) {
    return { 
        type: PAUSE_TIMER, 
        payload: 'time' };
}

export const RESET_TIMER = 'RESET_TIMER';

export function resetTimer(time) {
    return { 
        type: RESET_TIMER, 
        payload: 'time' };
}
