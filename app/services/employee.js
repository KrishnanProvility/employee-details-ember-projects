import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class EmployeeService extends Service {
  @tracked employees = [];
  constructor() {
    super(...arguments);
    this.fetchEmployees();
  }

  async fetchEmployees() {
    try {
      let response = await fetch('http://localhost:5000/employees');
      this.employees = await response.json();
      console.log(this.employees);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  }

  async addEmployee(employee) {
    try {
      let response = await fetch('http://localhost:5000/employees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee),
      });
      console.log(this.employees);
      let newEmployee = await response.json();
      this.employees = [...this.employees, newEmployee];

    } catch (error) {
      console.error('Error adding employee:', error);
    }
    console.log(this.employees);
  }

  async updateEmployee(updatedEmployee) {
    try {
      let response = await fetch(`http://localhost:5000/employees/${updatedEmployee.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedEmployee),
      });
      if (response.ok) {
        console.log(response)
        this.fetchEmployees();
      } else {
        console.error('Update failed:', await response.text());
      }
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  }

  async deleteEmployee(id) {
    try {
      let response = await fetch(`http://localhost:5000/employees/${id}`,{method:'DELETE'});
      this.fetchEmployees();
    }
    catch (error){
      console.error('Error While Delete employee data',error);
    }
  }


  getEmployeeById(id) {
    return this.employees.find((employee) => employee.id === id);
  }
}
