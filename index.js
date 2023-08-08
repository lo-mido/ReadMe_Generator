const fs = require('fs');
const inquirer = require('inquirer')
const generatedMarkdown = require("./utils/generateMarkdown")

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
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(data),
        err ? console.error(err) : console.log("README.md Generated!")
    })
}

function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", generatedMarkdown(data))
    })
}

init()
