const inquirer = require('inquirer');
const fs = require('fs');
const genHTML = require("./src/generateHTML.js");

var team = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'managername',
        message: "This command line app will generate a roster page for your team. First, what is the team manager's name?"
    },
    {
        type: 'input',
        name: 'managerid',
        message: "What is the team manager's employee ID?"
    },
    {
        type: 'input',
        name: 'manageremail',
        message: "What is the team manager's email?",
        validate: function(manageremail)
        {
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(manageremail);
        }
    },
    {
        type: 'input',
        name: 'manageroffice',
        message: "What is the team manager's office number?"
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineername',
        message: "What is the engineer's name?"
    },
    {
        type: 'input',
        name: 'engineerid',
        message: "What is the engineer's employee ID?"
    },
    {
        type: 'input',
        name: 'engineeremail',
        message: "What is the engineer's email?",
        validate: function(engineeremail)
        {
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(engineeremail);
        }
    },
    {
        type: 'input',
        name: 'engineergithub',
        message: "What is the engineer's Github?"
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'internname',
        message: "What is the intern's name?"
    },
    {
        type: 'input',
        name: 'internid',
        message: "What is the intern's employee ID?"
    },
    {
        type: 'input',
        name: 'internemail',
        message: "What is the intern's email?",
        validate: function(internemail)
        {
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(internemail);
        }
    },
    {
        type: 'input',
        name: 'internschool',
        message: "What is the intern's school?"
    }
];

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'addmember',
                message: 'Which type of team member would you like to add?',
                choices: ['Engineer', 'Intern', "I am done adding team members"]
            }
        ])
        .then((answers) => {
            if (answers.addmember === "Engineer") {
                addEngineer();
            } else if (answers.addmember === "Intern") {
                addIntern();
            } else {
                console.log(team)
                return;
            }
        })
        .catch((err) => console.log(err))
}

function addEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((answers) => {
            team.push(answers);
            addEmployee();
        })
        .catch((err) => console.log(err))
}

function addIntern() {
    inquirer
        .prompt(internQuestions)
        .then((answers) => {
            team.push(answers);
            addEmployee();
        })
        .catch((err) => console.log(err))
}

// Function to write HTML
function writeToFile(fileName, data) {
    let teamInfo = genHTML(data);
    fs.writeFile(fileName, teamInfo, (err) => {
        err ? console.log(err) : console.log("COOKING up your roster HTML");
    })
}

// Function to initialize app
function init() {
    inquirer
        .prompt(managerQuestions)
        .then((answer) => {
            team.push(answer);
            addEmployee();
            // writeToFile("roster.html", team);
        })
        .catch((err) => console.log(err))
}

// Function call to initialize app
init();