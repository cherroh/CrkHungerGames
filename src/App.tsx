//App.tsx is the homepage

import React, { useState } from 'react';
import './App.css';
import cherrowlogo from './assets/cherrowlogo.jpg';
import Reaping from './reaping';
import Bloodbath from './bloodbath';
import ChangeCast from './ChangeCast';
import cookiesData from './tributes';

function App(): React.ReactElement {
  const [phase, setPhase] = useState<'reaping' | 'bloodbath'>('reaping'); //Manage the state of the place the user is currently at
  const [cookies, setCookies] = useState(cookiesData); // Manage the state of the cookies array

  //clicking the reset button reloads the website, deleting all saved information and progress
  function resetAll(): void {
    window.location.reload();
  }

  //clicking the "begin simulation" button takes the user to the next place, the bloodbath
  function beginSimulation(): void {
    setPhase('bloodbath');
  }

  return (
    <>
      {/*this is the persistent website logo*/}
      <img src={cherrowlogo} alt="cherrow logo" className="logo" />
      {/*this is the "Cookie Run Hunger Games" heading*/}
      <div className="headerlabel">
        <p>Cookie Run Hunger Games</p>
      </div>
      {/*this renders a grid of all 24 tributes*/}
      {phase === 'reaping' ? <Reaping cookies={cookies} /> : <Bloodbath cookies={cookies} />}
      {/*this button reloads the website*/}
      <button onClick={resetAll} className="reset-button">Reset All</button>
      {/*this button takes the user to the bloodbath phase*/}
      {phase === 'reaping' && <button onClick={beginSimulation} className="proceed-button">Proceed</button>}
      {phase === 'reaping' && (
        <div className="info-box">
          <p> {/*this teaches the user how to use the website*/}
            <b>Introduction</b><br />
            This website is an interactive text- and image-based simulation. It is customized and expands upon BrantSteele's Hunger Games simulator. 
            This project started as a personal endeavor, but now it's available for you to try out if you're interested. 
            Click the "Proceed" button if you don't want to customize your simulation.<br />
            <br />
            <br />
            <b>Warning</b><br />
            If the simulator doesn't load after clicking the "Proceed" button, reload the website and try again. 
            Avoid giving tributes excessive health, as it may cause the simulator to crash. <br />
            <br />
            <br />
            <b>How to customize your simulation</b><br />
            Use the white input fields to change your tribute's attributes. 
            To change a tribute's picture, first, upload an image to imgur.com. 
            Next, you must copy the imgur.com link of your uploaded image and paste it into their picture input field. 
            You want to copy and paste the image's "direct link" (not the "image link"). 
            For example, a tribute's direct image link may look like this: https://i.imgur.com/0EQfqJn.png. 
            The values you change will not save after you run the simulation, or when you reload the website.
            Do not set the tribute's health or damage to 0 or negative values.<br />
            <br />
            <br />
            <b>How the simulator works:</b><br />
            This website simulates the Hunger Games, where 24 tributes fight, and the last one standing wins.
            Tributes are frequently randomly chosen to engage in randomized events, such as duels, with most of these events playing a key role in determining the winner.
            The tribute's health stat determines how many hits the tribute can take before being eliminated.
            The tribute's attack stat determines how much damage they do to other tributes.<br />
            <br />
            <br />
            <b>Possible Daytime Events:</b><br />
            <br />
            Duel (30% chance): Two tributes fight and one tribute hurts the other<br />
            <br />
            Find Weapon (10% chance): A tribute finds a weapon, it increases their damage<br />
            <br />
            Find Supplies (10% chance): A tribute finds supplies, it increases their health<br />
            <br />
            Accident (20% chance): A tribute has an accident and loses health<br />
            <br />
            Steal (10% chance): A tribute steals from another tribute's belongings, lowering the victim's damage<br />
            <br />
            Taunt (10% chance): One tribute taunts another tribute, but doesn't impact the outcome of the simulation<br />
            <br />
            Events that do nothing (10% chance): Neutral events that don't impact the outcome of the simulation<br />
            <br />
            <br />
            <b>Possible Nighttime Events:</b><br />
            <br />
            Sleep (10% chance): Tributes must sleep<br />
            <br />
            Duel (25% chance)<br />
            <br />
            Find Weapon (5% chance)<br />
            <br />
            Find Supplies (5% chance)<br />
            <br />
            Accident (15% chance)<br />
            <br />
            Steal (20% chance)<br />
            <br />
            Taunt (10% chance)<br />
            <br />
            Events that do nothing (10% chance)<br />
            <br />
            <br />
            <b>Possible Bloodbath/Feast Events:</b><br />
            <br />
            Each tribute will experience one of these outcomes.
            The bloodbath occurs once at the beginning of the simulation, just like in the Hunger Games. 
            After the bloodbath, feasts occur about every 3 days.<br />
            <br />
            Run Away (50% chance): The tribute successfully escapes the event<br />
            <br />
            Find Supplies (16.6% chance)<br />
            <br />
            Find Weapon (16.6% chance)<br />
            <br />
            Duel (16.6% chance)<br />
            <br />
            <br />
            <b>Possible Events During The Final Showdown:</b><br />
            <br />
            The final showdown begins when there are only two tributes left. 
            During the final showdown, damage is halved to heighten the drama.<br />
            <br />
            Duel (70% chance)<br />
            <br />
            Find Weapon (15% chance)<br />
            <br />
            Taunt (15% chance)<br />
            <br />
            <br />
            Currently, all probabilities are unchangeable, but this may change in the future.<br />
            <br />
            <br />
            <b>Credits:</b><br />
            <br />
            Original Simulator: <a href="https://brantsteele.net/hungergames/disclaimer.php">https://brantsteele.net/hungergames/disclaimer.php</a><br />
            <br />
            Author: cherrow<br />
          </p>
        </div>
      )}
      {/*this renders the forms that allows the users to change the tribute's properties*/}
      {phase === 'reaping' && <ChangeCast cookies={cookies} setCookies={setCookies} />} {/* Conditionally render ChangeCast */}
    </>
  );
}

export default App;
