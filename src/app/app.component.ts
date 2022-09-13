import { Component, OnInit  } from '@angular/core';
import { PolicyService } from './policy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Employee Management System";
  emp: any[] = [];
  constructor(private policyService: PolicyService) { }

  ngOnInit() {
    this.policyService.getEmployees().subscribe((data : any)=>{
        console.log(data);
        this.emp = data;
    })
  }

  public getEmployees(){
    this.policyService.getEmployees().subscribe((data : any)=>{
          console.log("Get all employee: ", data);
          this.emp = data;

    });
}


  public createEmployee(emp: any){
    this.policyService.createEmployee(emp).subscribe((ret)=>{
          console.log("Employee created: ", ret);
    });
}

  public deleteEmployee(empId: number){
    this.policyService.deleteEmployee(empId).subscribe((ret)=>{
          console.log("Employee deleted: ", ret);
    })
}


public updateEmployee(emp: {id: number, name: string, worklocation: string, mobile: number}){
    let newEmp = { id: emp.id, name: "updted", worklocation: "updated", mobile: 99702};
    this.policyService.updateEmployee(newEmp).subscribe((ret)=>{
          console.log("Employee updated: ", ret);
    });
}  

}
