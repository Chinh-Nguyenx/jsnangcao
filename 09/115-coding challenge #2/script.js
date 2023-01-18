//coding challenge 
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrssia Dortmund',
    players: [
        [
        'Neuer','Pavard','Martinez','Alaba','Davies','Kimmich','Goretzka','Coman','Muller','Gnarby','Lewandowski',
    ],

    [
        'Burki','Schulz','Hummels','Akanji','Hakimi','Weigl','Wistel','Hazard','Brandt','Snacho','Gotze',
    ],
],
score: "3:0",
scored: ['Lewandowski','Gnarby','Coman'],
date: 'Nov 5th 2030',
odds: {
    team1: 1.44,
    x: 3.25,
    team2: 6.5,
},
};

// .1
for(const [i, players] of game.scored.entries()){
    console.log(`Goal ${i+1}: ${players}`);
}

// .2
const odds = Object.values(game.odds);
let average = 0;
for(const odd of Object.values(game.odds)){
    average += odd;
    average/= odd.length;
    console.log(average);
}

// .3
for(const [team ,odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of  ${teamStr} ${odd}`);
}
