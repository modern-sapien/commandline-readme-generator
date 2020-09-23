const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')




// array of questions for user
const questions = [
];

inquirer.prompt([
    {type: "input",
     name: "title",
     message: "What is the title of your project?"},
    {type: "input",
     name: "description",
     message: "Please provide a description of your project"},
    {type: "input",
     name: "username",
     message: "Please provide your github username"},
    {type: "input",
     name: "installation",
     message: "Please provide installation instructions in order separated by commas"},
    {type: "input",
     name: "usage",
     message: "Please provide usage criteria for your project"},
    {type: "list",
     name: "license",
     message: "Please provide the license, if any your project is using",
     choices: ["mit", "no license", "other license information"]   },
    {type: "input",
     name: "contributing",
     message: "Please provide how others may go about contributing to this project:"},
    {type: "input",
     name: "tests",
     message: "Please provide how may test this project:"},
    {type: "input",
     name: "questions",
     message: "Please provide your email address asssociated with this project:"}, 
]).then(answers => {
    console.log(answers);
    var radReadMe = generateMarkdown(answers); 
    fs.writeFile("generator.md", radReadMe, err => {
        if (err) throw err;
        console.log("peep that RAD README!");
    });
})

// function to write README file
// function writeToFile(fileName, data) {
    
// }

// function to initialize program
function init() {

}

// function call to initialize program
init();
