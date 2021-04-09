# Lab - Unit Testing

## Introduction

Unit testing is a methodology in which automated tests execute small units of code and assert wether the results match what the developer's expectations.

At Ironhack, we'll use these unit tests to give you instant feedback on your progress on most labs. They also enable us to assess your completion of labs. Not every iteration and not every lab is testable.

Read and follow these instructions carefully, there are a lot of new concepts in this Lab and missing one step might stop you from completing the steps that follow.

## Technical Aspects

As developers, we have at our disposal a large set of automated test-runners, frameworks and libraries. Our choice should always be informed by the automated testing type we're performing (those could be "unit", "integration" or "end-to-end" testing).

The most widely-used JavaScript test-runners are `jest`, `mocha` and `jasmine`. The industry standard nowadays is `jest`. As `jest` can be used with plain JavaScript, Node.js and React projects, a select number of labs from Module 1 through Module 3 will use it to perform unit tests.

Jest is fairly simple to setup and to work with, but it will always be pre-configured for you in the labs in which it's used. As such, you won't have to tweak or dive deep into the topic as of yet.

You'll be able to run these tests locally on your machine to ensure that your work matches the specification, but they'll also run once you push your solution to github.

## Iteration 1 - Exploring the project

At the root of this repository you'll find multiple files that are worthy of notice.

First, `package.json`. This files contains the dependencies necessary to make the project work, as well as the configurations necessary to run our unit tests, format and lint our code. Plus, it holds a set of custom scripts that we can run using the `npm run` command. You won't have to change the contents of this file.

Second, you will find a tests directory. This directory contains multiple files with the `.spec.js` extensions. It is common to name unit test files ending with a `.spec.js` or `.tests.js` extension.

Files such as `package-lock.json`, and directories such as `.github` are not relevant right now.

## Iteration 2 - Setting up the project

Open your terminal.

To run unit test in your machine, you must have both `Node.js` and `npm` installed. To insure you have both, you can run the following commands: `node -v` and `npm -v`. As a result, you should see the versions of either installed on your machine.

As stated, our `package.json` file holds a list of the dependencies for this project. However, these dependencies are not automatically fetched when you clone the repository into your machine. To fetch the dependencies, run the command `npm install` (or the equivalent shorter command `npm i`) to install the project's dependencies.

## Iteration 3 - Running unit tests, seeing failures

Before working on any of the functionalities that we intend to unit test, let's run the `npm run test` command on our terminal.

[Image of terminal with failing test results]

You should notice two distinct forms of output. First, your terminal should display a list of the failed unit tests. Second, a file named `test-report.html` should be automatically generated at the root of the project. Opening this file will display the results of the unit tests in the browser.

(If you get a message that reads "jest: command not found", you might have skipped the previous step where we installed dependencies using `npm install`.)

Since we don't want to have to run these tests every time we make an addition or change to our solution, we can start them in a "watch" mode. That means that `jest` will be looking for changes in our code, and will re-run our automated tests with every change. Every time you save a file, the test-runner will be triggered (having auto-save enabled on VSCode is discouraged when running `jest` in "watch mode", it might have a significant impact on performance).

We have added a "test-runner in watch mode" command to the `scripts` property in the `package.json` file. This means that you can achieve it by running `npm run test:watch` in your terminal. This will start up the test-runner in watch-mode in your terminal. To see the results of the unit tests being updated automatically in the browser window, you can use the VSCode extension ["Live Server"](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to open the `test-report.html` file. This will trigger a reload every time the test-runner is executed and you'll be able to see the test results being updated live on the browser.

## Iteration 4 - Passing our first tests

To pass the first tests, open the calculator.js file and complete the sum function.

If you simply return a sum of both arguments from the sum function, you should see at least the first two tests of the "Sum" suite passing. However, a few other tests in the test suite are failing.

For this particular `sum` function, we don't expect it to simply sum any two values that it is passed. We want a few edge cases to be considered an properly handled.

- If the function is called with a single number, and no second argument is passed, the function should act as if the second argument passed equals `0`.
- If the function is called without any arguments, the function should act as if both arguments passed equal `0`.

The `subtract` function follows the same logic. Complete it, and ensure you're checking the results of the unit tests to ensure that all of the requirements are met.

## Iteration 6 - Dividing

In math, [we cannot divide a number by 0](https://en.wikipedia.org/wiki/Division_by_zero). However, if you perform a division operation in JavaScript, the value returned is `Infinity`.

JavaScript takes a relaxed approach on this topic, but we don't want to allow our `divide` function to make this mistake. As such, if the user calls the function `divide` and passes a `0` as the second argument, you should "throw" an error with the message "Cannot divide by 0".

To throw an error in JavaScript, you should write:

```js
throw new Error("An explanatory error message");
```

Our `divide` unit tests will experiment with dividing plain integers, floating point numbers, but also dividing by 0. If this edge case is not considered, the last test of the test suite will fail.

## Iteration 5 - Creating our own tests

Up until now, we've been coding our functions to pass our tests. What we've been unknowingly doing is following a testing methodology called "Test-Driven Development". This happens when the tests have been written in advance, and we're simply completing our functions to match the specifications that had been originally defined.

Now, we'll work in reverse.

You're given a `multiply` function inside of the `calculate.js` file. It is already complete, and requires no work from you side.

However, there are no unit tests for this function as of yet.

Create a file named `multiply.spec.js`. In this file you'll create unit tests for the `multiply` function.

At the top of `multiply.spec.js`, you should import the `multiply` function that is exported by `calculator.js`. You can simply copy and paste the following line.

```js
const { multiply } = require("./../calculator.js");
```

Create a test suite for the "Multiply" functionality.

```js
describe("Multiply", () => {
  // Our tests will be added here.
});
```

Then, inside of this test suite, we'll be writing each of the following tests that consider the following scenarios.

- Function is called with two positive integers. The value returned should be the result of the multiplication of both values.
- Function is called with a negative and a positive integer. The value returned should be a negative number.
- Function is called with any number and a number `0`. The value returned should be 0 (any number multiplied by `0` equals `0`).

It's up to you to decide what values the `multiply` function should be called with, and what values are expected as a result.

You can inspect the other `*.spec.js` files to take inspiration. Follow the same naming pattern for tests that you find in the other test files. You can also consult [the `jest` documentation](https://jestjs.io/docs/expect), although you shouldn't need to.

## Iteration 6 - Committing solution and checking results

You have solved all of the prior iterations. All of the tests are passing locally.

Let's commit our work, and push it to GitHub.

Immediately after doing so, you should see something like this on your fork of the repository on GitHub:

[Image of ongoing tests]

This means that GitHub is executing the unit tests for your project on their own machines.

After a couple of minutes at most the tests results should be ready.

If all of your tests are passing, you should see a green checkmark next to your commit message.

[Image of passing tests]

If any of the tests are failing, you'll see a red cross instead.

If you want to dive in depth into your test results, or verify why your tests are failing on GitHub, you can press this status symbol or navigate to the "Actions" tab in your repository.

[Image of actions tab]

What we have implemented into this project is a so-called "Continuous Integration/Continuous Delivery" (CI/CD) system.

The educational team will rely on the results of these automated tests to access your progress and your work.

Note that you might not always be able to complete every iteration on every lab, or to pass every single test. This shouldn't demotivate you. Automated tests are an important tool to gather feedback but are not the one true measure of the quality of your work or your worth as a developer.

Best of luck 💙