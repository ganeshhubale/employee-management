import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  constructor(private policyService: PolicyService) { }

  ngOnInit(): void {
  }
  public createEmployee(id: number, name: string, worklocation: string, mobile: number){
    let emp = {id: id, name: name, worklocation: worklocation, mobile: mobile};
    this.policyService.createEmployee(emp).subscribe((ret)=>{
          console.log("Employee created: ", ret);
    });
}
}
