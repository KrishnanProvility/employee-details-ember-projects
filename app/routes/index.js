import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service employee;

  model() {
    return this.employee.employees;

  }

}
