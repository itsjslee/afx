import React, { useState } from 'react';
import UserProfile from './components/UserProfile';
import BettingInterface from './components/BettingInterface';
import './App.css';

const App = () => {
    const [user, setUser] = useState({ name: 'John Doe', grade: 'A' });
    const [bets, setBets] = useState([]);

    const handleBet = (amount) => {
        setBets([...bets, { amount, user: user.name }]);
        // Logic to handle the bet can be added here
    };

    return (
        <div className="app">
            <h1>Grade Betting App</h1>
            <UserProfile user={user} />
            <BettingInterface onBet={handleBet} />
            <h2>Bets Placed:</h2>
            <ul>
                {bets.map((bet, index) => (
                    <li key={index}>{bet.user} bet ${bet.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
