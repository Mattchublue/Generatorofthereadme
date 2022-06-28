// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: "input",
        name: "title",
        message:"What is the name of your application?"
    },
    {
        type: "input",
        name: "description",
        message:"How would you describe your application?"
    },

    {
        type: "input",
        name: "usage",
        message:"How will you utilize your application?"
    },
    {
        type: "input",
        name: "installation",
        message:"Please provide installation instructions for your application?"
    },
    {
        type: "list",
        name: "license",
        message:"What is your application licensed under?",
        choices: ["MIT", "Apache", "ISC", "GNU", "None"]
    },
    {
        type: "input",
        name: "contributing",
        message:"Please list contributers for your application?"
    },
    {
        type: "input",
        name: "tests",
        message:"Please list any test information for your application?"
    },
    {
        type: "input",
        name: "github",
        message:"Please enter your github user name?"
    },
    {
        type: "input",
        name: "email",
        message:"Please enter your email address?"
    },
    
    ];


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data =>{
        fs.writeFileSync("README.md", generateReadme(data))
    }
    )
}

// Function call to initialize app
init();
