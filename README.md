# playwright-fluent-cucumber-ts-starter
Starter project to write E2E tests with `cucumber-js` and `playwright-fluent` in TypeScript language.

## After cloning the repo

* run the command `npm install`.

## To execute the tests locally

* run the command `npm test`.

## To debug a scenario in Visual Studio Code

* tag the scenario with `@debug`
* set the breakpoints in the typescript code
* Start debugging

## To run only specific scenarios

* tag the scenario(s) with `@only`
* run script:
```sh
npm run only
```

## To run scenarios in headfull/live mode

* tag the scenario(s) with `@live`
* run script:
```sh
npm run live
```

The browser will stay opened at the end of the tests execution.

## To ignore a scenario

* tag the scenario with `@ignore`

## To check for typescript and linting errors

* run the command `npm run build`.

## To view the html report of the last run

* run the command `npm run report`.

## To create a new step

* first write the Given/When/Then sentence:
  ```gherkin
  Given I push "foo" on "bar"
  ```

* tag the scenario with `@live` and save the feature file.

* run the npm script:
  ```sh
  npm run snippets
  ```

* the script will report the missing step(s): you just need to copy and paste them in the step definitions file:

  ```sh
  Given('I push {string} on {string}', async function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
  ```

## To use a custom option on the CLI

* add your custom option to the CLI that starts cucumber:
```sh
./node_modules/.bin/cucumber-js features/**/*.feature --foo=bar 
```
* use it at runtime:
```js
if (this.cliArgs.foo === 'bar') {
  // custom code for option --foo=bar
}
```

## To use a custom World Objet

* cutomize the given Custom World Object : [custom-world](world/custom-world.ts)