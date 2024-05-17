import React from 'react';
import './App.css';
import cherrowlogo from './assets/cherrowlogo.jpg'; // Import the image

function App(): React.ReactElement { // Define the component as a function with a return type annotation
  return (
    <>
      <img src={cherrowlogo} alt="cherrow logo" className="logo" /> {/* Use className instead of class */}
      <p>home</p>
    </>
  );
}

export default App;
