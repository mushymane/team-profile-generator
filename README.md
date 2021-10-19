# Team Profile Generator

## Description 

This command line app generates an HTML page that displays members of your team. Each member is an 
instance of a Manager class, an Engineer class, or an Intern class. The user will be asked questions about 
their team members and the information get saved into an HTML in the dist folder. The dist folder also 
has an accompanying CSS file for slight styling.

It uses the npm Inquirer package to ask questions and receive input. It also uses the Node File System module 
to write that data to a file. For testing, Jest provides the framework. There is a file called 
generateHTML.js which generates the entire HTML file using the user's input and template literals. The cards are 
color-coded for each type of member. When a user visits the page, they can click on the email to open their 
default email program and populates the TO field. The user may also click on an Engineer's Github profile link.

NOTE: if you get this project from Github, 'roster.html' will be overriden with your new input. It is only present 
here for demonstrative purposes. Also 'index.html' is unused.

Here is a video tutorial: [Tutorial](https://watch.screencastify.com/v/o5QVlEuvb6VC4WYJMaz7)

## Table of Contents

* [Techonologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [Code Snippet](#code-snippet)
* [Questions](#questions)
* [Author Links](#author-links)

## Technologies Used

- JavaScript - programming language used for this app
- Node.js - runtime environment
- Inquirer - CLI for Node.js
- Jest - JS testing framework
- Bootstrap - CSS framework
- Git - version control
- Github - where the repository is hosted
- Visual Studio Code - text editor
- Screencastify - for recording video

## Installation

- Download from Github
- Use your command-line to get to the project directory
- Install the required dependencies with npm install
- Run the app with node index.js

## Usage

Answer each prompt. Press enter to submit your input. Select 'I am done building my team' to exit the application and 
generate your page. The email prompt cannot be in non-email format else the input will not register

## Code Snippet

JavaScript code that prompts the user to add another Employee or quit the application
```
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
                writeToFile("./dist/roster.html", team)
                return;
            }
        })
        .catch((err) => console.log(err))
}
```

## Questions

Have any questions? My Github and email:

[My Github Link](https://github.com/mushymane)  
Email: mushymanee@gmail.com

## Author Links
[LinkedIn](https://www.linkedin.com/in/luigilantin/)