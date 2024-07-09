import { Department } from "./department";

export class Employee {
    EmpId: number=0;
    FirstName: string='';
    LastName: string='';
    DeptNo: number=0;
    EmployeeType: string='';
    DateOfJoining : Date=new Date;

    Dept: Department=new Department();
}
