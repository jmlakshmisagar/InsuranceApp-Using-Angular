import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employeedelete',
  templateUrl: './employeedelete.component.html',
  styleUrls: ['./employeedelete.component.css']
})
export class EmployeedeleteComponent {
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
          if (data) {
            this.employee = data;
          } else {
            this.errorMessage = 'Employee not found';
          }
          this.loading = false;
        },
        error: (error) => {
          this.errorMessage = 'Failed to find employee. Please try again.';
          this.loading = false;
          console.error('Error:', error);
        }
      });
    }
  }

  deleteEmployee(): void {
    if (this.employee && this.employee.id) {
      this.loading = true;
      this.errorMessage = '';
      this.successMessage = '';

      this.employeeService.deleteEmployee(this.employee.id).subscribe({
        next: () => {
          this.successMessage = 'Employee deleted successfully';
          this.loading = false;
          this.employee = null;
          this.employeeId = 0;
        },
        error: (error) => {
          this.errorMessage = 'Failed to delete employee. Please try again.';
          this.loading = false;
          console.error('Error:', error);
        }
      });
    }
  }

  cancelDelete(): void {
    this.employee = null;
    this.employeeId = 0;
    this.errorMessage = '';
    this.successMessage = '';
  }
}