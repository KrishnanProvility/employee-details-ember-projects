import { module, test } from "qunit";
import { setupRenderingTest } from "ember-test-app/tests/helpers";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | calculator", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Calculator />`);

    assert.dom().hasText("");

    // Template block usage:
    await render(hbs`
      <Calculator>
        template block text
      </Calculator>
    `);

    assert.dom().hasText("template block text");
  });
});
