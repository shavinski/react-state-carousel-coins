import React from "react";
import "./Coin.css";

function Coin({ side, imgSrc }) {
  return (
    <div className="Coin">
      <img src={imgSrc} alt={side} />
    </div>
  );
}

export default Coin;
