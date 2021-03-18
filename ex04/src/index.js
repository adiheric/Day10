var players = {
    7:"Muhamed Besic",
    10:"Miralem Pjanic",
    11:"Edin Dzeko",
  };
  function myFunction(players) {
    var playerNumber = players["Miralem Pjanic"];
   return playerNumber;
  }
  
  console.log(myFunction(players));
  module.exports = { players, myFunction };
  