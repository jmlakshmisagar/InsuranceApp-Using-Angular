import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeecreationComponent } from './employeecreation/employeecreation.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeefindComponent } from './employeefind/employeefind.component';
import { EmployeeupdateComponent } from './employeeupdate/employeeupdate.component';
import { EmployeedeleteComponent } from './employeedelete/employeedelete.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'add-employee', component: EmployeecreationComponent },
  { path: 'list-employees', component: EmployeelistComponent },
  { path: 'find-employee', component: EmployeefindComponent },
  { path: 'edit-employee', component: EmployeeupdateComponent },
  { path: 'delete-employee', component: EmployeedeleteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }