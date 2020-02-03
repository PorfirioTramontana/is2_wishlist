# Wishlist 🛍 - IS2 Project

[![Travis-CI](https://travis-ci.com/antoniopicone/is2_wishlist.svg?token=XUxyai6XvUN6aCYbQxjy&branch=master)](https://travis-ci.com/antoniopicone/is2_wishlist)



Angular based project for Ingengeria del Software 2 exam, focused on capture&amp;replay testing.
This project is written in TypeScript on Angular 8 framework.

## How to

To get started, you need:

- git
- docker
- VSCode (with remote devolpment plugins installed)

## Running our app for the first time

1. Clone this repo in a folder of your machine and open the folder in VSCode.
Once VSCode has started, choose to Reopen in Container the project: VSCode will set up the infrastructure designed in `/docker/docker-compose.yml` and expose on your machine two services on two ports:

    - 3000 for the json-server (a mock server to expose rest API for the client app)
    - 4200 for the Angular client application

   Once VSCode has reopened in container your project, you'll work iside the client app container: opening a terminal in VSCode, ie, will make you operate with bash inside client container, chrooted in `/client` folder of this project (where Angular application lives).

2. From the terminal inside the client container, run `npm start` (or click on the action in VSCode): this will start angular development server on port 4200 (automatically forwarded to your host machine).

## Debugging Angular app

As this projects installs Chrome/Firefox remote debugging, **having angular development server running**, switch on Debug section of VSCode and run _Debug in Chrome_.

## Continuous Integration

This project has been configured with CircleCI to check build status. In addiction, you can see the build status with badge on top of this document.

## Running robot-framework tests

All test suites should be in subfolders of `/tests` folder: a test suite is composed by `/test-cases` and `/reports`.
In each test suite subfolder should be available a `run-test.sh` bash script running (a dockerized) robot-framework (copy the one available in _example_ test suite subfolder).

## Test hooks

### Injecting hooks

To inject hooks according to this custom locator, you have to run the project in _Remote Development_ mode in VSCode:

```bash
cd /workspace/test-guard
node main.js inject-hooks '../src/**/*.html' --grammar angularjs
```

### Recording test cases and exporting in robot format

All test suites should be recorded with Katalon Recorder plugin for Chrome or Firefox and **exported in Robot format** to be placed in subfolders of `/tests` folder: a test suite is composed by `/test-cases` and `/reports`.
In each test suite subfolder should be available a `run-test.sh` bash script running (a dockerized) robot-framework (copy the one available in _example_ test suite subfolder).

Put each test case file with `.robot` extension in `/tests/<version>/test-cases` folder: each version corresponding to a tag of the repository will be executed during ***c&r-tests*** (Capture & Replay Tests) phase of CircleCI workflow (**TBD**).

### Verifying hooks

To verify hooks, in _Remote Development_ mode in VSCode, just:

```bash
cd /workspace/test-guard
node main.js verify-hooks '../src/**/*.html' --grammar angularjs --suites '../tests/1.0/test-cases'
```

### Running the splitter

To run the splitter script, in _Remote Development_ mode in VSCode, just:

```bash
cd /workspace/test-guard
node test-script-splitter.js --suites '../tests/1.0/test-cases' --dest '../output-locators' --num 3
```

NB: In test-guard folder there is another version of test-script-splitter, edited by the Professor (`test-script-splitter_vPorfirio.js`).
