import React, { useState } from 'react';

const BettingInterface = ({ onBet }) => {
    const [amount, setAmount] = useState(0);

    const handleBet = () => {
        onBet(amount);
        setAmount(0); // Reset the input after betting
    };

    return (
        <div className="betting-interface">
            <h3>Place Your Bet</h3>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter bet amount"
            />
            <button onClick={handleBet}>Bet</button>
        </div>
    );
};

export default BettingInterface;
