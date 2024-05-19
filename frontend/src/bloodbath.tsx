import React, { useState } from 'react'; // Import React and useState hook
import './App.css'; // Import CSS styles
import cookie from './tributes.tsx'; // Import cookie data
import Reaping from './reaping.tsx'; // Import Reaping component

function Bloodbath(): React.ReactElement { // Define Bloodbath component
    const [cookieArray, setCookieArray] = useState(cookie); // Initialize state for cookie array
    const [simulationReady, setSimulationReady] = useState(true); // Initialize state for simulation readiness
    const [output, setOutput] = useState<{ killer: string; killed: string; duelResult: string; }[]>([]); // Initialize state for simulation output

    function beginSimulation() { // Function to begin simulation
        setSimulationReady(false); // Set simulation readiness state to false
        while (cookieArray.length > 1) { // Loop until only one cookie remains in the array
            selectEvent(); // Perform a simulation step
        }
    }

    function selectEvent() { // Function to select a random event
        const randomEvent = Math.floor(Math.random() * 2 + 1); // Generate a random number to select event

        switch (randomEvent) { // Switch case based on random event
            case 1: // If random event is 1, call duel function
                duel();
                break;
            case 2: // If random event is 2, call grabWeapon function
                grabWeapon();
                break;
            default:
                // Handle unexpected cases
                break;
        }
    }

    function duel() { // Function to simulate a duel
        let randomIndexKilled = Math.floor(Math.random() * cookieArray.length); // Get a random index for the cookie to be killed
        let randomCookieKilled = cookieArray[randomIndexKilled]; // Get the killed cookie

        let randomIndexKiller; // Initialize variable for killer index
        let randomCookieKiller; // Initialize variable for killer cookie

        do { // Loop until a different cookie is selected as the killer
            randomIndexKiller = Math.floor(Math.random() * cookieArray.length); // Get a random index for the killer cookie
            randomCookieKiller = cookieArray[randomIndexKiller]; // Get the killer cookie
        } while (randomCookieKilled === randomCookieKiller); // Repeat loop if same cookie is selected as both killed and killer

        randomCookieKilled.health -= randomCookieKiller.damage; // Reduce health of the killed cookie by killer's damage
        let duelResult = `${randomCookieKiller.name} stabbed ${randomCookieKilled.name}`; // Generate duel result message

        if (randomCookieKilled.health <= 0) { // Check if the killed cookie is dead
            randomCookieKilled.isAlive = false; // Mark killed cookie as not alive
            cookieArray.splice(randomIndexKilled, 1); // Remove the killed cookie from the array
            duelResult += `, ${randomCookieKilled.name} died`; // Add information about the killed cookie
        }

        setOutput(prevResults => [ // Update simulation output with duel result
            ...prevResults,
            {
                killer: randomCookieKiller.picture,
                killed: randomCookieKilled.picture,
                duelResult: duelResult
            }
        ]);

        setCookieArray([...cookieArray]); // Update the state with the modified array to trigger a re-render
    }

    function grabWeapon() { // Function to simulate grabbing a weapon
        const randomIndex = Math.floor(Math.random() * cookieArray.length); // Get a random index for selecting a cookie
        const randomCookie = cookieArray[randomIndex]; // Get the selected cookie

        randomCookie.damage += 50; // Increase damage of the selected cookie by 50

        setCookieArray(prevCookies => { // Update the state with the modified cookie array
            const updatedCookies = [...prevCookies];
            updatedCookies[randomIndex] = randomCookie;
            return updatedCookies;
        });

        let duelResult = `${randomCookie.name} grabbed a sword`; // Generate grab weapon result message

        setOutput(prevResults => [ // Update simulation output with duel result
            ...prevResults,
            {
                killer: randomCookie.picture,
                killed: "empty",
                duelResult: duelResult
            }
        ]);
    }

    return (
        <div className="bloodbath">
            <div className="bloodbathlabel">
                <p>The Bloodbath</p>
            </div>
            <Reaping />
            {simulationReady && <button onClick={beginSimulation} className="begin-button">Begin Simulation</button>}
            {output.map((result, index) => (
                <div key={index}>
                    {result.killer !== "empty" && <img src={result.killer} alt="killer" className="tribute-image" />}
                    {result.killed !== "empty" && <img src={result.killed} alt="killed" className="tribute-image" />}
                    <p>{result.duelResult}</p>
                    {cookieArray.length === 1 && index === output.length - 1 && (
                        <div>
                            <img src={cookieArray[0].picture} alt="winner" className="tribute-image" />
                            <p>The last one standing is {cookieArray[0].name}! {cookieArray[0].name} is the Winner!</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Bloodbath; // Export Bloodbath component
