import React from 'react';
import './App.css';
import cherrowlogo from './assets/cherrowlogo.jpg'; // Import the image
import Reaping from './reaping.tsx'; // Import the Reaping component

function App(): React.ReactElement {
  // Define the resetAll function
  function resetAll(): void {
    console.log('Reset All button clicked'); // Placeholder action
    alert('reset all');
  }

  return (
    <>
      <img src={cherrowlogo} alt="cherrow logo" className="logo" />
      <div className="headerlabel">
        <p>Cookie Run Hunger Games</p>
      </div>
      <Reaping /> {/* Render the Reaping component */}
      <button onClick={resetAll} className="reset-button">Reset All</button>
    </>
  );
}

export default App;
