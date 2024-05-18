import React from 'react';
import './App.css';
import cookie from './tributes.tsx'; // Import the Cookie array

function Reaping(): React.ReactElement {
  return (
    <div className="reaping">
      <table>
        <tbody>
          {cookie.map(function (cookie, index) {
            return (
              <tr key={index}>
                <td>
                  <img src={cookie.picture} alt={cookie.name} className="tribute-image" />
                  <p>{cookie.name}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Reaping;
