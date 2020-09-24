// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
![](https://img.shields.io/static/v1?label=${data.license}&message=${data.username}&color=blue)

## Description
${data.description}

# Table of Contents
 [Description](#Description)
 [Installation](#Installation)
 [Usage](#Usage)
 [Contributions](#Contribute)
 [Tests](#Tests)
 [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed by, ${data.license} for more information regarding licensing feel free to visit


## Contribute
Please reach out to ${data.username} at 

## Tests
${data.tests}

## Questions 
For Questions please contact, ${data.questions}
  
`;
}

module.exports = generateMarkdown;
