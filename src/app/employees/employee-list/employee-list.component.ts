import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  //search
  searchTerm: string = '';

  //pagination
  page: number = 1;
  pageSize: number = 5;

  constructor(public employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees();
  }

}
