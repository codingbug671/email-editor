# Email Editor Automation Tests

This project contains automated tests for the Unlayer web-based email editor using [Cypress](https://www.cypress.io/). The tests validate various functionalities of the email editor, such as changing text properties and exporting HTML code.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)

## Features

- Automated testing of email content customization.
- Validation of font properties (family and weight) in the generated HTML.

## Technologies Used

- [Cypress](https://www.cypress.io/) - A JavaScript/Typescript end-to-end testing framework.
- Typescript
- HTML/CSS for testing web content.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/codingbug671/email-editor.git
   cd email-editor

2. **Install dependencies:**

    Make sure you have Node.js installed, then run:
    ```bash
    npm install

3. **Usage:**

    To open the Cypress Test Runner, use the following command:
    ```bash
    npx cypress open

4. **Running Tests:**

     To run tests, use:
    ```bash
   npx cypress run

## Folder Structure:

email-editor/
├── cypress/
│   ├── fixtures/              # Sample test data
│   ├── downloads/             # any downloads
│   ├── e2e/                   # cypress tests
│   └── support/               # Custom commands and configurations
├── package.json               # Project metadata and dependencies
├── cypress.config.json        # Cypress configuration
└── README.md                  # Project documentation





   
