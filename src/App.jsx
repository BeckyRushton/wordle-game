import "./App.scss";
import LetterTile from "./components/LetterTile";

function App() {
  return (
    <div className="App">
      <h1 className="game-title">Wordle</h1>
      <div className="game-tiles">
        <LetterTile />
      </div>
    </div>
  );
}

export default App;
