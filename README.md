
## Overview

**gateless-recruiting** is a TypeScript-based project intended as a coding exercise for a technical interview. It contains source code under `lib/` and `page-objects`, automated tests under `tests/`, and uses Playwright for end-to-end test scenarios.([GitHub][1])

## Prerequisites

Ensure you have the following installed:

* **Node.js** (v18 or later recommended)
* **npm** (comes with Node.js)
* **Git** (to clone the repository)

## Installation

1. Clone the repository:

```sh
git clone https://github.com/odinsonor/gateless-recruiting.git
cd gateless-recruiting
```

2. Install dependencies:

```sh
npm install
```

## Running with npx

You can run tasks directly using `npx` without global installs.

### Run tests

```sh
npx playwright test
```

This executes the Playwright test suite defined in the `tests/` directory.([GitHub][1])

## Typical Commands

| Command               | Description                              |
| --------------------- | ---------------------------------------- |
| `npm install`         | Install dependencies                     |
| `npx playwright test` | Run automated Playwright tests           |
| `npm test`            | Shortcut if configured in `package.json` |

## Project Structure

```
├── lib/                  # Application source code
├── page-objects/         # Playwright page objects
├── tests/                # End-to-end and API tests
├── package.json          # Dependencies & scripts
├── playwright.config.ts  # Playwright configuration
```
[1]: https://github.com/odinsonor/gateless-recruiting "GitHub - odinsonor/gateless-recruiting: Small project for technical interview"
