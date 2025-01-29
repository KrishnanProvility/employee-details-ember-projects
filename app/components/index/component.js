import Component from "@glimmer/component";
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class EmployeeFormComponent extends Component {
 @service employee
 @service router;
 model(){
 }

 @action
 deleteEmployee(id) {
  this.employee.deleteEmployee(id);
  this.router.transitionTo('index');
  console.log(this.employee.employees);
 }


}


