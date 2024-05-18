import React from 'react';
import './App.css';
import cookie from './tributes.tsx'; // Import the Cookie array

function Reaping(): React.ReactElement {
  return (
    <div className="reaping">
      <table>
        <tbody>
          {[0, 6, 12, 18].map((start, rowIndex) => (
            <tr key={rowIndex}>
              {cookie.slice(start, start + 6).map((cookieObj, cellIndex) => (
                <td key={cellIndex}>
                  <img src={cookieObj.picture} alt={cookieObj.name} className="tribute-image" />
                  <p>{cookieObj.name}</p>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reaping;
