const inquirer = require('inquirer');
const fs = require('fs');

// generateReadMe with function using inputs from user and Readme.md template 
const generateReadMe = (answers) =>
`# ${answers.title}
## Description
${answers.why}
${answers.problem}
## Badges
[![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)](https://opensource.org/licenses/${answers.license})
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${answers.install}
## Usage
${answers.usage}
## License
This project is licensed under the terms of the ${answers.license} license.
## Contributing
${answers.contribute}
## Tests
${answers.test}
## Questions
Questions about the project? Connect with me!
- Find me on: [Github](https://github.com/${answers.github})
- Send me an e-mail: ${answers.email}

Looking forward to hearing from you!`

// using Inquirer to gather user input for README
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your application?',
        },
        {
            type: 'input',
            name: 'why',
            message: 'What was your motivation to create your application?',
        },
        {
            type: 'input',
            name: 'problem',
            message: 'What problem does your application solve?',
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your application? Provide step-by-step instructions.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How does a user interact with your application? Provide examples or instructions.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a License for your application:',
            choices: ['BSD', 'MIT', 'GPL'],
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Include guidelines others are expected to follow if contributing to your work:',
        },  
        {
            type: 'input',
            name: 'test',
            message: 'Write tests for your application and provide examples of how to run them. ',
        }, 
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github username.',
        }, 
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
        }, 
    ])

    // take the answers, put them into the README template, and write the file
    .then((answers) => {
        const readMePage = generateReadMe(answers);

        fs.writeFile('readme.md', readMePage, (err) =>
        err ? console.log(err) : console.log('README file created!') 
        );
    });
