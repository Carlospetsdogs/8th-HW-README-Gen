// Required packages list
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// Array of questions for users to generate README
const questions = [
{
    type:'input',
    name:'github',
    message:'Input your GitHub username'
},
{
    type: 'input',
    name: 'email',
    message: 'Input your preffered email address'
},
{
    type:'input',
    name:'title',
    message:'Input is your projects title',
},
{
    type:'input',
    name:'description',
    message:'Briefly describe your project',
},
{
    type:'list',
    name:'license',
    messaage:'Choose what license your project will have:',
    choices:['MIT','GNU GPLv3','Apache 2.0','BDS 2','BDS 3','Mozilla','Creative','None'],
},
{
    type:'input',
    name:'installation',
    message:'What command is needed to install dependancies?',
    default:'npm i',
},
{
    type:'input',
    name:'test',
    messaage:'Command to run tests',
    default:'nmp test',
},
{
    type:'input',
    name:'usage',
    message:'Relevant info for usage of your repo for the user:'
},
{
    type:'input',
    name:'contributing',
    message:'List any contributors to this project:'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    writeToFile('README.md',generateMarkdown({...inquirerResponses}));
   });
}

// Function call to initialize app
init();
