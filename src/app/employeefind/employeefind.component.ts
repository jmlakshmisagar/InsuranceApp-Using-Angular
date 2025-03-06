import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employeefind',
  templateUrl: './employeefind.component.html',
  styleUrls: ['./employeefind.component.css']
})
export class EmployeefindComponent {
  employeeId: number = 0;
  employee: Employee | null = null;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private employeeService: EmployeeService) { }

  findEmployee(): void {
    if (this.employeeId > 0) {
      this.loading = true;
      this.employee = null;
      this.errorMessage = '';

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
}