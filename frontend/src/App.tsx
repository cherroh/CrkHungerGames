import React, { useState } from 'react';
import './App.css';
import cherrowlogo from './assets/cherrowlogo.jpg';
import Reaping from './reaping';
import Bloodbath from './bloodbath';
import ChangeCast from './ChangeCast';
import cookiesData from './tributes'; // Import the cookies array

function App(): React.ReactElement {
  const [phase, setPhase] = useState<'reaping' | 'bloodbath'>('reaping');
  const [cookies, setCookies] = useState(cookiesData); // Manage the state of the cookies array

  function resetAll(): void {
    window.location.reload();
  }

  function beginSimulation(): void {
    setPhase('bloodbath');
  }

  return (
    <>
      <img src={cherrowlogo} alt="cherrow logo" className="logo" />
      <div className="headerlabel">
        <p>Cookie Run Hunger Games</p>
      </div>
      {phase === 'reaping' ? <Reaping cookies={cookies} /> : <Bloodbath cookies={cookies} />}
      <button onClick={resetAll} className="reset-button">Reset All</button>
      {phase === 'reaping' && <button onClick={beginSimulation} className="proceed-button">Proceed</button>}
      {phase === 'reaping' && (
        <div className="info-box">
          <p>
            Alright, if you wanna use this hunger games simulator, keep this in mind:<br />
            <br />
            - I am bad at making this kind of stuff<br />
            <br />
            - There is a very small chance that the simulator crashes when it runs,<br />
            if that happens, just leave and come back to the simulator.<br />
            <br />
            - This simulator is mostly for my personal use, but you all can use it if you want<br />
            <br />
            - This simulator is better than the official one fr<br />
            <br />
            <br />
            <br />
            Ok, here's how to actually use it: <br />
            <br />
            No customization: click proceed and run, and that's all<br />
            <br />
            With customization: use the input boxes to change cookie's values<br />
            <br />
            For the cookie's picture, you must put an imgur.com link into it<br />
            <br />
            You want to use the image's Direct Link<br />
            <br />
            For example: robust axe's image link is https://i.imgur.com/0EQfqJn.png<br />
            <br />
            The values you change will NOT save after you run the simulation, or when<br />
            you reload the website<br />
            <br />
            Do not try to set the cookie's health or damage to 0 or below 0 or i will call u out<br />
            <br />
            <br />
            <br />
            How the simulator works:<br />
            <br />
            This simulator simulates the Hunger Games, where cookies kill eachother<br />
            <br />
            The last cookie alive wins<br />
            <br />
            The cookie's health stat determines how many hits the cookie can take<br />
            <br />
            It also determines how many accidents the cookie can get into before dying<br />
            <br />
            The cookie's attack stat determines how much damage they do to other cookies<br />

          </p>
        </div>
      )}
      {phase === 'reaping' && <ChangeCast cookies={cookies} setCookies={setCookies} />} {/* Conditionally render ChangeCast */}
    </>
  );
}

export default App;
