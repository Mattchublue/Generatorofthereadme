// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==="MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license==="Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
   else if (license==="ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
   }
else if (license==="GNU") {
  return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`

}
else {""}
  }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
1. [Description](#description)
2. [Usage](#usage)
3. [License](#license)  
4. [Contributing](#contributing)
5. [Tests](#tests) 
6. [Questions](#email) 

## Description 
${data.description}

## Usage
${data.usage}

## Installation
${data.installation}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any application questions please contact me at ${data.email} or
www.github.com/${data.github}
`;
}

module.exports = generateMarkdown;
