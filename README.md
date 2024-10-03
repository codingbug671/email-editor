# Email Editor Automation Tests

This project contains automated tests for the Unlayer web-based email editor using [Cypress](https://www.cypress.io/). The tests validate various functionalities of the email editor, such as changing text properties and exporting HTML code.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Test approach](#test-approach)


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

## Usage

   To open the Cypress Test Runner, use the following command:
    
  
    npx cypress open
    
## Running Tests

   To run the tests in headless mode (without the GUI), use:
     
 
    npx cypress run

## Test Approach

1.Page Object Model (POM) Implementation:
Utilized the Page Object Model (POM) pattern to create a structured and reusable class for the email editor. This approach modularizes the test code and enhances maintainability by separating the page elements and interactions.

2.Handling iFrames with Cypress Commands:
Leveraged custom Cypress commands to interact with the email editor's iFrame, enabling seamless access and manipulation of the editor’s content.

3.Locators and Functions:
Identified appropriate element locators and implemented reusable functions to perform actions like clicking buttons, updating font properties (family, weight), and other necessary interactions within the email editor.

4.Console Logs and HTML Validation:
Captured console log messages during the test execution to monitor system behaviors. Applied assertions to validate the HTML generated code, ensuring the changes in text properties were correctly reflected in the final output.






   
