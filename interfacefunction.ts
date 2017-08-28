import {EmployeeDetailsSpace } from './interface';
import { EmployeeDetail } from './function';
import{employee}from './function';

  let mydetail: EmployeeDetailsSpace.Employee = { name: "abc", city: "hyderabad", state:"hyderabad" }
  EmployeeDetail(mydetail);
  employee();