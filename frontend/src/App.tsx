// App.tsx
import React, { useState } from 'react';
import './App.css';
import cherrowlogo from './assets/cherrowlogo.jpg'; // Import the image
import Reaping from './reaping.tsx'; // Import the Reaping component
import Bloodbath from './bloodbath.tsx'; // Import the Bloodbath component

function App(): React.ReactElement {
  const [phase, setPhase] = useState<'reaping' | 'bloodbath'>('reaping'); // State to track the current phase

  function resetAll(): void {
    window.location.reload();
  }

  function beginSimulation(): void {
    setPhase('bloodbath'); // Change phase to 'bloodbath' when the button is pressed
  }

  return (
    <>
      <img src={cherrowlogo} alt="cherrow logo" className="logo" />
      <div className="headerlabel">
        <p>Cookie Run Hunger Games</p>
      </div>
      {phase === 'reaping' ? <Reaping /> : <Bloodbath />} {/* Conditionally render Reaping or Bloodbath */}
      <button onClick={resetAll} className="reset-button">Reset All</button>
      {phase === 'reaping' && <button onClick={beginSimulation} className="proceed-button">Proceed</button>}
    </>
  );
}

export default App;
