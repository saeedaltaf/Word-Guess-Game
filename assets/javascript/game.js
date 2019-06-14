//Word bank array:
var words = ["Acura", "Audi", "BMW", "Bentley", "Bugatti", "Buick", "Cadillac",
    "Chevrolet", "Chrysler", "Citroen", "Dodge", "Ferrari", "Fiat", "Ford", "GMC", "Honda", "Hyundai",
    "Infiniti", "Jaguar", "Jeep", "Kia", "Koenigsegg", "Lamborghini", "Land Rover", "Lexus", "Lincoln",
    "Mazda", "Mclaren", "Maserati", "Mercedes", "Mini", "Mitsubishi", "Nissan", "Pagani", "Peugeot", "Porsche",
    "Renault", "Rolls Royce", "Skoda", "Tesla", "Smart", "Subaru", "Suzuki", "Toyota", "Volkswagen", "Volvo"];

    //To pick a random word:
var currentWord = words[Math.floor(Math.random() * words.length)];

//To set up the answer array by showing "_" for each index:
var answerArray = [];
for (i = 0; i < words.length; i++){
    answerArray[i] = "_";
}

//Variable to show how many letters are remaining to be guessed:
var remainingLetters = words.length;

////////////////////////////////////
// *****CODE FOR THE MAIN GAME*****
////////////////////////////////////

document.onkeyup = function (event) {
    var userGuess = event.key;
    // console.log("testing onkeyup function");


    
}