import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | employee-form', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:employee-form');
    assert.ok(route);
  });
});
