import React from "react";
import { useState } from "react";


function CoinFlipper() {
    const [displaySide, setDisplaySide] = useState('');
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
        const choice = ['H', 'T'];
        const result = Math.floor(Math.random() * choice.length);

        if(choice[result] === 'H') setHeadCount(headCount + 1);

        return choice[result];
    }

    function handleClick() {
        setDisplaySide(flipCoin);
        setFlipCount(flipCount + 1);
    }

    return (
        <div>
            <h1 className="CoinFlipper-title">Let's Flip a Coin!</h1>
            {flips > 0 && <Coin side={displaySide}/>}
            <button className="CoinFlipper-button" onClick={handleClick}>Flip me!</button>
            <p>Out of {flipCount} there have been {headCount} heads and {flipCount - headCount} tails</p>
        </div>
    )
}

export default CoinFlipper;