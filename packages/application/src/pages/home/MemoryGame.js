import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Emoji } from 'emoji-mart';
import './MemoryGame.scss';
import { triggerRefreshCards } from "../../redux/actions/memoryGame";
import CardGrid from '../../components/CardGrid/CardGrid';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import Overlay from '../../components/Overlay/Overlay';
import Timer from '../../components/Timer/Timer';

import {
    getIsNotFirstLoad,
    getGameComplete,
    getGameCompleteImage
} from '../../redux/selectors/memoryGame';

const MemoryGame = () => {
    const dispatch = useDispatch();

    const {
        isNotFirstLoad,
        gameComplete,
        gameCompleteImage,
    }  = useSelector(
        createStructuredSelector({
            isNotFirstLoad: getIsNotFirstLoad,
            gameComplete: getGameComplete,
            gameCompleteImage: getGameCompleteImage
        })
    );

    const triggerRefresh = numberOfCards => {
        dispatch(triggerRefreshCards(numberOfCards));
        (async () => {
            const timer = document.querySelector('custom-timer');
            if(timer) 
                await timer.resetTimer();
        })();
    }

    return (
        <div className="home-page">
            <Overlay triggerRefresh={triggerRefresh} hide={isNotFirstLoad}/>
            <div className="timer">
                <Timer stopTimer={gameComplete}/>
            </div>
            <section className="intro-section">
                <h1>Doggo Memory Game</h1>
                <p>Try and find the matching doggo. You can only open two cards at a time.</p>
                <h2>New Game?</h2>
                <div className="button-wrapper">
                    <Button buttonType="round" onClickEvent={() => triggerRefresh(6)}>12</Button>
                    <Button buttonType="round" onClickEvent={() => triggerRefresh(10)}>20</Button>
                    <Button buttonType="round" onClickEvent={() => triggerRefresh(20)}>40</Button>
                </div>
            </section>
            <section className="cards-section">
                <CardGrid />
            </section>
            <Modal open={isNotFirstLoad && gameComplete} className="complete-modal">
                <h2>Congratulations!</h2>
                <div className="congratulations-bones">
                    <Emoji emoji={{ id: 'bone' }} size={25} /><Emoji emoji={{ id: 'bone' }} size={25} /><Emoji emoji={{ id: 'bone' }} size={25} />
                </div>
                <div class="image-wrapper"><img src={gameCompleteImage}  alt="doggo giph"/></div>
                <h2>New Game?</h2>
                <Button buttonType="round" onClickEvent={() => triggerRefresh(6)}>12</Button>
                <Button buttonType="round" onClickEvent={() => triggerRefresh(10)}>20</Button>
                <Button buttonType="round" onClickEvent={() => triggerRefresh(20)}>40</Button>
                <br/>
            </Modal>
        </div>
    )
}

export default MemoryGame;