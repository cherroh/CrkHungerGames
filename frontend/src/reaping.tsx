import React from 'react';
import './App.css';
import cookie from './tributes.tsx'; // Import the Cookie array

function Reaping(): React.ReactElement {
  return (
    <div className="content">
      {/* Map through the cookie array and render each tribute */}
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
  );
}

export default Reaping;
