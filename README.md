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

├───node_modules
│   ├───.bin
│   ├───@playwright
│   │   └───test
│   ├───@types
│   │   └───node
│   │       ├───assert
│   │       ├───dns
│   │       ├───fs
│   │       ├───readline
│   │       ├───stream
│   │       └───timers
│   ├───playwright
│   │   ├───lib
│   │   │   ├───common
│   │   │   ├───isomorphic
│   │   │   ├───loader
│   │   │   ├───matchers
│   │   │   ├───plugins
│   │   │   ├───reporters
│   │   │   │   └───versions
│   │   │   ├───runner
│   │   │   ├───third_party
│   │   │   ├───transform
│   │   │   └───worker
│   │   └───types
│   ├───playwright-core
│   │   ├───bin
│   │   ├───lib
│   │   │   ├───cli
│   │   │   ├───client
│   │   │   ├───common
│   │   │   ├───generated
│   │   │   ├───image_tools
│   │   │   ├───protocol
│   │   │   ├───remote
│   │   │   ├───server
│   │   │   │   ├───android
│   │   │   │   ├───chromium
│   │   │   │   ├───dispatchers
│   │   │   │   ├───electron
│   │   │   │   ├───firefox
│   │   │   │   ├───har
│   │   │   │   ├───isomorphic
│   │   │   │   ├───recorder
│   │   │   │   ├───registry
│   │   │   │   ├───trace
│   │   │   │   │   ├───recorder
│   │   │   │   │   ├───test
│   │   │   │   │   └───viewer
│   │   │   │   └───webkit
│   │   │   ├───third_party
│   │   │   ├───utils
│   │   │   │   └───isomorphic
│   │   │   ├───utilsBundleImpl
│   │   │   └───vite
│   │   │       ├───htmlReport
│   │   │       ├───recorder
│   │   │       │   └───assets
│   │   │       └───traceViewer
│   │   │           └───assets
│   │   └───types
│   └───undici-types
├───pages
├───playwright-report
├───test-results
├───tests
│   ├───API
│   └───UI
└───tests-examples

## Running the Tests

### UI Tests

To run the UI tests, use the following command:
npx playwright test tests/UI

### API Tests

To run the API tests, use the following command:
npx playwright test tests/API

