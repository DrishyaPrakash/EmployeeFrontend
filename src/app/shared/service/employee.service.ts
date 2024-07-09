import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpClient } from '@angular/common/http';
import { Empanddeptviewmodel } from '../model/empanddeptviewmodel';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //to list
  employees: Empanddeptviewmodel[] = [];

  //add employee
  formEmployeeData: Employee = new Employee();

  constructor(private httpClient: HttpClient) { }

  //get all employees with department name
  getAllEmployees(): void {
    this.httpClient.get(environment.apiUrl + 'Employee')
      .toPromise()
      .then((response: any) => {
        if (response && response.$values) {
          this.employees = response.$values;
        }
        else {
          console.error('Invalid format' + response)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }


  insertEmployee(employee: Employee): Observable<any> {
    return this.httpClient.post(environment.apiUrl + 'Employee', employee)
  }
}
