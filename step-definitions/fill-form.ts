// import { expect } from 'chai';
import { openPage } from '../stories';
import { Before, Given } from 'cucumber';
import { cast } from 'playwright-fluent';

Given('I navigate to {string}', async function (url: string) {
  await cast(this.p).navigateTo(url);
});

Given('I open the {string} page', async function (page: string) {
  await cast(this.p).runStory(openPage, page);
});

/**
 * Before each scenario hook
 */
Before({ tags: '@foo' }, async function () {
  this.foo = true;
});
