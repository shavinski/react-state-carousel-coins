import React from "react";
import { useState } from "react";
import Coin from "./Coin";

function CoinFlipper() {
  const [coinState, setCoinState] = useState({});
  const [flipCount, setFlipCount] = useState(0);
  const [headCount, setHeadCount] = useState(0);

  // handleClick
  // flipCoin function
  // get random side of coin using ['H', 'T']
  // pass it as props to coin that is rendered

  // first appearance coin shouldn't appear
  // if flips is 0

  // after button is pressed
  // if flips is greater than 0 than show coin on HTML
  function flipCoin() {
    const result = Math.floor(Math.random() * coinStates.length);

    if (coinStates[result].side === "head") setHeadCount(headCount + 1);

    return coinStates[result];
  }

  function handleClick() {
      setCoinState(flipCoin);
      setFlipCount(flipCount + 1);
  }

  return (
    <div>
      <h1 className="CoinFlipper-title">Let's Flip a Coin!</h1>
      {flipCount > 0 && <Coin side={coinState.side} imgSrc={coinState.imgSrc}/>}
      <button className="CoinFlipper-button" onClick={handleClick}>
        Flip me!
      </button>
      <p>
        Out of {flipCount} there have been {headCount} heads and{" "}
        {flipCount - headCount} tails
      </p>
    </div>
  );
}

const coinStates = [
  {
    side: "head",
    imgSrc: "https://tinyurl.com/react-coin-heads-jpg",
  },
  {
    side: "tail",
    imgSrc: "https://tinyurl.com/react-coin-tails-jpg",
  },
];

export default CoinFlipper;
