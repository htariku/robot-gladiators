var playerInfo = {
  name: window.prompt("What is your robot's name?"),
health = 100,
attack = 10,
money = 10,
reset: function() {
  this.health = 100; 
  this.money = 10;
  this.attack = 10;
},
refilllHealth: function() {
  if (this.money >= 7) {
    window.alert("Refilling player's health by 20 for 7 dollars.");
  this. health += 20;
  this .money -= 7;
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
  window.alert("You don;t have enough money!");
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
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemy) {
  console.log(enemy);
};
  while (playerInfo.health > 0 && enemyHealth > 0) {
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
};
  playerInfo.health= 100;
  playerInfo.attack = 10;
  playerInfo.money = 10;

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

var shop = function () {
  var shopOptionPrompt = window.prompt(
    'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
  );
  
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      playerInfo.refilllHealth();
      break;
    case "UPGRADE":
    case "upgrade":
      playerInfo.upgradeAttack();
      break;
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");

      shop();
      break;
  }
