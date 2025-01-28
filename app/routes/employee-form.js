import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EmployeeFormRoute extends Route {
  @service employee;

  model(params) {
    return params.employee_id
      ? this.employee.getEmployeeById(parseInt(params.employee_id, 10))
      : null;
  }
}
