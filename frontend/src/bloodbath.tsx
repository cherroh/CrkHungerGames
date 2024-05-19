import React, { useState } from 'react'; // Import React and useState hook
import './App.css'; // Import CSS styles
import cookie from './tributes.tsx'; // Import cookie data

function Bloodbath(): React.ReactElement { // Define Bloodbath component
    const [cookieArray, setCookieArray] = useState(cookie); // Initialize state for cookie array
    const [simulationReady, setSimulationReady] = useState(true); // Initialize state for simulation readiness
    const [output, setOutput] = useState<{ Cookie1: string; Cookie2: string; result: React.ReactNode; }[]>([]); // Initialize state for simulation output

    function beginSimulation() {
        setSimulationReady(false); // Set simulation readiness state to false
        let days = 0; // Initialize the days counter outside the loop

        while (cookieArray.length > 1) { // Loop until only one cookie remains in the array
            if (days % 35 === 0 && cookieArray.length > 4) { // Check if it's the 7th day
                feast(); // Call feast function on every 7th day
            }
            if (cookieArray.length > 1) {
                selectEvent(); // Perform a simulation step
                days++; // Increment the days counter
            }
        }

    }

    function feast() {

        let result: React.ReactNode = (
            <div className="feastlabel">
                A Feast Began
            </div>
        );

        setOutput(prevResults => [
            ...prevResults,
            {
                Cookie1: "empty",
                Cookie2: "empty",
                result: result
            }
        ]);

        const feastCookies = cookieArray.filter(_ => Math.random() < 0.5);

        // Separate cookies that stayed at the feast and those who didn't
        const leftFeastCookies = cookieArray.filter(cookie => !feastCookies.includes(cookie));

        // Output for cookies that left the feast
        leftFeastCookies.forEach(currentCookie => {
            let result2: React.ReactNode = (
                <>
                    <strong>{currentCookie.name}</strong> left the feast
                </>
            );

            setOutput(prevResults => [
                ...prevResults,
                {
                    Cookie1: currentCookie.picture,
                    Cookie2: "empty",
                    result: result2
                }
            ]);
        });

        // Process the cookies that stayed at the feast
        feastCookies.forEach(currentCookie => {
            const outcome = Math.random(); // Determine if the current cookie gains health (true) or takes damage (false)
            if (outcome < 0.33) {
                currentCookie.health += 50; // Gain health
                setOutput(prevResults => [
                    ...prevResults,
                    {
                        Cookie1: currentCookie.picture,
                        Cookie2: "empty",
                        result: <><strong>{currentCookie.name}</strong> ate well</>
                    }
                ]);
            } else if (outcome < 0.67) {
                currentCookie.damage += 50; // Gain health
                setOutput(prevResults => [
                    ...prevResults,
                    {
                        Cookie1: currentCookie.picture,
                        Cookie2: "empty",
                        result: <><strong>{currentCookie.name}</strong> found a weapon</>
                    }
                ]);
            } else {
                // Get the damaging cookie excluding the current cookie
                const damagingCookie = feastCookies.filter(cookie => cookie !== currentCookie)[Math.floor(Math.random() * (feastCookies.length - 1))];
                currentCookie.health -= damagingCookie.damage; // Take damage

                let result: React.ReactNode = (
                    <>
                        <strong>{damagingCookie.name}</strong> stabbed <strong>{currentCookie.name}</strong> (they have {currentCookie.health} hp now)
                        {currentCookie.health <= 0 && (
                            <>
                                {', '}
                                <strong>{currentCookie.name}</strong>
                                {' died'}
                            </>
                        )}
                    </>
                );

                setOutput(prevResults => [
                    ...prevResults,
                    {
                        Cookie1: damagingCookie.picture,
                        Cookie2: currentCookie.picture,
                        result: result
                    }
                ]);
            }
        });

        let result2: React.ReactNode = (
            <div className="feastlabel">
                The Feast Ended
            </div>
        );

        setOutput(prevResults => [
            ...prevResults,
            {
                Cookie1: "empty",
                Cookie2: "empty",
                result: result2
            }
        ]);

    }

    function selectEvent() { // Function to select a random event
        const randomEvent = Math.floor(Math.random() * 6 + 1); // Generate a random number to select event

        switch (randomEvent) { // Switch case based on random event
            case 1: // If random event is 1, call duel function
                duel();
                break;
            case 2: // If random event is 2, call grabWeapon function
                grabWeapon();
                break;
            case 3: // If random event is 2, call grabWeapon function
                grabSupplies();
                break;
            case 4: // If random event is 2, call grabWeapon function
                taunt();
                break;
            case 5: // If random event is 2, call grabWeapon function
                selfDeath();
                break;
            case 6: // If random event is 2, call grabWeapon function
                steal();
                break;
            default:
                // Handle unexpected cases
                break;
        }
    }

    function duel() { // Function to simulate a duel
        let randomIndexCookie2 = Math.floor(Math.random() * cookieArray.length); // Get a random index for the cookie to be killed
        let randomCookie2 = cookieArray[randomIndexCookie2]; // Get the killed cookie

        let randomIndexCookie1; // Initialize variable for killer index
        let randomCookie1; // Initialize variable for killer cookie

        do { // Loop until a different cookie is selected as the killer
            randomIndexCookie1 = Math.floor(Math.random() * cookieArray.length); // Get a random index for the killer cookie
            randomCookie1 = cookieArray[randomIndexCookie1]; // Get the killer cookie
        } while (randomCookie2 === randomCookie1); // Repeat loop if same cookie is selected as both killed and killer

        randomCookie2.health -= randomCookie1.damage; // Reduce health of the killed cookie by killer's damage

        let result: React.ReactNode = (
            <>
                <strong>{randomCookie1.name}</strong> stabbed <strong>{randomCookie2.name}</strong> (they have {randomCookie2.health} hp now)
                {randomCookie2.health <= 0 && (
                    <>
                        {', '}
                        <strong>{randomCookie2.name}</strong>
                        {' died'}
                    </>
                )}
            </>
        );

        if (randomCookie2.health <= 0) { // Check if the killed cookie is dead
            randomCookie2.isAlive = false; // Mark killed cookie as not alive
            cookieArray.splice(randomIndexCookie2, 1); // Remove the killed cookie from the array
        }

        setOutput(prevResults => [ // Update simulation output with duel result
            ...prevResults,
            {
                Cookie1: randomCookie1.picture,
                Cookie2: randomCookie2.picture,
                result: result
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

        let result: React.ReactNode = <><strong>{randomCookie.name}</strong> grabbed a sword</>; // Generate grab weapon result message

        setOutput(prevResults => [ // Update simulation output with duel result
            ...prevResults,
            {
                Cookie1: randomCookie.picture,
                Cookie2: "empty",
                result: result
            }
        ]);
    }

    function grabSupplies() {
        const randomIndex = Math.floor(Math.random() * cookieArray.length); // Get a random index for selecting a cookie
        const randomCookie = cookieArray[randomIndex]; // Get the selected cookie

        randomCookie.health += 50; // Increase health of the selected cookie by 50

        setCookieArray(prevCookies => { // Update the state with the modified cookie array
            const updatedCookies = [...prevCookies];
            updatedCookies[randomIndex] = randomCookie;
            return updatedCookies;
        });

        let result: React.ReactNode = <><strong>{randomCookie.name}</strong> recieved an airdrop</>; // Generate grab supplies result message

        setOutput(prevResults => [ // Update simulation output with grab supplies result
            ...prevResults,
            {
                Cookie1: randomCookie.picture,
                Cookie2: "empty",
                result: result
            }
        ]);
    }

    function taunt() {
        let randomIndexCookie2 = Math.floor(Math.random() * cookieArray.length); // Get a random index for the cookie to be killed
        let randomCookie2 = cookieArray[randomIndexCookie2]; // Get the killed cookie

        let randomIndexCookie1; // Initialize variable for killer index
        let randomCookie1; // Initialize variable for killer cookie

        do { // Loop until a different cookie is selected as the killer
            randomIndexCookie1 = Math.floor(Math.random() * cookieArray.length); // Get a random index for the killer cookie
            randomCookie1 = cookieArray[randomIndexCookie1]; // Get the killer cookie
        } while (randomCookie2 === randomCookie1); // Repeat loop if same cookie is selected as both killed and killer

        let result: React.ReactNode = (
            <>
                <strong>{randomCookie1.name}</strong> makes fun of <strong>{randomCookie2.name}</strong>
            </>
        );

        setOutput(prevResults => [ // Update simulation output with duel result
            ...prevResults,
            {
                Cookie1: randomCookie1.picture,
                Cookie2: randomCookie2.picture,
                result: result
            }
        ]);

        setCookieArray([...cookieArray]); // Update the state with the modified array to trigger a re-render
    }

    function selfDeath() {
        let randomIndexCookie1 = Math.floor(Math.random() * cookieArray.length); // Get a random index for the cookie to be killed
        let randomCookie1 = cookieArray[randomIndexCookie1]; // Get the killed cookie

        randomCookie1.health -= 50; // Reduce health of the killed cookie by killer's damage

        let result: React.ReactNode = (
            <>
                <strong>{randomCookie1.name}</strong> hurt themself (they have {randomCookie1.health} hp now)
                {randomCookie1.health <= 0 && (
                    <>
                        {', '}
                        <strong>{randomCookie1.name}</strong>
                        {' died'}
                    </>
                )}
            </>
        );

        if (randomCookie1.health <= 0) { // Check if the killed cookie is dead
            randomCookie1.isAlive = false; // Mark killed cookie as not alive
            cookieArray.splice(randomIndexCookie1, 1); // Remove the killed cookie from the array
        }

        setOutput(prevResults => [ // Update simulation output with duel result
            ...prevResults,
            {
                Cookie1: randomCookie1.picture,
                Cookie2: "empty",
                result: result
            }
        ]);

        setCookieArray([...cookieArray]); // Update the state with the modified array to trigger a re-render
    }

    function steal() {
        let randomIndexCookie2 = Math.floor(Math.random() * cookieArray.length); // Get a random index for the cookie to be killed
        let randomCookie2 = cookieArray[randomIndexCookie2]; // Get the killed cookie

        let randomIndexCookie1; // Initialize variable for killer index
        let randomCookie1; // Initialize variable for killer cookie

        do { // Loop until a different cookie is selected as the killer
            randomIndexCookie1 = Math.floor(Math.random() * cookieArray.length); // Get a random index for the killer cookie
            randomCookie1 = cookieArray[randomIndexCookie1]; // Get the killer cookie
        } while (randomCookie2 === randomCookie1); // Repeat loop if same cookie is selected as both killed and killer

        randomCookie2.damage -= 50; // Reduce health of the killed cookie by killer's damage
        if (randomCookie2.damage < 0) {
            randomCookie2.damage = 0;
        }

        let result: React.ReactNode = (
            <>
                <strong>{randomCookie1.name}</strong> stole from <strong>{randomCookie2.name}</strong> (they have {randomCookie2.damage} damage now)
            </>
        );

        setOutput(prevResults => [ // Update simulation output with duel result
            ...prevResults,
            {
                Cookie1: randomCookie1.picture,
                Cookie2: randomCookie2.picture,
                result: result
            }
        ]);

        setCookieArray([...cookieArray]); // Update the state with the modified array to trigger a re-render
    }

    return (
        <div className="bloodbath">
            <div className="bloodbathlabel">
                <p>The Bloodbath</p>
            </div>
            {simulationReady && <button onClick={beginSimulation} className="begin-button">Begin Simulation</button>}
            {output.map((result, index) => (
                <div key={index}>
                    {result.Cookie1 !== "empty" && <img src={result.Cookie1} alt="Cookie1" className="tribute-image" />}
                    {result.Cookie2 !== "empty" && <img src={result.Cookie2} alt="Cookie2" className="tribute-image" />}
                    <p>{result.result}</p>
                    {cookieArray.length === 1 && index === output.length - 1 && (
                        <div>
                            <img src={cookieArray[0].picture} alt="winner" className="tribute-image" />
                            <p>The last one standing is <strong>{cookieArray[0].name}</strong>! <strong>{cookieArray[0].name}</strong> is the Winner!</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Bloodbath; // Export Bloodbath component
