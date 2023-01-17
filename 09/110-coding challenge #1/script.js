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

//. 1
const [players1 ,players2]=game.players;
console.log(players1,players2);

//. 2
const [gk,fieldPlayer] = players1;
console.log(gk, fieldPlayer);

//. 3
const allPlayer = [...players1, ...players2];
console.log(allPlayer);

//. 4
const player1Final = [...players1, 'Thiago','Coutinho','Perisic'];

//. 5
const {odds: {team1 , x: draw ,team2}} = game;
console.log(team1,draw,team2);

//. 6
const printGoals = function (...players) {
    console.log(players);
    console.log(`${players.lengeth} goal were scored`);
}
// printGoals('Davies','Mullers','Lewandowski','Kimmich');
// printGoals('Davies','Mullers');
printGoals(...game.score);

//. 7
team1<team2 && console.log('team1 is more likely to win');
team1>team2 && console.log('team2 is more likely to win');
