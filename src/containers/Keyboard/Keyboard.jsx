import React from "react";
import "./Keyboard.scss";

// Function that turns the keyboard tile green if it is in the
// word and turns the tile red if it isn't. Also leaves the enter
// and back buttons the same.

const Keyboard = ({ handleClick }) => {
  const qwertyArr = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "←",
    "✓",
  ];

  return (
    <div className="keyboard-tiles">
      {qwertyArr.map((item, index) => (
        <p className="keyboard-tiles__letter" onClick={handleClick} key={index}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default Keyboard;
