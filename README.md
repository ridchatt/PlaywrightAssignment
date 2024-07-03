# Playwright Assignment

This repository contains automated tests for both UI and API using Playwright. The project is structured to follow the Page Object Model (POM) for UI tests and a modular approach for API tests. This ensures clean, maintainable, and scalable test code.

## Table of Contents

- [Project Structure Overview](#project-structure-overview)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
  - [UI Tests](#ui-tests)
  - [API Tests](#api-tests)
- [Reporting](#reporting)
- [Contributing](#contributing)
- [License](#license)

## Project Structure Overview

The project is organized into several key directories:

- **pages/**: Contains JavaScript files defining Page Objects for UI tests. Each file corresponds to a specific page or component of the application under test.

- **tests/**
  - **UI/**: Houses test scripts written for UI automation using Playwright. Each test file typically corresponds to a specific feature or workflow.
  - **API/**: Contains test scripts for API testing. These scripts interact with the Reqres API endpoints to validate functionality.

- **playwright-report/**: This directory stores generated HTML report from test runs, detailing test outcomes and metrics.


## Running the Tests

### UI Tests

To run the UI tests, use the following command:
npx playwright test tests/UI

### API Tests

To run the API tests, use the following command:
npx playwright test tests/API

