import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { EmployeelistComponent } from "./employeelist/employeelist.component";

const routes : Routes = [
    { path: 'add-employee', component: AddEmployeeComponent},
    { path: 'employeelist', component: EmployeelistComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}