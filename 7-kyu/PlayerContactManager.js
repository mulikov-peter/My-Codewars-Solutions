'use strict';
/*
You are the Dungeon Master for a public DnD game at your local comic shop and recently you've had some trouble keeping your players' info neat and organized so you've decided to write a bit of code to help keep them sorted!

The goal of this code is to create an array of objects that stores a player's name and contact number from a given string.

The method should return an empty array if the argument passed is an empty string or nil/None/null.
*/

const playerManager = players => {
  const res = [];
  if (players) {
    players.split(',').forEach((player, i, arr) => {
      if (i % 2 === 0)
        res.push({
          ['player']: player.trim(),
          ['contact']: Number(arr[i + 1].trim()),
        });
    });
    return res;
  } else return [];
};

// Codewar
// function playerManager(players) {
//   if(players === '' || players === null) return [];
//   players = players.split`, `;
//   let result = [];
//   for(let i = 0; i < players.length; i+=2) {
//     result.push( {player: players[i], contact: +players[i+1]} );
//   }
//   return result;
// }

// const playerManager = (players) => players && players.length> 0 ? players.split(', ').reduce((s,n,i)=>( i%2==0 ? s.push({player:n}) : s[i/2|0].contact = +n , s)  ,[]):[];

// const playerManager = players =>
//   players ? players.split(`, `).reduce((pre, val, idx, arr) => idx % 2 ? pre : [...pre, {player: val, contact: +arr[idx + 1]}], []) : [];

// Test
// console.log(playerManager('John Doe, 8167238327, Mari Ann, 000000000')); // [{player: "John Doe", contact: 8167238327}, {player: "Jane Doe", contact: 8163723827}]
// console.log(playerManager('')); // []
