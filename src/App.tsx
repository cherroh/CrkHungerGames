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

  //clicking the "begin simulation" button takes the user to the next place: the bloodbath
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
          <p> {/*this long wall of text is the description of the website, it teaches them how to use it, it also displays extra information*/}
            Alright, if you wanna use this hunger games simulator, keep this in mind:<br />
            <br />
            - I am bad at making this kind of stuff<br />
            <br />
            - There is a chance that the simulator crashes when it runs,<br />
            if that happens, just leave and come back to the simulator.<br />
            This happens if you give cookies too much health<br />
            <br />
            - This simulator is mostly for my personal use, but you all can use it if you want<br />
            <br />
            - This simulator is better than the official one fr<br />
            <br />
            <br />
            <br />
            Ok, here's how to actually use it: <br />
            <br />
            No customization: click proceed, that's all<br />
            <br />
            With customization: use the input boxes to change tribute's values<br />
            <br />
            For the tribute's picture, you must put an imgur.com link into it<br />
            <br />
            You want to use the image's Direct Link<br />
            <br />
            For example: robust axe's image link is https://i.imgur.com/0EQfqJn.png<br />
            <br />
            You can either upload your own image to imgur.com or use someone else's<br />
            <br />
            The values you change will NOT save after you run the simulation, or when<br />
            you reload the website<br />
            <br />
            Do not try to set the tribute's health or damage to 0 or below 0 or i will call u out<br />
            <br />
            <br />
            <br />
            How the simulator works:<br />
            <br />
            This simulator simulates the Hunger Games, where tributes kill eachother<br />
            <br />
            The last tribute standing wins<br />
            <br />
            The tribute's health stat determines how many hits the tribute can take<br />
            <br />
            It also determines how many accidents the tribute can get into before dying<br />
            <br />
            The tribute's attack stat determines how much damage they do to other tributes<br />
            <br />
            Tributes participate in events (like fights) very often, and most of these events<br />
            DO have an impact on the simulation<br />
            <br />
            The tributes that participate in events are chosen randomly<br />
            <br />
            <br />
            <br />
            Possible Events (Daytime):<br />
            <br />
            Duel (30% chance): Two tributes fight, one tribute hurts the other, they might or<br />
            might not kill them<br />
            <br />
            Find Weapon (10% chance): A tribute finds a weapon, it increases their damage<br />
            <br />
            Find Supplies (10% chance): A tribute finds supplies, it increases their health<br />
            <br />
            Taunt (10% chance): One tribute taunts another tribute, this does absolutely nothing<br />
            but its good for my videos<br />
            <br />
            Accident (20% chance): A tribute gets in an accident and hurts themself, they might die<br />
            <br />
            Steal (10% chance): A tribute steals from another tribute's belongings, lowering their damage<br />
            <br />
            Events that do nothing (10% chance): A tribute does something that has no impact on the simulation.<br />
            Hey it makes things more realistic alright?<br />
            <br />
            <br />
            <br />
            Possible Events (Nighttime):<br />
            <br />
            Sleep (10% chance): These are mostly nightmares, which makes things more realistic<br />
            <br />
            Duel (25% chance)<br />
            <br />
            Find Weapon (5% chance)<br />
            <br />
            Find Supplies (5% chance)<br />
            <br />
            Taunt (10% chance)<br />
            <br />
            Accident (15% chance)<br />
            <br />
            Steal (20% chance)<br />
            <br />
            Events that do nothing (10% chance)<br />
            <br />
            <br />
            <br />
            Possible Events (Bloodbath/Feast):<br />
            <br />
            Every single tribute will have one of these outcomes, if they don't die before it happens.<br />
            Feasts occur about every 3 days<br />
            <br />
            Run Away (50% chance): The tribute escapes the event safely<br />
            <br />
            Find Supplies (16.6% chance)<br />
            <br />
            Find Weapon (16.6% chance)<br />
            <br />
            Duel (16.6% chance)<br />
            <br />
            <br />
            <br />
            A Final Showdown occurs when there are only two tributes left<br />
            <br />
            During the final showdown, damage is halved, to make things more dramatic<br />
            <br />
            Possible Events (Final Showdown)<br />
            <br />
            <br />
            Duel (70% chance)<br />
            <br />
            Find Weapon (15% chance)<br />
            <br />
            Taunt (15% chance)<br />
            <br />
            <br />
            <br />
            At the moment, all these probabilities aren't changeable<br />
            <br />
            <br />
            <br />
            Some extra information:<br />
            <br />
            Original Simulator: <a href="https://brantsteele.net/hungergames/disclaimer.php">https://brantsteele.net/hungergames/disclaimer.php</a><br />
            <br />
            Author: cherrow<br />
            <br />
            <br />
            <br />
            Well that was a long wall of text
          </p>
        </div>
      )}
      {/*this renders the forms that allows the users to change the tribute's properties*/}
      {phase === 'reaping' && <ChangeCast cookies={cookies} setCookies={setCookies} />} {/* Conditionally render ChangeCast */}
    </>
  );
}

export default App;
