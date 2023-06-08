import React from "react";
import "./Tiles.scss";
import LetterTile from "../../components/LetterTile";

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
