const team = {
    _players: [
      {firstName: 'Paul', lastname: 'Smith', age: 36},
      {firstName: 'Bob', lastname: 'Sloan', age: 38},
      {firstName: 'Tom', lastname: 'Thor', age: 32}
    ],
    _games: [
     {opponent: 'Carla', teamPoints: 0, opponentPoints: 0},
     {opponent: 'Laura', teamPoints: 0, opponentPoints: 0},
     {opponent: 'Sarah', teamPoints: 0, opponentPoints: 0}
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
        const player = {
          firstName: newFirstName, 
          lastName: newLastName, 
          age: newAge
        };
        this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game = {
          opponent: newOpponent,
          teamPoints: newTeamPoints,
          opponentPoints: newOpponentPoints
        };
        this._games.push(game);
    }
  };

team.addPlayer('Bugs', 'Bunny', 76);
//console.log(team._players);
team.addGame('Titans', 100, 98);
console.log(team._games);
