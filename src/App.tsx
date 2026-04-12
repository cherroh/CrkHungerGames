//App.tsx is the homepage

import React, { useState, useEffect } from 'react';
import './App.css';
import cherrowlogo from './assets/cherrowlogo.jpg';
import Reaping from './reaping';
import Bloodbath from './bloodbath';
import ChangeCast from './ChangeCast';
import cookiesData, { CookieType } from './tributes';

const LOCAL_STORAGE_KEY = 'crkg-hunger-games-cookies';

function App(): React.ReactElement {
  const [phase, setPhase] = useState<'reaping' | 'bloodbath'>('reaping'); //Manage the state of the place the user is currently at
  const [cookies, setCookies] = useState<CookieType[]>(() => {
    const savedCookies = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedCookies ? JSON.parse(savedCookies) as CookieType[] : cookiesData;
  }); // Manage the state of the cookies array
  const [showHelp, setShowHelp] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cookies));
  }, [cookies]);

  //clicking the reset simulation button reloads the website
  function resetSimulation(): void {
    window.location.reload();
  }

  //clicking the reset tributes button clears saved tributes and reloads
  function resetTributes(): void {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    window.location.reload();
  }

  //clicking the "begin simulation" button takes the user to the next place, the bloodbath
  function beginSimulation(): void {
    setPhase('bloodbath');
  }

  return (
    <>
      <div className="app-container">
        <aside className="sidebar">
          <img src={cherrowlogo} alt="cherrow logo" className="logo" />
          <div className="sidebar-buttons">
            <button onClick={resetSimulation} className="reset-button">Reset Simulation</button>
            <button onClick={() => setShowHelp(true)} className="secondary-button">Help</button>
            {phase === 'reaping' && <button onClick={resetTributes} className="reset-button">Reset Tributes</button>}
            {phase === 'reaping' && <button onClick={() => setShowCustomize(true)} className="secondary-button">Customize Tributes</button>}
          </div>
        </aside>

        <main className="main-area">
          <div className="title-row">
            <div className="headerlabel"><p>Cookie Run Hunger Games</p></div>
          </div>

          {phase === 'reaping' ? <Reaping cookies={cookies} /> : <Bloodbath cookies={cookies} />}

          {phase === 'reaping' && (
            <button onClick={beginSimulation} className="proceed-button">Proceed</button>
          )}
        </main>
      </div>

      {showHelp && (
        <div className="modal-overlay" onClick={() => setShowHelp(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowHelp(false)}>×</button>
            <div className="modal-content info-box">
              <div className="modal-header help-modal-header">
                <h2>Help</h2>
              </div>
              <p>
                <b>Introduction</b><br />
                <br />
                This website is an interactive text- and image-based simulation. It is customized and expands upon BrantSteele's Hunger Games simulator.
                This project started as a personal endeavor, but now it's available for you to try out if you're interested.
                Click the "Proceed" button if you don't want to customize your simulation.<br />
                <br />
                <br />
                <b>Warning</b><br />
                <br />
                If the simulator doesn't load after clicking the "Proceed" button, reload the website and try again.
                Avoid giving tributes excessive health, as it may cause the simulator to crash. <br />
                <br />
                <br />
                <b>How to customize your simulation</b><br /><br />
                Use the white input fields to change your tribute's attributes.<br /><br />
                To change a tribute's picture, you can use Imgur, Discord, or a wiki image URL.<br /><br />
                For Imgur, upload an image and paste the direct image URL into the picture field.<br /><br />
                For Discord, paste the direct CDN attachment URL, for example: https://cdn.discordapp.com/attachments/…/image.jpg.<br /><br />
                For wiki images, use the direct file URL that ends in the image filename, not the revision page URL.<br /><br />
                Example valid wiki URL: https://static.wikia.nocookie.net/cookierunkingdom/images/9/97/Cookie_eternal_sugar_card.png<br /><br />
                Example invalid wiki URL: https://static.wikia.nocookie.net/cookierunkingdom/images/9/97/Cookie_eternal_sugar_card.png/revision/latest?cb=20250507013152<br /><br />
                The values you change will now save in your browser and reappear when you reload the page.
                Do not set the tribute's health or damage to 0 or negative values.<br />
                <br />
                <br />
                <b>How the simulator works:</b><br /><br />
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
          </div>
        </div>
      )}

      {showCustomize && (
        <div className="modal-overlay" onClick={() => setShowCustomize(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowCustomize(false)}>×</button>
            <div className="modal-content">
              <div className="modal-header">
                <h2>Customize Tributes</h2>
              </div>
              <div className="modal-body">
                <ChangeCast cookies={cookies} setCookies={setCookies} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
