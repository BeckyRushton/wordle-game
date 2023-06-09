import React from "react";
import "./Tiles.scss";
import LetterTile from "../../components/LetterTile";

// API to be called here maybe to pull through the hidden letters to const tile
// function that connects user clicking on keyboard letter and it replacing the X in the tile
// function that turns the letter tile green if it is in the right place or orange if it is in
// the word but no the right place. Stays the same colour if it isn't

const Tiles = () => {
  const populateTiles = () => {
    const tile = [];
    for (let i = 0; i < 5; i++) {
      tile.push(<LetterTile key={i} />);
    }
    return tile;
  };

  return (
    <div className="tiles">
      <div className="tiles__row-one">{populateTiles()}</div>
      <div className="tiles__row-two">{populateTiles()}</div>
      <div className="tiles__row-three">{populateTiles()}</div>
      <div className="tiles__row-four">{populateTiles()}</div>
      <div className="tiles__row-five">{populateTiles()}</div>
    </div>
  );
};

export default Tiles;
