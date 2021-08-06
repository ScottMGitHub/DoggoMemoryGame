import React from 'react';
import './Overlay.scss';
import Button from '../Button/Button';
import gitHubMarkLogo from '../../assets/GitHub-Mark-64px.png'

const Overlay = ({triggerRefresh, hide}) => { 
    return (
        <div className={hide ? "overlay-hide" : "overlay" }>
            <div className="content-wrapper">
                <h1>Doggo Memory Game</h1>
                <p>Start a new game by clicking the number of cards you want to load below.</p>
                <div className="buttons-wrapper">
                    <Button buttonType="round" displayLoadingSpinner={true} onClickEvent={() => {
                        triggerRefresh(6);
                    }}>12</Button>
                    <Button buttonType="round" displayLoadingSpinner={true} onClickEvent={() => {
                        triggerRefresh(10);
                    }}>20</Button>
                    <Button buttonType="round" displayLoadingSpinner={true} onClickEvent={() => {
                        triggerRefresh(20);
                    }}>40</Button>
                </div>
                <div className="github-logo">
                    <a href="https://github.com/ScottMGitHub/DoggoMemoryGame" target="_blank" rel="noreferrer">
                        <img src={gitHubMarkLogo} alt="github logo"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Overlay;