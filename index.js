var inquirer = require("inquirer");

var Word = require("./Word");
var Letter = require("./Letter")

var instruments = ["Guitar", "Bass", "Trombone", "Duduk", "Piano", "Clarinet"];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessesLeft = 8;
var userInput = process.argv[2];
var lettersUsed = [];
var wins = 0;
var losses = 0;
var currentDisplay = "";
var previousDisplay = "";
var end = false;
var lettersObjects = [];

console.log("Welcome to the Word Guess Game");

run();

function run(){

    var instrumentDisplay = instruments[Math.floor(Math.random()*instruments.length)];
    // var instrument = instrument.toLowerCase();

    instrumentToGuess = new Word;


    for (var i=0; i < instruments.length; i++){
        instrumentToGuess.lettersObjects[i].push(new Letter(instrument[i]));

        if(instrument[i] === ""){
            instrumentToGuess.lettersObjects[i].guessed = true
        }
    }

    guessesLeft = 8;
    lettersUsed = [];
    end = false;

     


}

function askLetter(){

    inquirer.prompt([
        {
            type: "input",
            message: "letter",
            name: "item"
        }
    ]).then(function(response){

        if (response.item.length !==1){
            console.log("Click one letter");
            askLetter();
            return;
        } else if (lettersUsed.indexOf(response.item) !== -1){
            console.log("That letter has already been selected. Try another")
            askLetter();
            return;
        } else if (alphabet.indexOf(response.item) === -1){
            console.log ("Not a valid character.")
            askLetter();
            return;
        } else {
            lettersUsed.push(response.item)
        }
    })

    previousDisplay = display;
    instrumentToGuess.verify(response.item);
    display = instrumentToGuess.print();

    if (display === previousDisplay){
        attempts--;
        console.log(`Try again. You have ${attempts} remaining`)
    } else {
        if (display === instrument){
            end = true;
        }
    }
    console.log(display.split("").join(" "));

    if (attempts > 0 && end === false){
        askeLetter();
    } else if (end){
        console.log("You win!")
        wins++;
        question();
    } else {
        console.log("You lost")
        console.log(`The instrument was ${instrument}`)
        losses++;
        question();
    }
}

function question(){
    console.log(`Current wins: ${wins}\nCurrent losses: ${losses}`)

    inquirer.prompt([
        {
            type: "confirm",
            message: "Play again?",
            name: "confirm",
            default: true
        }
    ]).then(function(response){
        if(response===true){
            run();
        } else {
            console.log("Thanks for playing")
        }
    })
}
