import { test } from 'qunit';
import moduleForAcceptance from 'ember-exam-chrome-problem/tests/helpers/module-for-acceptance';
import pause from '../helpers/pause';

moduleForAcceptance('Acceptance | foo');

test('foo 1', async function(assert) {
  await visit('/');

  await pause(5000);

  assert.equal(currentURL(), '/');
});

test('foo 2', async function(assert) {
  await visit('/');

  await pause(5000);

  assert.equal(currentURL(), '/');
});

test('foo 3', async function(assert) {
  await visit('/');

  await pause(5000);

  assert.equal(currentURL(), '/');
});
