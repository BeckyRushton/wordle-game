import React from "react";
import "./Keyboard.scss";

const Keyboard = () => {
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
        <p className="keyboard-tiles__letter" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
  // JSX keyboard, map function
};

export default Keyboard;
