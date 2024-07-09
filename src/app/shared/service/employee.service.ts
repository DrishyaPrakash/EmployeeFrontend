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
        console.log(response)
        if (response && response.value) {
          console.log(response.value)
          this.employees = response.value;
          console.log(this.employees)
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
