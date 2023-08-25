// Inquirer node package manager import and to link the generate markdown file. 
const fs = require('fs');
const inquirer = require('inquirer')
const generatedMarkdown = require("./generateMarkdown")

const questions = [
    {
        type: "input",
        message: "What is your projects title?",
        name: "title",
      },
      {
        type: "input",
        message: "What is your projects description?",
        name: "description",
      },
      {
        type: "input",
        message: " What did you Install for this Project?",
        name: "installation",
      },
      {
        type: "input",
        message: " How can we use this project?",
        name: "usage",
      },
      {
        type: "input",
        message: " How to contribute to this project?",
        name: "contribution",
      },
      {
        type: "input",
        message: " How to test this application?",
        name: "test",
      },
      {
        type: "input",
        message: " Enter GitHub Username?",
        name: "github",
      },
      {
        type: "input",
        message: " Enter GitHub profile url?",
        name: "profile",
      },
      {
        type: "input",
        message: " Enter email address?",
        name: "email",
      },
    
      {
        type: "list",
        message: "Which license is needed for this project?",
        name: "license",
        choices: ["None", "MIT", "GPL", "Boost Software", "Apache Software"],
      },
    ];

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        console.log(data),
        err ? console.error(err) : console.log("README.md Generated!")
    })
}

const init = () => {
    inquirer.prompt(questions).then((data) => {
        writeToFile("./output/README.md", generatedMarkdown(data))
    })
}

init()
