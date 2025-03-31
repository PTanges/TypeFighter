import './App.css';
import BookHandler from './typing_prompt.js';

function App() {
  return (
    <div className="App" id="UI">
        <div className="title">TypeFighter</div>
        <div className="subtitle">Will the boss fall today?</div>
        <img className="boss" src="/1200px-Bowser.webp" alt="Bowser" />
        <div className="hp-bar">HP: 100%</div>
        <button
          className="attack-button"
          onClick={() => BookHandler.retrieve_book_data('OL7353617M')}
        >
          Attack!
        </button>
      </div>
  );
}

export default App;

