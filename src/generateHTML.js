// Import classes
const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

// Generates template literal for manager card
var generateManager = (memberInfo) => {
    return `<div class="col-lg-4 col-md-6 col-12 pb-5">
    <div class="card">
      <div class="card-body manager">
        <h5 class="card-title">${memberInfo.name}</h5>
        <p class="card-text">Manager</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${memberInfo.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${memberInfo.email}" target="_blank" class="card-link">${memberInfo.email}</a></li>
        <li class="list-group-item">Office: ${memberInfo.office}</li>
      </ul>
    </div>
  </div>
  
  `
}

// Generates template literal for engineer cards
var generateEngineer = (memberInfo) => {
    return `<div class="col-lg-4 col-md-6 col-12 pb-5">
    <div class="card">
      <div class="card-body engineer">
        <h5 class="card-title">${memberInfo.name}</h5>
        <p class="card-text">Engineer</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${memberInfo.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${memberInfo.email}" target="_blank" class="card-link">${memberInfo.email}</a></li>
        <li class="list-group-item">Github: <a href="https://github.com/${memberInfo.github}" target="_blank" class="card-link">${memberInfo.github}</a></li>
      </ul>
    </div>
  </div>
  
  `
}

// Generates template literal for intern cards
var generateIntern = (memberInfo) => {
    return `<div class="col-lg-4 col-md-6 col-12 pb-5">
    <div class="card">
      <div class="card-body intern">
        <h5 class="card-title">${memberInfo.name}</h5>
        <p class="card-text">Intern</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${memberInfo.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${memberInfo.email}" target="_blank" class="card-link">${memberInfo.email}</a></li>
        <li class="list-group-item">School: ${memberInfo.school}</li>
      </ul>
    </div>
  </div>
  
  `
}

// Generates a template literal representing an HTML file that displays cards for each team member
function generateHTML(data) {

    // This string will be appended to with more HTML and some closing tags
    var fileString = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="./style.css">
      <title>Team Roster</title>
    </head>
    
    <body>
      <header class="d-flex justify-content-center py-3">
        <h1>The Dream Team</h1>
      </header>
    
      <div class="container mt-3">
        <div class="row align-items-center" id="members">
    
          `;

    // Takes each object in the input and generates a specific card based on the class
    // Then it appends to fileString
    data.forEach(member => {
        if (member instanceof Manager) {
            var manager = generateManager(member);
            fileString += manager;
        } else if (member instanceof Engineer) {
            var engineer = generateEngineer(member);
            fileString += engineer;
        } else {
            var intern = generateIntern(member);
            fileString += intern;
        }
    });

    // Append the final closing tags
    fileString += `</div>
    </div>
  </body>
  
  </html>`;

    // Return the HTML
    return fileString;
}

module.exports = generateHTML;