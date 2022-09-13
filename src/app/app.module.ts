import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

// import { AboutComponent } from './about/about.component';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
import { DataService } from "./data.service";

import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [ AppComponent, AddEmployeeComponent, EmployeelistComponent],
  imports: [ BrowserModule, HttpClientModule, AppRoutingModule, RouterModule, InMemoryWebApiModule.forRoot(DataService)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
