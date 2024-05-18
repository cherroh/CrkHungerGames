import React from 'react';
import './App.css';
import cherrowlogo from './assets/cherrowlogo.jpg'; // Import the image
import cookie from './tributes.tsx'; // Import the Cookie type and cookiePeople array

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
      <div className="content">
        {/* Map through the cookiePeople array and render each tribute */}
        {cookie.map((tribute, index) => (
          <div key={index} className="tribute">
            <img src={tribute.picture} alt={tribute.name} className="tribute-image" />
            <p className="tribute-name">{tribute.name}</p>
          </div>
        ))}
        {/* Fill remaining grid spaces with empty divs if needed */}
        {new Array(Math.max(0, 24 - cookie.length)).fill(null).map((_, index) => (
          <div key={index} className="empty-tribute"></div>
        ))}
      </div>
      <button onClick={resetAll} className="reset-button">Reset All</button>
    </>
  );
}

export default App;
