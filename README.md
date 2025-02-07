# Cherrow's Hunger Games Simulator

This is the Hunger Games Simulator: an interactive, text-and-image-based simulation hosted on GitHub Pages. It expands upon BrantSteele's Hunger Games simulator with customizations to suit my preferences. What began as a personal project is now available for anyone interested in trying it out. This project was created with HTML, CSS, JavaScript, React, and Vite.

Try it here: https://cherroh.github.io/CrkHungerGames/

# Running the Project Locally

Steps 1 through 3 only need to be performed once. Repeat steps 4 through 6 every time you want to run and end the project locally.
1. Open your terminal and navigate to the folder where you want to download the project
2. Clone the repository by running this command: `git clone https://github.com/cherroh/CrkHungerGames-Professional.git`
3. To install required dependencies, navigate to the project folder in your terminal and run `npm install`
4. To start the development server, run `npm run dev`
5. Press 'o' and hit Enter to open the project in your browser. If you need help with Vite, press 'h' and hit Enter.
6. Press 'q' and hit Enter to stop the project.

# How the simulator works
This website simulates the Hunger Games, where 24 tributes fight, and the last one standing wins. Tributes are frequently randomly chosen to engage in randomized events, such as duels, with most of these events playing a key role in determining the winner. The tribute's health stat determines how many hits the tribute can take before being eliminated. The tribute's attack stat determines how much damage they do to other tributes.

## Warning
If the simulator doesn't load after clicking the "Proceed" button, reload the website and try again. Avoid giving tributes excessive health, as it may cause the simulator to crash.

## How to customize your simulation
Use the white input fields to change your tribute's attributes. To change a tribute's picture, first, upload an image to imgur.com. Next, you must copy the imgur.com link of your uploaded image and paste it into their picture input field. You want to copy and paste the image's "direct link" (not the "image link"). For example, a tribute's direct image link may look like this: https://i.imgur.com/0EQfqJn.png. The values you change will not save after you run the simulation, or when you reload the website. Do not set the tribute's health or damage to 0 or negative values.

## Possible Daytime Events
- Duel (30% chance): Two tributes fight and one tribute hurts the other
- Find Weapon (10% chance): A tribute finds a weapon, it increases their damage
- Find Supplies (10% chance): A tribute finds supplies, it increases their health
- Accident (20% chance): A tribute has an accident and loses health
- Steal (10% chance): A tribute steals from another tribute's belongings, lowering the victim's damage
- Taunt (10% chance): One tribute taunts another tribute, but doesn't impact the outcome of the simulation
- Events that do nothing (10% chance): Neutral events that don't impact the outcome of the simulation

## Possible Nighttime Events
- Sleep (10% chance): Tributes must sleep
- Duel (25% chance)
- Find Weapon (5% chance)
- Find Supplies (5% chance)
- Accident (15% chance)
- Steal (20% chance)
- Taunt (10% chance)
- Events that do nothing (10% chance)

## Possible Bloodbath/Feast Events
Each tribute will experience one of these outcomes. The bloodbath occurs once at the beginning of the simulation, just like in the Hunger Games. After the bloodbath, feasts occur about every 3 days.
- Run Away (50% chance): The tribute successfully escapes the event
- Find Supplies (16.6% chance)
- Find Weapon (16.6% chance)
- Duel (16.6% chance)

## Possible Events During The Final Showdown
The final showdown begins when there are only two tributes left. During the final showdown, damage is halved to heighten the drama.
- Duel (70% chance)
- Find Weapon (15% chance)
- Taunt (15% chance)

Currently, all probabilities are unchangeable, but this may change in the future.

# Credits
Original Simulator: https://brantsteele.net/hungergames/disclaimer.php \
Author: cherrow
