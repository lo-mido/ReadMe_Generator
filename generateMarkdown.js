// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === "None") {
    return "";
  }
  if (data.license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (data.license === "GPL") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (data.license === "Apache Software") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (data.license === "Boost Software") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  }
}
// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return  `
  # ${data.title} 
    
  ${renderLicenseBadge(data)}

  ## Table of Contents
    
  -[Description](#description)  
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contribution](#contribution)
  -[Test](#test)
  -[GitHub](#gitHub)
  -[Profile](#profile)
  -[Questions](#questions)
  -[Email](#email)

  ## Description
  ${data.description}
  ## Installation 
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Test
  ${data.test}
  ## GitHub
  ${data.github}
  ## Profile
  ${data.profile}
  ## Email git
  ${data.email}
  
  `
};

module.exports = generateMarkdown;
