// Required packages list
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// Array of questions for users to generate README
const questions = [
{
    type:'input',
    name:'github username',
    message:'Input your GitHub username'
},
{
    
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
