// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  "\n"
  ## ${data.description}
  "\n"
  ## ${data.table}
  "\n"
  ## ${data.installation}
  "\n"
  ## ${data.usage}
  "\n"
  ## ${data.license}
  "\n"
  ## ${data.contributing}
  "\n"
  ## ${data.tests}
  "\n"
  ## ${data.questions}
  
`;
}

module.exports = generateMarkdown;
