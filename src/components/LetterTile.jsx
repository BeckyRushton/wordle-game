import React from "react";
import "./LetterTile.scss";

const LetterTile = ({ id, guessArr }) => {
  let letter = "";
  if (guessArr[id]) {
    letter = guessArr[id];
  }
  return (
    <div id={id} className="letter-tile">
      {letter}
    </div>
  );
};

export default LetterTile;
