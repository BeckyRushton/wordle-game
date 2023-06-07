import "./App.scss";
import Keyboard from "./containers/Keyboard/Keyboard";
import Tiles from "./containers/Tiles/Tiles";

function App() {
  return (
    <div className="app">
      <h1 className="game-title">Wordle</h1>
      <div className="game-tiles">
        <Tiles />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
