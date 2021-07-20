import {memoryGameCardsService} from "./memoryGame";
import { TRIGGER_REFRESH_CARDS } from "../../actions/memoryGame";

export const services = store => next => action => {

    if(action.type === TRIGGER_REFRESH_CARDS)
        return memoryGameCardsService(store, next, action);

    return next(action);
};
