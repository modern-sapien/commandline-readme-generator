// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
![](https://img.shields.io/static/v1?label=${data.license}&message=${data.username}&color=blue)

## Description
${data.description}

# Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributions](#Contribute)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed by, ${data.license} for more information regarding licensing feel free to visit
[choose a license](https://choosealicense.com/)

## Contribute
Please reach out to ${data.username} at ${data.questions}.

## Tests
${data.tests}

## Questions 
For Questions please contact, ${data.fullname} at ${data.questions}.
  
`;
}

module.exports = generateMarkdown;
