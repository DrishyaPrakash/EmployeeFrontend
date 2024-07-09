import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {SampleComponent} from './sample/sample.component';

const routes: Routes = [
  {path:'add', component:EmployeeAddComponent},
  {path:'list', component:EmployeeListComponent},
  {path:'sample',component:SampleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }