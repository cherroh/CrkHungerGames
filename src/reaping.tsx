//reaping.tsx displays the tributes in a grid

import React from 'react';
import './App.css';
import { CookieType } from './tributes';

interface ReapingProps {
  cookies: CookieType[]; // Define the prop type
}

function Reaping({ cookies }: ReapingProps): React.ReactElement {

  //generate the form that allows the user to change properties in the cookie array
  return (
    <div className="reaping">
      <table>
        <tbody>
          {[0, 6, 12, 18].map((start, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <tr>
                {[0, 1, 2].map((cellIndex) => (
                  <td key={cellIndex} colSpan={2} className="district-name">District {rowIndex * 3 + cellIndex + 1}</td>
                ))}
              </tr>
              <tr key={rowIndex + 1000}>
                {cookies.slice(start, start + 6).map((cookieObj, cellIndex) => (
                  <td key={cellIndex}>
                    <img src={cookieObj.picture} alt={cookieObj.name} className="tribute-image" />
                    <p className="tribute-name">{cookieObj.name}</p>
                  </td>
                ))}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reaping;
