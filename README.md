
# webdriverio-cucumber-headspin-boilerplate
 
Boilerplate project to run WebdriverIO tests in Headspin Cloud ([https://www.headspin.io/]()) using Cucumber features, and the page objects pattern.

## Requirements

- Node version 18 or higher
- Headspin Cloud Access

# Frameworks:

- webdriverIO
- cucumber

# Features:

- Cloud integration with [Headspin](https://www.headspin.io/)
- Supports Page Object Model
- Contains sample Scenarios written in Declarative style of BDD

## Running end-to-end tests

- Clone the git repo - `git clone https://github.com/Muralijc/Wdio-Headspin-boilerplate.git`.
- Install dependencies with `npm i`.
- Update Device Capabilities and Headspin Configs in `config/headspinConfig.json`
- Run `npm run headspin` or `npx wdio run config/wdio.conf.ts` to execute the e2e tests.

 