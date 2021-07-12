import {memoryGameRulesEngine} from "./memoryGame";
import { TRIGGER_TOGGLE_CARD } from "../../actions/memoryGame";

export const rulesEngine = store => next => action => {

    if(action.type === TRIGGER_TOGGLE_CARD)
        return memoryGameRulesEngine(store, next, action);

    return next(action);

};
