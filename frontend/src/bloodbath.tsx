import React, { useState } from 'react';
import './App.css';
import cookie from './tributes.tsx';
import Reaping from './reaping.tsx';

function Bloodbath(): React.ReactElement {
    const [cookieArray, setCookieArray] = useState(cookie);
    const [simulationReady, setSimulationReady] = useState(true);
    const [output, setOutput] = useState<{ killer: string; killed: string; duelResult: string; }[]>([]);

    function beginSimulation() {
        setSimulationReady(false);
        while (cookieArray.length > 1) {
            selectEvent();
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
        let randomIndexKilled = Math.floor(Math.random() * cookieArray.length);
        let randomCookieKilled = cookieArray[randomIndexKilled];
    
        let randomIndexKiller;
        let randomCookieKiller;
    
        do {
            randomIndexKiller = Math.floor(Math.random() * cookieArray.length);
            randomCookieKiller = cookieArray[randomIndexKiller];
        } while (randomCookieKilled === randomCookieKiller);
    
        // Update health of the killed cookie
        randomCookieKilled.health -= randomCookieKiller.damage;
    
        // Check if the killed cookie is still alive
        if (randomCookieKilled.health <= 0) {
            randomCookieKilled.isAlive = false;
            // Remove the killed cookie from the array if they are not alive
            cookieArray.splice(randomIndexKilled, 1);
        }
    
        // Store the duel result in state
        setOutput(prevResults => [
            ...prevResults,
            {
                killer: randomCookieKiller.picture,
                killed: randomCookieKilled.picture,
                duelResult: `${randomCookieKiller.name} stabbed ${randomCookieKilled.name} cookie`
            }
        ]);
    
        setCookieArray([...cookieArray]);
    }    

    function grabWeapon() {
        alert("what are you doing");
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
                    <img src={result.killer} alt="killer" className="tribute-image" />
                    <img src={result.killed} alt="killed" className="tribute-image" />
                    <p>{result.duelResult}</p>
                </div>
            ))}
        </div>
    );
}

export default Bloodbath;
