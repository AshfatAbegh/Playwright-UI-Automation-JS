# Playwright UI Automation JS

A JavaScript-based UI automation testing framework built with **Playwright** for end-to-end testing of web applications.

## Overview

This project provides a robust automation framework for testing web user interfaces using Playwright. It's designed to help QA engineers and developers automate browser interactions, validate UI behavior, and ensure application reliability across different browsers and devices.

## Features

- ✅ **Cross-browser testing** - Run tests on Chromium, Firefox, and WebKit
- 🔄 **Parallel execution** - Execute multiple tests simultaneously for faster feedback
- 📸 **Screenshots & videos** - Capture visual artifacts for debugging failed tests
- ⏱️ **Smart waits** - Built-in intelligent waiting mechanisms for reliable test execution
- 🎯 **Selector strategies** - Multiple locator strategies (CSS, XPath, text, etc.)
- 📊 **HTML reports** - Generate detailed test reports with visual artifacts
- 🔧 **TypeScript support** - Full type definitions for better IDE support
- 🚀 **Fast & reliable** - Optimized for performance and test stability

## Prerequisites

Before running this project, ensure you have:

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AshfatAbegh/Playwright-UI-Automation-JS.git
   cd Playwright-UI-Automation-JS
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## Project Structure

```
Playwright-UI-Automation-JS/
├── tests/                    # Test files
│   ├── example.spec.js      # Example test cases
│   └── ...
├── pages/                    # Page Object Models
│   ├── basePage.js
│   └── ...
├── utils/                    # Utility functions
│   ├── helpers.js
│   └── config.js
├── package.json             # Project dependencies
├── playwright.config.js     # Playwright configuration
└── README.md               # This file
```

## Configuration

The `playwright.config.js` file contains all test configuration. Key settings include:

- **browsers**: Chromium, Firefox, WebKit
- **headless mode**: Run tests with/without browser UI
- **base URL**: Set your application's base URL
- **timeout**: Set test and action timeouts
- **retries**: Configure retry logic for failed tests
- **reporters**: HTML, JSON, and JUnit report formats

Example configuration:
```javascript
const config = {
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://example.com',
    trace: 'on-first-retry',
  },
};
```

## Running Tests

### Run all tests:
```bash
npm test
```

### Run tests in headed mode (see browser):
```bash
npx playwright test --headed
```

### Run tests for a specific browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run a specific test file:
```bash
npx playwright test tests/example.spec.js
```

### Run tests matching a pattern:
```bash
npx playwright test -g "login"
```

### Debug tests:
```bash
npx playwright test --debug
```

### View test report:
```bash
npx playwright show-report
```

## Writing Tests

Example test structure:
```javascript
import { test, expect } from '@playwright/test';

test.describe('Login Feature', () => {
  test('User can login with valid credentials', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="username"]', 'user@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button:has-text("Login")');
    await expect(page).toHaveURL('/dashboard');
  });

  test('Login fails with invalid credentials', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="username"]', 'wrong@example.com');
    await page.fill('input[name="password"]', 'wrongpass');
    await page.click('button:has-text("Login")');
    await expect(page.locator('.error-message')).toBeVisible();
  });
});
```

## Page Object Model Pattern

Organize your tests using the Page Object Model pattern:

```javascript
// pages/loginPage.js
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button:has-text("Login")');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
```

## CI/CD Integration

### GitHub Actions Example

Create `.github/workflows/tests.yml`:

```yaml
name: UI Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npx playwright install --with-deps
      - run: npm test
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

## Debugging

### Debug Mode:
```bash
npx playwright test --debug
```

### Inspector:
Use Playwright Inspector to step through tests interactively.

### Traces:
Enable traces in configuration to record test execution:
```javascript
use: {
  trace: 'on-first-retry',
}
```

View traces:
```bash
npx playwright show-trace trace.zip
```

## Best Practices

- ✅ Use Page Object Models for maintainability
- ✅ Keep tests focused and independent
- ✅ Use meaningful test names
- ✅ Avoid hard sleeps; use smart waits
- ✅ Mock external APIs when possible
- ✅ Run tests in parallel for faster feedback
- ✅ Review HTML reports after test runs
- ✅ Use environment variables for sensitive data

## Troubleshooting

### Tests timing out
- Increase timeout in playwright.config.js
- Check if selectors are correct
- Verify the application is running

### Flaky tests
- Use `waitForLoadState()` to wait for network/load events
- Add explicit waits for dynamic content
- Review and refine selectors

### Browser crashes
- Update Playwright: `npm install @playwright/test@latest`
- Clear browser cache in tests
- Run tests in headed mode to diagnose

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright Test Documentation](https://playwright.dev/docs/intro)
- [GitHub Playwright Repository](https://github.com/microsoft/playwright)

**Happy Testing! 🎭**
