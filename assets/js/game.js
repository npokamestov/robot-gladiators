//var playerName = window.prompt("What is your robot's name?");
//console.log(playerName);

//console.log("This logs a string, good for leaving yourself a message");

// this will do math and log 20
//console.log(10+10);
//what is this?
//console.log("Our robot's name is " + playerName);

// this creates a function named "fight"

//function fight() {
    //window.alert("The!");}

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple value at once like this: console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

/*console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);
console.log(enemyNames[enemyNames.length -1]);
for(var i = 0; i < 3; i++) {
    console.log("apple ", + i);} 
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
} */



var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
};


// Game States
// "WIN" - Player robot has defeated all enemy robots
//  * Fight all enemy robots

//create function
var fight = function(enemyNames) {
    //repeat and execute as long as the enemy robot is alive
    while(enemyHealth > 0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);

    //if player choses to fight then fight
    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
        //remove enemy's health by subtracting the amount set in the playerAttack variable
    //Subtract the value of 'playerAttack' from the value of the 'enemyHealth' and use that result to update the value in the 'enemyHealth variable.
    enemyHealth = enemyHealth - playerAttack;
    //Log a resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyNames + " . " + enemyNames + " now has " + enemyHealth + " health remaining."
    );

    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyNames + " has died!");
    }
    else {
        window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }
    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
    //Log a resulting message to the console so we know that it worked
    console.log(
        enemyNames + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining."
    );

    //check players's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    //if player choses to skip
   else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
    //confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip the fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    //if no (false), ask question again by running fight() again
    else {
        fight();
    }
} 
else {
    window.alert("You need to pick a valid option. Try again");
}
    }
    /*Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");*/

};

//execute function
//fight();
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}