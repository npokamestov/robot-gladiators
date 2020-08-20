//console.log("This logs a string, good for leaving yourself a message");

// this will do math and log 20
//console.log(10+10);
//what is this?
//console.log("Our robot's name is " + playerName);


var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min +1) + min);
    return value;
};

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

// Game States
// "WIN" - Player robot has defeated all enemy robots
//  * Fight all enemy robots
//"LOSE" - Player robot's health is zero or less


var fightOrSkip = function() {
    //ask user if theyd like to fight od skip using function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    //Enter the conditional recursive function call here!
    if (!promptFight) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }
    promptFight = promptFight.toLowerCase();
    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip") {
        //confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            // return true if user wants to leave
            return true;
        }
            shop();
        }
    } 

//create function
var fight = function(enemy) {

    //keep track of who goes first
    var isPlayerTurn = true;
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }
    //console.log(enemy)
    //repeat and execute as long as the enemy robot is alive
    while(enemy.health > 0 && playerInfo.health > 0){
        if (isPlayerTurn) {
            //ask user if they'd like to fight or skip using fightOrSkip function
        if (fightOrSkip()) {
            //if true, leave fight by breaking loop
            break;
        }
        /*var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
         //if player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
         //confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip the fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
            break;
        }
        //else {fight();}
    }*/
    //if player choses to fight then fight
    /*if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {} */
        //remove enemy's health by subtracting the amount set in the playerAttack variable
        //Subtract the value of 'playerAttack' from the value of the 'enemyHealth' and use that result to update the value in the 'enemyHealth variable.
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);
    //Log a resulting message to the console so we know that it worked
    console.log(
        playerInfo.name + " attacked " + enemy.name + " . " + enemy.name + " now has " + enemy.health + " health remaining."
    );

    //check enemy's health
    if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");

        //award player money for winning
        playerInfo.money = playerInfo.money + 20;

        //leave while() loop since enemy is dead
        break;
    } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }
    //player gets attacked first
} else {
    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    var damage = randomNumber(enemy.attack -3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    //Log a resulting message to the console so we know that it worked
    console.log(
        enemy.name + " attacked " + playerInfo.name + " . " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );

    //check players's health
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        // leave while() loop if player is dead
        break; 
    }
    else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
    //switch turn order for next round
    isPlayerTurn = !isPlayerTurn;
    }
};
    /*if player choses to skip
   else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
    //confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip the fight. Goodbye!");
        //subtract money from playerInfo.money for skipping
        playerInfo.money = playerInfo.money - 10;
        console.log("playerInfo.money", playerInfo.money);
        break;
    }*/
    //if no (false), ask question again by running fight() again

    /*
    else {
    window.alert("You need to pick a valid option. Try again");
};
*/


//execute function
//fight();

//function to start a new game
var startGame = function() {
    //reset player stats
    playerInfo.reset();
    //fight each enemy robot by looping over them and fighting them one at a time
    for (var i = 0; i < enemyInfo.length; i++) {
        //if player is still alive keep fighting
        if (playerInfo.health > 0) {
            //let user know what round they are in, remeber that arrays start at 0
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ));
            //pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyObj = enemyInfo[i];
            //reset enemyHealth before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);

            //if we're not at the last enemy in the array
            //if (i < enemyNames.length - 1) {}
            //if player is still alive and we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                //ask if user wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round")
                //if yes, take them to the stor() function
                if (storeConfirm) {
                shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    //after the loop ends, player is either out of health or enimies to fight, so run the endGame function
    endGame();
};

//function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    //check localStorage for high score, it it's not there, use 0
    var highScore = localStorage.getItem("highscore");
    /*if (highScore === null) {
        highScore = 0;
    }*/
    highScore = highScore || 0;
    //if player has more money then the high score, player has new high score!
    if (playerInfo.money > highScore) {
        localStorage.setItem("highscore", playerInfo.money);
        localStorage.setItem("name", playerInfo.name);

        alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
    }
    else {
        alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
    }
    /*
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }*/
    //ask the player if they'd like ot play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        //restart game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function() {
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter: 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
    );
    shopOptionPrompt = parseInt(shopOptionPrompt);
    //use switch to carry out action
    switch (shopOptionPrompt) {
        //case "REFILL": // new case
        //case "Refill": // new case
        //case "refill":
        case 1:
            playerInfo.refillHealth();
            break;
        //case "UPGRADE": // new case
        //case "Upgrade": // new case
        //case "upgrade":
        case 2:
            playerInfo.upgradeAttack();
            break;
        //case "LEAVE": // new case
        //case "Leave": // new case
        //case "leave":
        case 3:
            window.alert("Leaving the store.");
            //do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            //call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

/*var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;*/
var getPlayerName = function() {
    var name = "";
// ***************************************
// ADD LOOP HERE WITH PROMPT AND CONDITION
// ***************************************
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
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
    refillHealth: function() {
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
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};

// You can also log multiple value at once like this: console.log(playerName, playerAttack, playerHealth);

/*var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;*/

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

// start the game when the page loads
startGame();

//prints 3.141592653589793
//console.log(Math.PI);

//rounds to the nearest whole number (4)
//console.log(Math.round(4.4));

//prints the sqaure root of (5)
//console.log(Math.sqrt(25));

