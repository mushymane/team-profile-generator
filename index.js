const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require("./utils/generateMarkdown.js");

const managerQuestions = [
    {
        type: 'input',
        name: 'managername',
        message: 'This command line app will generate a roster page for your team. First, enter your name:'
    },
    {
        type: 'input',
        name: 'managerid',
        message: 'Enter your employee ID:'
    },
    {
        type: 'input',
        name: 'manageremail',
        message: 'Enter your email:'
    },
    {
        type: 'input',
        name: 'manageroffice',
        message: 'Enter your office number:'
    }
];

// Function to write HTML
function writeToFile(fileName, data) {
    let genMarkdown = markdown(data);
    fs.writeFile(fileName, genMarkdown, (err) => {
        err ? console.log(err) : console.log("COOKING up your roster HTML");
    })
}

// Function to initialize app
function init() {
    inquirer
        .prompt(managerQuestions)
        .then((data) => {
            writeToFile("roster.HTML", data);
        })
        .catch((err) => console.log(err))
}

// Function call to initialize app
init();