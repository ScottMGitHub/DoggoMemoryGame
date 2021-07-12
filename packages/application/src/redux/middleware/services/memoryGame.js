import axios from 'axios';
import {cardsSetValue, gameCompleteImageSetValue, TRIGGER_INITIALISE_CARDS} from '../../actions/memoryGame';
import {getCards} from '../../selectors/memoryGame';
const { REACT_APP_API_URL } = process.env;

export const memoryGameCardsService = (store, next, action) => {
    const result = next(action);
    const cards = getCards(store.getState());
   
    // If cards have already been loaded return
    if(action.type === TRIGGER_INITIALISE_CARDS && cards && cards.length > 0)
        return result;

    (async () => {
        // Get cards 
        const cardsResponse = await getDoggos(action.value);
        if(cardsResponse && cardsResponse.status === 200 && cardsResponse.data) {
            // Map cards response to front objects
            const mappedResponse = mapResponse(cardsResponse.data);
            // Pair Cards and shuffle them
            const shuffledPairs = shuffleCards(generateCardPairs(mappedResponse));
            store.dispatch(cardsSetValue(shuffledPairs))
        }

        // Get Giph
        const giphyResponse = await getGiphyDoggo();
        if(giphyResponse && giphyResponse.status === 200 && giphyResponse.data) {
            store.dispatch(gameCompleteImageSetValue(giphyResponse.data.imageUrl))
        }
    })();

    return result;
}

const getDoggos = async (numberOfDoggos) => {
    try {
        const response = await axios.get(`${REACT_APP_API_URL}/api/doggos/?numberOfDoggos=${numberOfDoggos}`, { headers: { 'Content-Type': 'application/json' } });
        return response;
    } catch (error) {
        return null;
    }
}

const getGiphyDoggo = async () => {
    try {
        const response = await axios.get(`${REACT_APP_API_URL}/api/giphy?searchTerm=doggos`, { headers: { 'Content-Type': 'application/json' } });
        return response;
    } catch (error) {
        return null;
    }
}

const mapResponse = response  => {
    const cards = response.map(card => {
        return card = {
            doggoId: card.id,
            text: card.breed,
            image: card.image,
            open: false,
            disabled: false
        }
    });
    return cards;
}

const generateCardPairs = cards => {
    // duplicate cards
    const pairedCards = cards.concat(cards);
    return pairedCards.map((pairedCard, index) => {
        return {
            ...pairedCard,
            id: index + 1
        }
    });
}

const shuffleCards = (array) => {
    // Fisher-Yates (aka Knuth) Shuffle

    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}