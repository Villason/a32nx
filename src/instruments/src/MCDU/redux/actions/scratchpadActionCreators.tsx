import { lineArrow } from '../../Components/Lines/Line';
import { scratchpadMessage } from '../reducers/scratchpadReducer';
import * as scratchpadTypes from '../types/scratchpadActionTypes';

/**
 * Clears the entire scratchpad
 */
export const clearScratchpad = () => ({ type: scratchpadTypes.CLEAR_SCRATCHPAD });

/**
 * Used for the when the clear button is pressed
 */
export const clearScratchpadCharacter = () => ({ type: scratchpadTypes.CLEAR_SCRATCHPAD_CHARACTER });

/**
 * Adds a message to the messaging systems
 * @param msg the message to the messaging systems
 */
export const addScratchpadMessage = (msg : scratchpadMessage) => ({
    type: scratchpadTypes.ADD_SCRATCHPAD_MESSAGE,
    msg,
});

/**
 * concatate a message to the scratchpad directly
 * @param msg The string to add to the scratchpad
 */
export const addToScratchpad = (msg: string) => ({
    type: scratchpadTypes.ADD_TO_SCRATCHPAD,
    msg,
});

/**
 * Set the scratchpad to the msg provided
 * @param msg the message to set
 */
export const setScratchpad = (msg: string) => ({
    type: scratchpadTypes.SET_SCRATCHPAD,
    msg,
});

/**
 * Adds a plus or minus to the scratchpad
 */
export const addPlusMinus = () => ({ type: scratchpadTypes.ADD_PLUSMINUS_SCRATCHPAD });

export const addArrow = (arrowChange: lineArrow) => ({
    type: scratchpadTypes.ADD_ARROW_SCRATCHPAD,
    msg: arrowChange,
});
