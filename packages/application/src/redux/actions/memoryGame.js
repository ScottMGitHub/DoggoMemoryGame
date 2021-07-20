// FOUC STATE FIX - used for fixing the flash of unstyled content
export const FOUC_COMPLETE_SET_VALUE = 'memoryGame/setValue/foucComplete';
export const foucCompleteSetValue = value => ({type: FOUC_COMPLETE_SET_VALUE, value});

// Action creators
export const CARDS_SET_VALUE = 'memoryGame/setValue/cards';
export const cardsSetValue = value => ({ type: CARDS_SET_VALUE, value });

export const GAME_COMPLETE_IMAGE_SET_VALUE = 'memoryGame/setValue/gameCompleteImage';
export const gameCompleteImageSetValue = value => ({ type: GAME_COMPLETE_IMAGE_SET_VALUE, value });


// These actions are used as triggers and have no corresponding reducer
export const TRIGGER_REFRESH_CARDS = 'memoryGame/cards/trigger/refresh';
export const triggerRefreshCards = value => ({type: TRIGGER_REFRESH_CARDS, value});

export const TRIGGER_TOGGLE_CARD = 'memoryGame/cards/trigger/toggleCard';
export const triggerToggleCard = value => ({ type: TRIGGER_TOGGLE_CARD, value });