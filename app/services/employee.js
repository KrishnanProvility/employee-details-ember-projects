import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class EmployeeService extends Service {
  @tracked employees = [
    {
      id: 1,
      name: 'Krishnan',
      department: 'Developer',
      email: 'krishnan@provility.com',
      contact: '1234567890',
      address: '123 Street, City',
      salary: 50000,
    },
    {
      id: 2,
      name: 'vignesh',
      department: ' senior Developer',
      email: 'vignesh@provility.com',
      contact: '9876543210',
      address: '456 Avenue, City',
      salary: 60000,
    },
  ];

  addEmployee(employee) {
    this.employees = [...this.employees, { ...employee, id: this.employees.length+1 }];
  }

  updateEmployee(updatedEmployee) {
    this.employees = this.employees.map((employee) =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    );
  }

  getEmployeeById(id) {
    return this.employees.find((employee) => employee.id === id);
  }
  deleteEmployee(id) {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }
}
