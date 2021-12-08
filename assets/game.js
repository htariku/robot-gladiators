var randomNumer = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1 ) + min);
  return value; 
}
var getPlayerName = function() {
  var name = "";
  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }
  console.log("You robot's name is " + name);
  return name; 
};

var playerInfo = {
  name: getPlayerName(),
health: 100,
attack: 10,
money: 10,
reset: function() {
  this.health = 100; 
  this.money = 10;
  this.attack = 10;
},

refilllHealth: function() {
  if (this.money >= 7) {
    window.alert("Refilling player's health by 20 for 7 dollars.");
  this.health += 20;
  this.money -= 7;
  }
  else {
    window.alert("You don't have enough money!");
  }
},
upgradeAttack: function() {
  if (this.money >= 7) {
    window,a;ErrorEvent("Upgrade player's attack by 6 for 7 dollars.");
  this .attack += 6;
  this .money -+ 7;
}
else {
  window.alert("You don't have enough money!");
}

var randomNumber = function() {
  var value = Math.floor(Math.random() * 21) +40;
  return value; 
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: 12
  },
  {
    name: "Amy Android",
    attack: 13
  },
  {
    name: "Robo Trumble",
    attack: 14 
  }
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyinfo[0].name);
console.loh(enemyInfo[0]['attck']);

var enemyHealth = 50;
var enemyAttack = 12;

promptFight = promptFight.toLowerCase();
if (promptFight === "skip") {

var fightOrSkip = function() {
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.')
  if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid anwer! Pleas try again. ");
    return fightOrSkip();
  }
  if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are yousure you'd like to quit?");
    if (conformSkip) {
      window.alert(playerInfo.name + "has decided to skip this fight. Goodbye!");
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      shop();
      return true;
    }

var fight = function (enemy) {
  var isPlayerTurn = true;
  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }
  while (playerInfo.health > 0 && enemyHealth > 0) {
    if (isPlayerTurn) {
if (fightOrSkip()) {
      break;
    }
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack); 
    enemyHealth = Math.max(0, enemyHealth - damage);
    console.log(
      playerInfo.name +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      playerInfo.money = playerInfo.money + 20;

      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    } 
  } else {
  var damage = randomNumber(enemy.attack - 3, enemy.attack);
  playerInfo.health = math.max(0, playerInfo.health - damage);

    playerInfo.health = Math.max(0, playerInfo.health - enemyAttack);
    console.log(
      enemyName +
        " attacked " +
        playerInfo.name +
        ". " +
        playerInfo.name +
        " now has " +
        playerInfo.health +
        " health remaining."
    );

    if (playerInfo.Health <= 0) {
      window.alert(playerInfo.name + " has died!");

      break;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
  }
  isPlayerTurn = !isPlayerTurn;
}
};

var startGame = function () {
  playerInfo.reset();
};
  playerInfo.health= 100;
  playerInfo.attack = 10;
  playerInfo.money = 10;

  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      debugger;

      var pickedEnemyObj = enemyInfo[i];

      pickedEnemyObj.health = randomNumber(40, 60);

      fight(pickedEnemyObj);

      if (playerInfo.health > 0 && i < enemyNamees.length - 1) {
        var storeConfirm = window.confirm(
          "The fight is over, visit the store before the next round?"
        );

        if (storeConfirm) {
          shop();
        }
      }
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }

  endGame();


var endGame = function () {
  window.alert("The game has now ended. Let's see how you did!");

  if (playerInfo.health > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
      playerInfo.money +
        "."
    );
  } else {
    window.alert("You've lost your robot in battle!");
  }

  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shopOptionPrompt = window.prompt( 
  "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
  );
  debugger;
  shopOptionPrompt = paeseInt(shopOptionPrompt);
  switch (shopOptionPrompt) {
    case 1:
      playerInfo.refilllHealth();
      break;
    case 2:
      playerInfo.upgradeAttack();
      break;
    case 3:
      window.alert("Leaving the store.");
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
}
};
startGame();
}
}
};
