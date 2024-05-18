import React from 'react';
import './App.css';
import cherrowlogo from './assets/cherrowlogo.jpg'; // Import the image

function App(): React.ReactElement { // Define the component as a function with a return type annotation
  // Define the resetAll function
  function resetAll(): void {
    console.log('Reset All button clicked'); // Placeholder action
    alert('reset all');
  }

  return (
    <>
        <img src={cherrowlogo} alt="cherrow logo" className="logo" /> {/* Use className instead of class */}
        <div className="headerlabel">
          <p>Cookie Run Hunger Games</p>
        </div>
        <div className="content">
          <p>home</p>
          <p>home</p>
          <p>home</p>
        </div>
        <button onClick={resetAll} className="reset-button">Reset All</button> {/* Add the Reset All button */}
    </>
  );
}

export default App;
