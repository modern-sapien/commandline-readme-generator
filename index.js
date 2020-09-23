const fs = require("fs");
const inquirer = require('inquirer');



// array of questions for user
// const questions = [
// ];

inquirer.prompt([
    {type: "input",
     name: "title",
     message: "What is the title of your project?"},
    {type: "input",
     name: "Description",
     message: "Please provide a description of your project"},
    {type: "input",
     name: "Table of Contents",
     message: "Please provide your table of contents separated by commas"},
    {type: "input",
     name: "Installation Instructions",
     message: "Please provide installation instructions in order separated by commas"},
    {type: "input",
     name: "Usage",
     message: "Please provide usage criteria for your project"},
    {type: "list",
     name: "License",
     message: "Please provide the license, if any your project is using",
     choices: ["mit", "no license", "other license information"]   },
    {type: "input",
     name: "Contributing",
     message: "Please provide how others may go about contributing to this project:"},
    {type: "input",
     name: "Tests",
     message: "Please provide how may test this project:"},
    {type: "input",
     name: "Questions",
     message: "Please provide your email address asssociated with this project:"}, 
]).then(answers => {
    console.log(answers)
})

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
