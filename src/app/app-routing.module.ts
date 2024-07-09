import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EmployeeComponent} from 'src/app/employees/employee.component';
import{DepartmentComponent} from 'src/app/departments/department.component';

const routes: Routes = [
//lazy loading
{path:'employee', component: EmployeeComponent, loadChildren:()=>import('./employees/employees.module').then(x=>x.EmployeesModule)},
{path:'department', component: DepartmentComponent, loadChildren:()=>import('./departments/departments.module').then(x=>x.DepartmentsModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
