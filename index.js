const inquirer = require('inquirer');
const fs = require('fs');

// generateReadMe function with Readme.md template 
const generateReadMe = (answers) =>
`# ${answers.title}
## Description
${answers.why}
${answers.problem}
## Badges
HOW TO MAKE BADGES HERE??
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
${answers.license}
## Contributing
${answers.contribute}
## Tests
${answers.test}
## Questions
Connect with me on [Github](https://github.com/${answers.github})
or send me an email: ${answers.email}
Looking forward to hearing from you!`

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
            choices: ['GNU', 'GPLv3', 'MIT', 'Unlicense'],
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
    .then((answers) => {
        const readMePage = generateReadMe(answers);

        fs.writeFile('readme.md', readMePage, (err) =>
        err ? console.log(err) : console.log('README file created!') 
        );
    });