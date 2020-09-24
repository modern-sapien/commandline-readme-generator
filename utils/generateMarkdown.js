// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Description
${data.description}

# Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#Usage)
* [Contributions](#contributions)
* [Tests](#testing)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## How to Contribute
Please reach out to ${data.username} at 

## How to Test
${data.tests}

## Question? 
For Questions please contact, ${data.questions}
  
`;
}

module.exports = generateMarkdown;
