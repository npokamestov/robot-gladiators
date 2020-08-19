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
var playerHealth = 150;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple value at once like this: console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
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


/*
var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
};
*/

// Game States
// "WIN" - Player robot has defeated all enemy robots
//  * Fight all enemy robots
//"LOSE" - Player robot's health is zero or less

//create function
var fight = function(enemyName) {
    //repeat and execute as long as the enemy robot is alive
    while(enemyHealth > 0 && playerHealth > 0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
         //if player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
         //confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip the fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
        //else {fight();}
    }
    //if player choses to fight then fight
    /*if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {} */
        //remove enemy's health by subtracting the amount set in the playerAttack variable
        //Subtract the value of 'playerAttack' from the value of the 'enemyHealth' and use that result to update the value in the 'enemyHealth variable.
    enemyHealth = enemyHealth - playerAttack;
    //Log a resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

        //award player money for winning
        playerMoney = playerMoney + 20;

        //leave while() loop since enemy is dead
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
    //Log a resulting message to the console so we know that it worked
    console.log(
        enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining."
    );

    //check players's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        // leave while() loop if player is dead
        break; 
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};
    /*if player choses to skip
   else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
    //confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip the fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
    }*/
    //if no (false), ask question again by running fight() again

    /*
    else {
    window.alert("You need to pick a valid option. Try again");
};
*/

    /*Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");*/


//execute function
//fight();

//function to start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 150;
    playerAttack = 10;
    playerMoney = 10;
    //fight each enemy robot by looping over them and fighting them one at a time
    for (var i = 0; i < enemyNames.length; i++) {
        //if player is still alive keep fighting
        if (playerHealth > 0) {
            //let user know what round they are in, remeber that arrays start at 0
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
            //pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
            //reset enemyHealth before starting new fight
            enemyHealth = 50;
            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    //play again
    //startGame();
    //after the loop ends, player is either out of health or enimies to fight, so run the endGame function
    endGame();
};

//function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    //ask the player if they'd like ot play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        //restart game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

// start the game when the page loads
startGame();