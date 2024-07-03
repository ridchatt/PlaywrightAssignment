# Playwright Assignment

This repository contains automated tests for both UI and API using Playwright. The project is structured to follow the Page Object Model (POM) for UI tests and a modular approach for API tests. This ensures clean, maintainable, and scalable test code.

## Table of Contents

- [Project Structure Overview](#project-structure-overview)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
  - [UI Tests](#ui-tests)
  - [API Tests](#api-tests)
- [Reporting](#reporting)

## Project Structure Overview

The project is organized into several key directories:

- **pages**: Contains page object classes that define selectors and methods for interacting with various pages of the application.

- **tests**: Contains test files that define the test cases using the page objects.

  - **UI**: Contains test scripts written for UI automation using Playwright. Each test file typically corresponds to a specific feature or workflow.
  - **API**: Contains test scripts for API testing. These scripts interact with the Reqres API endpoints to validate functionality.

- **playwright-report**: This directory stores generated HTML report from test runs, detailing test outcomes and metrics.

- **playwright.config.js**: Configuration file for Playwright.
- **package.json**: Node.js project metadata and dependencies.

## Installation

1. Clone the repository and open the main directory: 
    ```
   git clone https://github.com/ridchatt/PlaywrightAssignment.git
   cd PlaywrightAssignment
   ```

2. Install the dependencies: 
    ```
    npm install
    ```

3. Ensure Playwright browsers are installed: 
    ```
    npx playwright install
    ```
    
## Running the Tests

Running All Tests : npx playwright test

Running Tests in Headed Mode: npx playwright test --headed

### UI Tests

To run the UI tests, use the following command:
npx playwright test tests/UI/sauceDemoUITests.spec.js

### API Tests

To run the API tests, use the following command:
npx playwright test tests/API/reqresAPITests.spec.js

## Reporting

The directory playwright-report contains a generated HTML report from test runs, detailing test outcomes and metrics.
You can find json and xml report under the project structure.
