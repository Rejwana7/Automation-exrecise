# Automation Exercise Playwright Project

This project automates the successful login flow on [Automation Exercise](https://www.automationexercise.com/) using Playwright and TypeScript.

## Live Demo

[Watch the video demo](https://drive.google.com/file/d/1zV9HsniN7X71ZlHoSOapfFqGtO60g9Vr/view?usp=drive_link)

## Implemented Scenario

The test:

1. Opens Automation Exercise.
2. Navigates to **Signup / Login**.
3. Logs in with the credentials for a user account created manually before running the test.
4. Verifies that **Logged in as** is displayed.

## Prerequisites

- Node.js installed.
- A user account created manually at [Automation Exercise](https://www.automationexercise.com/).
- A local `test_data/loginData.ts` file created from `test_data/loginData.example.ts` with your account credentials. The local credentials file is ignored by Git.



## Installation

```bash
npm install
npx playwright install
```

Copy `test_data/loginData.example.ts` to `test_data/loginData.ts`, then replace the placeholder values with your test account credentials.

## Run the Tests

Run the test suite across the configured Chromium, Firefox, and WebKit projects:

```bash
npx playwright test
```

Run only the Chromium project:

```bash
npx playwright test --project=chromium
```

Run with the browser visible:

```bash
npx playwright test --headed
```

## HTML Report

The Playwright HTML reporter is enabled in `playwright.config.ts`. Open the report after a test run with:

```bash
npx playwright show-report
```

## Project Structure

```text
.
├── pages/
│   └── LoginPage.ts       # Login page object and assertions
├── test_data/
│   └── loginData.example.ts # Safe credentials template
├── tests/
│   └── login.spec.ts      # Login test scenario
├── playwright.config.ts   # Playwright configuration and browser projects
├── package.json
└── README.md
```

