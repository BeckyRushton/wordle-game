import React from "react";
import "./Tiles.scss";
import LetterTile from "../../components/LetterTile";

const Tiles = () => {
  // A function that creates this card and returns 5 x 5
  const populateTiles = LetterTile.map((tile) => {
    return (
      <div>
        <LetterTile tile={tile} />
      </div>
    );
  });

  return <div className="tiles">{populateTiles}</div>;
};

export default Tiles;
