import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employeeupdate',
  templateUrl: './employeeupdate.component.html',
  styleUrls: ['./employeeupdate.component.css']
})
export class EmployeeupdateComponent {
  employeeId: number = 0;
  employee: Employee | null = null;
  loading: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private employeeService: EmployeeService) { }

  findEmployee(): void {
    if (this.employeeId > 0) {
      this.loading = true;
      this.errorMessage = '';
      this.successMessage = '';

      this.employeeService.findEmployee(this.employeeId).subscribe({
        next: (data) => {
          this.employee = data;
          this.loading = false;
        },
        error: (error) => {
          this.errorMessage = 'Employee not found or an error occurred.';
          this.loading = false;
          console.error('Error:', error);
        }
      });
    }
  }

  updateEmployee(): void {
    if (this.employee) {
      this.loading = true;
      this.errorMessage = '';
      this.successMessage = '';

      this.employeeService.updateEmployee(this.employee).subscribe({
        next: (response) => {
          this.successMessage = 'Employee updated successfully';
          this.loading = false;
          this.employee = null;
          this.employeeId = 0;
        },
        error: (error) => {
          this.errorMessage = 'Failed to update employee. Please try again.';
          this.loading = false;
          console.error('Error:', error);
        }
      });
    }
  }

  cancelUpdate(): void {
    this.employee = null;
    this.employeeId = 0;
    this.errorMessage = '';
    this.successMessage = '';
  }
}