// PAYLOAD

export const START_TIMER = 'START_TIMER';

export function startTimer() {
    return { 
        type: START_TIMER, 
        payload: '' };
}

export const STOP_TIMER = 'STOP_TIMER';

export function stopTimer() {
    return { 
        type: STOP_TIMER, 
        payload: '' };
}

export const PROCEED_TIMER = 'PROCEED_TIMER';

export function proceedTimer() {
    return { 
        type: PROCEED_TIMER, 
        payload: '' };
}

export const PAUSE_TIMER = 'PAUSE_TIMER';

export function pauseTimer() {
    return { 
        type: PAUSE_TIMER, 
        payload: '' };
}

export const RESET_TIMER = 'RESET_TIMER';

export function resetTimer() {
    return { 
        type: RESET_TIMER, 
        payload: '' };
}
