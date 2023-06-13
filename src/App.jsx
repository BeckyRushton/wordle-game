import { useState } from "react";
import "./App.scss";
import Keyboard from "./containers/Keyboard/Keyboard";
import Tiles from "./containers/Tiles/Tiles";

function App() {
  const [guessArr, setGuessArr] = useState([]);

  const handleClick = (event) => {
    console.log(event.target.innerText);
    if (event.target.innerText === "←") {
      const updatedArr = [...guessArr];
      updatedArr.pop();
      setGuessArr(updatedArr);
    } else if (guessArr.length > 0) {
      const updatedArr = [...guessArr];
      updatedArr.push(event.target.innerText);
      console.log(guessArr);
      setGuessArr(updatedArr);
    } else {
      setGuessArr([event.target.innerText]);
    }
  };
  return (
    <div className="app">
      <h1 className="game-title">Wordle</h1>
      <div className="game-tiles">
        <Tiles guessArr={guessArr} />
        <Keyboard handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
