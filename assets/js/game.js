var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames.length)
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(i);
    console.log(enemyNames[i] + " is a " + i + " index");
}
var enemyHealth = 50
var enemyAttck = 12;

var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT") {
console.log(
    playerName + " attacked " + enemyNames + ". " + enemyNames + "now has " + enemyHealth + "health remaining."
);

 if (enemyHealth <= 0) {
    window.alert(enemyNames + " has died!");
  } else {
    window.alert(enemyNames + " still has " + enemyHealth + " health left.");
  }

  playerHealth = playerHealth - enemyAttck;
  console.log(
    enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
 
    } else if (promptFight === "skip" || promptFight === "SKIP") {
     var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  

    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      playerMoney = playerMoney - 2;
    }
    else {
      fight();
    }
  }

  console.log(
    playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining. "
);

if (enemyHealth <= 0) {
    window.alert(enemyNames + " has died!");
}
else {
    window.alert(enemyNames + " still has " + enemyHealth + " health left.");
}
  console.log(
      enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. " );

if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
    }
else {
 window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}

