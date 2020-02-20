# Wishlist 🛍 - IS2 Project

[![CircleCI](https://circleci.com/gh/antoniopicone/is2_wishlist.svg?style=svg&circle-token=1ccd8f54691c51063304ecb4d2c1e0ee9adc65e2)](https://circleci.com/gh/antoniopicone/is2_wishlist)

Angular based project for Ingengeria del Software 2 exam, focused on capture&amp;replay testing.
This project is written in TypeScript on Angular 8 framework.

**This app is automatically deployed on: 
https://is2-wishlist-project.web.app/home** with READ ONLY APIs (so you won't be able to create/update items)

## Setup application on Windows

1. Clone/download the repository

2. Install Node JS v 12.x

3. Open Node JS Command Prompt application

4. Install module dependencies: 
```    
cd client
npm i
```
5. Start mock server: `npm run mock-server`
6. Open another Node JS Command Prompt and, into client folder, run: `npm start` and allow opening port on Windows firewall (if a dialog pops up).

7. Open your browser on: `http://localhost:4200`


## Running regression tests

All test suites should be in subfolders of `/tests` folder: in 2.1 folder there are two complete test suites for comparing *ProcessoBase* with *ProcessoMigliorato* that can be executed with a bash script working as a *runner*.
To run that suites, you need to have installed in your system:

- Python 2.7 (or greater)
- Selenium python module (you can install with `pip install selenium`)
- Chrome Browser v.80 and Chromedriver v.80
- Chromedriver must be available in your path (on Windows it's ok to keep chromedriver.exe in cd `tests/2.1/REGRESSION TEST` folder, in Linux/MacOS a good position could be `/usr/local/bin`)
- The **mock-server and the application running** on localhost:4200 (please refer to points 5 and 6 of the previuos chapter)

Once you have those software, you can cd into tests/2.1/REGRESSION TEST folder and run that script:

```
cd tests/2.1/REGRESSION TEST
sh script.sh
```

Each test case will be executed opening the browser at 1920x1080 resolution with a snapshot of the database (used by the API of the application) that will replace the database.json before starting each test case python script.  

### Running regresion tests in headless mode

Each test case can be executed in *headless* mode by running Chrome without the gui: to do so, just comment out in each test case python script you want to execute silently,
by 

**replacing the line**:

```
#chrome_options.add_argument("--headless") 
```
**with**:

```
chrome_options.add_argument("--headless") 
```


## Continuous Integration

This project has been configured with CircleCI to:

- check build status
- verify previously injected hooks
- run regression tests (with Protractor)
- build for production
- deploy a __function__ (the mock server) and a __site__ (the Angular app) to Firebase 

In addiction, you can see the build status with badge on top of this document.


## Test hooks

### Injecting hooks

To inject hooks according to this custom locator, you have to run the project in _Remote Development_ mode in VSCode:

```bash
cd /workspace/test-guard
node main.js inject-hooks '../src/**/*.html' --grammar angularjs
```

### Recording test cases and exporting in robot format

All test suites should be recorded with Katalon Recorder plugin for Chrome or Firefox and **exported in Python (Selenium) format** to be placed in subfolders of `/tests` folder: a test suite is composed by `/test-cases` and `/reports`.
In each test suite subfolder should be available a `run-test.sh` bash script running all python test cases with Selenium.

Put each test case file with `.py` extension in `/tests/<version>/test-cases` folder: each version corresponding to a tag of the repository will be executed during ***c&r-tests*** (Capture & Replay Tests) phase of CircleCI workflow (**TBD**).

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


## Debugging Angular app

As this projects installs Chrome/Firefox remote debugging, **having angular development server running**, switch on Debug section of VSCode and run _Debug in Chrome_.
