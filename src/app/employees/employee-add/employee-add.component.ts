import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/service/employee.service';
import { DepartmentService } from 'src/app/shared/service/department.service';
import { NgForm } from '@angular/forms';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  constructor(public employeeService: EmployeeService, public departmentService: DepartmentService,
    private router: Router) { }

  ngOnInit(): void {
    this.departmentService.getAllDepartment();
  }

  //submit form
  onSubmit(form: NgForm) {
    console.log(form.value)

    this.addEmployee(form)

    form.reset();

    this.router.navigate(['/employee/list']);
  }

  addEmployee(form?: NgForm) {
    this.employeeService.insertEmployee(form.value)
      .subscribe((response) => {
        console.log(response);
        this.employeeService.getAllEmployees();
      },
        (error) => {
          console.log(error);
        })
  }
}
