import MemoryGame from './pages/home/MemoryGame';
import './App.scss';
import { Emoji } from 'emoji-mart'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import gitHubMarkLogo from './assets/GitHub-Mark-Light-32px.png'

function App() {
  return (
    <div>
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
