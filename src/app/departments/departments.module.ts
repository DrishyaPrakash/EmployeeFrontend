import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentComponent } from './department.component';
import { DepartmentListComponent } from './department-list/department-list.component';


@NgModule({
  declarations: [DepartmentComponent, DepartmentListComponent],
  imports: [
    CommonModule,
    DepartmentsRoutingModule
  ]
})
export class DepartmentsModule { }
