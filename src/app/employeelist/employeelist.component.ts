import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
declare var bootstrap: any;

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  @ViewChild('editForm') editForm!: NgForm;

  employees: Employee[] = [];
  loading: boolean = false;
  errorMessage: string = '';
  selectedEmployee: Employee | null = null;
  private editModal: any;
  private deleteModal: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
    // Initialize modals
    this.initializeModals();
  }

  private initializeModals(): void {
    const editModalEl = document.getElementById('editModal');
    const deleteModalEl = document.getElementById('deleteModal');
    if (editModalEl) {
      this.editModal = new bootstrap.Modal(editModalEl);
    }
    if (deleteModalEl) {
      this.deleteModal = new bootstrap.Modal(deleteModalEl);
    }
  }

  loadEmployees(): void {
    this.loading = true;
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error loading employees. Please try again later.';
        this.loading = false;
        console.error('Error:', error);
      }
    });
  }

  openEditModal(employee: Employee): void {
    this.selectedEmployee = { ...employee };
    if (this.editModal) {
      this.editModal.show();
    }
  }

  openDeleteModal(employee: Employee): void {
    this.selectedEmployee = employee;
    if (this.deleteModal) {
      this.deleteModal.show();
    }
  }

  updateEmployee(): void {
    if (this.selectedEmployee && this.editForm && this.editForm.valid) {
      this.loading = true;
      this.employeeService.updateEmployee(this.selectedEmployee).subscribe({
        next: () => {
          this.loadEmployees();
          if (this.editModal) {
            this.editModal.hide();
          }
          this.selectedEmployee = null;
          this.loading = false;
        },
        error: (error) => {
          this.errorMessage = 'Failed to update employee. Please try again.';
          this.loading = false;
          console.error('Error:', error);
        }
      });
    }
  }

  deleteEmployee(): void {
    if (this.selectedEmployee?.id) {
      this.loading = true;
      this.employeeService.deleteEmployee(this.selectedEmployee.id).subscribe({
        next: () => {
          this.loadEmployees();
          if (this.deleteModal) {
            this.deleteModal.hide();
          }
          this.selectedEmployee = null;
          this.loading = false;
        },
        error: (error) => {
          this.errorMessage = 'Failed to delete employee. Please try again.';
          this.loading = false;
          console.error('Error:', error);
        }
      });
    }
  }

  isFormValid(): boolean {
    return this.editForm && this.editForm.valid || false;
  }
}