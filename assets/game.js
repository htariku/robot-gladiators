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
  console.log(enemy);
};
  while (playerInfo.health > 0 && enemyHealth > 0) {
    if (fightOrSkip()) {
      break;
    }
    var promptFight = window.prompt(
      'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
    );

    if (promptFight === "skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");

        playerInfo.money = Math.max(0,playerInfo.money - 10);
        console.log("playerMoney", playerInfo.money);
        break;
      }
    }
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerInfo.health = Math.max(0, playerInfo.health- damage);
    
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
      window.alert(playerInfo.name + " still has " + playerInfo.Health + " health left.");
    }
};

var startGame = function () {
  playerInfo.reset();

  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
   

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
    'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE."
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
}
};
