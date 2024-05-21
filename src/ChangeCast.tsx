//ChangeCast.tsx generates the forms the user uses to change the default cookie array

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { CookieType } from './tributes';

function ChangeCast({ cookies, setCookies }: { readonly cookies: CookieType[], readonly setCookies: React.Dispatch<React.SetStateAction<CookieType[]>> }) {
    //state that manages the forms
    //it works because the user can only update 1 cookie at a time
    const [cookieForms, setCookieForms] = useState(
        cookies.map((cookie) => ({
            newName: cookie.name,
            newHealth: cookie.health,
            newDamage: cookie.damage,
            newPicture: cookie.picture
        }))
    );

    //function that handles the change in a cookie's property
    const handleUpdateCookie = (index: number) => {
        return () => {
            const updatedCookies = [...cookies];
            const newHealth = cookieForms[index].newHealth;
            const newDamage = cookieForms[index].newDamage;

            // Check if the new health and damage are not negative or zero
            if (newHealth > 0 && newDamage > 0) {
                updatedCookies[index] = {
                    ...updatedCookies[index],
                    name: cookieForms[index].newName,
                    health: newHealth,
                    damage: newDamage,
                    picture: cookieForms[index].newPicture
                };
                setCookies(updatedCookies);
            } else {
                // If health or damage is negative or zero, do not update the corresponding property
                // Call out the user for doing this
                alert("New Values Rejected - Don't Try To Break The Game, Blud");
            }
        };
    };

    //function that handles the user's request to change a cookie's property
    const handleInputChange = (index: number, field: string) => {
        return (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            setCookieForms((prevCookieForms) => {
                const newCookieForms = [...prevCookieForms];
                newCookieForms[index] = {
                    ...newCookieForms[index],
                    [field]: value
                };
                return newCookieForms;
            });
        };
    };

    return (
        <div className="theform">
            {/*this mapping generates all 24 forms*/}
            {cookies.map((_cookie, index) => (
                <div key={index} className="form-container">
                    <h1>Tribute #{index + 1}</h1>
                    <form onSubmit={(e: FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        handleUpdateCookie(index)();
                    }}>
                        <table className="form-table">
                            <thead>
                                <tr>
                                    <th>Stat</th>
                                    <th>New Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>
                                        <input
                                            type="text"
                                            value={cookieForms[index].newName}
                                            onChange={handleInputChange(index, 'newName')}
                                            placeholder={!cookieForms[index].newName ? 'New Name' : ''}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Health:</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={cookieForms[index].newHealth}
                                            onChange={handleInputChange(index, 'newHealth')}
                                            placeholder={!cookieForms[index].newHealth ? 'New Health' : ''}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Damage:</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={cookieForms[index].newDamage}
                                            onChange={handleInputChange(index, 'newDamage')}
                                            placeholder={!cookieForms[index].newDamage ? 'New Damage' : ''}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Picture URL:</td>
                                    <td>
                                        <input
                                            type="text"
                                            value={cookieForms[index].newPicture}
                                            onChange={handleInputChange(index, 'newPicture')}
                                            placeholder={!cookieForms[index].newPicture ? 'New Picture URL' : ''}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="submit" className="formbutton">Update</button>
                    </form>
                </div>
            ))}
        </div>
    );
}

export default ChangeCast;
