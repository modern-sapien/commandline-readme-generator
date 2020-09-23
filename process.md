## PROCESS

Creating a README.md generator using commandline with node.js

Readme's Answer
    What is it for?
    How to use the app
    How to report issues
    How to make contributions

Criteria

    Dynamically generates from a user's input using the Inquirer package.
    Uses best practices as noted in the Good README guide
    Video or gif walkthrough of functionality using screencastify

1. README generator runs when node index.js is called
2. Provides prompts that will make a README meet criteria for in the Good README guide
3. Generates a README that contains
    * Title of project
    * Description
    * Table of Contents
    * Installation Instructions
    * Usage
    * License
    * Contributing
    * Tests
    * Questions

4.  Project Title, Displays as Title of README ## < 
    Description: This is where the user's description goes
    Table of contents: This is where the user's ToC goes
    Installation Instructions: This is where the user's installation instructions goes
    Usage Information: This is where the user's content goes

    License: when I choose a license from a list of options, a license is added near the top of the README
             a noticed is added to the license section of the readme that explains which license the application is covered under

             badge
    
    Contribution Guidelines: This is where the user's content goes
    Test Instructions: This is where the user's content goes
    
    Questions:  Github username response provides a link to a users Github profile in the questions section
                Email response provides an email address that is added to this section  with instructions on how to follow up
                "for questions contact, 'blah blah'"

5. README uses Table of Content linking to appropriate sections of the page


## Understanding

index.js file will be linked to .fs & .inquirer

I will create a prompt of questions that take user input and modify it, so that it generates a README based on their feedback.




