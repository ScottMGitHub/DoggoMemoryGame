import {createSelector} from "reselect";
import {getMemoryGame} from "./index";

export const getCards = createSelector(
    getMemoryGame,
    memoryGame => memoryGame.cards
);

export const getGameComplete = createSelector(
    getMemoryGame,
    memoryGame => memoryGame.cards.every(card => card.disabled)
);

export const getGameCompleteImage = createSelector(
    getMemoryGame,
    memoryGame => memoryGame.gameCompleteImage
);

export const getFoucComplete = createSelector(
    getMemoryGame,
    memoryGame => memoryGame.foucComplete
);

export const getIsNotFirstLoad = createSelector(
    getCards,
    cards => cards && cards.length > 0
);
