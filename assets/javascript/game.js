//Word bank array:
var word = ["Acura", "Audi", "BMW", "Bentley", "Bugatti", "Buick", "Cadillac",
    "Chevrolet", "Chrysler", "Citroen", "Dodge", "Ferrari", "Fiat", "Ford", "GMC", "Honda", "Hyundai",
    "Infiniti", "Jaguar", "Jeep", "Kia", "Koenigsegg", "Lamborghini", "Land Rover", "Lexus", "Lincoln",
    "Mazda", "Mclaren", "Maserati", "Mercedes", "Mini", "Mitsubishi", "Nissan", "Pagani", "Peugeot", "Porsche",
    "Renault", "Rolls Royce", "Skoda", "Tesla", "Smart", "Subaru", "Suzuki", "Toyota", "Volkswagen", "Volvo"];

//To choose word randomly from word bank array:
var randNum = Math.floor(Math.random() * word.length);
var randomWord = word[randNum];

var rightWord = [];
var wrongWord = [];
var underScore = [];





// //To pick a random word:
// var currentWord = word[Math.floor(Math.random() * word.length)];

// //To have an array showing letters which were guessed:
// var lettersGuessed = [];

// //Variable to show how many letters are remaining to be guessed:
// var remainingLetters = word.length;

// //To keep score and guesses:
// var guessedLetters = "";
// var wins = 0;
// var guessesRemaining = 10;

// //Variables to write to html:
// var guessesRemainingText = document.getElementById("guessesremaining-text");
// var lettersGuessedText = document.getElementById("lettersguessed-text");
// var winsText = document.getElementById("wins-text");
// var gamePlayText = document.getElementById("gameplay-text");
// var directionsText = document.getElementById("directions");

// //To set up the answer array by showing "_" for each index:
// var answerArray = [];
// for (i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// };

// ////////////////////////////////////
// // *****CODE FOR THE MAIN GAME*****
// ////////////////////////////////////

// document.onkeyup = function (event) {
//     var userGuess = event.key;
//     // console.log("testing onkeyup function");
//     //Update guess into the game:
//     while (remainingLetters > 0) {
//         gamePlayText.textContent = (answerArray.join(" "));
//         for (var j = 0; j < word.length; j++){
//             if (word[j] === userGuess);
//             guessesRemaining--;
//             } 

//         directionsText.textContent = "";
//         guessesRemainingText.textContent = "Guesses Remaining: " + guessesRemaining;
//         winsText.textContent = "Wins: " + wins;


//         }
//     }







