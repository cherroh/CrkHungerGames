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
      <ChangeCast cookies={cookies} setCookies={setCookies} />
    </>
  );
}

export default App;
