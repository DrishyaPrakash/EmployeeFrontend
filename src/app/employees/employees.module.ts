import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsModule, NgForm } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { SampleComponent } from './sample/sample.component';


@NgModule({
  declarations: [EmployeeComponent, EmployeeAddComponent, EmployeeListComponent, SampleComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class EmployeesModule { }
