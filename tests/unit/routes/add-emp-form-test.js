import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | add-emp-form', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:add-emp-form');
    assert.ok(route);
  });
});
