import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MemoryGame from './pages/home/MemoryGame';
import './App.scss';
import { Emoji } from 'emoji-mart'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import gitHubMarkLogo from './assets/GitHub-Mark-Light-32px.png'
import {foucCompleteSetValue} from './redux/actions/memoryGame'
import {
  getFoucComplete
} from './redux/selectors/memoryGame';

const App = () => {
  const dispatch = useDispatch();

  const {
    foucComplete,
  }  = useSelector(
      createStructuredSelector({
          foucComplete: getFoucComplete
      })
  );

  useEffect(() => {
    // Hacky way of dealing with FOUC
    setTimeout(() => {
      dispatch(foucCompleteSetValue(true));
    }, 1000);
  });

  return (
    <div className="App" style={{ visibility: foucComplete ? 'visible' : 'hidden' }}>
      <Header
        logo={<>
            <div className="header-logo-image"><Emoji emoji={{ id: 'dog' }} size={45} /></div>
            <div className="header-logo-text">Doggo Memory Game</div>
        </>}
        navigation={
          <div className="header-navigation-github">
            <a href="https://github.com/ScottMGitHub/DoggoMemoryGame" target="_blank" rel="noreferrer">
              <img src={gitHubMarkLogo} alt="github logo"/>
            </a>
          </div>
        }
      />
      <main>
          <MemoryGame></MemoryGame>
      </main>
      <Footer>Doggo Memory Game</Footer>
    </div>
  );
}

export default App;
