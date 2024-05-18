import React, { useState } from 'react';
import './App.css';
import cookie from './tributes.tsx';
import Reaping from './reaping.tsx';

function Bloodbath(): React.ReactElement {
    const [cookieArray, setCookieArray] = useState(cookie); // Initialize state with the array of cookies

    // Function to begin the simulation
    function beginSimulation() {
        // Loop until only one cookie remains in the array
        while (cookieArray.length > 1) {
            simulateStep(); // Perform a simulation step
        }
    }

    // Function to simulate a single step of the bloodbath
    function simulateStep() {
        const randomIndex = Math.floor(Math.random() * cookieArray.length); // Get a random index from the array
        const randomCookie = cookieArray[randomIndex]; // Get the cookie at the random index

        // Simulate the elimination of the randomly selected cookie
        randomCookie.isAlive = false; // Mark the cookie as not alive
        cookieArray.splice(randomIndex, 1); // Remove the eliminated cookie from the array

        setCookieArray([...cookieArray]); // Update the state with the modified array to trigger a re-render
    }

    return (
        <div className="bloodbath">
            <div className="bloodbathlabel">
                <p>The Bloodbath</p>
            </div>
            <button onClick={beginSimulation}>Begin Simulation</button> {/* Button to start the simulation */}
            <Reaping /> {/* Include the Reaping component */}
        </div>
    );
}

export default Bloodbath;
