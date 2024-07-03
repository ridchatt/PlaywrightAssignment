# Playwright Assignment

This repository contains automated tests for both UI and API using Playwright. The project is structured to follow the Page Object Model (POM) for UI tests and a modular approach for API tests. This ensures clean, maintainable, and scalable test code.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
  - [UI Tests](#ui-tests)
  - [API Tests](#api-tests)
- [Reporting](#reporting)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project is organized into the following directories:

.
├── pages
│   ├── HomePage.js
│   ├── CartPage.js
│   ├── LoginPage.js
│   └── ...
├── tests
│   ├── UI
│   │   ├── sauceDemoUITests.spec.js
│   │   └── ...
│   ├── API
│   │   ├── reqresAPITests.spec.js
│   │   └── ...
│   └── ...
├── api
│   ├── UserApi.js
│   └── ...
├── playwright.config.js
├── package.json
└── README.md

## Running the Tests

### UI Tests

To run the UI tests, use the following command:
npx playwright test tests/UI

### API Tests

To run the API tests, use the following command:
npx playwright test tests/API

