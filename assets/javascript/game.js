//Word bank array:
var word = ["Acura", "Audi", "BMW", "Bentley", "Bugatti", "Buick", "Cadillac",
    "Chevrolet", "Chrysler", "Citroen", "Dodge", "Ferrari", "Fiat", "Ford", "GMC", "Honda", "Hyundai",
    "Infiniti", "Jaguar", "Jeep", "Kia", "Koenigsegg", "Lamborghini", "Land Rover", "Lexus", "Lincoln",
    "Mazda", "Mclaren", "Maserati", "Mercedes", "Mini", "Mitsubishi", "Nissan", "Pagani", "Peugeot", "Porsche",
    "Renault", "Rolls Royce", "Skoda", "Tesla", "Smart", "Subaru", "Suzuki", "Toyota", "Volkswagen", "Volvo"];

//To choose word randomly from word bank array:
var randNum = Math.floor(Math.random() * word.length);
var randomWord = word[randNum];

//Testing:
console.log(randomWord);

var rightLetter = [];
var wrongLetter = [];
var underScore = [];

var wins = 0;
var guessesRemaining = 10;

var gamePlayText = document.getElementById("gameplay-text");
var winsText = document.getElementById("wins-text");
var directionsText = document.getElementById("directions");
var guessesRemainingText = document.getElementById("guessesremaining-text");

//Create underscores based on length of random word which was chosen:
var generateUnderscore = () => {
    for (var i = 0; i < randomWord.length; i++){
        underScore.push("_");
    }
    return underScore;
}

//test to see if the underscore works:
console.log(generateUnderscore());
//push underscores to game area
gamePlayText.textContent = underScore;
guessesRemainingText.textContent = "Guesses Remaining: " + guessesRemaining;

//Get user guess from key:
document.onkeyup = function(event){
    var userGuess = event.key;  
    
    //For the length of the randomWord, we read each letter:
    for(var x=0;x<randomWord.length;x++) {  
        guessesRemaining--;   
        //If the userGuess is in the array randomWord:
        if(userGuess === randomWord[x]) { 
        //Replace underscore with the correct letter guessed in the correct index within the word:
            underScore[x] = userGuess;
            gamePlayText.textContent = underScore.join(" ");
            
        }
    }

    directionsText.textContent = "";
    winsText.textContent = "Wins: " + wins;



}
    // var result = -2;
    // while ((result = randomWord.indexOf(userGuess, result +1)) > -1){
    //     console.log(result);
    //     underScore[randomWord.indexOf(result)] = userGuess;
    //     gamePlayText.textContent = underScore.join(" ");
    // }

    ///Log the keystroke to see if it's working: 
    // console.log(event);
    // console.log(randomWord.indexOf(userGuess));
// If userGuess is correct, 
    // if (randomWord.indexOf(userGuess) > -1) {
    //     //Add to rightWord array:
    //     rightLetter.push(userGuess);
    //     // console.log(rightWord);
    //     //Replace underscore with the correct letter guessed:
    //     underScore[randomWord.indexOf(userGuess)] = userGuess;
    //     gamePlayText.textContent = underScore.join(" ");
    //     //Check to see if the userGuesses match the randomWord:
    //     if (underScore.join(" ") === randomWord) {
    //         guessesRemaining--;
    //     } else {
    //         guessesRemaining--;
    //     }

    //     //else push to wrongWord array:
    // } else wrongLetter.push(userGuess);
    //     // console.log(wrongWord);

 









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
    //     winsText.textContent = "Wins: " + wins;


    //     }
    // }
