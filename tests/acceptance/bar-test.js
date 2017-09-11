import { test } from 'qunit';
import moduleForAcceptance from 'ember-exam-chrome-problem/tests/helpers/module-for-acceptance';
import pause from '../helpers/pause';

moduleForAcceptance('Acceptance | bar');

test('bar 1', async function(assert) {
  await visit('/');

  await pause(5000);

  assert.equal(currentURL(), '/');
});

test('bar 2', async function(assert) {
  await visit('/');

  await pause(5000);

  assert.equal(currentURL(), '/');
});

test('bar 3', async function(assert) {
  await visit('/');

  await pause(5000);

  assert.equal(currentURL(), '/');
});
