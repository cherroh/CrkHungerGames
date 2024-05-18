// Define the type for a cookie person
type Cookie = {
    name: string;
    isAlive: boolean;
    health: number;
    damage: number;
    picture: string; // New attribute for picture
};
  
// Create an array of cookie people
const cookiePeople: Cookie[] = [
    {
        name: "Tea Knight",
        isAlive: true,
        health: 200,
        damage: 50,
        picture: "https://i.imgur.com/58UTRKP.png",
    },
    {
        name: "Cream Unicorn",
        isAlive: true,
        health: 100,
        damage: 25,
        picture: "https://i.imgur.com/PA88jOy.png",
    }
];

// Test the array
console.log(cookiePeople);
