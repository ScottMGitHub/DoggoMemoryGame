import React from 'react';
import './CardGrid.scss';
import { useSelector} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {
    getCards
} from '../../redux/selectors/memoryGame';
import Card from '../Card/Card';

const CardGrid = () => {    
    const {
        cards
    }  = useSelector(
        createStructuredSelector({
            cards: getCards
        })
    );
    
    return (
        <div className={`card-grid--${cards.length}`}>
            {cards.map((card, index) => (
                <Card 
                    key={index} 
                    {...card}  
                />))}
        </div>
    )
}

export default CardGrid;