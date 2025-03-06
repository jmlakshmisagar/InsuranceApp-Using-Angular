import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employeecreation',
  templateUrl: './employeecreation.component.html',
  styleUrls: ['./employeecreation.component.css']
})
export class EmployeecreationComponent implements OnInit {

 employee: Employee = {
    name: '',
    designation: '',
    salary: 0,
  };

  submittedData: Employee | null = null;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void { }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.employeeService.createEmployee(this.employee).subscribe({
        next: (response: string) => {
          this.successMessage = 'Employee added successfully!';
          this.submittedData = { ...this.employee };
          form.resetForm();
        },
        error: (error: any) => {
          this.errorMessage = 'Failed to add employee. Please try again.';
          console.error('Error:', error);
        }
      });
    }
  }
}
