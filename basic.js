var fs = require("fs");
var inquirer = require("inquirer");


//create a constructor function with the arguments front and back
var BasicFlashcards = function(front, back) {
    this.front = front;
    this.back = back;

    {
        //use the keyword new to create a new basic flashcard
        var newBasicFlashcard = new BasicFlashcards(front, back);

        //set the front and back text equal to a variable
        var logTxt = "\nFront: " + newBasicFlashcard.front +
            " Back: " + newBasicFlashcard.back;

        //use fs to append the log file
        fs.appendFile("log.txt", logTxt);

        /*newBasicFlashcard. call basic flashcard function();*/
    }
};

inquirer.prompt([{
    type: "input",
    message: "What do you want to show on the front of the flashcard?",
    name: "front"
}, {
    type: "input",
    message: "What do you want to show on the front of the flashcard?",
    name: "back"
}, {
    type: "confirm",
    message: "Do you want to create this flashcard?",
    name: "confirm",
    default: true

}]).then(function(user) {
    console.log(JSON.stringify(user, null, 2));

    // If the user confirms, we displays the answers. 
    if (user.confirm) {
        console.log("Front: " + user.front + "\nBack: " + user.back);
    } else {
        console.log("That's ok, you can create a different flashcard.");
    }

});

//export this function to be used in other files
module.exports = BasicFlashcards;


//create an array that lists the front/back properties for each of the cards
//take in arguments from the user to set the front and back text of the cards
//write a function that pushes the new information up to the empty array
//use fs.appendFile("log.txt", logTxt); to push any flashcards to a text file to be saved
