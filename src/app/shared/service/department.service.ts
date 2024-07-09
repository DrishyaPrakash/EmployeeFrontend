import { Injectable } from '@angular/core';
import { Department } from '../model/department';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  // list of departments
  departments: Department[] = [];

  constructor(private httpClient: HttpClient) { }

  getAllDepartment(): void {
    this.httpClient.get(environment.apiUrl + 'Department')
      .toPromise()
      .then((response: any) => {
        if (response && response.$values) {
          this.departments = response.$values;
        }
        else {
          console.error('Invalid formate' + response)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

}
