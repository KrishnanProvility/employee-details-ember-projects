import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class EmployeeFormComponent extends Component {
  @service employee;
  @service router;
  @tracked name = this.args.model?.name || '';
  @tracked department = this.args.model?.department || '';
  @tracked email = this.args.model?.email || '';
  @tracked contact = this.args.model?.contact || '';
  @tracked address = this.args.model?.address || '';
  @tracked salary = this.args.model?.salary || '';


  @action updateName(event) {
    this.name = event.target.value;
  }

  @action updateDepartment(event) {
    this.department = event.target.value;
  }

  @action updateEmail(event) {
    this.email = event.target.value;
  }

  @action updateContact(event) {
    this.contact = event.target.value;
  }

  @action updateAddress(event) {
    this.address = event.target.value;
  }

  @action updateSalary(event) {
    this.salary = event.target.value;
  }

  // Handle form submission
  @action onSubmit(event) {
    event.preventDefault();

    const employeeData = {
      id: this.args.model?.id || Date.now(),
      name: this.name,
      department: this.department,
      email: this.email,
      contact: this.contact,
      address: this.address,
      salary: this.salary,
    };

    if (this.args.model) {
      this.employee.updateEmployee(employeeData);
    } else {
      this.employee.addEmployee(employeeData);
    }
 this.router.transitionTo('index')}
}
