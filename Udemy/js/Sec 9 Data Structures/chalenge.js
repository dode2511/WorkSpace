'use strict'




const game ={
     team1:'chelsea',
     team2:'liverpool',
     players: [
          ['mendy','james','silva','fofana','cucurella','kante',`havertz`,'mount','mudrik','neymar','felix'],
          ['alisson','arnold','van dijck','matip','robertson','fabinho','thiago','henderson','salah','firmino','dias'],
     ],
     score : '4:0',
     scored : ['felix','neymar','neymar','neymar'],
     date: ' nov 9th, 2037',
     odds: {
          team1 :1.33,
          x:3.25,
          team2:6.5
     },
}

const [player1,player2] =game.players



const [gk,...field] = players1
console.log(gk,field);

const allPlayers = [...players1,...players2]

const players1Final = [...players1,'thiago','coutinho','perisic']



const {
     odds:{team1, x:draw,team2}
} = game

const printGoals = function(...players){
    console.log(`${players.length} goals were scorred`); 

}
printGoals(...game.score)




team1 < team2 && console.log('team 1 probally go win');


team2 < team1 && console.log('team 2 probally go win');

