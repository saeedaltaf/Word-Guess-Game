//Word bank array (in lowercase):
var word = ["Acura", "Audi", "BMW", "Bentley", "Bugatti", "Buick", "Cadillac",
    "Chevrolet", "Chrysler", "Citroen", "Dodge", "Ferrari", "Fiat", "Ford", "GMC", "Honda", "Hyundai",
    "Infiniti", "Jaguar", "Jeep", "Kia", "Koenigsegg", "Lamborghini", "Lexus", "Lincoln",
    "Mazda", "Mclaren", "Maserati", "Mercedes", "Mini", "Mitsubishi", "Nissan", "Pagani", "Peugeot", "Porsche",
    "Renault", "Skoda", "Tesla", "Smart", "Subaru", "Suzuki", "Toyota", "Volkswagen", "Volvo"].map(v => v.toLowerCase());

//To choose word randomly from word bank array:
var randNum = Math.floor(Math.random() * word.length);
var randomWord = word[randNum];

//Testing:
console.log(randomWord);

var rightLetter = [];
var wrongLetter = [];
var underScore = [];

var wins = 0;
var guessesRemaining = 13;

var gamePlayText = document.getElementById("gameplay-text");
var winsText = document.getElementById("wins-text");
var directionsText = document.getElementById("directions");
var guessesRemainingText = document.getElementById("guessesremaining-text");
var lettersGuessedText = document.getElementById("lettersguessed-text");

//Create underscores based on length of random word which was chosen:
var generateUnderscore = () => {
    for (var i = 0; i < randomWord.length; i++) {
        underScore.push("x");
    }
    return underScore;
}

//test to see if the underscore works:
console.log(generateUnderscore());
//push underscores to game area
gamePlayText.textContent = underScore;

//Get user guess from key and if it's a capital letter convert to lowercase:
document.onkeyup = function (event) {
    var userGuess = (event.key).toLowerCase();

    //Everytime a user presses a key, reduce guesses remaining by 1:
    guessesRemaining--;
    //If guesses remaining are zero, end game:    
    console.log(underScore);


    // if (guessesRemaining === 0){
    //     alert("GAME OVER!");
    // }
    // if (randomWord === underScore){
    //     wins++;
    // }


    

    //For the length of the randomWord, we read each letter:
    for (var x = 0; x < randomWord.length; x++) {
        //If the userGuess is in the array randomWord:
        if (userGuess === randomWord[x]) {
            //Replace x with the correct letter guessed in the correct index within the word:
            underScore[x] = userGuess;
            gamePlayText.textContent = underScore.join("");
        } else (userGuess != randomWord[x])
            wrongLetter.push(userGuess);
        
    }
            
        
    //If the word is guessed (underscore)(join removes the commas), and matches the generated randomword, win!
    if (underScore.join('') === randomWord) {
        wins++;
        alert("You won!");
        guessesRemaining === 13;
    //If guesses remaining equal 0, game over alert:
    } else if (guessesRemaining === 0) {
        alert("Game over!");

    }

    directionsText.textContent = "";
    winsText.textContent = "Wins: " + wins;
    guessesRemainingText.textContent = "Guesses Remaining: " + guessesRemaining;
    lettersGuessedText.textContent = "Letters Guessed: " + wrongLetter;

}
