import React, { useState } from 'react';
import './App.css';
import cookie from './tributes.tsx';
import Reaping from './reaping.tsx';

function Bloodbath(): React.ReactElement {
    const [cookieArray, setCookieArray] = useState(cookie); // Initialize state with the array of cookies
    const [simulationReady, setSimulationReady] = useState(true); // Initialize state to track simulation status

    // Function to begin the simulation
    function beginSimulation() {
        setSimulationReady(false); // Set the simulation state to off
        // Loop until only one cookie remains in the array
        while (cookieArray.length > 1) {
            selectEvent(); // Perform a simulation step
            //add remove isAlive=false cookies here
        }
    }

    function selectEvent() {
        const randomEvent = Math.floor(Math.random() * 1 + 1);

        switch (randomEvent) {
            case 1:
                duel();
                break;
            case 2:
                grabWeapon();
                break;
            default:
                // Handle unexpected cases
                break;
        }
    }

    function duel() {
        let randomIndexKilled = Math.floor(Math.random() * cookieArray.length); // Get a random index from the array
        let randomCookieKilled = cookieArray[randomIndexKilled]; // Get the cookie at the random index

        let randomIndexKiller;
        let randomCookieKiller;

        // Loop until we find a different cookie for the killer
        do {
            randomIndexKiller = Math.floor(Math.random() * cookieArray.length); // Get a random index from the array
            randomCookieKiller = cookieArray[randomIndexKiller]; // Get the cookie at the random index
        } while (randomCookieKilled === randomCookieKiller);

        // Simulate the elimination of the randomly selected cookie
        randomCookieKilled.isAlive = false; // Mark the killed cookie as not alive
        cookieArray.splice(randomIndexKilled, 1); // Remove the eliminated cookie from the array

        setCookieArray([...cookieArray]); // Update the state with the modified array to trigger a re-render
    }

    function grabWeapon() {
        alert("what are you doing");
    }

    return (
        <div className="bloodbath">
            <div className="bloodbathlabel">
                <p>The Bloodbath</p>
            </div>
            <Reaping /> {/* Include the Reaping component */}
            {/* Render the "Begin Simulation" button only if simulation has not started */}
            {simulationReady && <button onClick={beginSimulation} className="begin-button">Begin Simulation</button>}
        </div>
    );
}

export default Bloodbath;
