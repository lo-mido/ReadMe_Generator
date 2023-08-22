const fs = require('fs');
const inquirer = require('inquirer')
const generatedMarkdown = require("./generateMarkdown")

const questions = [
    {
        type: "input",
        message: "What is your projects title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is your projects description?",
        name: "description"
    },
    {
        type: "input",
        message: " What did you Install for this Project?",
        name: "installation"
    },
    {
        type: "input",
        message: " How can we use this project?",
        name: "usage"
    },
    {
        type: "input",
        message: " How can we use this project?",
        name: "contribution"
    },
    {
        type: "input",
        message: " ?",
        name: "test"
    },
    {
        type: "input",
        message: " How can we use this project?",
        name: "questions"
    },
    {
        type: "list",
        message: "Which license is needed for this project?",
        name: "license",
        choices: ["None", "MIT", "GPL", "Boost Software","Apache Software"]
    }
];

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        console.log(data),
        err ? console.error(err) : console.log("README.md Generated!")
    })
}

const init = () => {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", generatedMarkdown(data))
    })
}

init()
