// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
## Description
${data.description}

## Table of Contents
${data.table}

## Installation Steps
${data.installation}

## Notes on Usage
${data.usage}

## Licensing Information
${data.license}

## How to Contribute
${data.contributing}

## How to Test
${data.tests}

## Question? 
${data.questions}
  
`;
}

module.exports = generateMarkdown;
