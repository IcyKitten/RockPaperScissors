//Rock, Paper, Scissors
//Created by Zeph Mussman

//Variables
var playerAnswer = false;
var compare;
var choice1;
var choice2;
var rock;
var paper;
var scissors;

//Loops until player answers 'rock', 'paper', or 'scissors'
do
{
    //Asks for player's choice
    var choice1 = prompt("Do you choose Rock, Paper, or Scissors?");
    
    //Finds player's choice
    if(choice1 === "rock")
    {
        playerAnswer = true;
    }
    if(choice1 === "paper")
    {
        playerAnswer = true;
    }
    if(choice1 === "scissors")
    {
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
else if(choice2 < 0.64)
{
    choice2 = "paper";
}
if(choice2 > 0.63)
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
            alert("Paper wins!");
        }
    }
    if(choice1 === "rock")
    {
        if(choice2 === "scissors")
        {
            alert("Rock wins!");
        }
    }
    //Paper Situations
    if(choice1 === "paper")
    {
        if(choice2 === "rock")
        {
            alert("Paper wins!");
        }
    }
    if(choice1 === "paper")
    {
        if(choice2 === "scissors")
        {
            alert("Scissors wins!");
        }
    }
    
    //Scissors Situations
    if(choice1 === "scissors")
    {
        if(choice2 === "rock")
        {
            alert("Rock wins!");
        }
    }
    if(choice2 === "scissors")
    {
        if(choice2 === "paper")
        {
            alert("Scissors wins!");
        }
    }
};

//Actually finds winner
compare();