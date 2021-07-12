import {
    CARDS_SET_VALUE,
    GAME_COMPLETE_IMAGE_SET_VALUE
} from "../actions/memoryGame";


const initMemoryGame = {
    cards: [],
    gameCompleteImage: null
};

const reducerActions = (state = initMemoryGame, action) => {

    switch (action.type) {

        case CARDS_SET_VALUE:
            return {...state, cards: action.value };

        case GAME_COMPLETE_IMAGE_SET_VALUE:
            return {...state, gameCompleteImage: action.value}

        default:
            return state;
    }
};

export default reducerActions;