import React from 'react';
import './App.css';
import { CookieType } from './tributes'; // Import the CookieType interface or type

interface ReapingProps {
  cookies: CookieType[]; // Define the prop type
}

function Reaping({ cookies }: ReapingProps): React.ReactElement {
  return (
    <div className="reaping">
      <table>
        <tbody>
          {[0, 6, 12, 18].map((start, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {/* New row above existing row */}
              <tr>
                {[0, 1, 2].map((cellIndex) => (
                  <td key={cellIndex} colSpan={2} className="district-name">District {rowIndex * 3 + cellIndex + 1}</td>
                ))}
              </tr>
              {/* Existing row */}
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
