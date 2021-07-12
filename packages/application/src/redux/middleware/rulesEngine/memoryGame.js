import {cardsSetValue} from '../../actions/memoryGame';
import {getCards} from '../../selectors/memoryGame';

// Toggle active card value, if there is a matched card set to disabled
const getActiveCardValues = (card, matchedCard) => {
    return {...card, 
        open: card.open ? false : true,
        disabled: matchedCard ? true : false
    };
}

const getInActiveCardValues = (card, numberOfOpenCards, matchedCard) => {
    // If this is the matched card the disable
    if(matchedCard && card.id === matchedCard.id) {
        return  {...card, disabled: true } 
    }

    // If there are two open cards or more,
    // and this is not a matched card then close card
    return !card.disabled && numberOfOpenCards > 1 
        ? {...card, open: false } 
        :  card
}

export const memoryGameRulesEngine = (store, next, action) => {
    const result = next(action);
    const cards = getCards(store.getState());

    // If toggled card is already open or is disabled do nothing
    const toggledCard = cards.find(card => card.id === action.value);
    if(toggledCard.open || toggledCard.disabled)
        return result;

    // Get the number of open cards unmatched cards
    const numberOfOpenCards = cards.filter(card => card.open && !card.disabled).length;
    // Find a matching card
    const matchedCard = cards.find(card => card.open && 
        card.doggoId === toggledCard.doggoId && 
        card.id !== toggledCard.id);

    // Update cards
    const updatedCards = cards.map(card => 
        card.id === toggledCard.id
        ? getActiveCardValues(card, matchedCard)
        : getInActiveCardValues(card, numberOfOpenCards, matchedCard) 
    );

    store.dispatch(cardsSetValue(updatedCards));
    return result;

}
