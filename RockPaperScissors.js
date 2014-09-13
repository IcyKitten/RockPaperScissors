//Rock, Paper, Scissors
//Created by Iceball859, some edits by Red$hadow

//Variables
var askGameReset;
var compare;
var choice1;
var choice2;
var playerAnswer = false;
var gameRate;
var gameRateDone = false;
var gameReset = false;

//Loops if player wants to restart
do
{
    //Loops until player answers 'Rock', 'Paper', or 'Scissors'
    do
    {
        //Asks for player's choice
        var choice1 = prompt("Do you choose Rock, Paper, or Scissors?");
    
        //Finds player's choice
        if( (choice1 === "rock") || (choice1 === "Rock") || (choice1 === "ROCK") || (askGameReset === "r") || (askGameReset === "R"))
        {
            choice1 = "rock";
            playerAnswer = true;
        }
        if( (choice1 === "paper") || (choice1 === "Paper") || (choice1 === "PAPER") || (askGameReset === "p") || (askGameReset === "P"))
        {
            choice1 = "paper";
            playerAnswer = true;
        }
        if( (choice1 === "scissors") || (choice1 === "Scissors") || (choice1 === "SCISSORS") || (askGameReset === "s") || (askGameReset === "S"))
        {
            choice1 = "scissors";
            playerAnswer = true;
        }
    }
    while(playerAnswer !== true)


    //Computer's answer
    var choice2 = Math.random();
    if(choice2 < 0.34)
    {
        choice2 = "rock";
    }
    else if(choice2 < 0.67)
    {
        choice2 = "paper";
    }
    if(choice2 > 0.66)
    {
        choice2 = "scissors";
    }

    //Tells player computer's choice
    if(choice2 === "rock")
    {
        alert("The Computer Chooses Rock!");
    }
    if(choice2 === "paper")
    {
        alert("The Computer Chooses Paper!");
    }
    if(choice2 === "scissors")
    {
        alert("The Computer Chooses Scissors!");
    }


    //Finds winner
    var compare = function()
    {
    
        //Tie Situation
        if(choice1 === choice2)
        {
            alert("It is a tie!");
        }
    
        //Rock Situations
        if(choice1 === "rock")
        {
            if(choice2 === "paper")
            {
                alert("The computer wins!");
            }
        }
        if(choice1 === "rock")
        {
            if(choice2 === "scissors")
            {
                alert("You win!");
            }
        }
        //Paper Situations
        if(choice1 === "paper")
        {
            if(choice2 === "rock")
            {
                alert("You win!");
            }
        }
        if(choice1 === "paper")
        {
            if(choice2 === "scissors")
            {
                alert("The computer wins!");
            }
        }
    
        //Scissors Situations
        if(choice1 === "scissors")
        {
            if(choice2 === "rock")
            {
            alert("The computer wins!");
            }
        }
        if(choice2 === "scissors")
        {
            if(choice2 === "paper")
            {
                alert("You win!");
            }
        }
    };

    //Actually finds winner
    compare();


    //Asks player if they would like to restart
    var askGameReset = prompt("Would you like to play again?");
    if((askGameReset === "yes") ||(askGameReset === "Yes") || (askGameReset === "YES") || (askGameReset === "sure") || (askGameReset === "Sure") || (askGameReset === "SURE") || (askGameReset === "Y") || (askGameReset === "y"))
    {
        gameReset = true;
    }
    else{gameReset = false;}
} while(gameReset !== false);


//Asks the player if they would like to rate the game.
var gameRate = prompt("Thank you for playing! Would you like to rate this game?");
if( (gameRate === "yes") || (gameRate === "Yes") || (gameRate === "YES") )
{
    do
    {
        prompt("Please rate in the tab below on a scale of 1 to 10.");
        if((gameRate === 1) || (gameRate === 2) || (gameRate === 3) || (gameRate === 4) || (gameRate === 5) || (gameRate === 6) || (gameRate === 7) || (gameRate === 9) || (gameRate === 10) )
        {
            {
                alert("Thank you for rating!");
                var gameRateDone = true;
            }
        }
    } while(gameRateDone !== true)
}


//Thanks for playing!
alert("Thank you for playing!");
alert("If you would like to see more projects made by me, go to the link here! https://github.com/Iceball859/RockPaperScissors")
