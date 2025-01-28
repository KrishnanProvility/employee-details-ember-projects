import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class EmployeeService extends Service {
  @tracked employees = [
    {
      id: 1,
      name: 'John Doe',
      department: 'HR',
      email: 'john@example.com',
      contact: '1234567890',
      address: '123 Street, City',
      salary: 50000,
    },
    {
      id: 2,
      name: 'Jane Smith',
      department: 'Developer',
      email: 'jane@example.com',
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
}
