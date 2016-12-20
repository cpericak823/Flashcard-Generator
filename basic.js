var fs = require("fs");
var inquirer = require("inquirer");


inquirer.prompt([{
        type: "input",
        message: "Joyeux Noel",
        choices: ["Merry Christmas", "Happy Halloween", "Happy Easter"],
        name: "Merry Christmas"
    },

    // Here we ask the user to confirm.
    {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true

    }, {
        type: "list",
        message: "Ouvrir des cadeaux",
        choices: ["Open the door", "Open the presents", "Wrap the presents"],
        name: "Open the presents"
    }, {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true

    }, {
        type: "list",
        message: "Decorer le sapin de Noel",
        choices: ["Buy the tree", "Decorate the house", "Decorate the christmas tree"],
        name: "Decorate the tree"
    }, {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true

    }, {
        type: "list",
        message: "Les chants de Noel",
        choices: ["Chistmas Cookies", "Christmas Carols", "Christmas Shoes"],
        name: "Christmas Carols"
    }, {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true

    }, {
        type: "list",
        message: "Une buche de Noel",
        choices: ["Yule Log", "Christmas Season", "Christmas sweater"],
        name: "Yule Log"
    }, {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true

    }
]).then(function(user) {
    console.log(JSON.stringify(user, null, 2));

    // If the user confirms, we displays the user's name and pokemon from the answers. 
    if (user.confirm) {} else {}

});
