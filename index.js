// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
// Look into how to populate badges here
const questions = [
    {
        type: "input",
        name: "Project Title",
        message: "Enter a title for your Project",
    },
    {
        type: "input",
        name: "Project Description",
        message: "Enter a Description for your Project.",
    },
    {
        type: "input",
        name: "Installation Requirements and Usage Informaiton",
        message: "Enter any installation requirements or usage information for your project.",
    },
    {
        type: "input",
        name: "Test Instructions",
        message: "Enter instruction on how to test your Project.",
    },
    { 
        type: "input",
        name: "Licenses used for Project",
        message: "Enter any Licenses used in project",
    },
    {
        type: "input",
        name: "Badges",
        message: "Enter any languages used in this project",
    },
    {
        type: "input",
        name: "Github Username",
        message: "Enter your Github Username",
    },
    {
        type: "input",
        name: "Email Address",
        message: "Enter your Email Address",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then((answers) => {
        writeToFile("Generated_ReadMe.md", generateMarkdown({
            ...answers,
        }));
    });
}

// Function call to initialize app
init();
