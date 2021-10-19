const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

var generateManager = (memberInfo) => {
    return `<div class="col-lg-4 col-md-6 col-12 pb-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${memberInfo.name}</h5>
        <p class="card-text">Manager</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${memberInfo.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${memberInfo.email}" target="_blank" class="card-link">${memberInfo.email}</a></li>
        <li class="list-group-item">Office: ${memberInfo.office}</li>
      </ul>
    </div>
  </div>`
}

var generateEngineer = (memberInfo) => {
    return `<div class="col-lg-4 col-md-6 col-12 pb-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${memberInfo.name}</h5>
        <p class="card-text">Engineer</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${memberInfo.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${memberInfo.email}" target="_blank" class="card-link">${memberInfo.email}</a></li>
        <li class="list-group-item">Github: <a href="https://github.com/${memberInfo.github}" class="card-link">${memberInfo.email}</a></li>
      </ul>
    </div>
  </div>`
}

var generateIntern = (memberInfo) => {
    return `<div class="col-lg-4 col-md-6 col-12 pb-5">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${memberInfo.name}</h5>
        <p class="card-text">Intern</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${memberInfo.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${memberInfo.email}" target="_blank" class="card-link">${memberInfo.email}</a></li>
        <li class="list-group-item">School: ${memberInfo.school}</li>
      </ul>
    </div>
  </div>`
}

function generateHTML(data) {
    data.forEach(member => {
        if (member instanceof Manager) {
            generateManager(member);
        } else if (member instanceof Engineer) {
            generateEngineer(member);
        } else {
            generateIntern(member);
        }
    });
    return ``;
}

module.exports = generateHTML;